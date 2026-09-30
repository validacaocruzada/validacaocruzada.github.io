import type { Metadata } from 'next'

import Hero from '@/components/hero'
import Features from '@/components/features'
import QuickWins from '@/components/quick-wins'
import Process from '@/components/process'
import Cta from '@/components/cta'
import Faq from '@/components/faq'

const title = 'Fixed-price AI systems built on your data | xval.ai'
const description = 'Automate documents, forecasts and risk decisions with a production AI system built on your data in 2–6 weeks. Fixed scope and price. Book a free call.'
const socialTitle = 'Automate manual decisions in 2–6 weeks'
const socialDescription = 'Fixed-price AI systems for document workflows, forecasting and risk decisions — built on your data and delivered into production.'

const ogImage = { url: '/og.png', width: 1200, height: 630, alt: socialTitle }

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: 'https://xval.ai/' },
  openGraph: {
    type: 'website',
    url: 'https://xval.ai',
    siteName: 'xval.ai',
    title: socialTitle,
    description: socialDescription,
    images: [ogImage]
  },
  twitter: {
    card: 'summary_large_image',
    title: socialTitle,
    description: socialDescription,
    images: [ogImage.url]
  }
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <QuickWins />
      <Process />
      <Faq />
      <Cta />
    </>
  )
}
