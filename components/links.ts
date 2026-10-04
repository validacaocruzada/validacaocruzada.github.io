export const SITE_URL = 'https://xval.ai'
export const BOOKING_URL = 'https://calendar.app.google/oU9YDupWXopJsPP49'
export const CONTACT_EMAIL = 'hello@xval.ai'
export const FOUNDER_LINKEDIN_URL = 'https://www.linkedin.com/in/pmarcelino'
export const FOUNDER_SCHOLAR_URL = 'https://scholar.google.com/citations?user=Ii3e71YAAAAJ'

// Commercial anchors shown on the page. Change here, not in the components.
export const ASSESSMENT_PRICE = '€2,500'
export const ASSESSMENT_DURATION = '1 week'
export const BUILD_PRICE_RANGE = '€5,000–€25,000'
// Assessment fee is credited once against a build that starts within this window.
export const ASSESSMENT_CREDIT_WINDOW = '90 days'

// Umami Cloud (free Hobby plan). Website ID from cloud.umami.is → Settings → Websites.
// Empty string disables analytics entirely (no script is rendered).
export const UMAMI_WEBSITE_ID = '3d8582be-744e-47ca-9fd5-540af09aa2f7'

// Metadata shared by app/layout.tsx (defaults) and app/(default)/page.tsx (home).
export const SITE_TITLE = 'AI consulting and software development, fixed price | xval.ai'
export const SITE_DESCRIPTION =
  'We help you decide what is worth building with AI, then build it: document pipelines, forecasting, tools that replace subscriptions, AI features in your product. Fixed scope and price, delivered in 2–6 weeks.'
export const SOCIAL_TITLE = 'Decide what to build with AI. Then we build it.'
export const SOCIAL_DESCRIPTION =
  'AI consulting and software development from Portugal. Fixed-fee assessment, fixed-price builds in 2–6 weeks, you own the code.'
export const OG_IMAGE = { url: '/og.png', width: 1200, height: 630, alt: SOCIAL_TITLE }
