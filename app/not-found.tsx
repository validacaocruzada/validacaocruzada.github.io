import type { Metadata } from 'next'
import Link from 'next/link'

import Footer from '@/components/ui/footer'

export const metadata: Metadata = {
  title: 'Page not found',
}

// Rendered inside the root layout only, so it must supply the skip-link target itself.
export default function NotFound() {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="grow focus:outline-none">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-16 md:pt-44 md:pb-24">
          <h1 className="h1 mb-6 text-gray-100">Page not found</h1>
          <p className="mb-8 text-lg text-gray-400">There is nothing at this address.</p>
          <Link
            className="text-purple-400 underline decoration-purple-400/40 underline-offset-4 hover:text-purple-300"
            href="/"
          >
            Back to xval.ai
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
