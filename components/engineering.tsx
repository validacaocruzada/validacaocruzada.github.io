import { FOUNDER_LINKEDIN_URL, FOUNDER_SCHOLAR_URL } from '@/components/links'
import { IconTile, type IconName } from '@/components/icons'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'
const linkClass = `rounded-sm text-purple-400 underline decoration-purple-400/40 underline-offset-4 hover:text-purple-300 ${focusRing}`

const practices: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'puzzle',
    title: 'Architecture',
    body: 'We decide which part of the problem is a classifier, a forecast model, a retrieval layer or a language model, and where a person stays in the loop. The cheapest component that passes the acceptance test wins; a trained model is used where it beats a prompt, not by default.',
  },
  {
    icon: 'target',
    title: 'Evaluation',
    body: 'Before the build: a baseline (what your team achieves today), a held-out evaluation set, and the metric in plain numbers. Every release is scored against it. You keep the evaluation set and can rerun it on any future version, ours or anyone else’s.',
  },
  {
    icon: 'code',
    title: 'Delivery',
    body: 'Delivered into the system where the work happens, with tests and documentation. In your repository and conventions where you have one. Implementation is AI-assisted; the engineer who owns the architecture and the acceptance test reviews and tests every change before release.',
  },
  {
    icon: 'refresh',
    title: 'Operation',
    body: 'Monitoring, drift checks and retraining as a monthly service, or a documented handover (code, tests, runbooks, evaluation set) so your team or another supplier can run the system without us.',
  },
]

const founderFacts = [
  'PhD; research in machine learning, time-series forecasting and decision analysis, cited around 780 times.',
  'Owns the specification, architecture and acceptance test on every xval.ai build.',
  'The person you meet on the call is the person accountable for the result. No sales hand-off.',
]

export default function Engineering() {
  return (
    <section id="engineering" className="scroll-mt-20" aria-labelledby="engineering-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="engineering-title" className="h2 mb-4 text-gray-100">How we engineer AI applications</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
            A chat tool gives you an answer. An application gives you the same answer tomorrow, inside your systems, with a number that says how often it is right. The difference is engineering.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {practices.map((practice, index) => (
            <li
              key={practice.title}
              className="flex h-full flex-col rounded-2xl border border-gray-700/60 bg-gray-800 p-6 md:p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <IconTile name={practice.icon} className="h-12 w-12" />
                <span className="font-mono text-sm font-bold tracking-widest text-purple-400">0{index + 1}</span>
              </div>
              <h3 className="h4 mb-2 text-gray-100">{practice.title}</h3>
              <p className="text-base leading-relaxed text-gray-400 sm:text-lg">{practice.body}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-gray-700/60 bg-gray-800/60 p-6 md:mt-16 md:p-8">
          <div className="text-xs font-bold uppercase tracking-widest text-purple-400 sm:text-sm">Who does the work</div>
          <h3 className="h4 mt-3 text-gray-100">Pedro Marcelino, founder</h3>
          <ul className="mt-4 space-y-2 text-base leading-relaxed text-gray-300 sm:text-lg">
            {founderFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-gray-400">
            Verify:{' '}
            <a href={FOUNDER_LINKEDIN_URL} className={linkClass} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            {' · '}
            <a href={FOUNDER_SCHOLAR_URL} className={linkClass} target="_blank" rel="noopener noreferrer">
              Google Scholar
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
