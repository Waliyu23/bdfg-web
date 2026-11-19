# Better Dream Foundation Ghana — React + Next.js

The Better Dream Foundation Ghana website rebuilt as an editable **React + Next.js** application:
App Router, TypeScript, Tailwind CSS, and content held in typed data modules instead of hand-written
HTML.

The original upload was a *static export* (pre-rendered HTML plus compiled CSS), so this project is
a reconstruction of the source: every page, style token and interaction was recovered and rewritten
as React components.

## Stack

| Layer      | Choice                                             |
| ---------- | -------------------------------------------------- |
| Framework  | Next.js 15 (App Router, React 19)                  |
| Language   | TypeScript                                         |
| Styling    | Tailwind CSS 3 + a small set of component classes  |
| Output     | Fully static (`output: "export"` → `out/`)         |
| Fonts      | Fraunces (display) + General Sans (body)           |

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
npm run lint
```

## Project structure

```
app/
  layout.tsx                   Root layout: metadata, fonts, header, footer, watermark
  page.tsx                     Homepage
  about/, leadership/,         Static pages
  gallery/, get-involved/,
  donate/, contact/
  focus-areas/page.tsx         Focus area index
  focus-areas/[slug]/page.tsx  Focus area detail (generateStaticParams)
  news/page.tsx                News index
  news/[slug]/page.tsx         Article detail (generateStaticParams + NewsArticle JSON-LD)
  not-found.tsx                404
  sitemap.ts                   Generated sitemap.xml
  globals.css                  Tailwind layers + component classes
components/
  site-header.tsx              Sticky header with mobile menu (client)
  site-footer.tsx              Footer with navigation and socials
  hero-carousel.tsx            Autoplaying homepage hero (client)
  contact-form.tsx             Enquiry form, mailto-based (client)
  page-hero.tsx, cta-band.tsx, focus-area-card.tsx, news-card.tsx,
  partner-marquee.tsx, reveal-on-scroll.tsx, watermark.tsx, icons
lib/
  site.ts                      Organisation details, navigation, socials, offices
  focus-areas.ts               The five focus areas
  news.ts                      News articles
  leadership.ts                Board, national and regional roles
  partners.tsx                 Partner marks (placeholder SVGs)
public/images/                 Photography, logo and crest assets
```

## Editing content

All copy lives in typed modules under `lib/`, so pages stay presentational:

- **Focus areas** — add an entry to `lib/focus-areas.ts`; the index page, detail route, homepage
  grid, footer links and sitemap all pick it up automatically.
- **News** — add an entry to `lib/news.ts`; it is sorted newest-first and the newest item becomes
  the featured story on `/news`.
- **Leadership** — edit `lib/leadership.ts` to add names, or extend the type with `name` and
  `image` fields when portraits are supplied.
- **Organisation details** — email, phone, offices, socials and navigation are in `lib/site.ts`.

## Design system

Tailwind theme extensions in `tailwind.config.ts`:

- **Blue** `#12409b` (600) through `#081b45` (900) — the institutional base
- **Gold** `#ffcb33` (400) / `#f5b90b` (500) — accents, eyebrows, kente stripe
- **Neutrals** `ink #0a1733`, `paper #fbfaf7`, `line #e4e0d6`
- Component classes in `app/globals.css`: `.shell`, `.section`, `.h1`–`.h3`, `.lede`, `.eyebrow`,
  `.btn-primary`, `.btn-gold`, `.btn-ghost`, `.btn-onblue`, `.card`, `.field`, `.kente`,
  `.marquee`, `.link-underline`, `.reveal`

## Static export and hosting

`npm run build` runs `next build` and then `node scripts/relativize.mjs`, which rewrites the
root-absolute asset URLs Next emits (`/_next/...`, `/images/...`) and route links into
document-relative URLs. Route links target trailing-slash directories rather than `index.html`
files, which lets hosts such as Vercel resolve the exported directory index correctly. That makes
`out/` hostable from a domain root *or* any sub-path (preview proxy, GitHub Pages project site, CDN
folder).

Two consequences worth knowing:

- `components/link.tsx` is a plain-anchor stand-in for `next/link`. The client router navigates to
  absolute route paths, which 404 under a sub-path, so links are native anchors and each page load
  is a fresh document. If the site is hosted at a domain root and you want client-side transitions,
  change that file back to a `next/link` re-export.
- A couple of image `preload` hints in the hydration payload still point at `/images/...`; they fail
  silently and the rendered images are unaffected. Hosting at a domain root removes them.

## Notes

- The enquiry form composes a pre-filled `mailto:` message — no backend or API keys required. Swap
  `components/contact-form.tsx` for a route handler or form service if server-side handling is
  wanted (that requires dropping `output: "export"` or hosting the handler separately).
- Images are unoptimized because the build is a static export; they are pre-sized WebP assets.
- Partner marks and the donation account details are placeholders, as in the original site.

## Performance and motion

Measured on the exported build (`npm run build`, served locally, homepage, cold cache):

| | Desktop 1440px | Mobile 390px |
| --- | --- | --- |
| Before | 3359 KB, 24 requests, 7 third-party | 2591 KB, 21 requests, 7 third-party |
| After | 1058 KB, 22 requests, 0 third-party | 836 KB, 18 requests, 0 third-party |

What changed:

- **Self-hosted fonts.** General Sans (400/500/600) and Fraunces are served from
  `public/fonts` as `woff2` with `font-display: swap` and `unicode-range` splits.
  No Google Fonts requests, so no third-party connections on any page.
- **Responsive images.** `node scripts/images.mjs` (sharp) generates 480/768/1200/1536
  `webp` variants for every photo plus 64/128/256 crest logos. `components/photo.tsx`
  emits `srcset`/`sizes` with intrinsic `width`/`height` so layout never shifts, and
  only the first hero image gets `fetchPriority="high"`; everything else is lazy.
- **Preloads.** The hero image and the three body-font files are preloaded in
  `app/layout.tsx` / `app/page.tsx`.
- **Motion.** `components/reveal-on-scroll.tsx` uses a single `IntersectionObserver`
  with sibling-index stagger; `.reveal` / `.reveal-left` / `.reveal-right` /
  `.reveal-scale` utilities in `app/globals.css` handle the transforms. The hero
  headline, lede and buttons rise in on load, the header carries a scroll-progress
  bar, and the footprint figures count up when scrolled into view.
- **Reduced motion.** Every animation, the smooth scroll and the carousel transition
  are disabled under `prefers-reduced-motion: reduce`.
- **UX polish.** Visible `:focus-visible` rings sitewide, a gallery lightbox with
  arrow-key and Escape support, field-level validation on both forms, button hover
  lift and arrow nudge, and `overflow-x: clip` on sections so reveal transforms can
  never create a sideways scrollbar.

## Focus-area ticker

`components/focus-ticker.tsx` renders a full-bleed navy band directly under the hero
with the five focus areas set in large Fraunces display type, scrolling continuously. The
band is deliberately shallow (78px desktop / 54px mobile) and carries no heading label —
the accessible name lives in a visually hidden `<h2>`.
The list is duplicated for a seamless loop (the second copy is `aria-hidden` and
`tabIndex={-1}`), each title links to its `/focus-areas/<slug>/` page, hovering or
keyboard focus pauses the animation, and under `prefers-reduced-motion: reduce` the
duplicate is hidden and the row becomes a horizontally scrollable, snap-aligned list.
Styles live in the `.ticker*` block in `app/globals.css`.
