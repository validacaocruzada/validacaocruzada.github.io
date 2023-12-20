import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Logo from '@/public/images/xval.jpg'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 mt-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image src={Logo} alt="Logo" width={64} height={64} className="rounded-full" /> {/* Use Image component with the imported image */}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}


