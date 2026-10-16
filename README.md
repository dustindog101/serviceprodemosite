# ServicePros Cleaning & Restoration: website redesign (demo)

Static marketing site for ServicePros Cleaning & Restoration (Gaithersburg, MD; serves Maryland, DC and Northern Virginia).
Demo URL: https://serviceprodemosite.vercel.app

## Stack
- [Astro](https://astro.build) 7, static output, `@astrojs/sitemap`
- Plain CSS (`src/styles/global.css`), self-hosted fonts via Fontsource (Outfit + Geist)
- ~1 small script (`src/scripts/site.ts`): mobile menu, reveal-on-scroll, form enhancement. Respects `prefers-reduced-motion`.

## Run
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
npm run preview
```

## Structure
- `src/data/site.ts`: phone, email, nav, **`FORM_ENDPOINT`**
- `src/data/services.ts`: the four service pages + general FAQ
- `src/data/areas.ts`: counties, cities, DC neighborhoods; generates `/service-areas/{slug}/` pages
- `src/data/schema.ts`: JSON-LD (HomeAndConstructionBusiness, BreadcrumbList, FAQPage, Service)
- `src/pages/`: routes. `src/components/`: shared UI

## TODO for the client / before launch
- [ ] **Real photos.** Placeholders are marked `Photo slot` in the UI and `TODO(client)` in the code (`src/components/Slot.astro` and callers). Need crew, vehicle, equipment, before/after. No stock photos. Also add a 1200x630 `og:image` (`src/layouts/Layout.astro`).
- [ ] **More reviews.** Only one real testimonial exists (Matt, Gaithersburg). Add names, neighborhoods, source; link Google reviews. Add `aggregateRating` to schema only when real and visible.
- [ ] **Street address** (none published). Add to footer, contact page and `src/data/schema.ts`; must match Google Business Profile exactly.
- [ ] **Form endpoint.** Set `FORM_ENDPOINT` in `src/data/site.ts` to a real Formspree (or similar) URL. Until then (value contains `REPLACE_ME`) the form opens the visitor's email app via `mailto:`. Also add spam protection (Formspree reCAPTCHA/Turnstile); a honeypot is already included.
- [ ] **Google Business Profile**: create/claim, add the link in the footer and `sameAs`, embed a map on the contact page.
- [ ] Confirm with client: second phone 301-477-9260 and 301-252-7929 seen on the old site (only 301-383-9484 is used here); primary email (hotmail vs relations@serviceproscleanup.info); license and IICRC numbers (none published, so none shown); details of "financing options"; any expiry/exclusions for the $500 offer; Harford County cities.
- [ ] Privacy and Terms pages are plain placeholders; have them reviewed.
- [ ] Analytics and call-click tracking (links carry `data-call` attributes for this).
- [ ] Service-area pages use templated copy with county-level context. Add real local project notes and reviews per area to strengthen them.
- [ ] Point the real domain at the site and update `site` in `astro.config.mjs` plus `SITE.url` in `src/data/site.ts`.

## Content rules
Only facts from the client's existing site are used (since 2001, family and veteran owned, IICRC certified, licensed and insured, English/Spanish, 24/7, $500 off, 1-year labor and 5-year material warranties). No invented statistics, reviews, license numbers or addresses.
