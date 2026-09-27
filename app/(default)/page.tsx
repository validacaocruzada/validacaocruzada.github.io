import type { Metadata } from 'next'

import Hero from '@/components/hero'
import Features from '@/components/features'
import Process from '@/components/process'
import Cta from '@/components/cta'
import Faq from '@/components/faq'
import PlausibleProvider from 'next-plausible'

const title = 'xval.ai — Machine learning & AI, delivered as a fixed-price project'
const description = 'Forecasting, document automation and risk scoring. Built on your data and running in weeks, as a fixed-price project. Book a free 30-min call.'

const ogImage = { url: '/og.png', width: 1200, height: 630, alt: title }

export const metadata: Metadata = {
  title: { absolute: title },
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
      <Faq />
      <Cta />
    </PlausibleProvider>
  )
}
