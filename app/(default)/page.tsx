import type { Metadata } from 'next'

import Hero from '@/components/hero'
import Features from '@/components/features'
import Process from '@/components/process'
import Engagement from '@/components/engagement'
import Cta from '@/components/cta'
import PlausibleProvider from 'next-plausible'

const title = 'xval.ai — AI-native software factory for machine learning, data and AI'
const description = 'Forecasting models, LLM applications and data platforms, specified by engineers and built by AI agents. Fixed scope, fixed price, delivered in weeks. Book a free 30-min call.'

const ogImage = { url: '/og.png', width: 1200, height: 630, alt: 'xval.ai — AI-native software factory' }

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url: 'https://xval.ai',
    siteName: 'xval.ai',
    title,
    description,
    images: [ogImage]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage.url]
  }
}

export default function Home() {
  return (
    <PlausibleProvider domain="xval.ai">
      <Hero />
      <Features />
      <Process />
      <Engagement />
      <Cta />
    </PlausibleProvider>
  )
}
