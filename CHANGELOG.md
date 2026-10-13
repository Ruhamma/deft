# Changelog

## Patch 002 — The Exemplar Library

Patch 001 added checks that FAIL generic output but still only told the model what to avoid. This adds what to build toward.

- **New file `aesthetic/DIRECTIONS.md`** — six committed visual directions (Soft Tinted, Atmospheric Dark, Brave Monochrome-Color, Technical Precision, Warm Editorial, Brutalist Confident), each with the feel, exact palette values, techniques, and a good-vs-generic code pair. Plus the generic Tailwind-gray baseline every direction must beat.
- **Concept gate now leads with a direction.** Phase 3a Part 1 requires committing to ONE direction with its exact palette (no unmodified Tailwind ramps), two depth mechanisms, and one crafted centerpiece before the One Idea. Never average two directions. `CLAUDE.md`, `aesthetic/SKILL.md`.
- **New preflight V-25 Generic baseline check** — fails a palette that's the unmodified slate ramp with color only on the CTA, or that never reaches surfaces/tints/grounds. `preflight/VISUAL-CHECKLIST.md`, `preflight/SKILL.md`.

## Patch 001 — The Generic Output Fix

First end-to-end test (a SaaS page for "Cadence") produced a technically compliant but visually generic result. Five root causes, fixed here.

The v0.1 aesthetic layer was built as a ban system: it said what not to do and offered safe tables of what remained. Ban systems produce compliance, not character. The agent satisfied every rule by choosing the nearest safe default, and the tables guaranteed every same-tone page converges on identical choices. This patch adds what was missing: a mandatory design idea, a visual strategy for asset-less pages, permission and obligation to break the container, and preflight checks that fail anonymous output even when it breaks no ban.

**Changes:**
1. **Zero em dashes** (was a budget of one). `copy/SKILL.md`, `copy/BANNED-PHRASES.md`, preflight C-04. Now catches `--` and `&mdash;`, and covers title tag, meta description, and alt text.
2. **Design Concept Gate (Phase 3a)** added between copy and build. Four required parts: the One Idea, typography with a product-specific reason plus one type moment, a visual system for missing assets, and a section-by-section component log. No concept approved means no code. `CLAUDE.md`, `aesthetic/SKILL.md`.
3. **Advanced options unlocked.** The starred defaults (hero entrance reveal, smooth scroll, color-shift transitions) now apply to every build. The menu is mandatory after brief approval and only gates the experimental variants. `aesthetic/ADVANCED-OPTIONS.md`, `CLAUDE.md`.
4. **Break the box.** Containers constrain text, never sections. At least 2 sections per page must carry a visual element touching the viewport edge. The "Boxed Page" is a named failure. `aesthetic/SKILL.md`.
5. **De-converged the tables.** The tone tables are compass directions, not menus. Never pick the first option; derive accents from the product's domain; same-tone pages must not look like siblings. `aesthetic/SKILL.md`.
6. **New preflight checks.** V-21 Template Test, V-22 Boxed Page, V-23 Motion budget, V-24 Type moment. `preflight/VISUAL-CHECKLIST.md`, `preflight/SKILL.md`.
7. **Interview presentation rules.** One idea per turn, reason in one line before the question, options as clean lists, tappable inputs preferred, six-line ceiling per turn. The advanced-options menu never dumps all four dimensions at once. `interview/SKILL.md`.

**New core principle:** a page that violates no rules but has no idea is still a failed page. Rules are the floor, not the finish line.
