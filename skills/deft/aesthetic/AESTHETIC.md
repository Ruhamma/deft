# Aesthetic System

Your lane is marketing landing pages specifically — breathing room and narrative flow, not app UI density. Every visual choice must trace back to the brief. If you can't say "this is X because the brief says Y," it's a default wearing a costume — cut it.

**Non-negotiables:**
1. One accent color. Not two, not three. One.
2. No purple/violet as primary or accent unless the brief's brand assets say the brand IS purple.
3. At least 3 real images on the page (screenshots, photos, video thumbnails). Never substitute icon grids or styled div mockups for photography that doesn't exist.
4. Never three equal-size cards in a row. If three things sit side by side, make them unequal.
5. Font recommendations below decay, so treat the tables as a starting point, not scripture. Check what's currently overused before defaulting to any "safe" choice (see Section 1).

---

## The Design Concept Gate (Phase 3a)

Before writing a single line of code, produce and present a four-part Design Concept for approval. No concept approved means no code written. Compliance with the ban lists is the floor; a concept is what makes the page someone's instead of anyone's.

**1. The direction and the One Idea (required).** Commit to exactly ONE direction from `aesthetic/DIRECTIONS.md` and say why it fits THIS product (traceable to the brief). Never average two directions. State the exact palette values you're taking from it (no unmodified Tailwind ramps like #f8fafc/#0f172a), plus the two depth mechanisms and the one crafted centerpiece you'll build. Then state the One Idea: a visual concept specific to this product that no other product's page could reuse. Not a style ("clean and modern" is banned as a concept). An idea.
- For a check-in rhythm tool: Technical Precision direction (precision is the product's value). One Idea: "The page keeps time: a time-of-day motif runs down it, sections marked like Slack timestamps, and the nudge is the page's one moment of motion."
- For a tax tool: "Every number is set in huge tabular figures, like a ledger coming alive."
- **The Template Test:** swap in a competitor's logo. If the concept still works, it isn't a concept, it's a template. Reject it and think again. A page that could belong to any direction belongs to none.

**2. Typography with a reason (required).** The tone tables below are directions, not menus; picking the first listed option is a preflight failure. Justify the pairing with a product-specific reason, not the tone label: "IBM Plex Mono headings because Cadence is about schedule precision, and mono digits align like timestamps." And commit to at least one **type moment** beyond the pairing: one number, word, or line set at 8rem+, or a sharp weight or width contrast. Every page gets one typographic moment a screenshot would be recognized by.

**3. The visual system when assets are missing (required if there are no photos or screenshots).** Zero images does NOT mean text in boxes. When photography is absent, one of these BECOMES the imagery (pick one, execute it in at least 3 sections):
- **Type-as-image:** dramatically scaled typographic compositions (a 12rem "10:04 AM", the check-in questions set huge).
- **Diagrammatic:** custom SVG diagrams of the product's real flow (real arrows, states, labels). A diagram is an honest abstraction, not a fabricated screenshot.
- **Generative pattern:** one abstract system (lines, grid, dots) derived from the product's domain, used consistently.
- **Data-as-decoration:** the product's real numbers, times, or vocabulary as oversized graphic elements.
The anti-fabrication rule stays absolute for UI screenshots. Diagrams, type, and patterns are not fabrication.

**4. Section-by-section component log (required).** For every section in the brief, one line: `Section → component variant (named from COMPONENT-TYPES.md) → why this one, not the default`. If every line picks the default variant, the concept phase failed. At least 3 sections must use a non-default variant.

Present all four parts, get approval, then write code.

---

## 1. Typography

**Banned outright:** Inter, Roboto, Arial, Open Sans, Helvetica, Geist, Space Grotesk, Instrument Serif — all flagged as overused defaults. Also banned: identical font for heading and body, oversized H1 with no hierarchy below it, gradient text on headlines, all-caps monospace section labels, excessive kerning on hero text, italic serif as the primary hero headline (the single most recognizable "AI startup" hero pattern — serif headings are fine, set them roman/upright).

**These tables are compass directions, not destinations.** Never pick the first option in a row. If you catch yourself reaching for it, choose differently and say why. The named fonts are examples of a direction: Fontshare, Google Fonts, and Bunny Fonts hold hundreds of alternatives per direction, so prefer one that fits this product's specific character over one from this list. Two Deft pages in the same tone must not look like siblings, so if a past build used a pairing, this one doesn't reuse it. Same for accents: "electric teal" sitting in the table does not make teal the Confident & Direct color. Derive the accent from the product's domain where you can (a time tool might own a clock-hand red, a soil-testing tool an ochre).

**Pick a direction from the brief's tone, then diverge from the obvious within it:**

| Tone Direction | Heading Font Options | Body Font Options |
|---|---|---|
| Confident & Direct | Satoshi, General Sans, Switzer, Outfit | Source Sans 3, Hanken Grotesk, system UI stack |
| Warm & Conversational | Plus Jakarta Sans, Cabinet Grotesk, Nunito Sans | Plus Jakarta Sans, Source Sans 3, Atkinson Hyperlegible |
| Bold & Provocative | Clash Display, Syne, Space Mono (headings only) | Libre Franklin, Karla |
| Premium & Editorial | Cormorant, Lora, Fraunces (roman, not italic) | Libre Franklin, Source Serif 4, Literata |
| Technical & Precise | IBM Plex Mono (headings), Commit Mono | IBM Plex Sans, Hanken Grotesk |

If the user has existing brand fonts, use them — the table above is for starting fresh only.

**Rules:** heading + body always paired, never identical. Body: 16px floor, 18px preferred. Line height 1.5-1.7 body, 1.1-1.2 headings. Max line length 65ch. Clear scale: H1 dominant, H2 clearly subordinate, H3 supportive, body comfortable. **The squint test:** blur your eyes — if you can't tell heading levels apart by shape/size alone, the hierarchy is too flat (PRINCIPLES.md 2.4).

## 2. Color

**Banned:** purple/violet as primary or accent (the #1 cited visual AI tell — universal), purple-to-blue gradients, neon gradient backgrounds, oversaturated accents (>80%), pure black (#000000) backgrounds, pure white (#FFFFFF) backgrounds, gradient backgrounds on cards or sections, more than one accent color. Cream/beige is also flagged as a reflex default — don't reach for it just because it feels "safe and tasteful." Use it only when the brand identity is explicitly warm (wellness, organic food, artisan), and even then be deliberate, not automatic.

**Same rule as the type table above: directions, not a menu. Don't default to the first accent listed, and derive the hue from the product's domain when you can.**

| Tone Direction | Base Palette | Accent Options |
|---|---|---|
| Confident & Direct | Slate/zinc neutrals, cool-toned | Deep blue, emerald, electric teal |
| Warm & Conversational | Warm grays (only if brand is deliberately warm) | Warm coral, amber, soft orange |
| Bold & Provocative | High contrast: near-black + near-white | Bright red, electric yellow, hot pink |
| Premium & Editorial | Cream/ivory (only if intentional) or true neutral, deep espresso | Gold, muted sage, deep burgundy |
| Technical & Precise | Cool grays, slate, near-white | Single bright accent (green, blue, orange) |

No brand colors and no clear direction yet? Default to true neutral gray (#F5F5F5 — neither warm nor cool), not a reflexive cream or cool off-white. If you can't explain why a background is warm or cool, it's a reflex, not a choice.

**Rules:** neutral base for ~80% of the page. Accent used only for primary CTA, one or two key highlights, active states. Dark sections use off-black (#0A0A0A, #111111, #18181B), never pure black. Shadows tint to match the background hue. All text passes WCAG AA. **The single-accent test:** at any point you should be able to name the ONE accent color on the page immediately, and if you can't, it's drifted.

For a committed palette that beats the generic Tailwind-gray baseline, take exact values from the direction you chose in `aesthetic/DIRECTIONS.md` (surface tints, warm/cool near-blacks, tinted shadows), rather than reaching for unmodified slate ramps. Color should reach surfaces, grounds, and tints, not just the CTA button.

## 3. Layout

**Banned:** centered hero with gradient text, three-equal-card feature grids, symmetrical 3-column grids with no whitespace, edge-to-edge sticky navbars, bento grids as the primary marketing layout, cards for everything, full-width sections with no max-width, identical section heights throughout, monotonous spacing (same gap value everywhere), decorative numbered section markers (01/02/03) unless the content is an actual sequence, a hero built as a big-number-plus-stats layout (stats belong in social proof, not the hero).

**Hero layout — pick one:** split (text/visual 50-50 or 60-40, the safest default), left-aligned with a floating visual, minimal centered (only when the product is famous enough that words alone sell — rare), full-bleed visual with text overlay.

**Feature section layout — pick one:** alternating zig-zag, stacked full-width sections with screenshots, tabbed/interactive, one large feature plus a smaller supporting list. Never three equal cards — if three things sit side by side, vary their size or height.

**Spacing:** minimum py-24 desktop / py-16 mobile section padding. Vary the gaps: within-group tighter than between-group, between-group tighter than between-section (Gestalt proximity, PRINCIPLES.md 5.1).

**Containers constrain text, never sections.** A `.wrap`-style container exists to protect line length (65ch), so apply it to text blocks inside sections. Section backgrounds, visual layers, oversized type moments, diagrams, patterns, and dark blocks reach the viewport edge. Hard rule: at least 2 sections per page carry a visual element that touches the viewport edge (a full-bleed background treatment, an oversized type moment breaking the container, or a diagram/pattern running edge to edge). Asymmetry is the default posture: content columns of different widths, elements that cross section boundaries, one thing per page deliberately oversized.

**The Boxed Page is a named failure:** every section rendered as the same fixed-width box, alternating white and gray, nothing reaching the edge. If that's what you've built, it fails preflight V-22. Restructure it.

**The rhythm test:** read the page as a sequence of section shapes. Wide/narrow, text/visual, light/dark (1-2 dark sections max), dense/spacious should alternate, never repeat identically.

## 4. Imagery

The single biggest AI tell is the absence of real images — cards with icons standing in for photography. **Banned:** generic stock photography, AI-generated illustrations as the hero image, icon grids substituting for photography, irrelevant stock images, styled div mockups pretending to be product UI, placeholder images with no replacement plan.

**Reach for:** real product screenshots in context (browser or device frame adds legitimacy), annotated/highlighted screenshots matched to the section's specific claim, real photos of real people, before/after comparisons, process diagrams for how-it-works, video demos where possible.

**Rules:** minimum 3 real images per page. The hero always has a visual — never text-only on a gradient. If the user has no visuals at all, flag it as a critical gap: "Before building, get 3-5 product screenshots and one team photo — the page will convert significantly better." Don't substitute stock in the meantime.

## 5. Motion

**Banned:** animating everything, scroll-hijacking (`window.addEventListener('scroll')` driving layout), linear/ease-in-out transitions on interface motion, bounce/elastic easing (spring-in dialogs, overshooting cards), neon glow on hover, identical hover effect on every interactive element, image scale/rotate on hover, parallax on marketing pages, auto-playing carousels.

**Allowed:** subtle fade-up on scroll entry (400-600ms), hover states that vary by element type (buttons scale slightly, links underline, cards shift border — not the same effect everywhere), CTA press feedback (scale 0.98 on click), muted autoplay video, number counters on scroll into view.

**Rules:** at most 30% of sections carry scroll-triggered animation — the rest load static. Use a custom cubic-bezier (e.g. `cubic-bezier(0.32, 0.72, 0, 1)`), never default ease. Animate only `transform` and `opacity`, never layout properties. `backdrop-blur` only on fixed/sticky elements. Respect `prefers-reduced-motion`. Motion's job is guiding attention to the CTA, never decorating for its own sake (PRINCIPLES.md 5.2).

## 6. Components

See `aesthetic/COMPONENT-TYPES.md` for full variants. Baseline rules that apply regardless of which component you pick:

- **Cards:** justified only by genuine common-region grouping (pricing tiers, testimonials, case studies) — never for stats, feature lists, logo rows, or FAQ items. When used: border OR shadow, never both; no thick colored border on one side; max one level of nesting; max 12-16px corner radius (reserve full-pill radius for tags/buttons/badges only); consistent radius across the page.
- **Feature cards:** no rounded-square icon tile stacked above the heading — the single most recognizable AI feature-card template. Use icon inline with text, side-by-side, or no icon at all and let the screenshot carry it.
- **CTAs:** primary filled with the accent, secondary ghost/text — never competing visually. Generous padding, rounded-lg default (not full pill unless brand is playful). No glow, no gradient fill, no pulse. Max 2 per section.
- **Social proof bars:** logos only, grayscale, consistent height, no card containers, 4-6 max.
- **FAQ:** accordion with dividers, not cards. One open at a time.
- **Eyebrow pills/badges above headlines:** banned by default — one real announcement in the hero is the only exception.

## 7. Responsive

83% of landing page visits are mobile — this isn't optional. Hero fully functional at 390px. CTA visible without scrolling on mobile. Tap targets minimum 44x44px. No hover-dependent interactions. `min-h-[100dvh]`, never `h-screen` (iOS Safari bug). Any multi-column layout collapses to single column below 768px, same content order preserved. Primary CTA on mobile is full-width or near-full-width, positioned in the thumb zone (bottom-reachable area).

## 8. The Five Principles Behind All of This

1. **Intentionality over defaults** — every choice traces to the brief, or it's a guess wearing a decision's clothes.
2. **Restraint over decoration** — when in doubt, remove. Premium comes from what isn't there.
3. **Photography over illustration** — real images of real things beat AI illustrations beat icon grids beat styled divs, always move up that ladder as far as assets allow.
4. **Consistency over variety** — one accent, one radius system, one font pairing. Consistency reads as intentional; variety reads as a model guessing.
5. **Conversion over beauty** — this is a landing page, not an art piece. Every visual choice answers "does this help or hurt the path to the CTA?"

---

## Checklist before moving to Phase 4
- [ ] Every font, color, and layout choice traces to the brief's tone direction
- [ ] Exactly one accent color, nameable on demand
- [ ] At least 3 real images placed, none fabricated
- [ ] No three-equal-card row anywhere on the page
- [ ] Section rhythm varies — not identical spacing/height throughout
- [ ] Motion limited to ~30% of sections, all on transform/opacity, reduced-motion respected
