// The loupe: one product's landing page drawn twice. The surface is the generic AI page;
// under the glass is the page Deft would have built. Lens shader adapted from Tropos (hero/lens.ts):
// magnification, a bent rim, chromatic split, Fresnel edge and two speculars.

const VERT = `#version 300 es
in vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }`;

const FRAG = `#version 300 es
precision highp float;
uniform vec2 uRes;      // css px
uniform float uDpr;
uniform vec2 uLens;     // css px, top-left origin
uniform float uR;       // css px
uniform vec2 uVel;      // css px per second
uniform float uFill;    // 0..1, lens taking over the screen
uniform float uIntro;   // 0..1, lens arriving
uniform sampler2D uSlop;
uniform sampler2D uReal;
out vec4 outColor;

vec3 slop(vec2 p) { return texture(uSlop, clamp(p / uRes, 0.0, 1.0)).rgb; }
vec3 real(vec2 p) { return texture(uReal, clamp(p / uRes, 0.0, 1.0)).rgb; }

void main() {
  vec2 p = vec2(gl_FragCoord.x, uRes.y * uDpr - gl_FragCoord.y) / uDpr;

  // Squash and stretch along the velocity, so the glass has mass.
  float sp = length(uVel);
  vec2 dir = sp > 1.0 ? uVel / sp : vec2(1.0, 0.0);
  float st = 1.0 + min(sp / 3000.0, 0.18) * (1.0 - uFill);
  vec2 rel = p - uLens;
  float along = dot(rel, dir), across = dot(rel, vec2(-dir.y, dir.x));
  vec2 d = vec2(along / st, across * st) / uR;
  d = dir * d.x + vec2(-dir.y, dir.x) * d.y;
  float r = length(d);
  float px = 1.5 / uR;

  vec3 outside = slop(p);
  // A soft shadow the glass throws just outside its rim.
  float halo = smoothstep(1.16, 1.0, r) * (1.0 - step(r, 1.0));
  outside *= 1.0 - 0.28 * halo * uIntro;

  vec3 col = outside;
  if (r < 1.0 + px) {
    float z = sqrt(max(0.0, 1.0 - r * r));
    float bend = (1.0 - z) * (1.0 - uFill);
    float mag = mix(0.86, 1.0, uFill);
    vec2 s = uLens + rel * mag - d * bend * uR * 0.16;
    float ca = 0.008 * uR * bend;
    vec3 seen = vec3(real(s + d * ca).r, real(s).g, real(s - d * ca).b);
    seen *= mix(0.86, 1.0, z);
    vec3 env = vec3(0.86, 0.95, 1.0);
    float fres = pow(1.0 - z, 3.0) * (1.0 - uFill);
    vec3 glass = mix(seen, env, fres * 0.55);
    vec2 h1 = d - vec2(-0.38, -0.44);
    vec2 h2 = d - vec2(0.44, 0.5);
    glass += vec3(1.0) * exp(-dot(h1, h1) * 48.0) * 0.32 * (1.0 - uFill);
    glass += vec3(0.75, 0.92, 1.0) * exp(-dot(h2, h2) * 90.0) * 0.18 * (1.0 - uFill);
    // The rim: a thin cyan bezel.
    float rim = smoothstep(0.955, 0.985, r) * smoothstep(1.0 + px, 0.995, r);
    glass = mix(glass, vec3(0.0, 0.64, 0.85), rim * 0.9 * (1.0 - uFill));
    float edge = smoothstep(1.0 + px, 1.0 - px, r);
    col = mix(outside, glass, edge * uIntro);
  }
  outColor = vec4(col, 1.0);
}`;

const HEAD = '"Martian Mono", ui-monospace, monospace';
const BODY = '"Hanken Grotesk", system-ui, sans-serif';
const CYAN = "#00a3d9";
const NAV = 64; // the site nav overlaps the top of the stage

/* ---------- the two pages ---------- */

function wrap(g, text, x, y, maxW, lh, align = "left") {
  const words = text.split(" ");
  let line = "", lines = [];
  for (const w of words) {
    const t = line ? line + " " + w : w;
    if (g.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t;
  }
  lines.push(line);
  lines.forEach((l, i) => g.fillText(l, x, y + i * lh));
  return lines.length;
}
function rr(g, x, y, w, h, r) {
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}

// Shared layout, so the loupe compares like with like.
function layout(W, H) {
  const mobile = W < 700;
  const cx = W / 2;
  const headY = mobile ? H * 0.1 : H * 0.11;
  const headSize = Math.min(mobile ? W * 0.1 : W * 0.06, 92);
  const cardsY = mobile ? H * 0.36 : H * 0.5;
  return { mobile, cx, headY, headSize, cardsY };
}

export function drawSlop(g, W, H) {
  const L = layout(W, H);
  const bg = g.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#8b5cf6"); bg.addColorStop(1, "#3b82f6");
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  // the obligatory glow orbs
  [[W * 0.18, H * 0.25, W * 0.28, "rgba(236,72,153,0.35)"], [W * 0.85, H * 0.7, W * 0.3, "rgba(56,189,248,0.35)"]].forEach(([x, y, r, c]) => {
    const o = g.createRadialGradient(x, y, 0, x, y, r); o.addColorStop(0, c); o.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = o; g.fillRect(0, 0, W, H);
  });
  // nav
  g.fillStyle = "rgba(255,255,255,0.12)"; g.fillRect(0, 0, W, 64);
  g.fillStyle = "#fff"; g.font = "700 22px Arial, sans-serif"; g.textAlign = "left"; g.fillText("Tally", 28, 40);
  if (!L.mobile) {
    g.font = "400 15px Arial, sans-serif"; g.fillStyle = "rgba(255,255,255,0.85)";
    ["Features", "Solutions", "Resources", "Pricing"].forEach((t, i) => g.fillText(t, W * 0.36 + i * 110, 38));
  }
  rr(g, W - 150, 16, 124, 34, 17); g.fillStyle = "#fff"; g.fill();
  g.fillStyle = "#6d28d9"; g.font = "700 14px Arial, sans-serif"; g.textAlign = "center"; g.fillText("Get Started", W - 88, 38);
  // hero
  g.fillStyle = "#fff"; g.textAlign = "center";
  g.font = `700 ${L.headSize}px Arial, sans-serif`;
  const n = wrap(g, "Unlock your potential", L.cx, L.headY + L.headSize, W * (L.mobile ? 0.86 : 0.7), L.headSize * 1.1, "center");
  let y = L.headY + L.headSize + n * L.headSize * 1.1 + 6;
  g.font = `400 ${Math.max(16, L.headSize * 0.26)}px Arial, sans-serif`; g.fillStyle = "rgba(255,255,255,0.88)";
  wrap(g, "The all-in-one platform for modern teams.", L.cx, y, W * 0.8, 26, "center");
  y += 40;
  rr(g, L.cx - 90, y, 180, 50, 25); g.fillStyle = "#fff"; g.fill();
  g.fillStyle = "#6d28d9"; g.font = "700 17px Arial, sans-serif"; g.fillText("Get Started", L.cx, y + 31);
  // three equal cards
  const cw = L.mobile ? W * 0.27 : Math.min(W * 0.2, 300), gap = L.mobile ? 10 : 28, cy = L.cardsY;
  const x0 = L.cx - (cw * 3 + gap * 2) / 2;
  for (let i = 0; i < 3; i++) {
    const x = x0 + i * (cw + gap);
    rr(g, x, cy, cw, cw * 0.78, 16); g.fillStyle = "rgba(255,255,255,0.94)"; g.fill();
    rr(g, x + 18, cy + 18, 44, 44, 11);
    const ig = g.createLinearGradient(x, cy, x + 60, cy + 60); ig.addColorStop(0, "#8b5cf6"); ig.addColorStop(1, "#3b82f6");
    g.fillStyle = ig; g.fill();
    g.fillStyle = "#334155"; g.fillRect(x + 18, cy + 80, cw * 0.55, 11);
    g.fillStyle = "#cbd5e1"; [104, 122, 140].forEach((o, k) => g.fillRect(x + 18, cy + o, cw * (0.75 - k * 0.12), 8));
  }
  g.fillStyle = "rgba(255,255,255,0.8)"; g.font = "400 15px Arial, sans-serif"; g.textAlign = "center";
  g.fillText("Trusted by thousands of teams worldwide", L.cx, cy + cw * 0.78 + 44);
}

export function drawReal(g, W, H) {
  const L = layout(W, H);
  g.fillStyle = "#f4f6f8"; g.fillRect(0, 0, W, H);
  // hairline grid
  g.strokeStyle = "#e1e7ec"; g.lineWidth = 1;
  for (let x = 0.5; x < W; x += 32) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, H); g.stroke(); }
  for (let y = 0.5; y < H; y += 32) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
  // nav
  g.fillStyle = "#f4f6f8"; g.fillRect(0, 0, W, 64);
  g.fillStyle = "#cfd7de"; g.fillRect(0, 63, W, 1);
  g.fillStyle = "#14181d"; g.textAlign = "left"; g.font = `800 20px ${HEAD}`; g.fillText("tally.", 28, 40);
  if (!L.mobile) {
    g.font = `500 15px ${BODY}`;
    ["How it works", "Pricing"].forEach((t, i) => g.fillText(t, W * 0.36 + i * 130, 38));
  }
  g.strokeStyle = "#14181d"; g.lineWidth = 1.5; rr(g, W - 230, 15, 204, 36, 6); g.stroke();
  g.font = `600 14px ${BODY}`; g.textAlign = "center"; g.fillText("Send your first invoice", W - 128, 38);
  // hero
  g.fillStyle = "#14181d"; g.textAlign = "center";
  const hs = L.headSize * 0.62;
  g.font = `800 ${hs}px ${HEAD}`;
  const n = wrap(g, "Get paid the day you send the invoice.", L.cx, L.headY + hs, W * (L.mobile ? 0.9 : 0.66), hs * 1.12, "center");
  let y = L.headY + hs + n * hs * 1.12 + 4;
  g.font = `400 ${Math.max(16, L.headSize * 0.26)}px ${BODY}`; g.fillStyle = "#2a323b";
  wrap(g, "Tally sends, chases and reconciles invoices for freelance designers.", L.cx, y, W * 0.7, 26, "center");
  y += 40;
  rr(g, L.cx - 120, y, 240, 50, 6); g.fillStyle = "#14181d"; g.fill();
  g.fillStyle = "#f4f6f8"; g.font = `600 17px ${BODY}`; g.fillText("Send your first invoice", L.cx, y + 31);
  const btnY = y;
  // a real diagram instead of three cards: the life of one invoice
  const cy = L.cardsY + (L.mobile ? 20 : 40);
  const span = Math.min(W * (L.mobile ? 0.86 : 0.62), 900), x0 = L.cx - span / 2;
  g.strokeStyle = "#14181d"; g.lineWidth = 2; g.beginPath(); g.moveTo(x0, cy); g.lineTo(x0 + span, cy); g.stroke();
  const steps = [["Sent", "Mon 09:12"], ["Opened", "Mon 11:40"], ["Reminder", "Thu 09:00"], ["Paid", "Thu 14:05"]];
  steps.forEach(([a, b], i) => {
    const x = x0 + (span * i) / 3;
    g.beginPath(); g.arc(x, cy, 9, 0, Math.PI * 2);
    g.fillStyle = i === 3 ? CYAN : "#f4f6f8"; g.fill(); g.lineWidth = 2; g.strokeStyle = "#14181d"; g.stroke();
    g.fillStyle = "#14181d"; g.textAlign = "center"; g.font = `700 ${L.mobile ? 12 : 15}px ${HEAD}`; g.fillText(a, x, cy + 38);
    g.fillStyle = "#56626e"; g.font = `400 ${L.mobile ? 11 : 13}px ${HEAD}`; g.fillText(b, x, cy + 60);
  });
  // inspection notes in cyan
  const note = (x, y, tx, ty, label) => {
    g.strokeStyle = CYAN; g.lineWidth = 1.5; g.beginPath(); g.moveTo(x, y); g.lineTo(tx, ty); g.stroke();
    g.beginPath(); g.arc(x, y, 4, 0, Math.PI * 2); g.fillStyle = CYAN; g.fill();
    g.font = `600 ${L.mobile ? 11 : 13}px ${HEAD}`;
    const w = g.measureText(label).width + 16, right = tx > x;
    const bx = right ? tx : tx - w;
    rr(g, bx, ty - 13, w, 26, 4); g.fillStyle = "#e2f3f9"; g.fill(); g.strokeStyle = CYAN; g.stroke();
    g.fillStyle = "#006f94"; g.textAlign = "left"; g.fillText(label, bx + 8, ty + 5);
  };
  const hw = Math.min(W * 0.33, 420);
  note(L.cx - hw * 0.9, L.headY + hs * 0.6, L.cx - hw - 40, L.headY - 4, "C-14 names the outcome");
  note(L.cx + 120, btnY + 25, L.cx + 200, btnY + 25, "C-06 says what happens");
  note(x0 + span, cy, x0 + span + 30, cy - 46, "V-10 a diagram, not a fake UI");
  note(W - 128, 52, W - 150, 92, "V-25 one committed palette");
}

/* ---------- engine ---------- */
function compile(gl, type, src) {
  const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
  return s;
}

export async function startLoupe({ stage, canvas, hint, getScroll, reduced }) {
  await Promise.race([
    Promise.all([document.fonts.load(`800 40px "Martian Mono"`), document.fonts.load(`400 18px "Hanken Grotesk"`), document.fonts.load(`600 18px "Hanken Grotesk"`)]),
    new Promise((r) => setTimeout(r, 2500)),
  ]);

  const hero = stage.parentElement;
  const touch = matchMedia("(pointer: coarse)").matches;
  const dprCap = touch ? 1.5 : 2;
  const pages = [document.createElement("canvas"), document.createElement("canvas")];
  let W = 0, H = 0, dpr = 1;

  const paint = () => {
    const r = stage.getBoundingClientRect();
    W = Math.round(r.width); H = Math.round(r.height); dpr = Math.min(devicePixelRatio || 1, dprCap);
    pages.forEach((c, i) => {
      c.width = Math.round(W * dpr); c.height = Math.round(H * dpr);
      const g = c.getContext("2d"); g.setTransform(dpr, 0, 0, dpr, 0, 0);
      if ("fontStretch" in g) g.fontStretch = "condensed";
      g.fillStyle = i === 0 ? "#7c6cf2" : "#f4f6f8"; g.fillRect(0, 0, W, H);
      g.translate(0, NAV);
      (i === 0 ? drawSlop : drawReal)(g, W, H - NAV);
    });
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  };
  paint();

  const home = () => ({ x: W * 0.5, y: NAV + (H - NAV) * (W < 700 ? 0.24 : 0.3) });
  const baseR = () => Math.max(110, Math.min(Math.min(W, H) * 0.3, 290));

  // Static fallback: one fixed lens, no motion.
  const drawStatic = () => {
    const g = canvas.getContext("2d");
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.drawImage(pages[0], 0, 0);
    const h = home(), R = baseR() * 1.25;
    g.save(); g.scale(dpr, dpr);
    g.beginPath(); g.arc(h.x, h.y, R, 0, Math.PI * 2); g.clip();
    g.translate(h.x, h.y); g.scale(1.25, 1.25); g.translate(-h.x, -h.y);
    g.drawImage(pages[1], 0, 0, W, H);
    g.restore();
    g.save(); g.scale(dpr, dpr); g.strokeStyle = CYAN; g.lineWidth = 3;
    g.beginPath(); g.arc(h.x, h.y, R, 0, Math.PI * 2); g.stroke(); g.restore();
  };

  let gl = null;
  if (!reduced) gl = canvas.getContext("webgl2", { antialias: false, alpha: false, powerPreference: "high-performance" });
  if (!gl) {
    document.documentElement.classList.add("no-loupe");
    drawStatic();
    let t; addEventListener("resize", () => { clearTimeout(t); t = setTimeout(() => { paint(); drawStatic(); }, 150); });
    return;
  }

  const prog = gl.createProgram();
  gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "aPos");
  gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const u = {};
  ["uRes", "uDpr", "uLens", "uR", "uVel", "uFill", "uIntro", "uSlop", "uReal"].forEach((n) => (u[n] = gl.getUniformLocation(prog, n)));

  const tex = pages.map((c, i) => {
    const t = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0 + i); gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return t;
  });
  const upload = () => {
    pages.forEach((c, i) => {
      gl.activeTexture(gl.TEXTURE0 + i); gl.bindTexture(gl.TEXTURE_2D, tex[i]);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c);
    });
    gl.uniform1i(u.uSlop, 0); gl.uniform1i(u.uReal, 1);
  };
  upload();

  let rt;
  new ResizeObserver(() => { clearTimeout(rt); rt = setTimeout(() => { paint(); upload(); }, 150); }).observe(stage);

  /* ---------- motion: spring-follow, idle drift, scroll fill ---------- */
  const pos = { ...home(), vx: 0, vy: 0 };
  const target = { ...home() };
  let lastMove = -1e9, everMoved = false, intro = 0, visible = true;
  const toLocal = (e) => { const r = stage.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
  stage.addEventListener("pointermove", (e) => {
    const p = toLocal(e); target.x = p.x; target.y = p.y; lastMove = performance.now(); everMoved = true;
  }, { passive: true });
  stage.addEventListener("pointerdown", (e) => {
    const p = toLocal(e); target.x = p.x; target.y = p.y; lastMove = performance.now(); everMoved = true;
  }, { passive: true });
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) requestAnimationFrame(tick); }).observe(stage);

  const smooth = (t) => t * t * (3 - 2 * t);
  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  let last = performance.now();
  const t0 = last;

  function tick(now) {
    if (!visible || document.hidden) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    intro = Math.min(1, intro + dt / 0.9);

    // scroll progress through the pinned hero
    const hr = hero.getBoundingClientRect();
    const run = Math.max(1, hr.height - innerHeight);
    const prog = clamp01(-hr.top / run);
    const fill = smooth(clamp01((prog - 0.12) / 0.7));

    // idle: drift around home on a slow figure eight
    const idle = now - lastMove > 2600;
    if (idle) {
      const h = home(), t = (now - t0) / 1000;
      target.x = h.x + Math.sin(t * 0.45) * W * 0.08;
      target.y = h.y + Math.sin(t * 0.9) * H * 0.04;
    }
    // spring
    const k = 120, c = 18;
    pos.vx += ((target.x - pos.x) * k - pos.vx * c) * dt;
    pos.vy += ((target.y - pos.y) * k - pos.vy * c) * dt;
    pos.x += pos.vx * dt; pos.y += pos.vy * dt;

    const R0 = baseR();
    const Rbig = Math.hypot(W, H) * 0.62;
    const R = R0 + (Rbig - R0) * fill;
    const lx = pos.x + (W / 2 - pos.x) * fill;
    const ly = pos.y + (H / 2 - pos.y) * fill;
    const rise = 1 - Math.pow(1 - intro, 3);

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(u.uRes, W, H);
    gl.uniform1f(u.uDpr, dpr);
    gl.uniform2f(u.uLens, lx, ly + (1 - rise) * H * 0.6);
    gl.uniform1f(u.uR, R);
    gl.uniform2f(u.uVel, pos.vx, pos.vy);
    gl.uniform1f(u.uFill, fill);
    gl.uniform1f(u.uIntro, rise);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // the hint rides along the bottom-right of the rim until the reader has tried it
    hint.classList.toggle("on", !everMoved && intro >= 1 && fill < 0.05);
    const hx = Math.min(lx + R * 0.62, W - hint.offsetWidth - 10);
    hint.style.transform = `translate(${Math.max(10, hx).toFixed(1)}px, ${(ly + R * 0.82).toFixed(1)}px)`;

    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
