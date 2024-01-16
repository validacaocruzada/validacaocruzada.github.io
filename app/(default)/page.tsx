export const metadata = {
  title: 'xval.ai',
  description: 'AI for the most critical professions in the world',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import PlausibleProvider from 'next-plausible'

export default function Home() {
  return (
    <PlausibleProvider domain="xval.ai">
      <Hero />
      <Features />
      <Zigzag />
    </PlausibleProvider>
  )
}
