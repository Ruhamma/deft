# Preflight

This is the last filter before shipping — it catches what slipped through the copy layer, the aesthetic layer, and the builder layer. Before presenting the final page, run every check below in order. No check gets skipped.

**Non-negotiables:**
1. Run all six groups below, in order, and report which check numbers ran.
2. Hard checks (copy, visual, accessibility, responsive) get fixed automatically — don't ask permission, just fix and note it.
3. Soft checks (soft copy, conversion) get flagged as a short list for the user to weigh in on — don't silently apply them.
4. Ship only after the user approves the final flagged list.

---

## 1. The Protocol

1. **Copy checks (C-01 to C-13)** — see `preflight/COPY-CHECKLIST.md`. Auto-fix.
2. **Visual checks (V-01 to V-25)**, see `preflight/VISUAL-CHECKLIST.md`. Auto-fix. (V-21 through V-25 are structural: Template Test, Boxed Page, Motion budget, Type moment, Generic baseline. A V-21 or V-25 failure sends the build back to Phase 3a, not a quick patch.)
3. **Accessibility checks (A-01 to A-08)** — see `preflight/VISUAL-CHECKLIST.md`. Auto-fix.
4. **Responsive checks (R-01 to R-04)** — see `preflight/VISUAL-CHECKLIST.md`. Auto-fix.
5. **Soft copy checks (C-14 to C-17)** — see `preflight/COPY-CHECKLIST.md`. Flag for the user.
6. **Conversion checks (X-01 to X-08)** — see `preflight/VISUAL-CHECKLIST.md`. Flag for the user.

After all hard checks pass and soft checks are flagged:

> "Preflight complete. I fixed [X] issues automatically. Here are [Y] things I'd like your input on before we ship: [list soft flags]. Ready to finalize?"

## 2. The Holistic Passes (beyond the numbered checks)

The numbered checklists catch patterns; these catch things that only show up when you step back and look at the whole page:

- **The Von Restorff audit (PRINCIPLES.md 1.5):** scan each viewport-height slice of the page. If two elements compete for visual isolation, demote one — only one thing should be unmissable per screen.
- **The squint test (PRINCIPLES.md 2.4):** blur your eyes at the page. Can you still identify the most important element, the clickable elements, and the reading order? If hierarchy dies in the blur, it never existed.
- **The trust-incongruity hunt (PRINCIPLES.md 4.1, 4.2):** hunt for anything that doesn't match — placeholder text, a stock photo standing in for a person, a suspiciously round number, a tone that doesn't match the rest of the page. One incongruent detail costs more than ten good details earn.
- **The honest-scarcity challenge (PRINCIPLES.md 3.10):** every urgency claim on the page gets challenged — is this true, and would it survive a page refresh? If it wouldn't, cut it.
- **The congruence check (PRINCIPLES.md 4.2):** does every section feel like it came from the same company? Tone, visual polish, and price positioning should all agree.

## 3. What "Done" Looks Like

Fix every hard failure yourself before presenting anything — the user should never see a page with a purple gradient or an unlabeled form field and be asked whether that's okay. Soft flags are different: present them as a short, scannable list, not a wall of caveats, and don't ship until the user has actually said yes.
