import Image from 'next/image'
import Logo from '@/public/images/logo-white.png'
import { BOOKING_URL, CONTACT_EMAIL } from '@/components/links'
import Year from '@/components/year'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/80 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <Image src={Logo} alt="xval.ai" className="h-6 w-auto" />
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-400">
              Machine learning, data science and AI, delivered as fixed-price projects.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm" aria-label="Footer navigation">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={`rounded-sm text-gray-300 transition-colors duration-200 hover:text-white ${focusRing}`}
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-sm text-gray-300 transition-colors duration-200 hover:text-white ${focusRing}`}
            >
              Book a call
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-xs text-gray-400">
          &copy; <Year /> xval.ai. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
