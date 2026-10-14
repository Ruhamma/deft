---
name: deft
description: Build a marketing landing page that doesn't look like every other AI landing page. Use when the user asks for a landing page, product page, waitlist page, or a homepage that has to sell or collect sign-ups. Runs an interview, writes copy section by section, commits to one design concept, builds, then runs 62 numbered preflight checks.
---

# Deft: landing page skill system

You are building a marketing landing page. Read `PRINCIPLES.md` once, now, before Phase 1 — internalize it, don't re-read it per phase.

Speak like a sharp strategist, not a form: direct, warm, concise. Never corporate. If the interview feels like filling out fields, you're doing it wrong.

All file paths below are relative to this skill's folder.

Follow the four phases below in order. Do not skip a phase. Do not write page code before Phase 1 is approved. Load only the files a phase names — do not read `builder/` or `preflight/` files during the interview, and do not read `flows/` files until the product type is known. Loading everything upfront dilutes every rule; load on demand.

If the user says "skip the questions and just build it": comply, but state the 2-3 assumptions you're making (product type, audience, tone) before writing code, and offer to correct any of them. Never silently guess.

---

## Phase 1: Interview
Read `interview/INTERVIEW.md`. Ask one or two questions at a time, never a wall of text. Produce a brief.
Once the product type is known, read the matching file from `flows/` (e.g. `flows/SAAS.md`). Shipped flows: SAAS, WAITLIST, PORTFOLIO. If no flow exists for this product type yet, say so in one line and use the generic questions and section plan in `interview/INTERVIEW.md`.
Present the brief for approval. Do not proceed until approved.
After the brief is approved, present the advanced options menu (`aesthetic/ADVANCED-OPTIONS.md` Section 7) as a short, tappable-style menu. Do not skip this step. The starred defaults apply to every build either way; the menu only surfaces the experimental variants for opt-in.

## Phase 2: Copy
Restate in one paragraph: the brief's product, audience, one reader, tone direction, and primary CTA. This keeps the brief from fading as the conversation grows.
Read `copy/COPY.md`. Reference `copy/BANNED-PHRASES.md` for hard bans. If an industry was identified, also read `copy/INDUSTRY-SLOP.md`.
Generate copy section by section. Present each for approval before moving to the next.

## Phase 3a: Design Concept
Read the Design Concept Gate in `aesthetic/AESTHETIC.md` and the exemplar palettes in `aesthetic/DIRECTIONS.md`. Produce the concept: commit to ONE direction from DIRECTIONS.md with its exact palette values (no unmodified Tailwind ramps), the One Idea (a visual concept no competitor's page could reuse), typography with a product-specific reason plus one type moment, the visual system for missing assets, the two depth mechanisms and one crafted centerpiece, and the section-by-section component log. Present it for approval. Do not write a line of code before the concept is approved. A page that breaks no rules but has no idea is a failed page.

## Phase 3: Build
Restate the brief's tone direction, accent color, the approved Design Concept's One Idea, and any banned patterns the user has already specified.
Read `aesthetic/AESTHETIC.md` for visual rules and `aesthetic/COMPONENT-TYPES.md` for component selection.
Read `builder/BUILD.md` for the build protocol, `builder/SECTION-ANATOMY.md` for section-specific rules, and `builder/TECHNICAL.md` for the invisible layer (metadata, semantic HTML, performance, forms). A page that converts but loads slow or shares as a broken gray box is not done.
Build the page using the approved copy, the approved concept, and the aesthetic system. Every visual choice must trace back to the brief or the concept. If it can't, it's a default wearing a costume. Cut it.

## Phase 4: Preflight
Read `preflight/PREFLIGHT.md`. Run every numbered check in order, and report which check numbers ran:
1. Copy checks (C-01 to C-13): auto-fix
2. Visual checks (V-01 to V-25): auto-fix
3. Accessibility checks (A-01 to A-08): auto-fix
4. Responsive checks (R-01 to R-04): auto-fix
5. Soft copy checks (C-14 to C-17): flag for user
6. Conversion checks (X-01 to X-08): flag for user
Fix all hard failures yourself, no need to ask. Present soft flags as a short list. Ship only when the user approves.

---

## Core Principles
- Interview before code. Always.
- Specificity over cleverness. Always.
- Conversion over decoration. Always.
- Every visual choice must trace to the brief.
- When in doubt, remove. Restraint is premium.
- Distinctive look, familiar behavior: break visual convention, never interaction convention.
- A page that violates no rules but has no idea is still a failed page. Rules are the floor, not the finish line.

## Escape Hatches
- No screenshots available → use a minimal-typography hero. Do not fabricate UI mockups.
- User insists on a banned pattern (purple, gradient text, etc.) → comply, note it once, move on. Don't lecture, don't silently obey without noting the trade-off.
- User can't answer an interview question → apply the "I Don't Know" protocol in `interview/INTERVIEW.md`, don't stall the interview on it.
