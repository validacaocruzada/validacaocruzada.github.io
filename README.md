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

- `app/(default)/page.tsx` — section order and home metadata; `app/(default)/privacy/` — privacy notice. `app/(default)/_faq/` is the FAQ page, hidden for now: the leading underscore keeps it out of the build. Rename it to `faq/` and restore the header/footer links and the sitemap entry to publish it.
- `components/*.tsx` — one file per section (`hero`, `features` = Software and Training, `process`, `founder`, `faq`, `enquiry`, `cta`); chrome in `components/ui/`. The site publishes no prices; they live in `proposals/CATALOGUE.md`.
- `components/links.ts` — booking URL, contact email, founder profile URLs, Umami website ID, Web3Forms access key, site metadata strings. Empty `UMAMI_WEBSITE_ID` disables analytics; empty `WEB3FORMS_ACCESS_KEY` hides the enquiry form.
- `components/enquiry.tsx` — short BANT intake (need, timeline, who signs, budget band) plus name, organisation and email; the rest of `proposals/discovery-guide.md` route A is asked in the first minutes of the call.
- `app/robots.ts`, `app/sitemap.ts` — crawl policy (home and privacy only).
- `public/og.png` — social preview (1200×630).

## Audits

`audit-2026-09-28.md`, `audit-2026-09-30.md` — reviewer findings and the decisions still open.
