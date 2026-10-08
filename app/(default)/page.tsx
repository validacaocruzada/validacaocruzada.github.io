import type { Metadata } from 'next'

import Hero from '@/components/hero'
import Features from '@/components/features'
import Process from '@/components/process'
import Founder from '@/components/founder'
import Enquiry from '@/components/enquiry'
import Cta from '@/components/cta'
import { CONTACT_EMAIL, FOUNDER_LINKEDIN_URL, FOUNDER_SCHOLAR_URL, SITE_URL } from '@/components/links'

// Title, description and social cards come from the root layout defaults.
export const metadata: Metadata = {
  alternates: { canonical: `${SITE_URL}/` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'xval.ai',
  legalName: 'Validação Cruzada, Lda.',
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  email: CONTACT_EMAIL,
  taxID: '516373366',
  address: { '@type': 'PostalAddress', addressCountry: 'PT' },
  founder: {
    '@type': 'Person',
    name: 'Pedro Marcelino',
    sameAs: [FOUNDER_LINKEDIN_URL, FOUNDER_SCHOLAR_URL],
  },
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Features />
      <Process />
      <Founder />
      <Cta />
      <Enquiry />
    </>
  )
}
