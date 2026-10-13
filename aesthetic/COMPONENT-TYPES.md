# Component Types

Every major landing page component has multiple intentional variants. AI defaults to one generic version of each — never pick the generic default below without a reason traceable to the brief.

**Generic defaults to avoid by default:** navbar as edge-to-edge bar (logo left, links center, CTA right); footer as four equal link columns + copyright; hero as centered headline on a gradient background with a "Get Started" button; CTA section as "Ready to get started?" + one centered button; features as three equal cards with an icon above each heading.

**Selection logic:** the brief's tone direction narrows each menu to 2-3 fits. Pick one type per component and commit — never mix two navbar types, two hero types, etc. If the user has no preference, use the tie-breakers listed under each menu.

---

## 1. Navbar

| Type | What it is | Best for (tone) |
|---|---|---|
| Floating Pill | Detached, centered, rounded, translucent/blurred | Confident & Direct, Premium |
| Transparent Overlay | No visible background over the hero; solidifies on scroll | Premium & Editorial, Bold, photography-forward |
| Compact Centered | Logo centered, minimal links, under 48px tall | Premium & Editorial, portfolios, agencies |
| Split Navigation | Primary links one side, utility links (login/CTA) the other | Confident & Direct, Technical, larger platforms |
| Content-Rich Mega Menu | Simple bar, dropdowns expand into rich content panels | Any — for products with real content to feature |
| Full-Screen Takeover | Hamburger-first even on desktop; opens a full-viewport overlay | Bold & Provocative, Premium, agencies/studios |
| Contextual Card | Small centered card/popover, not a bar | Warm & Conversational, pre-launch, single-product sites |
| Sticky Bottom Bar | Nav at top, persistent CTA bar at the bottom | Mobile-first, conversion-focused — functional, not aesthetic |

**Tie-breakers if no preference:** 1-3 nav items → Compact Centered or Floating Pill. 4-6 → Split or Floating Pill. 7+ → Mega Menu. Early-stage brand → simpler types. Has featured content for dropdowns → Mega Menu.

## 2. Footer

| Type | What it is | Best for |
|---|---|---|
| Brand Signature | Oversized wordmark/logo dominates, nav links small | Strong brand identities, e-commerce, luxury |
| Negative Space | Cutout/oversized letterforms form the visual architecture | Premium, design-forward, agencies |
| Grounded | Full-bleed photo forms the bottom of the page | Lifestyle, outdoor, restaurants, travel, real estate |
| Hero Footer | Self-contained contrasting block: brand + tagline + newsletter, nav below | SaaS, consumer brands with a newsletter |
| Silhouette | Illustrated silhouette/wave bridges content into the footer | Nature, kids' products, creative brands |
| Minimal Utility | One or two rows, essentials only, under 200px | SaaS tools, developer products |
| CTA-Integrated | Final CTA and footer merge into one block | Conversion-focused pages, waitlists, simple products |

Brand-forward companies → Brand Signature/Negative Space/Silhouette. Content/SaaS → Hero Footer or CTA-Integrated. Lifestyle/visual brands → Grounded. Developer tools → Minimal Utility.

## 3. Hero

| Type | What it is | Needs |
|---|---|---|
| Split Screen | Copy one side, visual the other, 50/50 or 60/40 | Product screenshot or contextual photo — the safe default |
| Full-Bleed Visual | Large photo/illustration fills the hero, text overlaid | High-quality photography or custom illustration — stock will ruin this |
| Minimal Typography | No image at all — the headline IS the visual | Nothing but exceptional copy — use when there's no image and no mockup |
| Product Demo | Embedded demo, autoplay video, or interactive preview front and center | A working demo or screen recording |
| 3D / Custom Art | 3D render or custom illustration, unmistakably not stock | Custom asset — prompt the user to generate one (Section 6) |
| Photo Collage / Grid | Masonry of real photos below/behind the headline | 6-12 real photographs showing variety |
| Close-Up / Cinematic | Dramatic close-up photo paired with bold copy | Cinematic-quality photography, not stock |

**Selection:** has product screenshots → Split Screen or Product Demo. Has strong photography → Full-Bleed, Close-Up, or Photo Collage. Has nothing → Minimal Typography (per CLAUDE.md's escape hatch — never fabricate a mockup) or prompt for asset generation. Every hero type must degrade cleanly on mobile: Split stacks, Full-Bleed crops, Typography scales down.

## 4. CTA Sections (mid-page and final)

| Type | What it is | Best for |
|---|---|---|
| The Giant Button | The button itself is nearly the whole section | Simple single actions, confident/playful brands |
| Dark Contrast Block | Full-width dark section breaking up a light page | Any page that's primarily light |
| Split CTA | Two paths side by side (e.g. self-serve vs. talk to sales) | Free+paid tiers, self-serve+enterprise |
| Inline Form CTA | Email field embedded directly in the section, no modal | Newsletter, waitlist, email-only signup |
| Testimonial-Backed CTA | A quote/result sits beside or above the CTA | High-consideration products, services |
| Community / Social CTA | Invites joining a community rather than buying | Open source, community-driven, pre-product |

## 5. Social Proof / Logo Bar

| Type | What it is | Best for |
|---|---|---|
| Grayscale Strip | One row, grayscale, evenly spaced | The classic — any B2B product with recognizable customers |
| Marquee Scroll | Logos scroll continuously | Many logos, wants an impression of volume |
| Stat-Led Proof | A number leads, logos support | The number is more impressive than any single logo |
| Quote + Logo | One strong quote beside its company's logo | One standout testimonial from a recognizable brand |
| Use-Case Cards | Small cards: "Company X uses [product] for [use case]" | Diverse use cases where the HOW matters |

Marquee replaces a static bar — never run both on the same page.

## 6. Feature Sections

| Type | What it is | Best for |
|---|---|---|
| Alternating Zig-Zag | Text one side, visual the other, swaps each feature | 2-4 features, each with a strong visual |
| Stacked Full-Width | Each feature gets its own full-width section | Complex products, each feature needs room |
| Interactive Tabs | Tab bar; clicking reveals that feature's content | 4-6 features competing for space |
| Single Hero Feature + List | One feature huge, 2-3 supporting ones listed below | One killer feature, several supporting |
| Live Demo Strip | Interactive demos/GIFs per feature, showing not telling | Developer tools, design tools |

Never three equal cards. Max 3-4 features shown (PRINCIPLES.md 1.3, Miller's Law).

## 7. Testimonials

| Type | What it is | Best for |
|---|---|---|
| Single Spotlight | One large-format testimonial, full quote + real photo | One knockout testimonial |
| Carousel | 2-4 testimonials, rotate/swipe | Multiple strong testimonials of similar quality |
| Wall of Love | Many short tweet-style quotes in a masonry grid | Consumer products, strong social proof volume |
| Video Testimonial | Embedded customer video | High-ticket products, services, courses |
| Result Cards | Leads with the specific result, quote below | B2B/SaaS where measurable outcomes matter |

## 8. Pricing

| Type | What it is | Best for |
|---|---|---|
| Side-by-Side Tiers | 2-3 cards, one recommended | Standard SaaS pricing — 3 tiers max |
| Single Plan Spotlight | One plan prominent, others mentioned not competing | Simple products, one main plan |
| Calculator / Interactive | Inputs (team size, usage) produce a personalized price | Usage-based or enterprise pricing |
| Comparison Table | Full feature table across tiers | Complex tier differentiation — 10 rows max |
| "Talk to Us" with Range | A range instead of a fixed price, CTA to talk | Enterprise, custom, high-ticket |

## 9. FAQ

| Type | What it is | Best for |
|---|---|---|
| Accordion (default) | Expandable, one open at a time | Any page — this is the correct default |
| Two-Column | Question left, answer right | Longer answers, supporting visuals per question |
| Categorized | Grouped under category headers/tabs | Many questions across distinct topics |

## 10. How It Works

| Type | What it is | Best for |
|---|---|---|
| Numbered Steps (horizontal) | 3 steps side by side | Simple processes — exactly 3 steps |
| Vertical Timeline | Steps stacked with a connecting line | Order matters, each step needs more room |
| Interactive Flow | Click through steps, each reveals with a transition | Complex onboarding, showing real UI per step |
| Before/After | Just the messy "before" and clean "after" | Visually dramatic transformations |

## 11. Utility Components

**Loading screens** — optional; only add when assets genuinely take time to load. Branded Scene (illustration/animation as the brand) or Logo Morph (under 3s) for strong identities; Progress Indicator (thin bar or percentage) as the default for everything else. A splash screen on a 1-second page is pure decoration.

**404 pages** — always include a link home, 3-5 suggested pages, and the site's normal navbar. Illustrated Personality (brands with character), Bold Typography (agencies/portfolios), Interactive/3D (creative studios), Terminal/Code (dev tools), Brand Product Showcase (e-commerce/portfolios), or Minimal Redirect (utility B2B). Never "Oops! Something went wrong" — write in the brand's actual voice.

**Cookie consent** — Playful Card (consumer/playful brands), Bold Warning (privacy-conscious, EU), Minimal Corner (most B2B/SaaS), Full-Width Bar (universal default). Must link to the full policy, must not block the hero or primary CTA on mobile, and dismissing on scroll alone is not EU-compliant — require an explicit action. Only ship one if the site actually sets non-essential cookies (see `builder/TECHNICAL.md`).

**Announcement bars** — Subtle Strip (launches, funding news), Bold Contrasting Bar (major announcements), Dismissible Notification (temporary promos). Must carry a real, specific announcement — never generic "Welcome" filler. Dismissible, max 40px desktop height, never push the hero below the fold, one at a time.

**Interactive maps** — only when location data adds conversion value. Pin Map with Cards (multi-location/marketplace), Data Visualization Map (global reach/analytics), Embedded Google Map styled to match the palette (local business/restaurant) — never the default Google blue.

**Team sections** — Asymmetric Grid (one person featured larger), Horizontal Scroll (studios, large teams), ID Badge/Physical Object (corporate wanting to feel human), Simple Portrait Grid with varied real photo crops (the default for most). Always real photos, never stock portraits or AI faces. 3-8 people max — more belongs on a dedicated team page. Real role titles, not inflated ones.

**Social proof bento (hybrid)** — Stats + Testimonials + Logos Grid (SaaS/B2B with multiple proof types) or Sidebar Logos + Featured Testimonial (security/enterprise, credibility-led). Every stat real and specific, every testimonial with a real name/company/photo, card sizes varied — never all-equal in a bento layout.

**Marquees** — Logo Marquee, Testimonial Marquee, or Text Marquee (used sparingly). Slow enough to read before a card passes, pausable on hover, never combined with other simultaneous auto-play animation. A marquee replaces a static bar, it doesn't add to one.

---

## Banned Colors Addendum

Beyond the aesthetic system's color rules: `#d97757` (Claude's warm peach-orange) is banned — reads as Anthropic branding. Purple/violet (hue 270-330) stays banned unless the brief's brand assets specify it. Watch for "AI green" — the muted sage-green that's emerged as the post-purple default reflex; treat it the same as cream/beige in `aesthetic/SKILL.md` — fine only when deliberately chosen, not reached for by habit.
