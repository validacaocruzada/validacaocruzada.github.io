import { BOOKING_URL, CONTACT_EMAIL } from '@/components/links'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-title">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-16 pt-32 md:pb-24 md:pt-44">
          <div className="mx-auto max-w-4xl text-center">
            <div
              className="mb-5 text-xs font-bold uppercase tracking-widest text-purple-400 sm:text-sm"
              data-aos="fade-up"
            >
              Machine learning &amp; AI, delivered as a fixed-price project
            </div>
            <h1 id="hero-title" className="h1 mb-6 text-gray-100" data-aos="fade-up" data-aos-delay="100">
              Automate the decisions your team makes by hand. Running on your data in weeks.
            </h1>
            <p
              className="mx-auto mb-9 max-w-3xl text-lg leading-relaxed text-gray-400 sm:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Fraud you catch one case at a time. Demand you forecast in a spreadsheet. Documents someone reads and retypes.
              xval.ai builds the model that does it for every case, every day, and puts it into production in weeks.
              Fixed scope, fixed price, success criteria agreed before we start.
            </p>

            <div
              className="mx-auto flex max-w-xs flex-col justify-center gap-3 sm:max-w-none sm:flex-row"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <a
                className={`btn w-full bg-purple-600 text-white shadow-xl shadow-purple-900/30 hover:bg-purple-700 sm:w-auto ${focusRing}`}
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a free 30-min call
              </a>
              <a
                className={`btn w-full border-gray-600 bg-gray-800/80 text-gray-100 hover:border-gray-500 hover:bg-gray-800 sm:w-auto ${focusRing}`}
                href={`mailto:${CONTACT_EMAIL}`}
              >
                Email {CONTACT_EMAIL}
              </a>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-gray-400" data-aos="fade-up" data-aos-delay="400">
              30 minutes. You leave with a clear answer: what we would build, how long it takes, what it costs, or a straight “this is not a fit”.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
