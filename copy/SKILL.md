# Copy Generation

AI-generated landing page copy is the mathematical average of every landing page ever written — technically competent, utterly forgettable. Your job is to break the average: copy a specific person reads and thinks "this is for me," not "this is for everyone."

**Non-negotiables:**
1. Scan every line against `copy/BANNED-PHRASES.md` before presenting it. If an industry was identified in the interview, also scan against `copy/INDUSTRY-SLOP.md`.
2. Generate section by section. Present each for approval before writing the next.
3. Every claim must be real. Never fabricate a testimonial, a stat, a logo, or a number the user didn't give you.
4. "You" is the default subject of the hero and the first three section headings — never "we."
5. If a rule here conflicts with something the user explicitly asked for, comply, note the trade-off once, move on (per CLAUDE.md's escape hatch) — don't silently obey and don't lecture.

---

## 1. The Replacement Ladder

When a sentence feels generic, push it up this ladder until it's specific enough to survive the tests in Section 2:

1. **Add a number:** "Save time" → "Save 6 hours a week"
2. **Name the actor:** "Trusted by companies" → "Trusted by Stripe, Notion, and 400+ teams"
3. **Name the mechanism:** "Powerful analytics" → "See which features users actually use"
4. **Name the feeling:** "Better project management" → "The Monday morning clarity your team is missing"
5. **Use user language:** "Streamline engagement" → "Stop losing deals because you forgot to follow up"

Specificity is the universal solvent (PRINCIPLES.md 6.5) — when two rules conflict, the more specific claim wins.

## 2. The Tests Every Line of Copy Must Pass

- **The Bar Test:** would a real person say this to a friend in a bar? "We empower teams to leverage cutting-edge solutions" — nobody says this. "It just makes invoicing not suck" — someone would.
- **The So What Test:** "We use AI to analyze your data" → so what? → "You get insights 10x faster" → so what? → "You catch problems before your customers do." Lead with the last answer, not the first.
- **The Only You Test:** could a competitor copy-paste this unchanged and have it still work? If yes, it's slop.
- **The 12-Word Test:** Netflix sells its service in 12 words. Can the hero communicate value in 12 words or fewer?
- **The No-Adjective Challenge:** strip every adjective from a headline. If it still works, the adjectives were dead weight. If it collapses, replace them with the fact they were hiding.
- **The Conviction Rule:** never "we help" — say "it's how." Never "an alternative" — say "replaces." Never "we offer solutions" — say "the fastest way to." Direct claim, direct verb.

## 3. Headlines

Front-load meaning into the first 3 words (F-pattern scanning, PRINCIPLES.md 2.1). Specificity beats cleverness, outcome beats capability, user language beats marketing language, concrete numbers beat vague ones:

- Bad: "Transform Your Analytics" → Good: "See exactly which features your users ignore"
- Bad: "Powerful Reporting Tools" → Good: "Reports your CFO will actually read"
- Bad: "Save Time on Reporting" → Good: "Save 6 hours every Friday afternoon"

Avoid poetic-but-empty headlines ("Where Ideas Take Flight") — beautiful and meaningless fails the speed-date test just as hard as generic does. Check every headline against the banned formulas table in `copy/BANNED-PHRASES.md`.

## 4. CTAs

Match CTA intensity to its position on the page (the micro-yes ladder, PRINCIPLES.md 3.5): hero CTA is the highest-commitment ask the product can support, mid-page CTAs are evidence-based invitations ("See the case study"), the final CTA carries urgency or finality plus a risk reducer. One primary and at most one secondary CTA per section — never more (PRINCIPLES.md 1.1, Hick's Law). Check every CTA against the banned list in `copy/BANNED-PHRASES.md` before presenting it.

## 5. Traffic Source Sets the Copy Direction

This is the single highest-leverage answer from the brief — apply it to every section, not just the hero:

| Traffic source | Visitor mindset | Copy direction |
|---|---|---|
| Organic/SEO/blog | Cold — doesn't know they have a problem | Lead with the problem |
| Referral/word of mouth | Warm — already knows the problem | Lead with the solution |
| Paid ads | Aware — clicked an ad about this exact thing | Match the ad's promise exactly |
| Product Hunt/launch | Curious — wants to see what's new | Lead with what's different |
| Social media | Browsing — low intent | Lead with a hook |
| Email list | Known — already opted in | Lead with the specific offer |

Breaking this match (promising one thing in the ad, saying another on the page) drops conversion immediately — copy must carry the same "scent" as whatever brought the visitor here.

## 6. Section Ordering by Page Length

Length follows price and complexity from the brief, not habit:

- **Short-form** (simple/cheap products): hero (headline + subhead + one CTA, all above the fold) → visual proof → 3-step how-it-works → social proof → final CTA with risk reducer.
- **Mid-form** (SaaS/subscription/services): hero → social proof bar → problem agitation → solution reveal → features as benefits (3-4 max) → testimonials → how it works → pricing → FAQ → final CTA + guarantee.
- **Long-form** (expensive/complex/high-commitment): everything in mid-form, plus founder/team story, video testimonials, a detailed case study, a comparison section, a "who this is for / not for" section, and a CTA repeated every 2-3 sections.

Each section earns its place by convincing the visitor to keep going — length is not the goal, conviction is.

## 7. What Every Section Should Do

Every section should do at least one of these five things (Blair Warren's persuasion framework): encourage their dreams (hero paints the outcome), justify their failures (problem section — it's not your fault the tools suck), allay their fears (FAQ, guarantee), confirm their suspicions (social proof — you were right to look for better), or throw rocks at their enemies (comparison section — why the old way fails). A section that does none of these is decoration.

## 8. Hard Bans — Auto-Reject Before Presenting

1. Any verb or adjective from `copy/BANNED-PHRASES.md` used without a specific fact replacing it
2. Any complete phrase from `copy/BANNED-PHRASES.md`
3. Any CTA from the banned list, unmodified
4. Any em dash, anywhere in visible copy: headlines, subheads, body, FAQ, footer, the title tag, the meta description, image alt text. Zero, not a budget. Rewrite around them with a period, colon, or comma. Also catch `--` and `&mdash;`.
5. More than one parallel triple on the page
6. "We" as the subject in the hero or first three section headings
7. A rhetorical question opening the hero
8. Padding paragraphs — every sentence must add new information
9. Hedging qualifiers ("can help," "is designed to," "may enable")
10. Transition words ("Moreover," "Furthermore," "Additionally")
11. The "No X. No Y. Just Z." pattern, in any form
12. A stat without a source or context
13. Any fabricated testimonial, logo, number, or claim — if the user didn't give it to you, it doesn't exist

---

## Checklist before moving to Phase 3
- [ ] Every section scanned against `copy/BANNED-PHRASES.md` (and `copy/INDUSTRY-SLOP.md` if applicable)
- [ ] Hero and CTAs pass the Bar Test, So What Test, and Only You Test
- [ ] Copy direction matches the brief's traffic source (Section 5)
- [ ] Section order matches the brief's page length (Section 6)
- [ ] Each section presented and approved before the next was written
