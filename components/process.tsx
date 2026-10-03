import { ASSESSMENT_CREDIT_WINDOW, ASSESSMENT_DURATION, ASSESSMENT_PRICE, BOOKING_URL, BUILD_PRICE_RANGE } from '@/components/links'
import { Icon, IconTile, type IconName } from '@/components/icons'

const steps: { n: string; icon: IconName; title: string; duration: string; body: string }[] = [
  {
    n: '01',
    icon: 'phone',
    title: 'Assess',
    duration: `Free call · ${ASSESSMENT_DURATION} assessment when needed`,
    body: `On the call you describe the task and the data; we say whether it is feasible. If the case is clear, you get a written proposal within a business day. If it is not, we run a ${ASSESSMENT_DURATION} assessment: data audit, ranked candidates, build-or-buy per candidate, a go/no-go and the proposal. Nothing is built before you sign off.`,
  },
  {
    n: '02',
    icon: 'code',
    title: 'Build',
    duration: '2–6 weeks · fixed price',
    body: 'We connect to your data, design the architecture, build the application and deliver it where your team works: your ERP or line-of-business system, your product, a service your systems call, or a dashboard. The build ends with results against the acceptance test and a handover of everything we made.',
  },
  {
    n: '03',
    icon: 'refresh',
    title: 'Operate',
    duration: 'Monthly · optional · cancel anytime',
    body: 'We host, monitor and keep the system accurate: drift checks, retraining with new data, fixes and new features as your business changes. Or your team runs it; the choice is yours.',
  },
]

const guarantees: { icon: IconName; text: string }[] = [
  { icon: 'tag', text: 'Fixed scope and fixed price, agreed in writing before we start.' },
  { icon: 'target', text: 'Acceptance test in plain numbers, agreed before the build, measured on delivery.' },
  { icon: 'key', text: 'You own everything we create: code, models we train, prompts, tests and documentation. Third-party models stay under their own licences; your data stays yours.' },
  { icon: 'clipboard', text: 'Assessment deliverables are yours and written so any supplier could act on them.' },
  { icon: 'server', text: 'Runs on your servers or on our cloud. Maintenance and hosting available if you want them.' },
  {
    icon: 'scale',
    text: 'If the delivered system does not meet the acceptance test on the agreed evaluation data, we keep working at our cost — or you do not pay the final milestone.',
  },
]

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'

export default function Process() {
  return (
    <section id="how-we-work" className="scroll-mt-20" aria-labelledby="process-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="process-title" className="h2 mb-4 text-gray-100">How it works</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
            One call, then either a proposal or a {ASSESSMENT_DURATION} assessment, then a fixed-price build with a fixed end date. Assessments are {ASSESSMENT_PRICE}, credited once against a build that starts within {ASSESSMENT_CREDIT_WINDOW}. Most builds are {BUILD_PRICE_RANGE} depending on data and integration scope. Maintenance is optional.
          </p>
        </div>

        <ol className="mb-16 grid gap-6 md:grid-cols-3 lg:gap-8">
          {steps.map((step) => (
            <li
              key={step.n}
              className="flex h-full flex-col rounded-2xl border border-gray-700/60 bg-gray-800 p-6 transition duration-300 motion-safe:hover:-translate-y-1 hover:border-gray-600 md:p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <IconTile name={step.icon} className="h-12 w-12" />
                <span className="font-mono text-sm font-bold tracking-widest text-purple-400">{step.n}</span>
              </div>
              <h3 className="h4 mb-2 text-gray-100">{step.title}</h3>
              <div className="mb-4 text-sm font-bold text-purple-300">{step.duration}</div>
              <p className="text-base leading-relaxed text-gray-400 sm:text-lg">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-700/60 bg-gray-800/60 p-6 md:p-8">
          <h3 className="h4 mb-7 text-center text-gray-100">What you can count on</h3>
          <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {guarantees.map((guarantee) => (
              <li key={guarantee.text} className="flex items-start text-base leading-relaxed text-gray-300 sm:text-lg">
                <span
                  className="mr-4 mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-600/15 text-purple-300"
                  aria-hidden="true"
                >
                  <Icon name={guarantee.icon} className="h-5 w-5" />
                </span>
                <span>{guarantee.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9 text-center">
            <a
              className={`btn bg-purple-600 text-white shadow-lg shadow-purple-900/20 hover:bg-purple-700 ${focusRing}`}
              href={BOOKING_URL}
              data-umami-event="Book Call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a free 30-minute call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
