import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/xval.jpg'
import { BOOKING_URL } from '@/components/links'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          <Link href="/" className="flex items-center" aria-label="xval.ai">
            <Image src={Logo} width={36} height={36} alt="xval.ai" className="rounded-md" priority />
            <span className="ml-3 text-lg font-bold text-gray-100">xval.ai</span>
          </Link>

          <nav className="flex items-center">
            <a href="mailto:hello@xval.ai" className="hidden sm:inline-flex text-sm font-medium text-gray-300 hover:text-gray-100 mr-6 transition duration-150 ease-in-out">
              hello@xval.ai
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-sm text-white bg-purple-600 hover:bg-purple-700">
              Book a call
            </a>
          </nav>

        </div>
      </div>
    </header>
  )
}
