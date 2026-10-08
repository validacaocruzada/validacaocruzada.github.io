import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/logo-white.png'
import { BOOKING_URL } from '@/components/links'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full border-b border-gray-800/80 bg-gray-900/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className={`flex shrink-0 items-center rounded-sm ${focusRing}`}
            aria-label="xval.ai"
          >
            <Image src={Logo} alt="xval.ai" className="h-7 w-auto min-w-fit" priority />
          </Link>

          <div className="flex items-center gap-6">
            {/* Three links plus the full booking label need ~900 px; below `lg` the header shows only the booking button. */}
            <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
              {[
                ['/#software', 'Software'],
                ['/#training', 'Training'],
                ['/#how-we-work', 'How it works'],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className={`whitespace-nowrap rounded-sm text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white ${focusRing}`}
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              href={BOOKING_URL}
              data-umami-event="Book Call"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-sm whitespace-nowrap bg-purple-600 text-white shadow-lg shadow-purple-900/20 hover:bg-purple-700 ${focusRing}`}
            >
              {/* Full label overflows a 360 px viewport next to the logo; short form below `sm`. */}
              <span className="sm:hidden">Book a free call</span>
              <span className="hidden sm:inline">Book a free 30-minute call</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
