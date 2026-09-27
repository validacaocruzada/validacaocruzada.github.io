import { BOOKING_URL } from '@/components/links'

const steps = [
  {
    n: '01',
    title: 'Call',
    duration: '30 minutes · free',
    body: 'You tell us the decision you want automated and what data you have. We tell you whether it is feasible, what we would build and roughly what it costs. No preparation needed.',
  },
  {
    n: '02',
    title: 'Proposal',
    duration: 'Within 24 hours',
    body: 'A written proposal: the data we need, the success criteria in plain numbers, the timeline and a fixed price. You sign off before anything is built.',
  },
  {
    n: '03',
    title: 'Build',
    duration: '2–6 weeks · fixed price',
    body: 'We connect to your data, build the model and deliver the results where your team works: an API your systems call or a dashboard your people open. The build ends with a results presentation against the success criteria and a handover of everything we made.',
  },
  {
    n: '04',
    title: 'Maintain',
    duration: 'Monthly · optional · cancel anytime',
    body: 'We host, monitor and keep the system accurate: drift checks, retraining with new data, fixes and new features as your business changes. Or your team runs it; the choice is yours.',
  },
]

const guarantees = [
  'Fixed scope and fixed price, agreed in writing before we start.',
  'Success criteria in plain numbers, agreed at kick-off, measured on delivery.',
  'You own everything we deliver: code, models, tests and documentation.',
  'Runs on your servers or on our cloud. Maintenance and hosting available if you want them.',
]

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'

export default function Process() {
  return (
    <section id="how-we-work" aria-labelledby="process-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="process-title" className="h2 mb-4 text-gray-100">How it works</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
            One call, a written proposal the next day, a fixed-price build with a fixed end date. Maintenance if you want it. Pricing is shared after the call.
          </p>
        </div>

        <ol className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <li
              key={step.n}
              className="flex h-full flex-col rounded-2xl border border-gray-700/60 bg-gray-800 p-6 transition duration-300 motion-safe:hover:-translate-y-1 hover:border-gray-600 md:p-7"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-5 font-mono text-sm font-bold tracking-widest text-purple-400">{step.n}</div>
              <h3 className="h4 mb-2 text-gray-100">{step.title}</h3>
              <div className="mb-4 text-sm font-bold text-purple-300">{step.duration}</div>
              <p className="text-base leading-relaxed text-gray-400 sm:text-lg">{step.body}</p>
            </li>
          ))}
        </ol>

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
