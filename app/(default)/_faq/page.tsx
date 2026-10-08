import type { Metadata } from 'next'

import Cta from '@/components/cta'
import Faq from '@/components/faq'
import { SITE_URL } from '@/components/links'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Fit, data, integration, ownership, maintenance, data protection, public procurement and courses: what people ask xval.ai before the first call.',
  alternates: { canonical: `${SITE_URL}/faq` },
}

export default function FaqPage() {
  return (
    <>
      <Faq />
      <Cta />
    </>
  )
}
