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
- `components/*.tsx` — one file per section, in page order (`hero`, `benefits`, `process` = How it works, `automations` = examples, `faq`, `cta`); chrome in `components/ui/`. The page sells one product, the Automation (3 weeks, €3,000, 3 months of support), and follows the structure of renora.io/333mvp; the product is defined in `../proposals/CATALOGUE.md` (a sibling folder, not in this repo).
- `components/links.ts` — booking URL, contact email, founder profile URLs, Umami website ID, site metadata strings. Empty `UMAMI_WEBSITE_ID` disables analytics; Umami only reports from xval.ai (`data-domains` in `components/analytics.tsx`).
- Contact is the booking link and the email address; the enquiry form (Web3Forms) was removed with the 2026-11 rebuild.
- `app/robots.ts`, `app/sitemap.ts` — crawl policy (allow all) and sitemap (home and privacy).
- `public/og.png` — social preview (1200×630).

## Audits

`audit-2026-09-28.md` — earlier reviewer findings; many items refer to sections since removed (quick wins, price range, guarantees, FAQ). Later audits (2026-09-30, 2026-10-08) are kept outside git because this repository is public.
