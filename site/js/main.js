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
