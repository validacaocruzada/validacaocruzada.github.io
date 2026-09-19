import { BOOKING_URL } from '@/components/links'

const offers = [
  {
    title: 'Discovery sprint',
    duration: '1 week · fixed price',
    body: 'We audit your data and the problem, write the spec and the acceptance scenarios, and give you a fixed-price quote for the build. If you stop here, you still own a spec any team can execute.',
  },
  {
    title: 'Build sprint',
    duration: '2–6 weeks · fixed price',
    body: 'The factory grows the system against the scenarios you approved. Weekly demos on real data. You pay on milestones: kick-off, mid-point, acceptance.',
  },
  {
    title: 'Run & improve',
    duration: 'Monthly · cancel anytime',
    body: 'Monitoring, retraining, new scenarios as your business changes. The harness keeps running, so improvements ship without regressions.',
  },
]

const guarantees = [
  'Fixed scope and fixed price, agreed before we start. Projects from €2,500.',
  'Acceptance defined by scenarios you approve, not by our opinion.',
  'You own everything: code, models, tests, harness, documentation.',
  'Deployed in your cloud. No lock-in to us or to a platform.',
]

export default function Engagement() {
  return (
    <section id="engagement">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">How we engage</h2>
            <p className="text-xl text-gray-400">
              Small, fixed-price steps. Each one leaves you with something you own, whether or not you take the next.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-12 mb-16">
            {offers.map((o, i) => (
              <div key={o.title} className="p-6 border border-gray-800 rounded-md h-full" data-aos="fade-up" data-aos-delay={i * 100}>
                <h4 className="h4 mb-1">{o.title}</h4>
                <div className="text-sm text-purple-500 font-medium mb-4">{o.duration}</div>
                <p className="text-lg text-gray-400">{o.body}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h3 className="h4 mb-6 text-center">What you can count on</h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {guarantees.map((g) => (
                <li key={g} className="flex items-start text-lg text-gray-400">
                  <svg className="w-4 h-4 fill-current text-purple-500 mr-3 mt-1.5 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-10">
              <a className="btn text-white bg-purple-600 hover:bg-purple-700" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a free 30-min call
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
