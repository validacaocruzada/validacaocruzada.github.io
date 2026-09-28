import { BOOKING_URL, CONTACT_EMAIL } from '@/components/links'
import { Icon, type IconName } from '@/components/icons'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100'

const assurances: { icon: IconName; label: string }[] = [
  { icon: 'sparkles', label: 'No preparation' },
  { icon: 'clock', label: 'Straight answer in 30 minutes' },
  { icon: 'clipboard', label: 'Written proposal within 24 hours' },
]

export default function Cta() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-100 px-6 py-12 text-center shadow-2xl md:px-12 md:py-16">
          <div className="cta-grid absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl">
            <h2 id="contact-title" className="h2 mb-5 text-gray-900">
              Find out if your workflow is a fit.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600 sm:text-xl">
              In a free 30-minute call we assess the decision, the data behind it and the smallest useful build, then give you an indicative timeline and price.
            </p>
            <div className="flex justify-center">
              <a
                className={`btn bg-purple-600 text-white shadow-lg shadow-purple-900/20 hover:bg-purple-700 ${focusRing}`}
                href={BOOKING_URL}
                data-umami-event="Book Call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a free 30-min call
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-gray-700">
              {assurances.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <Icon name={item.icon} className="h-5 w-5 text-purple-600" />
                  {item.label}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              30 minutes with Pedro Marcelino, founder. No sales hand-off.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Prefer email?{' '}
              <a
                className={`text-gray-700 underline-offset-4 hover:underline ${focusRing}`}
                href={`mailto:${CONTACT_EMAIL}`}
                data-umami-event="Email"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
