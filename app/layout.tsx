import type { Metadata } from 'next'

import './css/style.css'

import { Inter } from 'next/font/google'

import Header from '@/components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const description = 'Document automation, forecasting and risk scoring, built on your data and running in weeks, as a fixed-price project.'

export const metadata: Metadata = {
  metadataBase: new URL('https://xval.ai'),
  title: {
    default: 'xval.ai — Machine learning, data science & AI, delivered as a fixed-price project',
    template: '%s · xval.ai'
  },
  description,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48 32x32 16x16' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    type: 'website',
    url: 'https://xval.ai',
    siteName: 'xval.ai',
    title: 'xval.ai — Machine learning, data science & AI, delivered as a fixed-price project',
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'xval.ai — Machine learning, data science & AI, delivered as a fixed-price project' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'xval.ai — Machine learning, data science & AI, delivered as a fixed-price project',
    description,
    images: ['/og.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
 