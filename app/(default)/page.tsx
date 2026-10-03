import type { Metadata } from 'next'

import Hero from '@/components/hero'
import Features from '@/components/features'
import QuickWins from '@/components/quick-wins'
import Process from '@/components/process'
import Engineering from '@/components/engineering'
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
      <QuickWins />
      <Process />
      <Engineering />
      <Faq />
      <Cta />
    </>
  )
}
