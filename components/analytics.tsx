import Script from 'next/script'

import { UMAMI_WEBSITE_ID } from '@/components/links'

// Cookie-free analytics. Clicks on elements with `data-umami-event="…"` are
// recorded as custom events automatically; no dashboard goal setup needed.
export default function Analytics() {
  if (!UMAMI_WEBSITE_ID) return null
  return <Script defer src="https://cloud.umami.is/script.js" data-website-id={UMAMI_WEBSITE_ID} />
}
