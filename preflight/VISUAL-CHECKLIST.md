# Visual, Accessibility, Responsive & Conversion Preflight Checklist

Referenced by `preflight/SKILL.md`. Visual, accessibility, and responsive checks are hard — fix automatically. Conversion checks are run and flagged for the user.

## Visual Checks — Fix Automatically

**V-01: Purple/violet accent scan.** Is the primary or accent color in the purple/violet range (hue 270-330)? Yes, and not specified in brand assets → change to a non-purple accent.

**V-02: Gradient text check.** Is any text rendered with a CSS gradient fill? Yes → change to solid color.

**V-03: Three-equal-card check.** Three or more identical-size cards in a row in the features section? Yes → restructure to zig-zag, stacked, or asymmetric.

**V-04: Icon-tile-above-heading check.** Feature cards with a rounded-square icon container stacked above a heading? Yes → restructure to side-by-side or remove the icon container.

**V-05: Side-tab border check.** Cards with a thick colored border on only one side? Yes → remove or replace with a subtle full border.

**V-06: Eyebrow/pill check.** Small uppercase tracked labels or pill chips above section headings? Yes → remove. Exception: one real announcement in the hero only.

**V-07: Numbered section marker check.** Decorative numbered labels (01, 02, 03) on sections? Yes → remove unless the content is genuinely sequential (process steps).

**V-08: Border + shadow combo check.** Elements with both a visible border AND a wide shadow? Yes → remove one, keep border or shadow, not both.

**V-09: Nested card check.** Cards containing other cards? Yes → flatten using spacing and typography instead.

**V-10: Image count check.** At least 3 real images on the page (screenshots, photos, video thumbnails)? Fewer than 3 → flag as a critical gap.

**V-11: Emoji-as-icon check.** Emojis used as visual elements in place of proper icons or images? Yes → replace with proper icons or remove.

**V-12: Font check.** Is Inter, Roboto, or Arial the heading or body font? Yes → replace with a font matching the tone direction (`aesthetic/SKILL.md`).

**V-13: Dark mode default check.** Dark-mode by default with no explicit brand requirement? Yes → switch to light default.

**V-14: Neon glow check.** Neon glow effects (saturated box-shadow) on hover states or backgrounds? Yes → remove.

**V-15: Background orbs/dots check.** Decorative gradient orbs, glow dots, or mesh blobs in the background? Yes → remove.

**V-16: Scroll cue check.** A "Scroll" label, down-arrow icon, or "Scroll to explore" element? Yes → remove.

**V-17: Extreme radius check.** Cards or containers with border-radius over 16px (excluding buttons/tags)? Yes → reduce to 12-16px max.

**V-18: Same-hover-everywhere check.** Do all interactive elements share the identical hover effect? Yes → vary by element type (buttons scale, links underline, cards shift border).

**V-19: Bounce/elastic easing check.** Animations using bounce or elastic easing? Yes → replace with smooth ease-out.

**V-20: Image hover scale check.** Do images scale or rotate on hover? Yes → remove the transform, use a subtler interaction if needed.

**V-21: The Template Test.** Mentally swap the product name and logo for a competitor's. Does the page still work unchanged? If yes → it has no design concept. FAIL, return to Phase 3a and produce a real One Idea.

**V-22: The Boxed Page check.** Measure the visual width of every section. If all sections share one identical fixed-width container and none carry a visual element touching the viewport edge → FAIL. Restructure so at least 2 sections break the box (full-bleed background, oversized type moment, or edge-to-edge diagram/pattern).

**V-23: Motion budget.** Count the sections carrying scroll-reveal animation. More than ~30% of sections → FAIL. Remove reveals until the hero and most content load statically; motion is for the few moments that earn it.

**V-24: Type moment.** Is there at least one deliberately oversized typographic moment on the page (one number, word, or line at 8rem+, or a sharp weight/width contrast)? If none → FAIL. The page has no memorable frame; add the type moment named in the Design Concept.

**V-25: Generic baseline check.** Does the palette commit to a named direction from `aesthetic/DIRECTIONS.md`, or is it the generic baseline (unmodified Tailwind slate ramp such as #f8fafc / #f1f5f9 / #0f172a / #64748b with the accent appearing only on the CTA)? If it's the baseline, or color never reaches surfaces / tints / grounds → FAIL and recommit to a direction's exact palette. This is the check the whole DIRECTIONS library exists to enforce.

## Accessibility Checks — Fix Automatically

**A-01: Color contrast.** All text meets WCAG AA (4.5:1 body, 3:1 large text)? If not → increase contrast.

**A-02: Heading hierarchy.** Heading levels flow sequentially (h1 → h2 → h3), no skips? If skipped → fix hierarchy.

**A-03: Body text size.** Body text at least 16px? If smaller → increase.

**A-04: Line length.** Body text constrained to max 75 characters per line? If wider → add max-width.

**A-05: Line height.** Body text line-height at least 1.5? If tighter → increase.

**A-06: Tap target size.** All interactive elements at least 44x44px on mobile? If smaller → increase.

**A-07: Reduced motion.** Does the page respect `prefers-reduced-motion`? If not → add the media query.

**A-08: Alt text.** Do all images have meaningful alt text? If missing → add it.

## Responsive Checks — Fix Automatically

**R-01: Mobile hero.** Hero fully displays at 390px width with the CTA visible without scrolling? If not → restructure.

**R-02: Mobile collapse.** All multi-column layouts collapse to single column below 768px? If not → fix.

**R-03: Viewport height.** Full-height sections use `min-h-[100dvh]` instead of `h-screen`? If `h-screen` → change it.

**R-04: Horizontal overflow.** Any content causing horizontal scroll on mobile? If yes → fix.

## Conversion Checks — Run and Flag for the User

**X-01: CTA visibility.** Is the primary CTA visible above the fold on both desktop and mobile? If not → restructure the hero.

**X-02: CTA count.** Does the primary CTA appear 2-3 times (hero + mid-page + final)? Fewer → add. More than 3 → reduce.

**X-03: CTA consistency.** Is the same primary action used across all CTA instances? Competing CTAs → unify.

**X-04: Risk reducer.** Does the final CTA section include a risk reducer (guarantee, no commitment, free tier)? If not → add one.

**X-05: Social proof placement.** Does social proof appear within the first two scrolls? If not → move it up.

**X-06: Section headline narrative.** Read only the section headlines top to bottom — do they tell a coherent story (problem → solution → proof → action)? If not → reorder or rewrite.

**X-07: Page load weight.** Are images optimized and lazy-loaded? Is estimated page weight under 3MB? If over → optimize (see `builder/TECHNICAL.md`).

**X-08: Single focus.** Does the page have ONE primary conversion goal with no competing actions? If multiple goals compete → simplify.
