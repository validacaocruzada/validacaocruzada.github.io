import { BOOKING_URL, CONTACT_EMAIL } from '@/components/links'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="text-sm font-semibold uppercase tracking-widest text-purple-500 mb-4" data-aos="fade-up">
              AI-native software factory
            </div>
            <h1 className="h1 mb-6" data-aos="fade-up" data-aos-delay="100">
              Machine learning, data and AI systems. Specified by engineers, built by agents, delivered in weeks.
            </h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
              xval.ai builds forecasting models, LLM applications and data platforms for companies that need results, not headcount.
              Our engineers own the spec, the acceptance scenarios and your outcome. AI agents write, test and ship every line of code.
              Fixed scope, fixed price, no surprises.
            </p>

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="fade-up" data-aos-delay="300">
              <div>
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a free 30-min call
                </a>
              </div>
              <div>
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href={`mailto:${CONTACT_EMAIL}`}>
                  Email {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6" data-aos="fade-up" data-aos-delay="400">
              You leave the call with a scoped proposal or a straight “this is not a fit”. Either way, no cost.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
