import { IconTile, type IconName } from '@/components/icons'

const steps: { n: string; icon: IconName; title: string; duration: string; body: string }[] = [
  {
    n: '01',
    icon: 'phone',
    title: 'Agree',
    duration: 'Free call · pitch within 2 business days',
    body: 'On the call you describe the task and the data; we say whether it is a fit. Within 2 business days you get a one-page pitch: the problem, what will be built, what is left out. We agree it with you on a short call before any price. If shaping needs your data in our hands, or an unknown has to be measured first, the pitch starts with a Discovery Sprint or a test. Nothing is built before you sign.',
  },
  {
    n: '02',
    icon: 'code',
    title: 'Build',
    duration: 'Fixed scope · fixed price',
    body: 'Software: we build the agreed must-haves on your data. Starter builds run on demand from files; Pilot and Production builds are deployed where they will run, preferably in your own cloud account. Each ends when the acceptance test is met, with a handover: code in your repository, runbook, evaluation set and a one-hour session. Courses: produced module by module from your sources, each module reviewed once by you, delivered ready to upload.',
  },
  {
    n: '03',
    icon: 'refresh',
    title: 'Operate',
    duration: 'Software · 3 months included, then monthly',
    body: 'Every software build includes 3 months of Care: hosting administration, monitoring, security updates and small fixes, so you see it working before you choose. Then pick a monthly plan with 30 days’ notice, or take the handover pack to your own team or another supplier.',
  },
]

export default function Process() {
  return (
    <section id="how-we-work" className="scroll-mt-20" aria-labelledby="process-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="process-title" className="h2 mb-4 text-gray-100">How it works</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
            One call, a one-page pitch you agree, then a fixed-price build or course of fixed length. Every software build includes 3 months of care; after that, a monthly plan or a full handover.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-3 lg:gap-8">
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
      </div>
    </section>
  )
}
