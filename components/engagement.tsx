import { BOOKING_URL } from '@/components/links'

const offers = [
  {
    label: 'Option A',
    title: 'Proof of value',
    duration: '2 weeks · fixed price',
    body: 'We take your historical data and show that a model reproduces the decisions your team makes today. You get a results deck with the numbers, the baseline model and your data scored. Enough to decide go / no-go with confidence.',
    fit: 'Best when you want proof before committing to a production system.',
  },
  {
    label: 'Option B',
    title: 'Production build',
    duration: '4–6 weeks · fixed price',
    body: 'We connect to your data, improve the model and deliver the scores where your team works: an API your systems call or a dashboard your people open. Running on your servers or on our cloud.',
    fit: 'Best when the case is clear, or after a successful proof of value.',
  },
  {
    label: 'Option C',
    title: 'Run & improve',
    duration: 'Monthly · cancel anytime',
    body: 'We host, monitor and maintain the system: drift checks, retraining with new data, fixes and new features as your business changes. Your team uses the results; we keep them accurate.',
    fit: 'Best when you want the outcome without running the system yourself.',
  },
]

const guarantees = [
  'Fixed scope and fixed price, agreed in writing before we start.',
  'Success criteria in plain numbers, agreed at kick-off, measured on delivery.',
  'You own everything we deliver: code, models, tests and documentation.',
  'Runs on your servers or on our cloud. Maintenance and hosting available if you want them.',
]

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'

export default function Engagement() {
  return (
    <section id="engagement" aria-labelledby="engagement-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="engagement-title" className="h2 mb-4 text-gray-100">Three ways to work with us</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
            Every engagement is a defined project with a fixed price and a fixed end date. Most clients start with a proof of value. Pricing is shared after the first call.
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3 lg:gap-8">
          {offers.map((offer, index) => (
            <article
              key={offer.title}
              className="flex h-full flex-col rounded-2xl border border-gray-700/60 bg-gray-800 p-6 transition duration-300 motion-safe:hover:-translate-y-1 hover:border-gray-600 md:p-7"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-purple-400">{offer.label}</div>
              <h3 className="h4 mb-4 text-gray-100">{offer.title}</h3>
              <div className="mb-5 inline-flex w-fit rounded-full border border-purple-500/30 bg-purple-600/10 px-3 py-1.5 text-sm font-bold text-purple-300">
                {offer.duration}
              </div>
              <p className="mb-6 text-base leading-relaxed text-gray-400 sm:text-lg">{offer.body}</p>
              <p className="mt-auto border-t border-gray-700/70 pt-4 text-sm leading-relaxed text-gray-300">{offer.fit}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-700/60 bg-gray-800/60 p-6 md:p-8" data-aos="fade-up">
          <h3 className="h4 mb-7 text-center text-gray-100">What you can count on</h3>
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {guarantees.map((guarantee) => (
              <li key={guarantee} className="flex items-start text-base leading-relaxed text-gray-300 sm:text-lg">
                <svg
                  className="mr-3 mt-1.5 h-4 w-4 shrink-0 fill-current text-purple-400"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{guarantee}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9 text-center">
            <a
              className={`btn bg-purple-600 text-white shadow-lg shadow-purple-900/20 hover:bg-purple-700 ${focusRing}`}
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a free 30-min call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
