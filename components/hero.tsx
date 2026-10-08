import { BOOKING_URL, CONTACT_EMAIL } from '@/components/links'
import { Icon, type IconName } from '@/components/icons'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'

const highlights: { icon: IconName; label: string }[] = [
  { icon: 'clock', label: 'Software builds in 2 to 6 weeks from kick-off' },
  { icon: 'tag', label: 'Fixed price, fixed time' },
  { icon: 'key', label: 'You own what we build, on full payment' },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-title">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-16 pt-32 md:pb-24 md:pt-44">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 text-xs font-bold uppercase tracking-widest text-purple-400 sm:text-sm">
              AI software and training
            </div>
            <h1 id="hero-title" className="h1 mb-6 text-gray-100">
              Software for your data. Training for your people.
            </h1>
            <p className="mx-auto mb-9 max-w-3xl text-lg leading-relaxed text-gray-400 sm:text-xl">
              <a href="#software" className={`text-gray-200 underline decoration-purple-400/60 underline-offset-4 hover:text-white ${focusRing}`}>
                Software
              </a>
              : automations, data pipelines and models, handed over working on your data.{' '}
              <a href="#training" className={`text-gray-200 underline decoration-purple-400/60 underline-offset-4 hover:text-white ${focusRing}`}>
                Training
              </a>
              : online courses, workshops and team sessions. Fixed price and the must-haves agreed before work starts.
            </p>

            <div className="flex justify-center">
              <a
                className={`btn bg-purple-600 text-white shadow-xl shadow-purple-900/30 hover:bg-purple-700 ${focusRing}`}
                href={BOOKING_URL}
                data-umami-event="Book Call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a free 30-minute call
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-gray-300">
              {highlights.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <Icon name={item.icon} className="h-5 w-5 text-purple-400" />
                  {item.label}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm leading-relaxed text-gray-400">
              Free, 30 minutes, no preparation, in Portuguese or English. Within 2 business days of the call you get a one-page pitch to agree, or a straight “not a fit”.
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Prefer to write?{' '}
              <a
                className={`text-gray-200 underline decoration-purple-400/60 underline-offset-4 hover:text-white ${focusRing}`}
                href="#enquiry"
                data-umami-event="Enquiry Link"
              >
                Use the form
              </a>{' '}
              or email{' '}
              <a
                className={`text-gray-200 underline decoration-purple-400/60 underline-offset-4 hover:text-white ${focusRing}`}
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
