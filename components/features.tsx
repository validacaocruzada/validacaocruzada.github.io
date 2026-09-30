import { IconTile, type IconName } from '@/components/icons'

const services: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'document',
    title: 'Document & back-office automation',
    body: 'Invoices, contracts, claims, emails, tickets. AI reads them, extracts what matters, classifies, routes and answers, with a human in the loop where it counts.',
  },
  {
    icon: 'chart',
    title: 'Forecasting: how much, and when',
    body: 'How many units will sell next month? How many people do we need on Saturday? When does cash get tight? Today someone answers these in a spreadsheet. We build a model on your history that answers them every week, automatically.',
  },
  {
    icon: 'shield',
    title: 'Sorting and flagging cases',
    body: 'Which of these 500 applications should we look at first? Which customers are about to leave? Which transactions look wrong? Your team makes these calls today. We train a model on their past decisions, and they review only the doubtful cases.',
  },
  {
    icon: 'academic-cap',
    title: 'Training for your team',
    body: 'Half-day to two-day sessions for the people who will use AI at work: what it can and cannot do, how to use it safely with company data, and how to spot the tasks in your own operation that are worth automating.',
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
              <p className="text-base leading-relaxed text-gray-400 sm:text-lg">{service.body}</p>
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
