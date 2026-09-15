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

## Notes

- The enquiry form composes a pre-filled `mailto:` message — no backend or API keys required. Swap
  `components/contact-form.tsx` for a route handler or form service if server-side handling is
  wanted (that requires dropping `output: "export"` or hosting the handler separately).
- Images are unoptimized because the build is a static export; they are pre-sized WebP assets.
- Partner marks and the donation account details are placeholders, as in the original site.
