# Section Anatomy

Every section on a landing page has a job — not an aesthetic, a job. A section that doesn't do its job leaks visitors, no matter how it looks. Read this before building each section; it defines the job, what success and failure look like, and the rules that follow from that job.

---

## Navbar
**Job:** orient the visitor — where they are, what they can do — then get out of the way.
**Success:** company name and navigation understood within 1 second; doesn't distract from the hero; CTA visible but not louder than the hero's.
**Failure:** 7+ items; vague labels ("Solutions," "Resources," "Platform"); sticky nav eating 80px+ of mobile screen; a mega-menu on a single-product page; "Home" as a nav item.
**Rules:** max 5 items, every label a specific noun ("Pricing," "Docs," "Changelog"); one CTA button, right side, distinct but not louder than the hero CTA; max 64px desktop / 56px mobile height; transparent-over-hero transitioning to solid-on-scroll is the polished default; logo is the home link, never add one.

## Hero
**Job:** answer three questions in under 5 seconds — what is this, who is it for, what should I do. This is the most important section; if it fails, nothing below matters.
**Success:** value prop in under 12 words; visitor knows what the product does without scrolling; CTA above the fold; the page feels built for them, not everyone.
**Failure:** banned slop verbs/phrases; clever-but-unclear headlines (PRINCIPLES.md 4C, the Nabokov problem); no CTA above the fold; generic stock or illustration as the visual; a paragraph where a sentence belongs; a vague CTA; centered layout with gradient text.
**Rules:** headline ≤12 words, passes the No-Adjective Challenge and the Only You Test (`copy/COPY.md`); subhead ≤25 words, one sentence; primary CTA names the outcome, not the action; visual is a real screenshot, contextual photo, or demo — never a generic illustration; split layout (text left, visual right) is the safe default, centered only when the product is famous enough that words alone sell; copy direction follows traffic source from the brief (cold → problem, warm → solution, paid → match the ad); everything above must render at 390px width.
**Subcomponents:** optional eyebrow (only for a real announcement — never a section number, a "BETA" label, or a vague category pill), headline, subhead, CTA cluster (primary button + optional secondary link), visual, optional social-proof snippet (only if real).

## Social Proof Bar
**Job:** cut skepticism immediately — show the visitor that credible others already use this.
**Success:** recognizable logos or impressive numbers appear in the first scroll; proof matches the audience; feels real.
**Failure:** "trusted by thousands" with nothing to back it; logos of companies that don't actually use the product; 12+ logos (a NASCAR bumper); stock-photo "testimonial" faces.
**Rules:** 4-6 recognizable logos max; no logos → a specific odd number ("12,847 teams"); no numbers → a sourced rating ("4.8/5 on G2 from 2,340 reviews"); nothing real → skip the section entirely, never fabricate; one line of accompanying text max; placed immediately below or inside the hero.

## Problem Section
**Job:** make the visitor feel understood before you pitch anything — confirm their suspicions and justify their failures (PRINCIPLES.md, Blair Warren framework, `copy/COPY.md` Section 7).
**Success:** the visitor thinks "yes, that's exactly my problem," described in their language, creating tension the next section resolves.
**Failure:** describing a problem they don't have; corporate phrasing ("suboptimal workflow efficiency"); rushing past it; a rhetorical-question opener; listing 6 problems instead of naming 1-2 sharply.
**Rules:** lead with ONE specific problem, "you" language ("You spend 3 hours every Friday building reports nobody reads"); blame the situation or the tools, never the visitor; 2-4 sentences is enough; shorten or skip entirely for warm traffic that already knows the problem; an optional "before" visual (cluttered dashboard, overflowing inbox) helps.

## Solution / Product Reveal
**Job:** show the product resolving the exact problem just named — the emotional beat from pain to relief.
**Success:** the product shown in context of that specific problem; the visitor can picture using it; the transition feels earned, not jarring.
**Failure:** a feature dump disconnected from the stated problem; a generic description any competitor could use; abstraction with no visual; showing every feature instead of the one that matters here.
**Rules:** show the product doing the specific thing that solves the stated problem; real screenshot or demo, never an abstract illustration; one sentence framing it ("Here's how [product] handles that"); video ≤60s, muted autoplay or a clear play button; screenshots get annotated or highlighted at the relevant spot; don't list features yet — that's next.

## Features / Benefits
**Job:** show the 3-4 most important things the product does, framed as what the user gets.
**Success:** each feature is a benefit, not a spec; max 3-4, curated not comprehensive; each has real visual proof.
**Failure:** an 8-12 item feature dump; feature-name-then-vague-benefit copy; generic icon + vague description; every headline reads the same; three-equal-card layout.
**Rules:** max 4 features on the page; lead each with what the user gets ("See which campaigns are actually making money"), never what the feature is; each needs its own visual; layout is zig-zag, stacked, or tabbed — never three equal cards; headline ≤7 words + description ≤2 sentences, passing the Only You Test; if the product has 20 features, show 4 here and link out for the rest.

## How It Works
**Job:** lower anxiety about complexity — make starting look easy.
**Success:** exactly 3 steps, each one clear action with a clear outcome; the visitor thinks "oh, that's easier than expected."
**Failure:** more than 3 steps; vague steps ("Step 1: Get Started"); describing the product's internals instead of the user's experience; steps that all say the same thing differently.
**Rules:** exactly 3 steps — one verb + one outcome each ("Connect your tools — takes 2 minutes"); time estimates build confidence; show real UI at each step, not decorative icons; skip this section entirely for very simple products (email-only CTA needs no explanation).

## Testimonials
**Job:** let real customers sell for you — proof through someone else's words beats any copy you can write.
**Success:** specific results ("saved 6 hours/week," not "great product"); real names, companies, photos; each testimonial supports a claim made above it.
**Failure:** generic praise; stock-photo portraits; testimonials disconnected from the page's argument; too many to actually read; every quote saying the same thing.
**Rules:** 2-4 testimonials max, each with a specific result; real photos or no photos, never stock — name + company + role is fine without one; place each testimonial right after the section whose claim it backs (features → proof it works, pricing → proof of value, hero → proof of the overall outcome); bold the key phrase for skimmers; video testimonials outperform text 3x when available; if none exist, skip the section — never fabricate.

## Pricing
**Job:** remove price uncertainty and let the visitor self-select the right tier without feeling tricked.
**Success:** clear, differentiated tiers; the right tier identifiable within 5 seconds; no hidden fees or asterisks; one tier visually recommended.
**Failure:** "Simple, transparent pricing" as a headline; tiers that are hard to tell apart; 30-row comparison matrices; "contact us" when a price could just be listed; a monthly toggle that shames the monthly choice.
**Rules:** headline states the outcome, not a description of the pricing itself; 2-3 tiers ideal, 4 max; each tier = name + price + one "who this is for" sentence + 3-5 key inclusions; one tier marked "Most popular"; a real free tier stays prominent, not hidden; enterprise/custom pricing gets a stated range, not a blank "talk to us"; a risk reducer sits near the price ("14-day free trial," "cancel anytime").

## FAQ
**Job:** catch the visitor who's 80% convinced but has one lingering objection.
**Success:** real objections, direct concise answers, the visitor's actual hesitation addressed.
**Failure:** filler questions ("What makes us unique?"); questions nobody would actually ask; corporate non-answers; 10+ FAQs (a sign the page itself isn't clear); a wall of text instead of an accordion.
**Rules:** 4-7 FAQs max, sourced from the brief's identified objections (or the flow file's industry-standard defaults if none were identified); answers ≤2-3 sentences, no hedging; format as an accordion, one open at a time.

## Final CTA
**Job:** the last push — the decision moment for the visitor who scrolled all the way down.
**Success:** matches the hero's CTA; includes a risk reducer; reads as a natural conclusion, not a plea.
**Failure:** a different CTA than the hero; "What are you waiting for?"; a wall of re-summarizing text; no risk reducer at the exact moment reassurance matters most.
**Rules:** same primary CTA as the hero; add a risk reducer not already used in the hero ("No credit card required," "14-day money-back guarantee"); optional one-line value reminder; optional low-commitment secondary CTA ("Or talk to a human first"); headline + one sentence + button + risk reducer — nothing more. This section gets second-hero treatment (PRINCIPLES.md 1.4, 3.8, the peak-end rule) — don't phone in the ending.

## Footer
**Job:** utility — legal, contact, secondary navigation. Not a marketing section.
**Success:** contact info findable, legal links present, it serves rather than sells.
**Failure:** trying to sell here (testimonials, CTAs in the footer); missing contact info; 6 columns of 50 links nobody uses; a newsletter field crammed in as an afterthought.
**Rules:** 2-3 columns max: product links, company links, legal links, socials; email at minimum, phone if applicable; copyright with the year; zero marketing copy; a newsletter signup is fine here if it exists — one field, one line. The footer should feel like the end, not like the page keeps going.

---

## Optional Sections (only when the brief or flow calls for them)

- **Who this is for / not for** — courses, coaching, high-ticket, niche products. Two lists: "This is for you if…" / "This isn't for you if…" — qualifies and self-selects.
- **Comparison** — competitive markets where visitors are actively evaluating alternatives. Different, not better. Never name-bash a competitor unless every claim is defensible.
- **Team / Founder** — service businesses, courses, early-stage startups, personal brands. Real photos, bio focused on relevance to the visitor's problem, personality welcome.
- **Case study** — service/agency, B2B SaaS, high-ticket. Challenge → solution → result, real numbers, 3-5 sentences on-page, link out for the full version.
- **Demo / video** — complex products easier to show than describe. ≤60-90s, muted autoplay with controls, shows the product solving the brief's specific problem.
- **Guarantee** — high-ticket, courses, low-trust categories. Specific terms ("30-day money-back, no questions asked"), never vague ("satisfaction guaranteed"), stated boldly, not in fine print.

## Section Ordering Principles

The `flows/` file sets the default order per product type; these universal rules govern any deviation:

1. Hero is always first — no exceptions.
2. Social proof appears within the first two scrolls — credibility before detail.
3. Problem before solution, always, even if the problem gets one sentence.
4. Benefits before features — what they get, before what it does.
5. Proof sits near pricing — right before or after, to cushion price shock.
6. FAQ sits near the end — objection handling for the almost-convinced.
7. CTA repeats at most 2-3 times: hero, mid-page after proof, final. Never more (PRINCIPLES.md 1.1).
8. Read only the section headlines top to bottom — they must tell a coherent story (problem → solution → proof → action). If they don't, the ordering is wrong.
