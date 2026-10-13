# Advanced Design Options

These layers sit on top of the core aesthetic system. The ⭐ defaults in this file are the baseline for every page; everything else requires the user's opt-in via the Section 7 menu. Every option carries a real trade-off against Jakob's Law (PRINCIPLES.md 1.7): distinctive look is welcome, distinctive *interaction* is a risk. Present the menu honestly, let the user choose, respect the choice.

**Non-negotiables:**
1. The ⭐ defaults are the baseline for every build and need no opt-in: staggered-cascade hero reveal, standard vertical scroll with smooth momentum, background-color-shift section transitions. A hero with zero entrance reveal is a bug, not restraint.
2. Everything beyond the defaults requires the user's opt-in via the Section 7 menu. Present that menu immediately after brief approval, and do not skip it.
3. Every option ships with its trade-off stated plainly: no upsell framing, no silent omission of the downside.
4. For conversion-focused flows (SaaS, e-commerce, service, course, nonprofit, restaurant), keep experimental variants off unless the user asks. The defaults still apply.
5. Always respect `prefers-reduced-motion`: every animated option needs a static fallback.

---

## 1. Hero Reveal (plays once on page load — different from scroll-triggered motion)

- **Staggered Cascade ⭐ (default):** headline fades in (300ms), subhead 150ms later, CTA 150ms after that. Total 600-800ms. Safest, guides the eye in reading order.
- **Fade-In-Place:** everything fades together, 400-500ms, no movement. Best for minimal or content-heavy heroes.
- **Scale-In:** content resolves from `scale(0.96)` to `scale(1)` over 600ms. Premium/editorial "settling into focus" feel.
- **Split Reveal:** text enters from left, visual from right, meeting in the middle. Split-hero layouts only.
- **Curtain Reveal:** a solid brand-color block slides away to reveal the hero. 800-1000ms total. ⚠️ adds ~1s before the headline is visible — only when the dramatic entrance earns its keep (launches, events, bold brands).
- **Clip-Path Reveal:** content revealed through an expanding shape. 600-800ms. ⚠️ can feel gimmicky against a straightforward page — match the page's overall energy.
- **Type-On:** headline builds word by word, 50-80ms per word. ⚠️ only for headlines under 8 words — longer ones lose the visitor before finishing.

**Rules:** plays once, never replays on scroll-back. CTA must be visible and clickable within 1 second of load regardless of which reveal is chosen. Visual assets can lag 200ms behind the text. On mobile, simplify to Fade-In-Place or Staggered Cascade only — complex reveals jank on slower devices.

## 2. Scroll Type

- **Standard Vertical ⭐ (default):** normal scrolling, visitor controls pace. Zero learning curve, highest conversion. Enhance with smooth momentum (Lenis-style or `scroll-behavior: smooth`) for a premium feel without changing the paradigm.
- **Scroll Snap Sections:** each section fills the viewport, scroll jumps section to section. ⚠️ visitors lose control of position — reduces how far people scroll. Max 5-7 sections, never on pages with pricing or FAQ (those need free scanning).
- **Horizontal Scroll Page:** the whole page scrolls left-right. ⚠️ breaks every visitor expectation, CTAs get harder to find, mobile behavior is unpredictable. Portfolios and creative showcases only — never a conversion-focused page.
- **Hybrid Vertical + One Horizontal Section:** page scrolls normally except one showcase/gallery section. ⚠️ needs a clear visual affordance that the visitor is entering a different scroll zone (a partially visible next card, not "Scroll →" text).
- **Sticky Stack:** sections stack and slide over each other. ⚠️ GPU-heavy, test on mid-range devices, max 3-5 stacking sections, content below must stay reachable.
- **Parallax Layers:** background/foreground move at different speeds. ⚠️ easy to overdo — one section max (usually hero background), causes frame drops and motion sickness on mobile, must fall back to static for `prefers-reduced-motion`. Conversion-neutral at best.
- **Infinite Scroll:** content loads continuously. ⚠️ footer becomes unreachable if mishandled — one content section only, never the whole page, always needs a "Load more" fallback.

**Rules:** conversion-focused flows (SaaS, e-commerce, service) stay on Standard or Smooth Momentum. Experience-focused flows (portfolio, agency, event) can use Scroll Snap, Horizontal, or Sticky Stack. Never combine two experimental scroll types on one page.

## 3. Cursor

- **System Default ⭐ (default, and the only option for SaaS/e-commerce/service/course/nonprofit/restaurant flows):** zero distraction, works everywhere. Custom cursors add load time, break on mobile, distract from content.
- **Magnetic Cursor:** interactive elements subtly pull the cursor toward them (5-10px max pull, disabled on touch). Only for premium SaaS or product showcases where interactivity is itself the sell.
- **Text Label Cursor:** cursor shows "View"/"Play"/"Drag" on specific hover targets. Portfolios and galleries only, 3-5 elements max, disabled on mobile.
- **Circle Follower:** a larger circle trails the cursor with slight delay, expands on hover targets. Creative agencies/studios only — monitor performance, disable on mobile and `prefers-reduced-motion`.
- **Spotlight/Reveal:** cursor acts as a flashlight revealing content. Very experimental — one section max, content must remain accessible without it.

**Hard-banned regardless of flow:** a small dot/crosshair replacing the system cursor (this is the new cursor-library slop — screams "I installed a package," not "I designed this"), custom cursor with no interactive purpose, trailing-particle/morphing animated cursors, hiding the system cursor entirely outside the one-section Spotlight exception.

## 4. Card Types (beyond the standard grid)

- **Organic Scatter:** cards at varied angles, overlapping, not grid-aligned. Playful brands, marketplaces with variety. Falls back to a grid on mobile.
- **Data-Rich Dark Card:** dark background, real stats, photo thumbnails. Stats sections, data-driven proof.
- **Generative Art Card:** the card's background is custom abstract art, not an illustration beside text. Use only where no real screenshot exists.
- **3D Product Card:** contains a 3D/isometric render. Product features, e-commerce, physical products.
- **Multi-State UI Cards:** each card shows a different product state/moment (onboarding, profile, success). Demonstrates product depth.
- **Non-standard testimonial cards:** tweet-format, video-thumbnail, or result-first (metric huge, quote secondary).
- **Transparent/Borderless:** grouping by spacing and typography alone, no container at all. Minimal/editorial brands, or anywhere "card-itis" needs avoiding.

**Rules apply regardless of type chosen:** never default to equal-size cards — vary size or height, or skip the grid entirely. A card needs a reason to exist; if the content reads fine without a container, don't add one. Mobile collapses everything to single column (scatter becomes a vertical stack). Max 12-16px radius, no thick colored side-border (see `aesthetic/SKILL.md` Section 6).

## 5. Section Transitions

- **Background Color Shift ⭐ (default):** sections alternate background tone; the color change is the divider. Clean, works for most pages.
- **Gradient Fade:** background transitions gradually over 100-200px of scroll. Premium/editorial pages that should read as one continuous flow.
- **SVG Wave/Organic Shape:** a custom shape divides sections. ⚠️ must be brand-relevant — a random wave on a fintech page is slop, not style.
- **Overlap:** next section overlaps the previous by 40-80px for layered depth. Premium/editorial pages with varied backgrounds.
- **Full-Bleed Image Break:** a photo spans full-width as a palette cleanser between sections. Long-form pages, lifestyle brands.
- **Diagonal/Angled Cut:** a diagonal section boundary for forward energy. ⚠️ keep the angle to 2-4 degrees — steeper creates awkward whitespace and broken text alignment.

**Rules:** max 2 transition types per page. The common pattern is color-shift for most boundaries plus one special transition at the single most important section break. Test SVG shapes and overlaps on small viewports — they must degrade gracefully.

## 6. Page Transitions (multi-page sites only)

- **Instant ⭐ (default):** standard browser navigation. Fast, predictable, right for most sites.
- **Crossfade:** 200ms out, 200ms in. A safe, small upgrade from instant.
- **Slide:** pages slide like a card deck. Product tours, onboarding flows. Must stay under 300ms or it feels sluggish.
- **Shared Element Morph:** an element on the current page morphs into its counterpart on the next (card → project page, product card → product page). ⚠️ needs careful implementation — a broken morph is worse than no transition at all.
- **Brand Color Wipe:** accent color fills the screen (250ms) then reveals the new page (250ms). ⚠️ adds 500ms to every navigation — only when brand personality justifies the cost.

**Rule:** never exceed 500ms total for a page transition. Speed beats smoothness for navigation. Most landing pages are single-page, making this section moot — check first.

---

## 7. How to Offer These

Present this immediately after brief approval. It is mandatory, not a "go deeper" extra. Keep it short and tappable: a one-line frame, the four dimensions as short labels, and an easy exit. The ⭐ defaults apply whether or not the user engages; this menu only offers the experimental variants.

> "Want any distinctive touches, or should I pick smart defaults and keep it clean? Four things I can dial up:
>
> - Scroll feel
> - Hero entrance
> - Cursor
> - Section transitions
>
> Say the word on any one and I'll lay out the options. Otherwise I'll use the safe defaults."

Expand a dimension's variants and their trade-offs only when the user picks that one, one at a time. Never dump all four sets of options at once. Warn honestly when a choice will cost conversion, then build what they chose.
