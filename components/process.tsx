import { IconTile, type IconName } from '@/components/icons'

const steps: { n: string; icon: IconName; title: string; duration: string; body: string }[] = [
  {
    n: '01',
    icon: 'phone',
    title: 'Agree',
    duration: 'Free call · pitch within 2 business days',
    body: 'On the call you describe the task and the data, or who needs to learn what; we say whether it is a fit. Within 2 business days you get a one-page pitch: the problem, the must-haves we will deliver, and what is left out. We agree it with you on a short call before any price. If shaping needs your data in our hands, or an unknown has to be measured first, the pitch starts with a Discovery Sprint or a test. Nothing starts before you sign.',
  },
  {
    n: '02',
    icon: 'code',
    title: 'Build',
    duration: 'Fixed price · must-haves agreed in writing',
    body: 'Software: we build the must-haves agreed in the pitch, on your data. Smaller builds run on demand from files; larger ones are deployed where they will run, preferably in your own cloud account. Each build ends when it passes the acceptance test agreed before work starts, with a handover pack: code in your repository, runbook, evaluation set, credentials list and a one-hour session. Courses: audience, outcomes and sources agreed at kickoff, then produced module by module, each module reviewed once by you, delivered ready to upload. Workshops and team sessions: prepared for your audience and run on the agreed dates.',
  },
  {
    n: '03',
    icon: 'refresh',
    title: 'Operate',
    duration: 'Software · 3 months of Care included, then monthly',
    body: 'Every software build includes 3 months of Care, our maintenance plan: hosting administration, monitoring, security updates and small fixes, so you see it working before you choose. Then pick a monthly plan, cancellable with 30 days’ notice, or run it yourselves or with another supplier using the handover pack. Hosting and AI model usage are always paid separately.',
  },
]

export default function Process() {
  return (
    <section id="how-we-work" aria-labelledby="process-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="process-title" className="h2 mb-4 text-gray-100">How it works</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
            One call, a one-page pitch you agree, then a build, course or workshop at a fixed price. Every software build includes 3 months of Care; after that, a monthly plan or a full handover.
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
