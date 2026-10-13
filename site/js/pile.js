// The pile: a stack of identical generic landing pages, and one page that gets pulled out.
// Scroll drives a pose table keyed by each section's data-pose (pattern borrowed from Tropos mark3d).
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const N = 24;            // generic sheets in the pile
const SW = 1, SD = 1.4;  // sheet width (x) and depth (z): portrait page
const ST = 0.02;         // sheet thickness
const GAP = 0.034;       // pile spacing
const LT = 0.009;        // layer thickness of "your" page
const TOP = N * GAP;     // y of the pile top

// x, y: fraction of half viewport. s: scale. ry: turntable. rx: extra tilt.
// fan: spread the pile. lift: pull your page out. explode: split it into layers.
// ink: your page goes from generic to proofed. pile/all: visibility. labels: layer labels.
const POSES = {
  desktop: {
    hero:    { x: 0.6,  y: -0.12, s: 1.75, ry: -0.55, rx: 0,    fan: 0,    lift: 0,    explode: 0,    ink: 0, pile: 1, all: 1, labels: 0 },
    problem: { x: 0.74, y: -0.2,  s: 1.2,  ry: -0.9,  rx: 0,    fan: 1,    lift: 0,    explode: 0,    ink: 0, pile: 1, all: 1, labels: 0 },
    proof:   { x: 0.6,  y: -0.62, s: 1.2,  ry: -0.35, rx: 0,    fan: 0.2,  lift: 1,    explode: 0,    ink: 0, pile: 0.9, all: 1, labels: 0 },
    how:     { x: 0.52, y: -0.72, s: 1.1,  ry: -0.5,  rx: 0.05, fan: 0,    lift: 0.55, explode: 1,    ink: 1, pile: 0, all: 1, labels: 0 },
    rules:   { x: 0.7,  y: 0.2,   s: 1.2,  ry: -0.3,  rx: 0,    fan: 0,    lift: 0.5,  explode: 0,    ink: 1, pile: 0, all: 0, labels: 0 },
    quiet:   { x: 0.7,  y: 0.2,   s: 1.2,  ry: -0.3,  rx: 0,    fan: 0,    lift: 0.5,  explode: 0,    ink: 1, pile: 0, all: 0, labels: 0 },
    final:   { x: 0.5,  y: -0.22, s: 1.55, ry: -0.7,  rx: 0,    fan: 0,    lift: 0,    explode: 0,    ink: 1, pile: 1, all: 1, labels: 0 },
  },
  mobile: {
    hero:    { x: 0,    y: -1.02, s: 0.78, ry: -0.6,  rx: 0,    fan: 0,    lift: 0,    explode: 0,    ink: 0, pile: 1, all: 1, labels: 0 },
    problem: { x: 0,    y: -0.6,  s: 0.9,  ry: -0.9,  rx: 0,    fan: 1,    lift: 0,    explode: 0,    ink: 0, pile: 1, all: 0, labels: 0 },
    proof:   { x: 0,    y: -0.6,  s: 0.9,  ry: -0.4,  rx: 0,    fan: 0,    lift: 1,    explode: 0,    ink: 0, pile: 1, all: 0, labels: 0 },
    how:     { x: 0,    y: -0.6,  s: 0.9,  ry: -0.5,  rx: 0,    fan: 0,    lift: 1,    explode: 1,    ink: 1, pile: 0, all: 0, labels: 0 },
    rules:   { x: 0,    y: -0.6,  s: 0.9,  ry: -0.5,  rx: 0,    fan: 0,    lift: 0,    explode: 0,    ink: 1, pile: 0, all: 0, labels: 0 },
    quiet:   { x: 0,    y: -0.6,  s: 0.9,  ry: -0.5,  rx: 0,    fan: 0,    lift: 0,    explode: 0,    ink: 1, pile: 0, all: 0, labels: 0 },
    final:   { x: 0,    y: -1.0,  s: 0.8,  ry: -0.7,  rx: 0,    fan: 0,    lift: 0,    explode: 0,    ink: 1, pile: 1, all: 1, labels: 0 },
  },
};
const KEYS = Object.keys(POSES.desktop.hero);

const smooth = (t) => t * t * (3 - 2 * t);
const clamp01 = (v) => Math.min(1, Math.max(0, v));

/* ---------- textures: drawn with the page's own fonts ---------- */
const TW = 720, TH = 1008;
const PAPER = "#fffef7", INK = "#0d0d0d", RED = "#ff3d00", MUTED = "#5c5a52";
const HEAD = '"Schibsted Grotesk", Arial, sans-serif';
const BODY = 'Newsreader, Georgia, serif';

function canvasTex(draw, renderer) {
  const c = document.createElement("canvas");
  c.width = TW; c.height = TH;
  const g = c.getContext("2d");
  draw(g);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  return t;
}
const bar = (g, x, y, w, h, col) => { g.fillStyle = col; g.fillRect(x, y, w, h); };
function rrect(g, x, y, w, h, r) {
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}

// The average of every landing page. Slate ramp, purple into blue, three equal cards.
function drawGeneric(g) {
  bar(g, 0, 0, TW, TH, "#f8fafc");
  bar(g, 44, 40, 96, 20, "#94a3b8");
  [380, 450, 520].forEach((x) => bar(g, x, 46, 48, 9, "#cbd5e1"));
  rrect(g, 594, 34, 86, 32, 16); g.fillStyle = "#8b5cf6"; g.fill();
  const grd = g.createLinearGradient(0, 100, TW, 520);
  grd.addColorStop(0, "#8b5cf6"); grd.addColorStop(1, "#3b82f6");
  g.fillStyle = grd; g.fillRect(0, 100, TW, 420);
  g.fillStyle = "#ffffff"; g.textAlign = "center";
  g.font = '700 66px Arial, sans-serif';
  g.fillText("Unlock your", TW / 2, 250); g.fillText("potential", TW / 2, 324);
  bar(g, 170, 362, 380, 12, "rgba(255,255,255,.7)"); bar(g, 210, 386, 300, 12, "rgba(255,255,255,.7)");
  rrect(g, 262, 424, 196, 56, 28); g.fillStyle = "#ffffff"; g.fill();
  g.fillStyle = "#7c3aed"; g.font = '700 22px Arial, sans-serif'; g.fillText("Get Started", TW / 2, 460);
  g.fillStyle = "#64748b"; g.font = '400 20px Arial, sans-serif'; g.fillText("Trusted by thousands", TW / 2, 574);
  [92, 210, 328, 446, 564].forEach((x) => { rrect(g, x, 596, 70, 18, 9); g.fillStyle = "#cbd5e1"; g.fill(); });
  [44, 264, 484].forEach((x) => {
    rrect(g, x, 668, 192, 250, 14); g.fillStyle = "#ffffff"; g.fill();
    g.strokeStyle = "#e2e8f0"; g.lineWidth = 2; g.stroke();
    rrect(g, x + 22, 690, 48, 48, 12);
    const ig = g.createLinearGradient(x, 690, x + 70, 738); ig.addColorStop(0, "#8b5cf6"); ig.addColorStop(1, "#3b82f6");
    g.fillStyle = ig; g.fill();
    bar(g, x + 22, 764, 120, 14, "#334155"); bar(g, x + 22, 794, 148, 9, "#cbd5e1"); bar(g, x + 22, 812, 130, 9, "#cbd5e1"); bar(g, x + 22, 830, 100, 9, "#cbd5e1");
  });
  bar(g, 0, 952, TW, 56, "#f1f5f9");
}

function crops(g) {
  g.strokeStyle = INK; g.lineWidth = 3;
  const m = 26, l = 34;
  [[m, m, 1, 1], [TW - m, m, -1, 1], [m, TH - m, 1, -1], [TW - m, TH - m, -1, -1]].forEach(([x, y, sx, sy]) => {
    g.beginPath(); g.moveTo(x, y + sy * l); g.lineTo(x, y); g.lineTo(x + sx * l, y); g.stroke();
  });
}

function deleteLoop(g, x1, y, x2) {
  g.strokeStyle = RED; g.lineWidth = 6; g.lineCap = "round";
  g.beginPath(); g.moveTo(x1 - 10, y + 4); g.lineTo(x2, y - 4);
  g.bezierCurveTo(x2 + 40, y - 14, x2 + 44, y + 34, x2 + 12, y + 30);
  g.bezierCurveTo(x2 - 12, y + 26, x2 + 2, y - 2, x2 + 30, y - 20);
  g.stroke();
}

// Your page: the proofed one. Paper, ink, one red.
function drawYours(g) {
  bar(g, 0, 0, TW, TH, PAPER); crops(g);
  g.fillStyle = INK; g.textAlign = "left";
  g.font = `900 40px ${HEAD}`; g.fillText("yours.", 64, 104);
  bar(g, 64, 128, TW - 128, 4, INK);
  g.font = `900 184px ${HEAD}`;
  g.fillText("Only", 56, 330); g.fillText("you.", 56, 488);
  bar(g, 64, 536, 470, 14, MUTED); bar(g, 64, 564, 420, 14, MUTED); bar(g, 64, 592, 300, 14, MUTED);
  bar(g, 72, 652, 250, 70, INK); bar(g, 64, 644, 250, 70, RED);
  g.strokeStyle = INK; g.lineWidth = 4; g.strokeRect(64, 644, 250, 70);
  g.fillStyle = INK; g.font = `800 28px ${HEAD}`; g.fillText("Say what it does", 86, 690);
  // a struck slop line with a proofreader's delete loop
  g.fillStyle = "#9b988c"; g.font = `500 34px ${BODY}`; g.fillText("Unlock your potential", 64, 830);
  deleteLoop(g, 64, 818, 382);
  // stamp
  g.save(); g.translate(560, 860); g.rotate(-0.22);
  g.strokeStyle = RED; g.lineWidth = 6; g.beginPath(); g.arc(0, 0, 96, 0, Math.PI * 2); g.stroke();
  g.lineWidth = 2; g.beginPath(); g.arc(0, 0, 82, 0, Math.PI * 2); g.stroke();
  g.fillStyle = RED; g.textAlign = "center";
  g.font = `900 64px ${HEAD}`; g.fillText("62", 0, 12);
  g.font = `800 22px ${HEAD}`; g.fillText("checks passed", 0, 46);
  g.restore();
}

function layerTitle(g, n, title) {
  bar(g, 0, 0, TW, TH, PAPER); crops(g);
  g.textAlign = "left"; g.fillStyle = RED; g.font = `900 56px ${HEAD}`; g.fillText(String(n), 64, 130);
  g.fillStyle = INK; g.font = `900 92px ${HEAD}`; g.fillText(title, 120, 132);
  bar(g, 64, 160, TW - 128, 5, INK);
}
function drawBrief(g) {
  layerTitle(g, 1, "Brief");
  g.font = `800 32px ${HEAD}`; g.fillStyle = INK;
  ["Product", "One reader", "Traffic", "Promise", "Goal"].forEach((k, i) => {
    const y = 250 + i * 142;
    g.fillText(k, 64, y);
    bar(g, 64, y + 26, 560 - i * 40, 12, MUTED); bar(g, 64, y + 52, 420 - i * 20, 12, MUTED);
  });
}
function drawCopy(g) {
  layerTitle(g, 2, "Copy");
  g.fillStyle = "#9b988c"; g.font = `500 44px ${BODY}`; g.fillText("Unlock your potential", 64, 290);
  deleteLoop(g, 64, 276, 482);
  g.fillStyle = INK; g.font = `900 80px ${HEAD}`;
  g.fillText("Say the", 64, 440); g.fillText("specific", 64, 520); g.fillText("thing.", 64, 600);
  g.fillStyle = RED; g.font = `800 34px ${HEAD}`; g.fillText("^ no em dashes", 64, 690);
  [760, 790, 820].forEach((y, i) => bar(g, 64, y, 520 - i * 90, 12, MUTED));
}
function drawConcept(g) {
  layerTitle(g, 3, "Concept");
  [[PAPER, 64], [INK, 216], [RED, 368], [MUTED, 520]].forEach(([c, x]) => {
    bar(g, x, 236, 136, 136, c); g.strokeStyle = INK; g.lineWidth = 4; g.strokeRect(x, 236, 136, 136);
  });
  g.fillStyle = INK; g.font = `900 300px ${HEAD}`; g.fillText("Aa", 50, 680);
  bar(g, 64, 740, TW - 128, 4, INK);
  g.font = `800 34px ${HEAD}`; g.fillText("One idea, committed.", 64, 810);
  bar(g, 64, 846, 470, 12, MUTED); bar(g, 64, 874, 380, 12, MUTED);
}
function drawShadow(g, size) {
  const r = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  r.addColorStop(0, "rgba(13,13,13,0.55)"); r.addColorStop(0.45, "rgba(13,13,13,0.22)"); r.addColorStop(1, "rgba(13,13,13,0)");
  g.fillStyle = r; g.fillRect(0, 0, size, size);
}

/* ---------- capability check ---------- */
export function canRun3D() {
  const params = new URLSearchParams(location.search);
  if (params.has("3d")) return true;
  if (params.has("no3d")) return false;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl2") || c.getContext("webgl");
    if (!gl) return false;
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    const name = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : "";
    if (/swiftshader|llvmpipe|software|basic render/i.test(name)) return false;
    return true;
  } catch { return false; }
}

/* ---------- the scene ---------- */
export async function startPile({ canvas, labelEls, getScroll, onFail }) {
  const touch = matchMedia("(pointer: coarse)").matches;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio, touch ? 1.5 : 1.75));
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  const key = new THREE.DirectionalLight(0xffffff, 1.1);
  key.position.set(-3, 6, 4); scene.add(key);

  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
  const target = new THREE.Vector3(0, 0.5, 0);
  camera.position.set(0, 4.1, 6.2); camera.lookAt(target);

  await Promise.race([
    Promise.all([document.fonts.load(`900 80px "Schibsted Grotesk"`), document.fonts.load(`500 40px Newsreader`)]),
    new Promise((r) => setTimeout(r, 2500)),
  ]);

  const tex = {
    generic: canvasTex(drawGeneric, renderer),
    yours: canvasTex(drawYours, renderer),
    brief: canvasTex(drawBrief, renderer),
    copy: canvasTex(drawCopy, renderer),
    concept: canvasTex(drawConcept, renderer),
  };
  const sc = document.createElement("canvas"); sc.width = sc.height = 256; drawShadow(sc.getContext("2d"), 256);
  const shadowTex = new THREE.CanvasTexture(sc);

  const paper = (map) => new THREE.MeshPhysicalMaterial({ map, roughness: 0.78, metalness: 0, sheen: 0.3, sheenRoughness: 0.8, transparent: true });
  const edge = (color) => new THREE.MeshStandardMaterial({ color, roughness: 0.9, transparent: true });

  const rig = new THREE.Group(); scene.add(rig);
  const pile = new THREE.Group(); rig.add(pile);

  // Box face order: +x, -x, +y (top), -y, +z, -z
  const sheetGeo = new THREE.BoxGeometry(SW, ST, SD);
  const genericTop = paper(tex.generic);
  const genericEdge = edge(0xdfe3e8);
  const sheets = [];
  const rand = (i, k) => { const s = Math.sin(i * 127.1 + k * 311.7) * 43758.5453; return s - Math.floor(s) - 0.5; };
  for (let i = 0; i < N; i++) {
    const m = new THREE.Mesh(sheetGeo, [genericEdge, genericEdge, genericTop, genericEdge, genericEdge, genericEdge]);
    const base = { x: rand(i, 1) * 0.05, z: rand(i, 2) * 0.05, ry: rand(i, 3) * 0.08 };
    m.userData.base = base;
    m.position.set(base.x, i * GAP + ST / 2, base.z);
    m.rotation.y = base.ry;
    pile.add(m); sheets.push(m);
  }

  // Your page: four thin layers. Top layer's face crossfades from generic to proofed.
  const mine = new THREE.Group(); rig.add(mine);
  const layerGeo = new THREE.BoxGeometry(SW, LT, SD);
  const mineEdge = edge(0xdfe3e8);
  const layerMaps = [tex.brief, tex.copy, tex.concept, tex.generic];
  const layers = layerMaps.map((map, k) => {
    const top = paper(map);
    const mesh = new THREE.Mesh(layerGeo, [mineEdge, mineEdge, top, mineEdge, mineEdge, mineEdge]);
    mine.add(mesh); return mesh;
  });
  const inkFace = new THREE.Mesh(new THREE.PlaneGeometry(SW, SD), paper(tex.yours));
  inkFace.rotation.x = -Math.PI / 2; inkFace.position.y = LT / 2 + 0.0015;
  inkFace.material.opacity = 0; inkFace.material.depthWrite = false;
  layers[3].add(inkFace);

  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 3.4), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = -0.005; rig.add(shadow);

  const genericEdgeCol = new THREE.Color(0xdfe3e8), redCol = new THREE.Color(0xff3d00);

  /* ---------- pose driver ---------- */
  let anchors = [];
  const measure = () => {
    const sy = getScroll();
    anchors = [...document.querySelectorAll("[data-pose]")].map((el) => {
      const r = el.getBoundingClientRect();
      return { name: el.dataset.pose, c: r.top + sy + Math.min(r.height, innerHeight) / 2 };
    }).sort((a, b) => a.c - b.c);
  };
  const isMobile = () => innerWidth < 900;
  const table = () => (isMobile() ? POSES.mobile : POSES.desktop);
  const targetPose = () => {
    const T = table();
    if (!anchors.length) return { ...T.hero };
    const c = getScroll() + innerHeight / 2;
    if (c <= anchors[0].c) return { ...T[anchors[0].name] };
    const last = anchors[anchors.length - 1];
    if (c >= last.c) return { ...T[last.name] };
    for (let i = 0; i < anchors.length - 1; i++) {
      const a = anchors[i], b = anchors[i + 1];
      if (c >= a.c && c <= b.c) {
        const t = smooth(clamp01(((c - a.c) / (b.c - a.c) - 0.2) / 0.6));
        const A = T[a.name], B = T[b.name], out = {};
        KEYS.forEach((k) => (out[k] = A[k] + (B[k] - A[k]) * t));
        return out;
      }
    }
    return { ...T.hero };
  };

  const pose = targetPose();
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  if (!touch) addEventListener("pointermove", (e) => { mouse.tx = e.clientX / innerWidth - 0.5; mouse.ty = e.clientY / innerHeight - 0.5; }, { passive: true });

  let w = 0, h = 0;
  const resize = () => {
    w = innerWidth; h = innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = w < 600 ? 34 : 28;
    camera.updateProjectionMatrix();
    measure();
  };
  let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 120); });
  new ResizeObserver(() => { clearTimeout(rt); rt = setTimeout(measure, 120); }).observe(document.body);
  resize();

  const v = new THREE.Vector3();
  const apply = () => {
    const dist = camera.position.distanceTo(target);
    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * dist;
    const halfW = halfH * camera.aspect;
    rig.position.set(pose.x * halfW, pose.y * halfH, 0);
    rig.scale.setScalar(pose.s);
    rig.rotation.set(pose.rx + mouse.y * 0.08, pose.ry + mouse.x * 0.22, 0);

    sheets.forEach((m, i) => {
      const f = (i / (N - 1) - 0.5) * pose.fan;
      m.rotation.y = m.userData.base.ry + f * 1.1;
      m.position.x = m.userData.base.x + f * 0.5;
      m.position.z = m.userData.base.z - f * 0.25;
    });
    const pileOp = smooth(clamp01((pose.pile * pose.all - 0.15) / 0.7));
    genericTop.opacity = genericEdge.opacity = pileOp;
    pile.visible = pileOp > 0.01;
    shadow.material.opacity = 0.55 * pose.all * Math.max(pose.pile, 1 - pose.lift);

    const lift = pose.lift;
    mine.position.set(0, TOP + ST / 2 + lift * 1.15, lift * 0.25);
    mine.rotation.set(lift * 0.62, lift * 0.25, 0);
    layers.forEach((L, k) => {
      L.position.y = k * (LT + 0.0015) + pose.explode * k * 0.22;
      L.position.z = pose.explode * (k - 1.5) * 0.42; // fan like cards so every layer's face shows
    });
    const mineOp = smooth(clamp01((pose.all - 0.1) / 0.8));
    layers.forEach((L) => (L.material[2].opacity = mineOp));
    mineEdge.opacity = mineOp;
    mineEdge.color.copy(genericEdgeCol).lerp(redCol, pose.ink);
    inkFace.material.opacity = pose.ink * mineOp;
    mine.visible = mineOp > 0.01;

    // labels follow their layer's right edge
    rig.updateMatrixWorld();
    labelEls.forEach((el, k) => {
      const op = pose.labels * mineOp;
      if (op < 0.02) { el.style.opacity = 0; return; }
      v.set(SW / 2 + 0.08, 0, 0); layers[k].localToWorld(v); v.project(camera);
      const x = (v.x * 0.5 + 0.5) * w, y = (-v.y * 0.5 + 0.5) * h;
      el.style.opacity = op;
      el.style.transform = `translate(${x.toFixed(1)}px, ${(y - 16).toFixed(1)}px)`;
    });
  };

  /* ---------- loop: render only when something moved ---------- */
  let last = performance.now(), running = true, ema = 16, slowFor = 0, idle = 0;
  const onVis = () => { running = !document.hidden; if (running) { last = performance.now(); requestAnimationFrame(tick); } };
  document.addEventListener("visibilitychange", onVis);

  function tick(now) {
    if (!running) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const tgt = targetPose();
    const k = 1 - Math.exp(-dt * 5);
    let delta = 0;
    KEYS.forEach((key) => { const d = tgt[key] - pose[key]; pose[key] += d * k; delta += Math.abs(d); });
    const mk = 1 - Math.exp(-dt * 4);
    delta += Math.abs(mouse.tx - mouse.x) + Math.abs(mouse.ty - mouse.y);
    mouse.x += (mouse.tx - mouse.x) * mk; mouse.y += (mouse.ty - mouse.y) * mk;

    if (delta > 0.0005 || idle < 2) {
      if (delta > 0.0005) idle = 0; else idle++;
      apply();
      renderer.render(scene, camera);
      ema = ema * 0.9 + (dt * 1000) * 0.1;
      slowFor = ema > 40 ? slowFor + dt : 0;
      if (slowFor > 2.5) { running = false; onFail("slow"); return; }
    }
    requestAnimationFrame(tick);
  }
  apply(); renderer.render(scene, camera);
  requestAnimationFrame(tick);

  return { measure };
}
