# The receipts for deftskill.pages.dev

This page was built with Deft, by running Deft on itself. Below is the record from that session: the approved brief, the copy decisions, the design concept, and the preflight log. Nothing here was written after the fact to look good.

## 1. The brief (approved)

```
LANDING PAGE BRIEF
==================
Intent: Product page (open-source developer tool)
Product: A skill system that makes AI coding agents interview you, write
         real copy, commit to a design idea, and pass numbered checks
         before they hand you a landing page.
Audience: A developer or founder using Claude Code / Cursor / Codex who
          asked AI for a landing page and got the purple-gradient one.
Current alternative: Prompting harder, pasting design rules into chat, or
                    hand-fixing the output.
Core problem: The agent knows nothing about the product, so it ships the
              average of every landing page it has seen.
Core promise: A page that could only belong to your product, from the
              agent you already use.
Differentiation: Not a template, not a component library. A process
                 (interview, concept gate, preflight) plus the reasoning
                 behind every rule.

Traffic source: Mixed (assumed, revisable)
Copy direction: Problem-first hero, solution by section 2

Conversion goal: Star on GitHub
  Secondary: Copy the install command
Price point: Free, MIT
Page length: Short to mid

Tone: Sharp, dry, confident. Takes slop seriously enough to be funny about it.
      Visual: 3D centerpiece in the Tropos style (vanilla three.js,
      scroll poses, physical materials), plus a static fallback
Social proof available: None yet, so the page shows its own receipts.
Brand assets: None. Starting fresh.

Urgency: None
Key objections: "Isn't this just a long prompt?" / "Does it work with my
                agent?" / "Will the interview slow me down?"
```

**Advanced options chosen:** smooth momentum scroll, staggered hero cascade, magnetic buttons, one overlap transition (FAQ into the final block).

## 2. Copy decisions

**Hero headline, three options. A won.**
- A: Your agent has built this landing page before. For everyone. *(chosen)*
- B: ~~Your AI agent ships the same landing page as everyone else's.~~
- C: ~~Make your agent ask about your product before it designs.~~

**Proof section, rewritten mid-session.** The first draft used Cadence (the test product in `examples/`) as a before/after. The owner didn't think the Cadence page was strong enough to be the proof, so the section became this file: the page shows the record of how it was made.

**Humor pass, approved as a set:** "Potential remains locked." / "It was a good dash. Then AI found it." / "Cut in round one. No hard feelings." / the star tooltip / the copy-button line / the purple gradient FAQ / the footer line / the console message.

## 3. Design concept (approved)

**One Idea: one page pulled from the pile.** A tall 3D stack of identical generic landing pages (slate gray, purple into blue, "Unlock your potential", three equal cards). As you scroll, one sheet slides out, fans into its layers (Brief, Copy, Concept, Checks), takes on red proof marks, and lands back on top as the only page with color.

**Direction: Brutalist Confident**, read as a press proof, because "preflight" is a print-shop word.

| Token | Value | Use |
|---|---|---|
| bg | `#fffef7` | paper |
| ink | `#0d0d0d` | text, rules, ink shadows, final block |
| accent | `#ff3d00` | correction-pen red, the only accent |
| muted | `#5c5a52` | secondary text |
| paper-2 | `#f6f3e6` | alternating section tint |

The generic slate palette and the purple gradient appear only inside the parody: the pile's sheets and the specimen in section 2.

**Type:** Schibsted Grotesk 700 to 900 for headings (drawn for a newspaper publisher, and this page is a press proof). Newsreader for body. System monospace for check codes, to stay inside the two-family budget.
**Type moment:** a full-width em dash struck out by a hand-drawn red delete loop.
**Depth:** real-light 3D (physical paper material, studio environment, contact shadow), plus hard offset ink shadows on buttons and cards.
**Visual system without screenshots:** proofreader's marks (crop marks, delete loops, numbered callouts, a stamp).

## 4. Preflight log

Run on the finished page, in order. Every check number below ran.

**Copy, hard (C-01 to C-13): pass.** Zero em dashes across visible copy, title, meta description, alt text and tooltips. The only banned words on the page ("Unlock your potential", "Get Started", "Trusted by thousands") sit inside the parody specimen or are quoted as examples of slop, which is their job. No "we" as a subject in the hero or first three headings.

**Visual (V-01 to V-25): pass, with two notes.**
- V-03 / V-04: three equal cards with icon tiles exist only inside the labeled parody.
- V-07: the receipt cards are numbered 01 to 04 because they are a real sequence (brief, copy, concept, preflight).
- V-08: buttons and cards carry a 2px border plus a hard 0-blur offset shadow. That's the Brutalist direction's depth mechanism, not the soft wide shadow V-08 targets. Kept on purpose.
- V-10: flagged, see below.
- V-21 Template Test: pass. The pile only makes sense for a product about leaving the generic page.
- V-22: pass. Hero pile, em dash moment and final block all reach the viewport edge.
- V-23: pass. One scroll reveal (the em dash loop) across 8 sections. The 3D is one object scrubbed by scroll, not per-section reveals.
- V-24: pass. Full-width em dash with a red delete loop.
- V-25: pass. Paper, ink and red reach grounds, tints and the final block.

**Accessibility (A-01 to A-08): 3 failed, fixed.**
- A-01: red receipt numbers on paper measured 3.51:1. Now ink with a red underline. Other pairs: ink on paper 19.2:1, muted on paper 6.8:1, ink on red button 5.5:1, red code on black 5.5:1.
- A-03: captions, callout footnotes and swatch labels were under 16px. Raised.
- A-06: nav, "Read more" and footer links were under 44px tall. Raised.
- A-07: reduced motion turns off smooth scroll, the 3D and every transition, and shows a static poster.

**Responsive (R-01 to R-04): 1 failed, fixed.**
- R-03: two sections used `vh`. Switched to `dvh`.
- R-04: no horizontal overflow at 390px. A `nowrap` install line overflowed during the build and was fixed then.

**Soft copy (C-14 to C-17): flagged C-14.** The hero headline could in theory be borrowed by another AI page tool. Kept, because the pile underneath it can't be.

**Conversion (X-01 to X-08): flagged X-02 and X-05.**
- X-02: the star CTA appears in the nav, hero and final block, with no mid-page CTA.
- X-05: there is no third-party social proof yet. The receipts stand in for it.
- X-07: about 250KB compressed in total (three.js 171KB from CDN, loaded when the browser is idle).

**Also flagged: V-10.** Fewer than 3 real images. The 3D render and the receipts carry the page, and a real screenshot of the Deft interview would be the strongest addition.

