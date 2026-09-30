import { Icon, IconTile, type IconName } from '@/components/icons'

const CATALOGUE_URL = 'https://conseil.bpifrance.fr/accelerez-ia/cas-usage'

type QuickWin = {
  icon: IconName
  title: string
  body: string
  label: string
  result: string
}

// Documented SME deployments from Bpifrance's "Accélérez avec l'IA" catalogue,
// filtered to low complexity / quick-win cases. Figures are as published there.
const wins: QuickWin[] = [
  {
    icon: 'inbox',
    title: 'Purchase orders typed into the ERP',
    body: 'Orders arrive as PDFs, scans and emails. AI reads each one and creates the order in the ERP. A person checks only the ambiguous ones.',
    label: 'Manufacturing SME, 28 M€',
    result: '−80% data-entry time · 95% of orders automated',
  },
  {
    icon: 'clipboard',
    title: 'Supplier onboarding files',
    body: 'Each new supplier sends a stack of documents. AI checks them against the required list and the regulation, and fills in the file for the quality team.',
    label: 'Food-ingredient manufacturer',
    result: '2 h → 1 h per supplier file',
  },
  {
    icon: 'camera',
    title: 'Field photos checked automatically',
    body: 'About 150 photos a day come back from collection rounds. AI spots the anomalies and writes a standard report with the evidence attached.',
    label: '5 days to deploy',
    result: '75% less processing time · 2 h 30 saved per day',
  },
  {
    icon: 'shopping-bag',
    title: 'Product descriptions from product data',
    body: 'Descriptions written and translated from the data already in the ERP, in the brand’s tone. The merchandising lead approves before anything goes live.',
    label: '1,000 products',
    result: 'Delivery went from 2 months to minutes',
  },
  {
    icon: 'magnifying-glass',
    title: 'Market watch and prospect lists',
    body: 'An agent follows publications and projects in the company’s field, qualifies the ones that match its expertise and adds them to a lead list for sales.',
    label: '2 weeks to deploy',
    result: '5–6 h saved per salesperson per week',
  },
  {
    icon: 'chat-bubble',
    title: 'Ask your project system a question',
    body: 'Thousands of projects, versions and proofs in a bespoke tool. Staff ask in plain language and get the right record, version or history back.',
    label: '7 weeks to deploy',
    result: '≈ 1 h saved per project manager per day',
  },
]

export default function QuickWins() {
  return (
    <section id="quick-wins" aria-labelledby="quick-wins-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="quick-wins-title" className="h2 mb-4 text-gray-100">Where companies usually start</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
            Low complexity, high impact. Six deployments by small and mid-sized companies, none of them AI experts, most done in days or weeks.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {wins.map((win) => (
            <li
              key={win.title}
              className="flex h-full flex-col rounded-2xl border border-gray-700/60 bg-gray-800 p-6 md:p-7"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <IconTile name={win.icon} className="h-11 w-11" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{win.label}</span>
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug text-gray-100">{win.title}</h3>
              <p className="mb-5 text-base leading-relaxed text-gray-400">{win.body}</p>
              <p className="mt-auto flex items-start gap-2 text-sm font-semibold text-purple-300">
                <Icon name="bolt" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{win.result}</span>
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-gray-500">
          Cases and figures as published by Bpifrance in its{' '}
          <a
            href={CATALOGUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-400 underline decoration-gray-600 underline-offset-4 transition hover:text-purple-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            AI use-case catalogue
            <Icon name="arrow-right" className="h-3.5 w-3.5" />
          </a>
          . Not our projects; we build the same kind of system, on your data, at a fixed price.
        </p>
      </div>
    </section>
  )
}
