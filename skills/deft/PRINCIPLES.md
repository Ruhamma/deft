# The Deft Principles Codex

The ban lists say WHAT not to do. This document says WHY. An agent that understands why can make correct decisions in situations no rule anticipated.

Every principle below includes: the science, the landing page application, and the Deft rule it produces.

---

## PART 1: LAWS OF PERCEPTION & COGNITION

### 1.1 Hick's Law
**The science:** Decision time increases logarithmically with the number of choices. Every option added makes ALL options slower to choose between.

**Landing page application:** This is the unifying theory behind half of Deft's rules. One CTA beats two. Three pricing tiers beat five. Four nav items beat seven. A page with one goal converts; a page with three goals converts at none of them.

**Deft rules produced:**
- One primary conversion goal per page, enforced at interview
- Max 5 nav items, max 3-4 pricing tiers, max 4 features shown
- Every element added must answer: "What decision does this force on the visitor, and is that decision worth their cognitive energy?"
- Preflight check: count the distinct decisions a visitor faces per viewport. More than 2 = simplify.

### 1.2 Fitts's Law
**The science:** Time to acquire a target is a function of distance to it and its size. Bigger targets, closer to current attention, get hit faster and more often.

**Landing page application:** The hero CTA sits directly below the subhead — where the eye already is after reading. Never off to the side, never requiring travel. Mobile CTAs are full-width in the thumb zone. Related actions cluster together.

**Deft rules produced:**
- Hero CTA: directly in the reading flow, minimum 48px height
- Mobile primary CTA: full-width or near-full-width, bottom-of-flow placement
- Never separate a CTA from the copy that motivates it
- Clickable areas extend beyond visible button edges where possible (padding is part of the target)

### 1.3 Miller's Law (7±2, practically 3-4)
**The science:** Working memory holds roughly 4 chunks of information at once (modern research revised Miller's 7 down). Beyond that, earlier items get evicted.

**Landing page application:** A visitor scanning your features section can hold 3-4 of them in mind. Show 8 and they remember none. This applies to nav items, pricing tier differences, steps in a process, benefits in a list.

**Deft rules produced:**
- Features: 3-4 max. How-it-works: exactly 3 steps.
- Lists inside copy: 3 items preferred, 4 max
- If a section needs more items, chunk them into labeled groups of 3

### 1.4 The Serial Position Effect
**The science:** In any sequence, people best remember the first items (primacy) and last items (recency). The middle blurs.

**Landing page application:** The hero and the final CTA section carry disproportionate memory weight. The middle of the page is where density is affordable. Within any list — testimonials, features, FAQ — position your strongest item first and second-strongest last.

**Deft rules produced:**
- The final CTA section is treated as a "second hero" — same care, same polish
- Strongest testimonial goes first; second strongest goes last; weakest hides in the middle
- Best feature leads the features section
- Preflight: "Is the last thing on this page (above footer) worth remembering?"

### 1.5 The Von Restorff Effect (Isolation Effect)
**The science:** The item that differs from its surroundings is the one remembered. Distinctiveness drives memory.

**Landing page application:** This is WHY the single-accent-color rule works — one orange button on a neutral page is unmissable. It also explains why highlighting three things highlights nothing. Isolation is a budget: spend it once per viewport.

**Deft rules produced:**
- Exactly ONE visually isolated element per viewport (usually the CTA)
- The recommended pricing tier is the only tier with accent treatment
- Preflight check: scan each viewport-height slice of the page — if two elements compete for isolation, demote one

### 1.6 The Doherty Threshold (400ms)
**The science:** When system response is under 400ms, interaction feels instantaneous and users stay in flow. Above it, attention breaks and users perceive waiting.

**Landing page application:** Every hover state, accordion expansion, tab switch, and menu open must complete its feedback within 400ms. Our animation specs (200-300ms interactions) comply — but this is the hard ceiling.

**Deft rules produced:**
- No interaction feedback slower than 400ms, ever
- Perceived load: headline text renders within 1 second even if images are still loading
- Animations communicate state within the first 100ms even if the full transition takes 300ms

### 1.7 Jakob's Law
**The science:** Users spend most of their time on OTHER sites. They arrive with expectations formed elsewhere, and violating those expectations creates friction.

**Landing page application:** This is the counterweight to anti-slop. Logo top-left links home. Nav is at the top. CTAs look like buttons. Pricing has tiers. The skill breaks VISUAL conventions (fonts, colors, layouts) while honoring INTERACTION conventions (where things are, how they behave). Distinctive look, familiar behavior.

**Deft rules produced:**
- Never innovate on interaction patterns for a conversion page — innovate on aesthetics
- Experimental scroll/cursor options carry warnings precisely because they violate Jakob's Law
- The test: "Would a first-time visitor know how to use this without thinking?" If no, revert the interaction, keep the look.

### 1.8 Cognitive Load Theory
**The science:** Mental effort is finite and splits three ways: intrinsic (understanding the content), extraneous (fighting the interface), and germane (connecting it to their own situation). Every unit spent on extraneous load is stolen from germane load — the load that produces conversion.

**Landing page application:** Confusing layout, clever-but-unclear headlines, decorative animation, and unfamiliar navigation all tax extraneous load. The visitor has a fixed budget; spend it on them imagining your product in their life, not decoding your page.

**Deft rules produced:**
- Copy at a 7th-8th grade reading level regardless of audience sophistication (smart people also prefer easy reading — see fluency, below)
- One idea per section. One sentence per idea where possible.
- Decoration that demands attention without conveying information gets cut in preflight

### 1.9 Processing Fluency & the Aesthetic-Usability Effect
**The science:** Things that are easy to process feel more TRUE and more TRUSTWORTHY (fluency). And things that look better are perceived as working better, with users forgiving minor flaws (aesthetic-usability).

**Landing page application:** Clean typography, high contrast, generous spacing, and simple sentences don't just look nice — they make your claims feel more credible. This is a measurable persuasion effect. A cramped, low-contrast page makes the identical claims feel less true.

**Deft rules produced:**
- Readability is a persuasion tool, not a compliance box: 16px+ body, 1.5+ line height, 65ch max line length
- Visual polish in the first viewport buys forgiveness for everything below
- Complex claims get simple visual treatment; never stack complexity on complexity

---

## PART 2: LAWS OF ATTENTION & READING

### 2.1 F-Pattern and Layer-Cake Scanning
**The science:** Eye-tracking shows users scan in an F-pattern on text-heavy pages (two horizontal sweeps, then a vertical skim down the left edge) and a "layer cake" pattern on well-structured pages (reading headings, skipping body).

**Landing page application:** Headlines and the first words of each line carry most of the communication burden. The left edge of the page is prime real estate. Body copy is read by almost no one — it exists for the few who need convincing, not the many who skim.

**Deft rules produced:**
- Front-load every headline: the first 3 words must carry the meaning ("Save 6 hours weekly on reports" not "A new way to think about saving time")
- Section headlines alone must tell the complete story (the crosshead narrative rule)
- Nothing critical lives ONLY in body copy — if it matters, it's in a headline, subhead, or visual

### 2.2 Banner Blindness
**The science:** Users have learned to ignore anything that pattern-matches to advertising — bright boxes in sidebars, anything animated in the periphery, stock photos of pointing people.

**Landing page application:** Elements styled like ads get skipped even when they're your own content. This is another reason stock photography fails: it pattern-matches to advertising, triggering the ignore reflex.

**Deft rules produced:**
- Nothing on the page should look like a third-party ad
- Real photography and real screenshots evade banner blindness; polished generic imagery triggers it
- Important content never lives in sidebar-like or banner-like containers

### 2.3 Selective Attention & the Attention Economy of the Fold
**The science:** Users decide within 10 seconds (often 3) whether a page deserves attention. That decision is made almost entirely above the fold — but scrolling is natural and free ONCE the decision to stay is made.

**Landing page application:** The fold isn't where content must fit — it's where the DECISION to keep reading gets made. Above the fold: enough to earn the scroll. Below: everything else. Cramming above the fold hurts; earning the scroll is the actual job.

**Deft rules produced:**
- Above the fold: headline + subhead + CTA + one credibility signal. That's it.
- The hero's job is measured in scroll rate, not information density
- "Scroll cues" remain banned — a hero that earns the scroll doesn't need to beg for it

### 2.4 Visual Hierarchy as Information Architecture
**The science:** The eye follows size, weight, contrast, color, and position — in roughly that order. Users construct their understanding of "what matters here" from visual hierarchy before reading a word.

**Landing page application:** If everything is bold, nothing is. If every section headline is the same size as the hero, the page has no shape. Hierarchy IS the pre-read — the page communicates its structure in the first 200ms glance.

**Deft rules produced:**
- Minimum 1.25 ratio between type scale steps
- The squint test as a preflight gate: blur your eyes — can you still identify the most important element, the clickable elements, and the reading order? If hierarchy dies in the blur, it never existed.

---

## PART 3: LAWS OF PERSUASION & DECISION

### 3.1 Loss Aversion
**The science:** Losses feel roughly 2x heavier than equivalent gains (Kahneman & Tversky). "Don't lose $50" motivates more than "gain $50."

**Landing page application:** "Stop losing deals to slow follow-up" outperforms "Win more deals with faster follow-up" — identical information, different frame. But framing direction should match traffic temperature.

**Deft rules produced:**
- Cold traffic → loss framing (they need to FEEL the problem first)
- Warm traffic → gain framing (they feel it; show the upside)
- Never stack loss frames — one problem agitation section, then pivot to gains. All-loss pages feel like fear-mongering.

### 3.2 The Endowment Effect & Ownership Language
**The science:** People value things more once they feel ownership — even imagined ownership. Test-driving, customizing, or simply picturing "my dashboard" increases willingness to pay.

**Landing page application:** Copy that puts the visitor inside the product ("your dashboard," "your first report," "see your data") triggers imagined ownership. Interactive demos and free tiers are endowment machines.

**Deft rules produced:**
- Second person possessive throughout: "your pipeline," "your team's Monday"
- CTAs frame outcomes as already theirs: "Build your first dashboard" not "Try the dashboard builder"
- When a demo or free tier exists, it leads — the fastest path to endowment

### 3.3 Social Proof (Cialdini) — with the Similarity Multiplier
**The science:** People follow the behavior of others, especially under uncertainty — and the effect multiplies when the others are SIMILAR to them. A testimonial from someone in the visitor's role/industry/situation is worth five generic ones.

**Landing page application:** "Trusted by 10,000 companies" is weak social proof. "How Stripe's design team uses this" is strong proof — for design teams. The interview identifies the ONE reader; the proof should come from people who look like that reader.

**Deft rules produced:**
- Match testimonial personas to the target audience from the brief
- Proof specificity ladder: similar person + specific result > famous logo > big number > vague claim
- If proof doesn't match the audience, a smaller-but-similar source beats a bigger-but-different one

### 3.4 Authority & Credibility Markers
**The science:** Perceived expertise and trustworthiness transfer to claims. But authority signals must be VERIFIABLE — hollow authority ("world-class," "industry-leading") reads as compensation.

**Landing page application:** Real markers: named customers, precise numbers with sources, press with links, certifications with logos, founder credentials that relate to the problem. Self-declared authority is the slop version.

**Deft rules produced:**
- Every authority claim must be checkable in one click or one search
- "Built by former [relevant company] engineers" only when true and relevant
- Certifications and security badges appear near the moment of highest anxiety (forms, pricing, payment)

### 3.5 Commitment & Consistency — the Micro-Yes Ladder
**The science:** Small commitments create pressure toward larger consistent ones. Someone who clicked "See how it works" is measurably more likely to sign up than someone asked to sign up cold.

**Landing page application:** The page is a ladder of ascending commitments: read the headline → scroll → watch the demo → check pricing → start trial. Each rung is a micro-yes. Skipping rungs (demanding signup in the hero for a complex product) breaks the ladder.

**Deft rules produced:**
- CTA intensity matches page position: hero CTA can be high-commitment for simple products but should offer a low-commitment secondary for complex ones ("Watch the 2-min demo")
- Mid-page CTAs are evidence-based invitations, not demands
- The price-complexity of the product (from the interview) sets the ladder length

### 3.6 The Paradox of Choice at Pricing
**The science:** More options reduce purchases and reduce satisfaction with whatever IS purchased (Schwartz; the jam study). Defaults and recommendations resolve choice paralysis.

**Landing page application:** Pricing is where choice overload kills conversions. Three tiers with one visually recommended converts better than five equal tiers. "Most popular" labels aren't decoration — they're decision relief.

**Deft rules produced:**
- 2-3 tiers, one recommended, differences explainable in one sentence each
- Each tier answers "who is this for" not just "what does it include"
- Annual/monthly toggles never shame the monthly choice

### 3.7 Anchoring
**The science:** The first number seen becomes the reference point for all subsequent numbers. Judgments adjust FROM the anchor, insufficiently.

**Landing page application:** Show the value before the price (hours saved, revenue gained), and the price feels small against it. In tier layouts, an expensive tier anchors the middle tier as reasonable. Comparisons ("less than your daily coffee" is cliché — but "replaces $400/mo of tools" works) anchor against alternatives.

**Deft rules produced:**
- Quantified value appears on the page before pricing does (section ordering enforces this)
- When a high tier exists, it renders in the layout even if most users won't buy it — it's doing anchoring work
- Never lead with price in the hero unless price IS the differentiator

### 3.8 The Peak-End Rule
**The science:** Experiences are judged by their peak moment and their ending — not the average (Kahneman). Duration barely matters.

**Landing page application:** The peak is where the product "clicks" — usually the demo or the aha screenshot. The end is the final CTA section. Most pages polish the hero and phone in the ending; visitors remember the phoned-in ending.

**Deft rules produced:**
- Identify the intended peak moment during the brief ("what's the aha?") and give that section the most visual investment
- The final CTA section gets second-hero treatment: full design attention, fresh copy (not a hero copy repeat), strongest risk-reducer
- Never end a page with a weak whimper section before the footer

### 3.9 The Zeigarnik Effect & Curiosity Gaps
**The science:** Incomplete tasks and open loops occupy memory and generate tension until closed.

**Landing page application:** Used honestly, open loops keep people scrolling: a headline that raises a specific question the next section answers. Used dishonestly, it's clickbait and burns trust. The line: the payoff must be real and proximate.

**Deft rules produced:**
- Section transitions can open loops the next section closes ("Here's how" → the how-it-works section)
- Never open a loop the page doesn't close
- Curiosity in headlines must be specific ("The pricing mistake that costs SaaS teams 20% of revenue") not vague ("You won't believe what happens next")

### 3.10 Honest Scarcity or None
**The science:** Scarcity increases desire — but DETECTED fake scarcity destroys trust retroactively, poisoning even the true claims on the page. Users have learned to test countdown timers with a refresh.

**Deft rules produced:**
- Urgency elements require a real deadline, real capacity, or real inventory — verifiable, or they don't ship
- Events and cohort courses have natural honest scarcity; evergreen SaaS almost never does
- Preflight: every urgency claim gets challenged — "is this true, and would it survive a refresh?"

---

## PART 4: LAWS OF TRUST

### 4.1 Trust Is Asymmetric
**The science:** Trust builds in drops and empties in buckets. One incongruent detail — a broken image, a fake-looking testimonial, an inflated claim — costs more than ten good details earn.

**Landing page application:** This is why preflight exists. A single "Lorem ipsum" left in production, one stock photo labeled as a team member, one stat that smells invented — each can zero out the page. Trust auditing is subtraction, not addition.

**Deft rules produced:**
- Preflight hunts incongruities: placeholder text, broken links, mismatched claims, suspiciously round numbers
- When proof is thin, claim less — an honest modest page outconverts an impressive suspicious one
- Never fabricate. Not testimonials, not logos, not numbers, not "as seen in."

### 4.2 The Congruence Principle
**The science:** Trust forms when every signal agrees — copy tone, visual quality, price positioning, domain, email style. Incongruence (luxury pricing + template design; playful copy + corporate stock photos) triggers suspicion even when nothing is false.

**Landing page application:** A premium product with generic design reads as a scam. A budget product with luxury design reads as hidden costs. The interview's tone direction exists to enforce congruence across every layer.

**Deft rules produced:**
- Tone direction from the brief governs copy AND visuals AND component types — one source of truth
- Price point and design polish must match: enterprise pricing demands enterprise-grade proof density
- Preflight congruence check: "Does every section feel like it came from the same company?"

### 4.3 Transparency as Strategy
**The science:** Disclosing a weakness increases believability of strengths (two-sided messaging). "Who this ISN'T for" sections convert better than pure inclusivity because they signal honesty.

**Deft rules produced:**
- "Who this is for / not for" sections encouraged for courses, services, high-ticket
- Pricing pages disclose limits plainly, not in footnote asterisks
- Objections get addressed in the FAQ, not hidden — naming the objection defuses it

---

## PART 5: LAWS OF FORM & MOTION (Gestalt + Motion Science)

### 5.1 Gestalt: Proximity, Similarity, Common Region, Continuity
**The science:** The mind groups by closeness (proximity), sameness (similarity), shared containers (common region), and aligned paths (continuity) — automatically, pre-attentively.

**Landing page application:** Proximity is free structure: related items close, unrelated items far — this replaces most card containers and dividers. Similarity is why consistent button styling means "these do the same kind of thing." Common region is the ONLY legitimate reason for a card. Continuity is why aligned layouts feel calm and misaligned ones feel broken.

**Deft rules produced:**
- Spacing hierarchy: within-group gaps < between-group gaps < between-section gaps (the anti-monotonous-spacing rule)
- A card is justified only when common-region grouping is genuinely needed — otherwise proximity does the job invisibly
- Everything aligns to something; no orphan elements floating off-grid

### 5.2 Motion as Meaning
**The science:** The visual system is hardwired to attend to movement (survival reflex). Motion is therefore the loudest voice on the page — which is why decorative motion is so costly: it shouts about nothing.

**Landing page application:** Every animation spends attention. Scroll reveals spend it on "new content arriving" (cheap, useful). Perpetual background animation spends it on nothing, continuously, stealing from the copy. This is the deep reason behind the animation system.

**Deft rules produced:**
- Motion budget: attention spent on movement must purchase comprehension (state change, direction, personality)
- Nothing moves perpetually within reading distance of body copy
- The eye should be pulled TO the CTA by the page's motion design, never away from it

### 5.3 Typography Science
**The science:** We read word-shapes, not letters (why ALL-CAPS is slow). Optimal line length is 45-75 characters — longer lines lose the return sweep, shorter lines fragment saccades. Line height below 1.3 collapses lines into texture. Reading speed and comprehension measurably drop outside these bounds.

**Deft rules produced:**
- 65ch max line length: return-sweep accuracy
- 1.5-1.7 line height: saccade separation
- Sentence case for headlines: word-shape recognition
- All-caps only for labels under 3 words
- Font size floor of 16px: sub-threshold sizes force conscious decoding, burning cognitive budget

### 5.4 Color Psychology (the honest version)
**The science:** Universal color-emotion mappings are weak and culture-dependent — "blue means trust" is mostly folklore. What IS robust: contrast drives attention, saturation drives arousal, and CONSISTENCY drives brand recognition. The isolation effect (one accent) does more work than any particular hue.

**Deft rules produced:**
- Deft never claims "orange converts better" — hue choice serves brand congruence, not magic
- What's enforced is structural: one accent, sufficient contrast, consistent temperature
- Saturation maps to brand energy (from the tone direction), not to arbitrary "psychology"

---

## PART 6: THE META-PRINCIPLES (How Deft Thinks)

### 6.1 Clarity Beats Persuasion
Most landing pages fail at "what is this?" long before they fail at "why should I care?" Confusion, not skepticism, is the primary conversion killer. Deft always solves comprehension before persuasion — a clear page with weak persuasion outconverts a persuasive page with weak clarity.

### 6.2 Every Element Earns Its Place
The default answer to "should we add X?" is no. Elements are guilty until proven innocent — proven by a specific job (from Section Anatomy) that no existing element already does.

### 6.3 The Visitor's Time Is the Real Currency
Every second of reading, every scroll, every decision is a withdrawal from a small, non-refillable account. Pages that respect the account (brevity, hierarchy, one goal) get to complete the transaction. Pages that overdraw get abandoned mid-scroll.

### 6.4 Distinctive Look, Familiar Behavior
The resolution of the anti-slop paradox: break visual conventions (fonts, colors, layouts, component types), honor interaction conventions (where things are, how they respond). Slop is visual sameness; friction is behavioral strangeness. Deft eliminates the first without creating the second.

### 6.5 Specificity Is the Universal Solvent
Nearly every slop pattern — in copy, in proof, in imagery, in claims — dissolves under one question: "Can this be more specific?" Specific claims are falsifiable (credible), memorable (distinctive), and unique (uncopyable). When any rule in this system conflicts with another, specificity wins.

### 6.6 The Chain of Custody
Every decision traces backward: pixel → component type → section job → brief → interview answer → the user's own words. If a decision can't be traced to the brief, it's a default wearing a costume — and defaults are where slop comes from. This chain is what makes Deft a system rather than a style.

---

## PART 7: HOW THE CODEX INTEGRATES

- Each phase file references the principles it operationalizes (interview → Hick's, one-reader, ladder length; copy → fluency, loss/gain framing, specificity; builder → serial position, Fitts, Gestalt, peak-end; preflight → Von Restorff audit, squint test, trust-incongruity hunt, honest-scarcity challenge)
- When the user requests something that violates a principle, the agent doesn't refuse — it explains the trade-off using the principle, then respects the choice
- New rules added to Deft must cite which principle they serve; a rule that serves no principle is decoration

---

*~35 principles. Every rule in the system has a why.*
