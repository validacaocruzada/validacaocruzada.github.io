import { BOOKING_URL } from '@/components/links'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'

// Made-up data for the illustration. The last row shows what a flagged value looks like.
const rows = [
  { supplier: 'Papelaria Exemplo, Lda.', date: '12 Nov 2026', total: '184.50', flag: '' },
  { supplier: 'Oficina Modelo, Lda.', date: '9 Nov 2026', total: '1,230.00', flag: '' },
  { supplier: 'Transportes Amostra', date: '', total: '96.20', flag: 'Check date' },
]

// Fixed columns are narrower below `sm`, so the supplier name keeps room at 360 px.
const sheetRow = 'grid grid-cols-[minmax(0,1fr)_4.75rem_3.75rem_4.75rem] gap-x-2 px-4 py-2.5 sm:grid-cols-[minmax(0,1fr)_5.5rem_4.5rem_5.5rem] sm:gap-x-3'

function Illustration() {
  return (
    <figure className="mx-auto w-full max-w-md lg:max-w-none">
      <div
        role="img"
        aria-label="Illustration: a supplier invoice in PDF becomes a row in a spreadsheet, and one unclear date is flagged for a person to check."
      >
        <div className="rounded-2xl border border-gray-700/60 bg-gray-800 p-5 shadow-2xl shadow-black/30">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-md bg-purple-600/20 px-2 py-1 text-xs font-bold tracking-wide text-purple-300">PDF</span>
            <span className="font-mono text-xs text-gray-400">FT 2026/412</span>
          </div>
          <div className="mt-4 text-base font-bold text-gray-100">Papelaria Exemplo, Lda.</div>
          <div className="mt-3 space-y-2">
            <div className="h-2 w-11/12 rounded-full bg-gray-700" />
            <div className="h-2 w-8/12 rounded-full bg-gray-700" />
            <div className="h-2 w-9/12 rounded-full bg-gray-700" />
          </div>
          <div className="mt-4 flex items-baseline justify-between border-t border-gray-700 pt-3 text-sm">
            <span className="text-gray-400">12 Nov 2026</span>
            <span className="font-bold text-gray-100">€184.50</span>
          </div>
        </div>

        <div className="flex justify-center py-3 text-purple-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0 6.75-6.75M12 19.5l-6.75-6.75" />
          </svg>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-700/60 bg-gray-800 text-xs shadow-2xl shadow-black/30 sm:text-sm">
          <div className={`${sheetRow} border-b border-gray-700 bg-gray-900/40 font-bold text-gray-300`}>
            <span>Supplier</span>
            <span>Date</span>
            <span className="text-right">Total</span>
            <span>Status</span>
          </div>
          {rows.map((row) => (
            <div
              key={row.supplier}
              className={`${sheetRow} border-b border-gray-700/60 text-gray-300 last:border-b-0`}
            >
              <span className="truncate">{row.supplier}</span>
              <span className={row.date ? '' : 'text-gray-500'}>{row.date || '?'}</span>
              <span className="text-right font-mono">{row.total}</span>
              <span className={row.flag ? 'font-bold text-amber-300' : 'text-gray-400'}>{row.flag || 'OK'}</span>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-gray-400">Illustration with made-up data.</figcaption>
    </figure>
  )
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-title">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 pb-16 pt-32 md:pb-24 md:pt-44 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            {/* One clause per line at every width; `.h1` alone wraps the first line below 400 px. */}
            <h1 id="hero-title" className="h1 mb-6 text-3xl text-gray-100 sm:text-4xl md:text-5xl">
              <span className="block">Automate one task</span>
              <span className="block">
                in <span className="text-purple-400">3 weeks</span>,
              </span>
              <span className="block">
                for <span className="text-purple-400">€3,000</span>,
              </span>
              <span className="block">
                incl. <span className="text-purple-400">3 months</span>
              </span>
              <span className="block">of support</span>
            </h1>
            <p className="mb-9 max-w-xl text-lg leading-relaxed text-gray-400 sm:text-xl">
              A job your team still does by hand, such as invoices into a spreadsheet, enquiries logged and answered, or a shared inbox sorted with replies drafted. Set up on your own documents and emails, and done when it passes a test on your examples.
            </p>

            <a
              className={`btn bg-purple-600 text-white shadow-xl shadow-purple-900/30 hover:bg-purple-700 ${focusRing}`}
              href={BOOKING_URL}
              data-umami-event="Book Call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a free 30-minute call
            </a>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-400">
              The call is free, in Portuguese or English, and you leave knowing whether your task fits. €3,000 excludes VAT.
            </p>
          </div>

          <Illustration />
        </div>
      </div>
    </section>
  )
}
