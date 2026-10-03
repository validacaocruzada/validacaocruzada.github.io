import { IconTile, type IconName } from '@/components/icons'

type QuickWin = {
  icon: IconName
  sector: string
  title: string
  body: string
}

// Example first builds, by sector. Mostly language-model work needing no training history.
const wins: QuickWin[] = [
  {
    icon: 'inbox',
    sector: 'Manufacturing',
    title: 'Purchase orders typed into the ERP',
    body: 'Orders arrive as PDFs, scans and emails. AI reads each one and creates the order in the ERP. A person checks only the ambiguous ones.',
  },
  {
    icon: 'clipboard',
    sector: 'Food & ingredients',
    title: 'Supplier onboarding files',
    body: 'Each new supplier sends a stack of documents. AI checks them against the required list and the regulation, and fills in the file for the quality team.',
  },
  {
    icon: 'camera',
    sector: 'Waste & recycling',
    title: 'Field photos checked automatically',
    body: 'Photos come back from every collection round. AI spots the anomalies and writes a standard report with the evidence attached.',
  },
  {
    icon: 'shopping-bag',
    sector: 'Retail & e-commerce',
    title: 'Product descriptions from product data',
    body: 'Descriptions written and translated from the data already in the ERP, in the brand’s tone. The merchandising lead approves before anything goes live.',
  },
  {
    icon: 'chat-bubble',
    sector: 'Print & packaging',
    title: 'Ask your project system a question',
    body: 'Thousands of projects, versions and proofs in a bespoke tool. Staff ask in plain language and get the right record, version or history back.',
  },
  {
    icon: 'code',
    sector: 'Software & fintech',
    title: 'Transaction categorisation inside the product',
    body: 'A categorisation service in the company’s own codebase, with an evaluation set the team reruns on every release. Customers see categories; engineers see the metric.',
  },
]

export default function QuickWins() {
  return (
    <section id="quick-wins" className="scroll-mt-20" aria-labelledby="quick-wins-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="quick-wins-title" className="h2 mb-4 text-gray-100">Example first builds</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
            Not every project needs a model trained on years of history. Many first builds use language models to read, write or search what the company already has. One clear operational need, one working system.
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
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">{win.sector}</span>
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug text-gray-100">{win.title}</h3>
              <p className="text-base leading-relaxed text-gray-400">{win.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
