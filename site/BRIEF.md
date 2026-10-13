# The receipts for deftskill.pages.dev

This page was built with Deft, by running Deft on itself, twice. Below is the record from that session: the approved brief, the copy decisions, the design concept, and the preflight log. Nothing here was written after the fact to look good.

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

## 3. Version one, and why it was thrown out

The first build was **Brutalist Confident**: off-white paper, ink, correction-pen red, and a three.js pile of identical generic landing pages with one page pulled out of it. It passed preflight.

The owner looked at it and said it wasn't unique enough. Their read, and ours on review:
- Black, white and red brutalism is a trend in itself now, so we had swapped one default for a more fashionable one.
- Every section was text on the left and a visual on the right.
- The 3D sat beside the page instead of being the experience.
- The headline didn't land, and the copy was safe.

So the page went back to copy and concept. Version one is still in the git history.

## 4. Version two: copy decisions

**Hero headline, round two. B won.**
- A: ~~Every AI landing page is the same page. Yours doesn't have to be.~~
- B: The purple gradient was never a design decision. *(chosen)*
- C: ~~Your agent designs from the average. Deft makes it ask first.~~

Tone moved from "dry and jokey" to "fewer words, more conviction." Jokes came down to three: the purple gradient FAQ, the footer line, and the console message.

## 5. Version two: design concept (approved)

**One Idea: the page starts as slop, and you inspect your way to the real one.** The hero opens as a generic AI landing page for a made-up invoicing product, Tally. Your cursor is a glass loupe (shader adapted from the Tropos lens): it magnifies, bends at the rim and splits color at the edge, and through it you see the page Deft would have built, with the check codes it passed. Scrolling grows the lens until the real page takes over.

**Direction: Technical Precision**, read as an inspection instrument.

| Token | Value | Use |
|---|---|---|
| bg | `#f4f6f8` | cool porcelain |
| panel | `#e9eef2` | recessed sections |
| ink | `#14181d` | text, rules |
| muted | `#56626e` | secondary text |
| line | `#cfd7de` | hairlines |
| accent | `#00a3d9` | process cyan, the color printers proof against |
| tint | `#e2f3f9` | highlighted surfaces |
| night | `#0e1216` | final section |

**Type:** Martian Mono (condensed) for headings, because a measuring instrument reads in mono. Hanken Grotesk for body. **Type moment:** a giant 62 set like a gauge reading.
**Visual system:** measurement. A ruler down the left edge that tracks scroll depth, technical-drawing callouts on the specimen, and a pipeline diagram for the three gates.
**Layouts:** a full-bleed loupe hero with an inspection slip, a specimen with leader lines, an inspection-report ledger, an edge-to-edge pipeline, a readout plus spec sheet, and a final CTA inside a lens ring.

## 6. Preflight log (version two)

Run on the finished page, in order. Every check number below ran.

**Copy, hard (C-01 to C-13): pass.** Zero em dashes across visible copy, title, meta, alt text and the text drawn into the hero canvas. Every banned phrase on the page ("Unlock your potential", "Get Started", "The all-in-one platform", "Trusted by thousands") lives inside the slop specimen or is quoted as an example.

**Visual (V-01 to V-25): 1 failed, fixed.**
- V-08: the hero slip and the problem specimen had a border plus a wide shadow. Borders removed; the slip keeps a 3px cyan top rule.
- V-03 / V-04: three equal cards with icon tiles appear only inside the parody.
- V-21: pass. The loupe only works for a product about seeing past the generic page.
- V-22: pass. Full-bleed hero, edge-to-edge pipeline, full-bleed final section.
- V-23: pass. The loupe is the only scroll-driven motion; no per-section reveals.
- V-24: pass. The 62 readout.
- V-25: pass. Porcelain, ink and cyan reach grounds, panels, tints and the night section.

**Accessibility (A-01 to A-08): pass.** Lowest text contrast is cyan-ink on tint at 4.98:1. Ink on porcelain 16.5:1, muted on porcelain 5.8:1, ink on the cyan button 6.2:1. The hero canvas is decorative; the headline and CTAs are real HTML. Reduced motion swaps the loupe for a static lens, turns off smooth scroll and unpins the hero.

**Responsive (R-01 to R-04): 1 failed, fixed.**
- R-04: on phones, the final lens block overflowed sideways, and the loupe hint ran off the right edge. Both fixed. Scroll width is 390 at 390.

**Soft copy (C-14 to C-17): flagged C-14.** Another design tool could borrow the headline. Kept, because the loupe under it can't be borrowed.

**Conversion (X-01 to X-08): flagged X-02 and X-05.**
- X-02: the star CTA appears in the nav, the hero slip and the final lens, with no mid-page CTA.
- X-05: there's still no third-party social proof. The receipts stand in for it.
- X-07: about 90KB of our own HTML, CSS and JS plus fonts. No three.js anymore; the loupe is one fragment shader.

**Also flagged: V-10.** No real screenshots or photos. The specimen is drawn, and a real screenshot of a Deft session would still be the strongest proof to add.
