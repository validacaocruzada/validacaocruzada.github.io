import { BOOKING_URL, CONTACT_EMAIL } from '@/components/links'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-title">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-16 pt-32 md:pb-24 md:pt-44">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 text-xs font-bold uppercase tracking-widest text-purple-400 sm:text-sm">
              Fixed-price AI systems for operations &amp; finance teams
            </div>
            <h1 id="hero-title" className="h1 mb-6 text-gray-100">
              Automate document, forecasting and risk work &mdash; running in 2&ndash;6 weeks.
            </h1>
            <p className="mx-auto mb-9 max-w-3xl text-lg leading-relaxed text-gray-400 sm:text-xl">
              We build a production system on your data, agree success metrics and a fixed price before work starts, and hand over the code.
            </p>

            <div className="flex justify-center">
              <a
                className={`btn bg-purple-600 text-white shadow-xl shadow-purple-900/30 hover:bg-purple-700 ${focusRing}`}
                href={BOOKING_URL}
                data-umami-event="Book Call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a free 30-min call
              </a>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              Free, 30 minutes, no preparation. You leave with what we would build, how long it takes and an indicative price &mdash; or a straight “not a fit”.
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Prefer email?{' '}
              <a
                className={`text-sm text-gray-400 underline-offset-4 hover:underline ${focusRing}`}
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
