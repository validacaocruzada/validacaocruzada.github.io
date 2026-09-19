import { BOOKING_URL, CONTACT_EMAIL } from '@/components/links'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="md:flex md:items-center md:justify-between text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <span className="font-semibold text-gray-200">xval.ai</span> · AI-native software factory for machine learning, data science and AI. Lisbon, Portugal.
            </div>
            <div className="flex items-center space-x-6">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gray-100 transition duration-150 ease-in-out">{CONTACT_EMAIL}</a>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition duration-150 ease-in-out">Book a call</a>
            </div>
          </div>
          <div className="text-xs text-gray-500 mt-6">
            &copy; {new Date().getFullYear()} xval.ai. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
