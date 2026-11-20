import { IconTile, type IconName } from '@/components/icons'

const steps: { n: string; icon: IconName; title: string; duration: string; body: string | string[] }[] = [
  {
    n: '01',
    icon: 'phone',
    title: 'Discovery call',
    duration: 'Free · 30 minutes',
    body: 'You describe the task and we scope it with you: what goes in, what comes out, how we will test it. You know on the call whether it fits, and if it does we agree a kickoff date.',
  },
  {
    n: '02',
    icon: 'code',
    title: '3 weeks to set it up',
    duration: 'Access · Automation · Testing',
    body: [
      'Week 1: accounts connected, your examples collected, the test agreed.',
      'Week 2: the automation set up on your data.',
      'Week 3: run on your examples, fixes, handover session.',
    ],
  },
  {
    n: '03',
    icon: 'refresh',
    title: '3 months of support',
    duration: 'Included in the price',
    body: 'We monitor it, keep it updated and fix problems: up to 2 hours of fixes a month, with a reply by the next business day. You get on with the work; we keep it running.',
  },
]

export default function Process() {
  return (
    <section id="how-it-works" aria-labelledby="process-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="process-title" className="h2 mb-4 text-gray-100">How it works</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">One call, three weeks, three months.</p>
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
              {typeof step.body === 'string' ? (
                <p className="text-base leading-relaxed text-gray-400 sm:text-lg">{step.body}</p>
              ) : (
                <ul className="space-y-2 text-base leading-relaxed text-gray-400 sm:text-lg">
                  {step.body.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
