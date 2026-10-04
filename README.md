# xval.ai landing page

Static one-page site for [xval.ai](https://xval.ai), built with Next.js 14 (App Router, `output: "export"`) and Tailwind CSS, deployed to GitHub Pages by `.github/workflows/nextjs.yml` on every push to `main`.

## Develop

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```

`BUILD_YEAR` is inlined at build time (`next.config.js`) so the footer year matches between server HTML and hydration.

## Where things live

- `app/(default)/page.tsx` — section order and home metadata; `app/(default)/privacy/` — privacy notice.
- `components/*.tsx` — one file per section (`hero`, `features`, `quick-wins`, `process`, `founder`, `faq`, `cta`); chrome in `components/ui/`.
- `components/links.ts` — booking URL, contact email, founder profile URLs, assessment/build price anchors, Umami website ID, site metadata strings. Empty `UMAMI_WEBSITE_ID` disables analytics.
- `app/robots.ts`, `app/sitemap.ts` — crawl policy (home and privacy only).
- `public/og.png` — social preview (1200×630).

## Audits

`audit-2026-09-28.md`, `audit-2026-09-30.md` — reviewer findings and the decisions still open.
