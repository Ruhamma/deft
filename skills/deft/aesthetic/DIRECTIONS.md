# DIRECTIONS — The Exemplar Library

> This is the file that fixes generic output. Bans tell the model what to avoid;
> this tells it what to build TOWARD. In the Design Concept (Phase 3a), the model
> commits to ONE direction and executes it fully. Picking none, or blending three
> timidly, produces the generic mush we're killing.
>
> Each direction below is derived from a real reference. Each ships: the feel,
> exact palette values, the techniques that create it, and a good-vs-generic
> code pair. The model reads the pair and matches the GOOD side.

**How to use:** one direction per page. State the pick and why in the concept.
Never average two directions. Never pick "whatever's safe" — safe is the generic
center. The whole point of Deft is to leave that center.

---

## THE GENERIC BASELINE (what every direction must beat)

This is the look we are leaving. If the output resembles this, it failed.

```css
/* THE GENERIC (do not ship this) */
--bg: #f8fafc;        /* Tailwind slate-50 — the fingerprint */
--bg-alt: #f1f5f9;    /* slate-100 */
--ink: #0f172a;       /* slate-900 */
--muted: #64748b;     /* slate-500 */
--accent: #0d9488;    /* one teal, on the CTA only */
/* flat fills, no gradient, no texture, one 1120px box repeated 10x */
```

Every color is an unmodified Tailwind gray. Color appears only on the button.
Zero depth. This is the statistical mean of SaaS. Beat it.

---

## DIRECTION 1 — SOFT TINTED
*Derived from: the pastel job-listing cards*

**Feel:** human, warm, approachable, a little playful. Not corporate.

**When it fits:** consumer products, community, HR/people tools, anything that
should feel friendly rather than enterprise.

**Palette — a FAMILY of surface tints, not gray:**
```css
--bg: #faf6f2;          /* warm porcelain, not slate */
--surface-1: #fbeee6;   /* peach tint */
--surface-2: #f4f0e0;   /* lemon tint */
--surface-3: #ece8f5;   /* lilac tint */
--surface-4: #e4f0ea;   /* mint tint */
--ink: #2a2320;         /* warm near-black, never #0f172a */
--accent: #e07a5f;      /* terracotta */
```

**Techniques:**
- Different sections sit on different surface tints — color differentiates, not just gray-alternation.
- Cards carry a soft tint + a soft, tinted shadow (never a hairline + gray shadow combo).
- Rounded but not blobby (14-16px). Generous air.

**Good vs generic:**
```css
/* GENERIC */ .card { background:#fff; border:1px solid #e2e8f0; box-shadow:0 1px 3px rgba(0,0,0,.1); }
/* GOOD    */ .card { background:var(--surface-1); box-shadow:0 12px 30px -12px rgba(224,122,95,.25); }
```

---

## DIRECTION 2 — ATMOSPHERIC DARK
*Derived from: the backpacking sunset-gradient stat card*

**Feel:** cinematic, premium, moody, confident. Depth you can feel.

**When it fits:** products with a strong point of view, launches, anything where
you want gravity and drama over friendliness.

**Palette — warm dark grounds + a directional gradient:**
```css
--bg: #141210;          /* warm black, never #000 */
--grad: linear-gradient(135deg,#c65d2e 0%,#7a3b1f 45%,#1a1512 100%);
--ink: #f5efe8;         /* warm off-white */
--muted: #b8a99b;
--accent: #ff8a4c;      /* ember */
```

**Techniques:**
- Hero ground is the directional gradient, not a flat fill. Content sits on it.
- One oversized figure or word (the "34%" move) at 6-9rem.
- Real imagery bled to the edge where it exists; where it doesn't, a generative glow.
- Soft, warm-tinted shadows lift cards off the dark ground.

**Good vs generic:**
```css
/* GENERIC */ .hero { background:#f8fafc; }  .stat { font-size:2rem; }
/* GOOD    */ .hero { background:var(--grad); }  .stat { font-size:clamp(4rem,12vw,9rem); font-weight:700; letter-spacing:-.03em; }
```

---

## DIRECTION 3 — BRAVE MONOCHROME-COLOR
*Derived from: the Lume violet set*

**Feel:** one saturated hue owns the brand. Decisive, ownable, modern.

**When it fits:** a product with a real brand color, or one that wants a single
memorable identity. This is where a "banned" hue like violet is ALLOWED —
because it's a decision, not a reflex (see aesthetic/AESTHETIC.md purple resolution).

**Palette — white breathing room + one brave hue in SURFACES not just buttons:**
```css
--bg: #ffffff;
--brand: #6d4aff;       /* the owned hue — pick from the product, not this default */
--brand-soft: #f0ecff;  /* tint of the brand for surfaces */
--brand-deep: #3a2a8c;  /* deep version for text-on-light emphasis */
--ink: #1a1726;         /* near-black tinted toward the brand */
--muted: #6b6580;
```

**Techniques:**
- The brand hue appears in section grounds, tags, highlights, icons — not only the CTA.
- Tinted brand-soft surfaces replace gray-alt sections.
- The ink itself is tinted toward the brand (cool near-black), never neutral slate.

**Good vs generic:**
```css
/* GENERIC */ .tag{background:#f1f5f9;color:#475569;} section.alt{background:#f8fafc;}
/* GOOD    */ .tag{background:var(--brand-soft);color:var(--brand-deep);} section.alt{background:var(--brand-soft);}
```

---

## DIRECTION 4 — TECHNICAL PRECISION
*For data/dev/infra products (would have fit Cadence far better than what shipped)*

**Feel:** exact, engineered, trustworthy. Not cold-generic — deliberately precise.

**When it fits:** developer tools, data products, scheduling/time, anything where
precision is the value.

**Palette — a TINTED cool porcelain, one electric accent:**
```css
--bg: #f4f6f8;          /* cool porcelain, mixed — NOT slate-50 */
--panel: #eef1f4;
--ink: #14181d;         /* ink-blue-black, not slate-900 */
--muted: #5a6673;
--accent: #0aa;         /* one electric accent, used in data too */
--line: #d6dce2;        /* hairline rules */
```

**Techniques:**
- Mono headings (IBM Plex Mono / Commit Mono) — digits align like a schedule.
- Hairline rules structure the page; data and numbers set large.
- The crafted centerpiece is a real DIAGRAM of the product flow (honest, not a fake UI).
- One oversized time/number moment as graphic.

**Good vs generic:**
```css
/* GENERIC */ h2{font-family:Outfit;} .step{border-top:2px solid var(--accent);}
/* GOOD    */ h2{font-family:'IBM Plex Mono';letter-spacing:-.01em;} .flow{/* custom SVG timeline, edge to edge */}
```

---

## DIRECTION 5 — WARM EDITORIAL
*For premium, story-led, considered products*

**Feel:** magazine-grade, human, unhurried, expensive.

**When it fits:** premium services, founder-led brands, anything selling craft.

**Palette — warm grounds + one serif display + grain:**
```css
--bg: #f3ede3;          /* warm cream, used INTENTIONALLY (not reflexively) */
--ink: #241f1a;         /* espresso, not black */
--muted: #6f645a;
--accent: #9c4a2f;      /* clay/brick */
--grain: url("data:image/svg+xml,..."); /* 3-5% noise overlay */
```

**Techniques:**
- One serif display face (Fraunces roman, Lora) at 5-7rem for the hero. Body stays sans.
- Grain texture at 3-5% over the hero ground kills plastic flatness.
- Wide margins, long measure for lead paragraphs, real editorial rhythm.

**Good vs generic:**
```css
/* GENERIC */ .hero{background:#f8fafc;}  h1{font-family:Outfit;font-size:3rem;}
/* GOOD    */ .hero{background:var(--bg);background-image:var(--grain);}  h1{font-family:Fraunces;font-weight:400;font-size:clamp(3rem,7vw,6rem);}
```

---

## DIRECTION 6 — BRUTALIST CONFIDENT
*For bold, opinionated, attention-grabbing products*

**Feel:** loud, structural, unmissable. Anti-safe.

**When it fits:** provocative brands, dev tools with attitude, launches that want noise.

**Palette — true high contrast + one loud accent:**
```css
--bg: #fffef7;          /* off-white with a warm cast */
--ink: #0d0d0d;         /* near-black */
--accent: #ff3d00;      /* loud */
--block: #0d0d0d;       /* solid ink blocks as structure */
```

**Techniques:**
- Oversized type, tight tracking, real weight contrast (900 vs 400).
- Hard edges — 0 or very small radius. Raw structure, visible grid.
- Solid ink blocks divide the page; the accent is used at full strength.

**Good vs generic:**
```css
/* GENERIC */ h1{font-size:3rem;font-weight:700;}  .btn{border-radius:10px;background:#0d9488;}
/* GOOD    */ h1{font-size:clamp(3.5rem,10vw,8rem);font-weight:900;line-height:.9;}  .btn{border-radius:0;background:var(--accent);}
```

---

## THE RULE THAT TIES IT TOGETHER

The model must, in the Design Concept:
1. Name the direction it's using and why it fits THIS product (traceable to the brief).
2. State the exact palette values it's committing to (no unmodified Tailwind ramps).
3. Name the two depth mechanisms and the one crafted centerpiece it will build.
4. Execute that direction fully and consistently — every section reads as the same committed idea.

A page that could belong to any direction belongs to none. Commit, and the generic center disappears on its own.
