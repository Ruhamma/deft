# Asset Guidance

The single biggest AI landing-page tell is the absence of real images — cards with icons standing in for photography that was never sourced. This file is how you push the user up the visual-quality hierarchy instead of quietly filling gaps with icons and styled divs.

**Non-negotiable:** never substitute a lower-quality asset type for a higher one out of convenience. If a screenshot doesn't exist, say so and offer the alternative — don't fabricate a mockup or drop in an unrelated stock photo.

---

## 1. The Hierarchy of Visual Quality

Best to worst for landing pages — always try to push the user up this list, never settle for the bottom of it:

1. Real product screenshots — actual UI, actual data, browser frame
2. Real photography — team, product in use, lifestyle, environment
3. Custom illustrations — commissioned or AI-generated with real brand direction
4. 3D renders — custom scenes, product mockups, abstract brand elements
5. Video — product demo, background atmosphere, customer testimonial
6. Branded iconography — a custom icon set matching the brand
7. Stock photography — carefully curated, not obviously stock
8. Generic icons (Phosphor, Radix) — functional only, never decorative centerpieces
9. **Banned:** AI-generated generic illustrations (the smooth, plastic, too-symmetrical kind)
10. **Banned:** emoji as icons
11. **Banned:** styled divs pretending to be product UI
12. **Banned:** no visuals at all — just cards with text

## 2. When to Prompt for Custom Generation

**Painterly/atmospheric hero backgrounds:**
> "Generate a custom background for this hero. Prompt an image tool: 'A [wide panoramic / atmospheric / painterly] illustration in [brand colors described] showing [scene relevant to the product]. Style: [watercolor / oil painting / flat illustration / low-poly / isometric]. Mood: [warm / energetic / calm / dramatic]. No text in the image. Aspect ratio 16:9, minimum 1920px wide.'"

**3D product scenes:**
> "A 3D render would make this stand out. Prompt: 'A 3D rendered [product type / abstract shape / character] in [brand colors], [material: matte/glossy/clay/metallic], [lighting: studio/natural/dramatic], clean [white/colored] background, product photography style. High quality, no text.'"

**Abstract brand elements (section dividers, decoration):**
> "Prompt: 'An abstract [geometric/organic/flowing] shape in [brand accent color], [style: gradient mesh/paper cutout/watercolor/vector], transparent background, suitable as a section decoration for a website.'"

## 3. Asset Sources

- **Free photography:** Unsplash, Pexels, Pixabay, Lummi (AI-curated), Burst by Shopify (e-commerce)
- **AI image generation:** Midjourney (artistic/painterly), DALL-E/ChatGPT (specific scenes), Ideogram (text-in-images), Recraft (vectors/icons/UI)
- **3D assets:** Spline (free 3D for web), Sketchfab (model library), Three.js examples (interactive 3D)
- **Icons (functional UI only, never decorative):** Phosphor, Radix, Tabler, Heroicons
- **Illustrations (when genuinely called for):** Open Peeps, Humaaans, Storyset
- **Mockups/device frames:** shots.so, Mockuuups Studio, Screely
- **Video:** Pexels Video, Coverr (backgrounds), Loom (product demos)
- **Textures/patterns:** Transparent Textures, Hero Patterns (SVG), Haikei (generative SVG)
- **Inspiration/reference:** Dribbble, Behance, Awwwards, Landbook, cta.gallery, Godly, SaaS Pages, lapa.ninja

## 4. When Icons Are (and Aren't) Acceptable

**Acceptable:** navigation menu items, feature-list bullet points (small, inline with text), social media links, footer utility icons.

**Not acceptable:** as the primary visual in a feature section (use a screenshot instead), as hero imagery (use a photo, illustration, or product demo instead), as the only visual element on the entire page, as a large decorative element in a container above a heading (the icon-tile pattern — hard banned, see `aesthetic/SKILL.md` Section 6).

## 5. The "No Assets" Protocol

When the user has nothing to work with:

> "Before I build this page, I'd recommend getting a few visual assets. Real visuals can meaningfully lift conversion — video alone lifts it roughly 80% per Unbounce's data.
>
> What would help most:
> 1. **3-5 product screenshots** — your actual app, even early-stage, beats any mockup.
> 2. **One team or founder photo** — smartphone quality is fine; real beats stock every time.
> 3. **Your logo in SVG** — so it scales cleanly at every size.
>
> If you can't get these now, I'll build with typography-heavy sections and flag exactly where to drop assets in later. The page will convert better once they're in — I want to be upfront about that trade-off."

## 6. Key Numbers Worth Citing to the User

Use these when explaining why an asset or design decision matters — they're data, not opinion, so cite them plainly rather than dressing them up:

| Stat | What it justifies |
|---|---|
| 38% of visitors leave a site due to poor design (Figma 2026) | Investing time in the interview and aesthetic layer |
| Human-written content outperforms AI content 94.12% of the time (Neil Patel 2025) | The copy layer's anti-slop rules |
| 40-62% of AI-generated code ships with design flaws (Second Talent 2026) | The preflight layer |
| Video lifts landing page conversion ~80% (Unbounce) | Recommending video whenever it's available |
| Pages under 100 words convert 50% higher (Unbounce) | Pushing for brevity over padding |
| 83% of landing page visits are mobile (Unbounce 2024) | Mobile-first as non-negotiable |
| Average landing page converts at 6.6% (Unbounce) | A benchmark to set the user's expectations |
| Visitors expect load under 3 seconds | Performance-conscious asset choices — see `builder/TECHNICAL.md` |
