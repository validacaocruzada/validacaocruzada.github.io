import type { Metadata } from 'next'

import Hero from '@/components/hero'
import Features from '@/components/features'
import Process from '@/components/process'
import Founder from '@/components/founder'
import Cta from '@/components/cta'
import Faq from '@/components/faq'
import { SITE_URL } from '@/components/links'

// Title, description and social cards come from the root layout defaults.
export const metadata: Metadata = {
  alternates: { canonical: `${SITE_URL}/` },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Process />
      <Founder />
      <Faq />
      <Cta />
    </>
  )
}
