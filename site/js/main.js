const root = document.documentElement;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const touch = matchMedia("(pointer: coarse)").matches;

console.log(
  "%cYou opened devtools on a landing page. You are exactly who this is for.",
  "font: 600 14px/1.5 system-ui; color: #00a3d9;"
);

// Hero entrance: staggered cascade, once.
requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add("ready")));

/* ---------- smooth momentum ---------- */
let lenis = null;
if (!reduced) {
  import("lenis")
    .then(({ default: Lenis }) => {
      lenis = new Lenis({ lerp: 0.1, anchors: true });
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    })
    .catch(() => {});
}
const getScroll = () => (lenis ? lenis.scroll : scrollY);

/* ---------- ruler: page depth readout ---------- */
const mark = document.querySelector(".ruler__mark");
const read = document.querySelector(".ruler__read");
if (mark && read && !reduced) {
  let lastY = -1;
  const update = () => {
    const y = getScroll();
    if (y !== lastY) {
      lastY = y;
      const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
      const px = (y / max) * (innerHeight - 4);
      mark.style.transform = `translateY(${px.toFixed(1)}px)`;
      read.style.transform = `translateY(${Math.max(72, px - 8).toFixed(1)}px)`;
      read.textContent = String(Math.round(y)).padStart(4, "0") + " px";
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

/* ---------- copy the install line ---------- */
document.querySelectorAll("[data-copy]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const status = btn.closest(".install-wrap")?.querySelector(".copied");
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = "Copied";
      if (status) status.textContent = "Copied to your clipboard.";
    } catch {
      if (status) status.textContent = "Select the line and copy it by hand.";
    }
    setTimeout(() => { btn.textContent = "Copy"; }, 1800);
  });
});

/* ---------- magnetic buttons (pointer only, 8px max pull) ---------- */
if (!touch && !reduced) {
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      el.style.translate = `${(dx * 8).toFixed(1)}px ${(dy * 5).toFixed(1)}px`;
    });
    el.addEventListener("pointerleave", () => { el.style.translate = ""; });
  });
}

/* ---------- the loupe ---------- */
const stage = document.querySelector(".hero__stage");
if (stage) {
  import("./loupe.js")
    .then(({ startLoupe }) => startLoupe({
      stage,
      canvas: stage.querySelector(".hero__canvas"),
      hint: stage.querySelector(".hero__hint"),
      getScroll,
      reduced,
    }))
    .catch((err) => { console.warn("Loupe off:", err); root.classList.add("no-loupe"); });
}

/* ---------- how it works: a page travels the pipeline ---------- */
const how = document.querySelector(".how");
if (how && !reduced) {
  const pipe = how.querySelector(".pipe");
  const token = how.querySelector(".token");
  const steps = [...how.querySelectorAll(".gates li")];
  const marks = steps.map((li) => li.querySelector(".gate"));
  const inEl = how.querySelector(".pipe__in"), outEl = how.querySelector(".pipe__out");
  const wide = matchMedia("(min-width: 1001px)");
  const setMode = () => how.classList.toggle("scrub", wide.matches);
  how.classList.add("travel"); setMode(); wide.addEventListener("change", setMode);
  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  let lastStage = -1, lastP = -1;

  const frame = () => {
    const pr = pipe.getBoundingClientRect();
    let p, pos, gatePos;
    if (wide.matches) {
      const r = how.getBoundingClientRect();
      p = clamp01((-r.top / Math.max(1, r.height - innerHeight) - 0.06) / 0.84);
      const a = inEl.getBoundingClientRect(), b = outEl.getBoundingClientRect();
      const x0 = a.left + a.width / 2 - pr.left, x1 = b.left + b.width / 2 - pr.left;
      pos = x0 + (x1 - x0) * p;
      gatePos = marks.map((g) => { const q = g.getBoundingClientRect(); return q.left + q.width / 2 - pr.left; });
    } else {
      p = clamp01((innerHeight * 0.55 - pr.top) / Math.max(1, pr.height));
      pos = pr.height * p;
      gatePos = marks.map((g) => { const q = g.getBoundingClientRect(); return q.top + q.height / 2 - pr.top; });
    }
    if (p !== lastP) {
      lastP = p;
      token.style.transform = wide.matches ? `translate3d(${pos.toFixed(1)}px, 0, 0)` : `translate3d(0, ${pos.toFixed(1)}px, 0)`;
      const stage = gatePos.filter((g) => pos >= g).length;
      if (stage !== lastStage) {
        lastStage = stage;
        token.classList.toggle("s1", stage >= 1);
        token.classList.toggle("s2", stage >= 2);
        token.classList.toggle("s3", stage >= 3);
        steps.forEach((li, i) => { li.classList.toggle("passed", i < stage); li.classList.toggle("active", i === stage - 1); });
      }
      pipe.classList.toggle("moving", p > 0.001);
    }
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

/* ---------- the 62 counts up through every check, once ---------- */
const readout = document.querySelector(".readout");
if (readout && !reduced && "IntersectionObserver" in window) {
  const num = readout.querySelector(".readout__num");
  const code = readout.querySelector(".readout__code");
  const needle = readout.querySelector(".needle");
  const ticks = readout.querySelector(".readout__ticks");
  const range = (k, a, b) => Array.from({ length: b - a + 1 }, (_, i) => `${k}-${String(a + i).padStart(2, "0")}`);
  // the order preflight runs them in
  const CODES = [...range("C", 1, 13), ...range("V", 1, 25), ...range("A", 1, 8), ...range("R", 1, 4), ...range("C", 14, 17), ...range("X", 1, 8)];
  const finalText = code.textContent;
  num.textContent = "00"; code.textContent = "ready";
  const io = new IntersectionObserver((entries) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    io.disconnect();
    const t0 = performance.now(), dur = 1900;
    const step = (now) => {
      const t = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - t, 3);
      const n = Math.max(1, Math.round(e * 62));
      num.textContent = String(n).padStart(2, "0");
      code.textContent = t < 1 ? `${CODES[n - 1]} passed` : finalText;
      // the scale reads 0 to 100: the needle settles on 62
      needle.style.transform = `translateX(${(ticks.clientWidth * 0.62 * e).toFixed(1)}px)`;
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, { threshold: 0.5 });
  io.observe(readout);
} else if (readout) {
  const needle = readout.querySelector(".needle"), ticks = readout.querySelector(".readout__ticks");
  if (needle && ticks) needle.style.left = "62%";
}
