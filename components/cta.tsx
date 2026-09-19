import { BOOKING_URL, CONTACT_EMAIL } from '@/components/links'

export default function Cta() {
  return (
    <section id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4">Have a problem that needs a model, a pipeline or an agent?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Bring the problem and a sample of the data. In 30 minutes you will know whether it is feasible, roughly what it costs, and how long it takes.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
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
          </div>
        </div>
      </div>
    </section>
  )
}
