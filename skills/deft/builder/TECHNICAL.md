# The Technical Layer

A landing page that converts but can't be shared, found, or loaded fast is incomplete. This is the invisible layer every landing page needs — treat it as part of the build, not a follow-up task.

**Non-negotiables:**
1. Every page ships with real Open Graph data and a designed social card — not a broken gray box when the link gets pasted somewhere.
2. Semantic HTML throughout — no div soup. One `<h1>`, real `<nav>`/`<main>`/`<section>`/`<footer>`, real `<button>`/`<a>`, real `<label>` elements.
3. Performance budget is a hard ceiling, not a nice-to-have: under 2MB total page weight, LCP under 2.5s.
4. Forms actually work end to end — spam protection, inline validation, a real success state, disabled+progress state on submit.

---

## 1. The Share Test (Open Graph)

When the page URL gets pasted into Slack, iMessage, X, or LinkedIn, something intentional must show up — a shared link is cold traffic, and a broken preview kills it silently.

- `og:title` — the hero headline, not the site name
- `og:description` — the subhead
- `og:image` — a custom 1200x630 social card: brand background + headline + logo, not a screenshot of the hero. Generate this as part of the build, or prompt the user for one.
- `twitter:card` set to `summary_large_image`
- Preflight check: paste the URL into a link previewer — does it look intentional?

## 2. Metadata Basics

- `<title>`: 50-60 chars, value prop front-loaded, brand name last ("See which features users ignore — Product")
- `meta description`: 140-155 chars, written as ad copy (it is ad copy — it's what Google shows), passes the same slop bans as page copy (`copy/BANNED-PHRASES.md`)
- Real favicon, multiple sizes — not the framework default. A default Vite/Next favicon in a tab is the technical equivalent of Inter font.
- Canonical URL set, `lang` attribute on `<html>`

## 3. Semantic HTML

Costs nothing, buys accessibility, SEO, and AI-search citability:
- One `<h1>` (the hero headline), sequential heading levels after — no skips
- `<nav>`, `<main>`, `<section>`, `<footer>` — never divs with class names standing in
- `<button>` for actions, `<a>` for navigation — never a div with a click handler
- Real `<label>` elements on forms, never placeholder-as-label
- Preflight: run the page through an outline view — does the structure read as a coherent story with the CSS stripped away?

## 4. Structured Data (schema.org)

Cheap to add, meaningful returns — Google and AI search engines cite structured pages:
- `Organization` schema on every page
- `Product` + `Offer` for pages with pricing
- `FAQPage` schema on the FAQ section — can win a rich result
- Flow-specific: `Event` for event pages, `Course` for course pages, `LocalBusiness` for restaurant pages — check the matching `flows/` file for which type applies

## 5. The Performance Budget

Numbers worth citing: under 3 seconds or 83% of visitors bail; 94% of first impressions are design, and design at 0% loaded is nothing.

**Hard budget:**
- Total page weight: under 2MB (under 1MB is the real target)
- Hero image: optimized, WebP/AVIF, `fetchpriority="high"`, explicit width/height (no layout shift)
- Everything below the fold: `loading="lazy"`
- Fonts: max 2 families, subset, `font-display: swap`, preloaded — text never blocks on fonts
- No render-blocking scripts; analytics deferred
- Zero layout shift — every image and embed has reserved dimensions
- Preflight target: Lighthouse performance 90+, LCP under 2.5s

## 6. Forms That Actually Work

Whatever the interview identified as the primary CTA, the form behind it needs:
- Spam protection that isn't a CAPTCHA — a honeypot field plus a time-gate (CAPTCHAs cost real conversions)
- Inline validation on blur, not on submit, with specific error messages ("We need your email to send the report," not "This field is required")
- A success state designed with the same care as the rest of the page ("Check your inbox — sent to {email}" beats "Form submitted successfully")
- The submit button disables and shows progress during send — feedback within 400ms (the Doherty Threshold, PRINCIPLES.md 1.6)
- `autocomplete` attributes so browsers can fill the form
- Preflight: submit the form once for real — does the whole loop actually work?

## 7. Analytics as a Day-One Decision

A page without measurement is a guess. Don't install analytics unprompted, but do ask in the interview's deeper layer: "How will you measure this page?" — and recommend a lightweight option (Plausible/Fathom-style) over defaulting to GA4. Define the one conversion event that matters (the primary CTA) and make sure it's trackable. Note UTM discipline if the traffic source is paid.

## 8. The Legal Minimum

- Privacy policy link in the footer — required almost everywhere any data is collected, and every form collects data
- Cookie consent per `aesthetic/COMPONENT-TYPES.md` Section 11 — but only if the site actually sets non-essential cookies. A static page with privacy-respecting analytics may need no banner at all, which is itself a design win worth telling the user about.
