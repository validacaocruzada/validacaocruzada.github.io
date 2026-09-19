import { BOOKING_URL, CONTACT_EMAIL } from '@/components/links'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-100'

export default function Cta() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-100 px-6 py-12 text-center shadow-2xl md:px-12 md:py-16">
          <div className="cta-grid absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl">
            <h2 id="contact-title" className="h2 mb-5 text-gray-900">
              Have a problem that needs a model, a pipeline or an agent?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600 sm:text-xl">
              Bring the problem and a sample of the data. In 30 minutes you will know whether it is feasible, roughly what it costs, and how long it takes.
            </p>
            <div className="mx-auto flex max-w-xs flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
              <a
                className={`btn w-full bg-purple-600 text-white shadow-lg shadow-purple-900/20 hover:bg-purple-700 sm:w-auto ${focusRing}`}
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a free 30-min call
              </a>
              <a
                className={`btn w-full border-gray-900 bg-gray-900 text-white hover:bg-gray-700 sm:w-auto ${focusRing}`}
                href={`mailto:${CONTACT_EMAIL}`}
              >
                Email {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
