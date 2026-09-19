export const metadata = {
  title: 'xval.ai — AI-native software factory for machine learning, data and AI',
  description: 'Forecasting models, LLM applications and data platforms, specified by engineers and built by AI agents. Fixed scope, fixed price, delivered in weeks. Book a free 30-min call.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Process from '@/components/process'
import Engagement from '@/components/engagement'
import Cta from '@/components/cta'
import PlausibleProvider from 'next-plausible'

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
