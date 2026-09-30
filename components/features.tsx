import { IconTile, type IconName } from '@/components/icons'

const services: { icon: IconName; title: string; body: string; examples: string[] }[] = [
  {
    icon: 'document',
    title: 'Document & back-office automation',
    body: 'Invoices, contracts, claims, emails, tickets. AI reads them, extracts what matters, classifies, routes and answers, with a human in the loop where it counts.',
    examples: ['Extraction and classification of documents', 'Assistants over your internal knowledge', 'Automated processing of repetitive workflows'],
  },
  {
    icon: 'chart',
    title: 'Forecasting: how much, and when',
    body: 'How many units will sell next month? How many people do we need on Saturday? When does cash get tight? Today someone answers these in a spreadsheet. We build a model on your history that answers them every week, automatically.',
    examples: ['Next month’s demand, per product and per site', 'Staff and stock levels, per week', 'Which promotions and price changes actually moved sales'],
  },
  {
    icon: 'shield',
    title: 'Sorting and flagging cases',
    body: 'Which of these 500 applications should we look at first? Which customers are about to leave? Which transactions look wrong? Your team makes these calls today. We train a model on their past decisions, and they review only the doubtful cases.',
    examples: ['Customers likely to churn or default', 'Invoices, claims and orders that look wrong', 'Leads worth a call'],
  },
  {
    icon: 'academic-cap',
    title: 'Training for your team',
    body: 'Half-day to two-day sessions for the people who will use AI at work: what it can and cannot do, how to use it safely with company data, and how to spot the tasks in your own operation that are worth automating.',
    examples: ['Fundamentals for managers and teams, no maths required', 'Hands-on, with your own documents and data', 'Finding and prioritising quick wins in your operation'],
  },
]

export default function Features() {
  return (
    <section id="services" aria-labelledby="services-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="services-title" className="h2 mb-4 text-gray-100">What we do</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
            Three kinds of systems, delivered running on your data. Plus training, so your team can use them and find the next ones.
          </p>
        </div>

        <div className="mx-auto grid max-w-sm items-stretch gap-6 md:max-w-none md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex h-full flex-col rounded-2xl border border-gray-700/60 bg-gray-800 p-6 transition duration-300 motion-safe:hover:-translate-y-1 hover:border-gray-600 md:p-7"
            >
              <IconTile name={service.icon} className="mb-5 h-12 w-12 transition duration-300 group-hover:border-purple-400/40 group-hover:bg-purple-600/25" />
              <h3 className="h4 mb-3 text-gray-100">{service.title}</h3>
              <p className="mb-6 text-base leading-relaxed text-gray-400 sm:text-lg">{service.body}</p>
              <ul className="mt-auto space-y-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                {service.examples.map((example) => (
                  <li key={example} className="flex items-start">
                    <svg
                      className="mr-3 mt-1.5 h-3 w-3 shrink-0 fill-current text-purple-400"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-gray-400 sm:text-lg">
          When the agreed workflow needs a pipeline or dashboard to run, it is included in the fixed scope.
        </p>
      </div>
    </section>
  )
}
