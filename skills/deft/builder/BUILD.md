# Build Protocol

The user never sees code during the interview or copy phases — Phase 3 is where words and strategy become a real page. Build section by section, showing your reasoning at each step, never the whole page at once until every section has been individually approved.

**Non-negotiables:**
1. Use only the copy already approved in Phase 2 — verbatim. Don't rewrite it while building.
2. Apply `aesthetic/AESTHETIC.md` and `aesthetic/COMPONENT-TYPES.md` selections — every font, color, and layout choice must trace to the brief's tone direction.
3. Apply the matching entry from `builder/SECTION-ANATOMY.md` to every section before writing it.
4. Get explicit approval at the checkpoints in Section 2 below — not silence, not "looks fine I guess."
5. Read `builder/TECHNICAL.md` before considering the build done — metadata, semantic HTML, performance, and forms are part of the page, not an afterthought.

---

## 1. What to Show Per Section

For each section, present:
1. **The copy** — the exact words that will appear (already approved in Phase 2; just placed)
2. **The reasoning** — why this layout/component choice, tied back to the brief
3. **The layout intent** — how it'll be structured visually, described in words, not code yet
4. **Alternatives** — "I could also do [option B] — want to see that instead?"

## 2. The Approval Checkpoints

Not every section needs its own explicit approval — batching related minor sections avoids survey fatigue. Aim for 4-6 checkpoints total, not 12:

- **Always ask individually:** hero, main features/benefits, pricing, final CTA — these carry the most conversion weight (PRINCIPLES.md 1.4, 3.8 — hero and final CTA are the "first and last," and features/pricing are where the visitor decides).
- **Batch together:** social proof bar + how-it-works can be reviewed as one unit.
- **Don't ask about:** footer, nav structure, metadata — use the sensible defaults from `builder/SECTION-ANATOMY.md` and `builder/TECHNICAL.md`.

Flow: brief approved → build hero → approval → build social proof + how-it-works together → approval → build problem/solution/features → approval → build testimonials/pricing → approval → build FAQ + final CTA → approval → assemble the full page → final review → hand off to Phase 4 (Preflight).

## 3. Principles That Govern the Build (see PRINCIPLES.md for the full reasoning)

- **Serial position (1.4):** the hero and the final CTA carry disproportionate memory weight — give the final CTA "second-hero" treatment, not a phoned-in ending.
- **Fitts's Law (1.2):** the CTA sits directly in the reading flow, never requiring travel to find; mobile CTAs are full-width in the thumb zone.
- **Von Restorff (1.5):** exactly one visually isolated element per viewport, usually the CTA. If two things compete for isolation, demote one.
- **Gestalt (5.1):** a card is justified only by genuine common-region grouping — proximity and spacing do the job invisibly everywhere else.
- **Peak-End (3.8):** identify the brief's "aha moment" (ask if it wasn't already clear from the interview) and give that section the most visual investment on the page.

## 4. Handling Mid-Build Changes

If the user changes direction after some sections are already approved: acknowledge it, assess which approved sections the change actually touches, and regenerate only those. Never restart the whole build unless the product itself changed — that wastes the approvals already earned.

## 5. When the Build Is Done

The page isn't done when the last section is approved — it's done when:
- Every section traces to `builder/SECTION-ANATOMY.md`'s rules for that section
- The aesthetic system from Phase 3 was applied consistently (one accent color, one font pairing, one radius system)
- `builder/TECHNICAL.md`'s invisible layer is in place (metadata, semantic HTML, performance budget, working forms)
- Full page assembled and shown once, end to end, for final approval

Then move to Phase 4 — Preflight.
