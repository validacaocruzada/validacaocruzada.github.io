import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo-white.png'
import { BOOKING_URL, CONTACT_EMAIL } from '@/components/links'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'

export default function Header() {
  return (
    <header className="absolute z-30 w-full border-b border-gray-800/80 bg-gray-900/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className={`flex shrink-0 items-center rounded-sm ${focusRing}`}
            aria-label="xval.ai"
          >
            <Image src={Logo} alt="xval.ai" className="h-7 w-auto min-w-fit" priority />
          </Link>

          <nav className="flex items-center" aria-label="Primary navigation">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={`mr-6 hidden rounded-sm text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white sm:inline-flex ${focusRing}`}
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-sm whitespace-nowrap bg-purple-600 text-white shadow-lg shadow-purple-900/20 hover:bg-purple-700 ${focusRing}`}
            >
              Book a call
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
