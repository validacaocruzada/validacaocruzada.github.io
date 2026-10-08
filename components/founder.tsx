import { FOUNDER_LINKEDIN_URL, FOUNDER_SCHOLAR_URL } from '@/components/links'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'
const linkClass = `rounded-sm text-purple-400 underline decoration-purple-400/40 underline-offset-4 hover:text-purple-300 ${focusRing}`

const founderFacts = [
  'PhD in machine learning; research in forecasting and decision analysis; publications cited around 780 times on Google Scholar.',
  'Leads every xval.ai engagement personally and answers for every deliverable, from discovery and training to data, automation and software.',
  'The person you meet on the call is the person accountable for the result. No sales hand-off.',
]

export default function Founder() {
  return (
    <section id="founder" aria-labelledby="founder-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl rounded-2xl border border-gray-700/60 bg-gray-800/60 p-6 md:p-8">
          <div className="text-xs font-bold uppercase tracking-widest text-purple-400 sm:text-sm">Who you work with</div>
          <h2 id="founder-title" className="h4 mt-3 text-gray-100">Pedro Marcelino, founder</h2>
          <ul className="mt-4 space-y-2 text-base leading-relaxed text-gray-300 sm:text-lg">
            {founderFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-gray-400">
            Verify:{' '}
            <a href={FOUNDER_LINKEDIN_URL} className={linkClass} target="_blank" rel="noopener noreferrer" data-umami-event="Founder LinkedIn">
              LinkedIn
            </a>
            {' · '}
            <a href={FOUNDER_SCHOLAR_URL} className={linkClass} target="_blank" rel="noopener noreferrer" data-umami-event="Founder Scholar">
              Google Scholar
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
