const root = document.documentElement;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const touch = matchMedia("(pointer: coarse)").matches;

console.log(
  "%cYou opened devtools on a landing page. You are exactly who this is for.",
  "font: 700 14px/1.5 system-ui; color: #ff3d00;"
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

/* ---------- copy the install line ---------- */
document.querySelectorAll("[data-copy]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const status = btn.closest(".install").parentElement.querySelector(".copied");
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = "Copied";
      if (status) status.textContent = "Copied. Your agent has no idea what's coming.";
    } catch {
      if (status) status.textContent = "Select the line and copy it. Your clipboard said no.";
    }
    setTimeout(() => { btn.textContent = "Copy"; }, 1800);
  });
});

/* ---------- magnetic buttons (pointer only, 8px max pull) ---------- */
if (!touch && !reduced) {
  document.querySelectorAll(".magnetic").forEach((el) => {
    const max = 8;
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      el.style.translate = `${(dx * max).toFixed(1)}px ${(dy * max * 0.6).toFixed(1)}px`;
    });
    el.addEventListener("pointerleave", () => { el.style.translate = ""; });
  });
}

/* ---------- the pile (3D), loaded when the browser is idle ---------- */
const canvas = document.getElementById("stage");
const labelEls = [...document.querySelectorAll("[data-label]")];
const fallback = () => { root.classList.add("no3d"); canvas.style.display = "none"; };

const boot = async () => {
  const { canRun3D, startPile } = await import("./pile.js");
  if (!canRun3D()) return fallback();
  try {
    await startPile({ canvas, labelEls, getScroll, onFail: fallback });
  } catch (err) {
    console.warn("3D off:", err);
    fallback();
  }
};
const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 200));
idle(() => boot().catch(fallback), { timeout: 1500 });

/* ---------- the em dash gets its delete loop, once ---------- */
const dash = document.querySelector(".dash");
if (dash && "IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) { dash.classList.add("drawn"); io.disconnect(); }
  }, { threshold: 0.6 });
  io.observe(dash);
} else if (dash) dash.classList.add("drawn");
