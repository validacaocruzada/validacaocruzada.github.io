import { Icon, type IconName } from '@/components/icons'

const faqs: { icon: IconName; q: string; a: string }[] = [
  {
    icon: 'puzzle',
    q: 'How do I know if my task fits?',
    a: 'That is what the free call is for. You describe the task, we scope it with you, and by the end of the call you know whether it fits 3 weeks and €3,000. It helps if you can share real examples and one person on your side can review the results.',
  },
  {
    icon: 'package',
    q: 'What is included in €3,000?',
    a: 'One automation set up on your data, the test on your own examples, a handover session, and three months of support. The price excludes VAT.',
  },
  {
    icon: 'server',
    q: 'What is not included?',
    a: 'Hosting and AI model usage, which are paid separately. Changes and new features after delivery.',
  },
  {
    icon: 'clock',
    q: 'When do the 3 weeks start?',
    a: 'On the kickoff date we agree on the call. Access and examples are due in week 1. If access or your review comes late, the delivery date moves by the same number of days.',
  },
  {
    icon: 'refresh',
    q: 'What happens after the 3 months of support?',
    a: 'You choose: keep our support on a monthly plan, cancellable with 30 days’ notice, or run it yourselves with the handover notes.',
  },
  {
    icon: 'check-badge',
    q: 'What if it does not pass the test?',
    a: 'The test is agreed in writing in week 1: a set of your own examples with the right answers. If the automation does not pass it, we keep working at our cost until it does.',
  },
  {
    icon: 'lock',
    q: 'How do you protect our data?',
    a: 'Before any data is transferred we agree in writing where it is stored, who can access it, which subprocessors (including AI model providers) are used, how long it is kept and how it is deleted. We sign a data processing agreement where required.',
  },
]

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="faq-title" className="h2 text-gray-100">Frequently asked questions</h2>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-gray-800 border-y border-gray-800">
          {faqs.map((faq) => (
            <details key={faq.q} className="group">
              <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 [&::-webkit-details-marker]:hidden">
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-600/15 text-purple-300"
                  aria-hidden="true"
                >
                  <Icon name={faq.icon} className="h-5 w-5" />
                </span>
                <h3 className="h4 flex-1 text-gray-100">{faq.q}</h3>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="pb-6 pl-14 pr-9 text-base leading-relaxed text-gray-400 sm:text-lg">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
