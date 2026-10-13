# Interview Protocol

The quality of the landing page is decided before any code is written. This interview is the product — everything after is execution. Talk like a strategist running a conversation, never a survey.

**Non-negotiables:**
1. One idea in focus per turn. Two related questions may share a turn only if they share a single short frame.
2. Never write page code before the brief is presented and approved.
3. Give the reason in one line, before the question. Never a paragraph after it.
4. Never stall on "I don't know": apply the protocol in Section 5, then move on.
5. Always end with the brief, presented for explicit approval.
6. If a turn runs longer than about 6 lines on a phone, it's too long. Cut the reasoning, not the question.

---

## How to Present (read this before every turn)

The interview should feel like a sharp strategist asking one good question and waiting, not a form that explains itself. Confidence is brevity. A question that needs a paragraph to justify itself isn't a good question yet.

1. **One idea per turn.** Even with two related questions, they share one short frame. Never stack a question, its rationale, four annotated options, and a closing note into one turn.
2. **Reason first, one line.** "Where your traffic comes from decides whether I lead with the problem or the solution." Then the question. Then bare options.
3. **Options are a clean list, not annotated prose.** Bare labels. Examples and trade-offs come only if the user asks or hesitates.
4. **The advanced-options menu** (`aesthetic/ADVANCED-OPTIONS.md` Section 7) never dumps all four dimensions with explanations at once. One-line frame, four short labels, and an easy exit ("or keep it clean and let me pick smart defaults"). Expand a dimension only when the user picks it.
5. **Prefer tappable inputs when the client supports them.** A multiple-choice question should render as choices, not as a paragraph the user has to parse and answer in prose.
6. **Six-line ceiling per turn** on a phone screen. Over that, cut the reasoning, not the question.

---

## 1. What You Must Capture

### Must ask (cannot proceed without these)
1. **Intent** — product page, service page, waitlist, portfolio, other? What is it selling, collecting, or announcing?
2. **Product** — what it does, in one sentence.
3. **Audience** — who is the ONE reader? What do they do today without this? What's broken about that?
4. **Traffic source** — paid / organic / referral / launch platform / social / not sure. This alone decides problem-first vs. solution-first copy.
5. **Differentiation** — why this, not the alternatives? What should the page feel different FROM?

### Should ask (good defaults exist if skipped)
6. **Tone** — show 3-4 reference directions, or ask "if your brand were a person, how would they talk?" Default: conversational, confident, specific.
7. **Social proof** — logos, testimonials, stats, press, ratings. Never fabricate what's missing — ask, don't assume it exists.
8. **Brand assets** — logo, colors, fonts, existing site. If they exist, respect them; don't propose new ones over them.
9. **Conversion goal** — trial, demo, waitlist, purchase, download. This sets the CTA across the whole page.

### Nice to have (infer if not offered)
10. **Stage** — pre-launch / early / growing / established. Changes how much proof to lean on.
11. **Objections** — price, complexity, trust, confusion. Feeds the FAQ.
12. **Urgency** — real deadline, real capacity, or none. Never invent one (see Honest Scarcity, PRINCIPLES.md 3.10).

Most users finish in 5-7 questions. Don't go looking for more just because the list has 12 items.

---

## 2. The Turn-by-Turn Script

**Turn 1 — Intent + Product**
> "Before I build anything, I need to understand what we're making. Two quick things:
> **What are we building?** A product page, a waitlist, a service page, a portfolio — what's the goal?
> **What does the product/service do?** One sentence — the simpler the better."

**Turn 2 — Audience + Problem**
> [Acknowledge the answer, reflect what it means for the page.]
> **Who is this for?** Not demographics — the person landing on this page. What's their role or situation?
> **What are they doing right now without your product?** Tells me what pain to lead with.

**Turn 3 — Traffic + CTA**
> [Acknowledge, state the strategic implication.]
> **Where will most visitors come from?** Changes whether I lead with the problem or the solution.
> Paid ads / Organic search / Social media / Referrals / Launch platform / Not sure yet.
> **What do you want them to do?** Sign up, book a demo, join a waitlist, buy.

**Turn 4 — Differentiation + Proof**
> [Explain what the traffic source means for copy direction.]
> **What makes you different from alternatives?** Not better — different. What can you say that a competitor can't?
> **What proof do you have?** Logos, testimonials, stats, ratings, press — anything real. None yet is fine, say so.

**Turn 5 — Tone + Brand** (skip if already obvious from context)
> **How should this page feel?**
> Confident and direct (Stripe, Linear) / Warm and conversational (Notion, Slack) / Bold and provocative (Basecamp, Hey) / Something else — describe it or name a site.
> **Any existing brand assets?** Logo, colors, fonts — or starting fresh?

**Turn 6 — Brief Presentation**
> "Here's the plan based on everything you told me: [brief, Section 4]. Does this feel right? Anything you'd change before I start building?"

### Question format rules
- Explain why it matters, briefly.
- Offer options — reduces the decision itself (Hick's Law, PRINCIPLES.md 1.1).
- Accept freeform answers when options don't fit.
- Bad: "Describe your target audience's psychographic profile including primary motivations, secondary concerns, and tertiary objections." Good: "Where will most of your traffic come from? This changes whether I lead with the problem or the solution." — one clear question, a reason, and options.

---

## 3. Branching by Intent

```
What are you building?
├── Selling a product/service
│   ├── Physical product      → flows/ECOMMERCE.md
│   ├── SaaS / software        → flows/SAAS.md
│   ├── Service / agency       → flows/SERVICE.md
│   └── Course / info product  → flows/COURSE.md
├── Collecting leads
│   ├── Waitlist / pre-launch  → flows/WAITLIST.md
│   └── Newsletter / community → flows/NEWSLETTER.md
├── Portfolio / personal brand → flows/PORTFOLIO.md
└── Other (event, nonprofit, marketplace, mobile app, restaurant)
    → flows/EVENT.md, flows/NONPROFIT.md, flows/MARKETPLACE.md, flows/MOBILE-APP.md, flows/RESTAURANT.md
```

Once intent is clear, read the matching `flows/` file — it overrides and extends the generic questions above with product-type-specific priorities (e.g. SaaS asks about price point and ladders the CTA to it; e-commerce asks about photography and shipping; courses ask about instructor credibility and curriculum).

---

## 4. The Brief

Present this exact structure for approval. Nothing below it gets built until the user signs off.

```
LANDING PAGE BRIEF
==================
Intent: [product page / lead gen / waitlist / portfolio / other]
Product: [one-sentence description]
Audience: [who the ONE reader is]
Current alternative: [what they use today]
Core problem: [what's broken about the current way]
Core promise: [what changes when they use this]
Differentiation: [why this, not them]

Traffic source: [paid / organic / referral / launch / mixed]
Copy direction: [problem-first / solution-first / hook-first / what's-new]

Conversion goal: [free trial / demo / waitlist / purchase / download]
Price point: [free / low / mid / high / enterprise]
Page length: [short / mid / long — derived from price + complexity]

Tone: [reference sites or descriptors]
Social proof available: [logos / testimonials / stats / ratings / none]
Brand assets: [colors / fonts / logo / photography / none]

Urgency: [launch window / limited / seasonal / none]
Key objections: [price / complexity / trust / understanding / none identified]

Section plan:
1. Hero — [approach based on copy direction]
2. Social proof bar — [if assets available]
3. Problem — [if cold traffic]
4. Solution/product reveal
5. Features as benefits — max 3-4
6. How it works — 3 steps
7. Testimonials — [if available]
8. Pricing — [if applicable]
9. FAQ — [based on identified objections]
10. Final CTA + risk reducer
```

Present it with: "Here's what I'm going to build based on what you told me. Before I start, does this feel right?" The user approves, modifies a line, or sends you back to re-ask a specific question. Don't restart the whole interview for one changed answer.

---

## 5. The "I Don't Know" Protocol

When the user doesn't know an answer:
1. Never stall — give a sensible default and move on.
2. State the default out loud: "Since you're not sure about traffic source, I'll assume a mix of organic and paid and write copy that works for both."
3. Flag it as revisable: "We can adjust this once you know more."
4. Never make the user feel bad for not knowing.

---

## 6. Edge Cases

**"Just build it, skip the questions."**
Ask the one minimum question — what does the product do — then build with explicit assumptions stated up front, per CLAUDE.md's escape hatch. Never guess silently.

**Too little given** ("It's an app"): don't interrogate — offer a path. "Tell me a bit more about what it does and who it's for, and I'll handle the rest." Use forced-choice examples ("more like [A] or [B]?") before giving up and assuming.

**Too much given** (a wall of text): extract the variables, summarize back — "From what you said, here's what I'm working with: [brief]. Anything I'm missing?" — and never re-ask what they already answered.

**Changes mind mid-build:** acknowledge, assess which approved sections the change actually affects, regenerate only those. Full restart only if the product itself changed.

**Has an existing page:** switch to audit mode — assess it against the copy and aesthetic rules, name the 3-5 highest-impact fixes, then run this interview with answers pre-filled from what already exists.

---

## Checklist before moving to Phase 2
- [ ] Asked all 5 non-negotiables (Section 1)
- [ ] Read the matching `flows/` file once intent was known
- [ ] Presented the brief in the exact format above
- [ ] Got explicit approval — not silence, not "looks fine I guess"
