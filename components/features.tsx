const services = [
  {
    title: 'Forecasting & planning',
    body: 'Replace the spreadsheet and the gut feel with a model that forecasts from your history and updates itself. Better numbers for stock, staffing, pricing and cash.',
    examples: ['Demand, sales and revenue forecasting', 'Stock and capacity planning', 'Pricing and promotion impact'],
  },
  {
    title: 'Document & back-office automation',
    body: 'Invoices, contracts, claims, emails, tickets. AI reads them, extracts what matters, classifies, routes and answers, with a human in the loop where it counts.',
    examples: ['Extraction and classification of documents', 'Assistants over your internal knowledge', 'Automated processing of repetitive workflows'],
  },
  {
    title: 'Classification & risk scoring',
    body: 'Your team already knows what a good or bad case looks like. We train a model on their past decisions so every new case gets a score automatically. Your team reviews only the uncertain ones.',
    examples: ['Credit, churn and default risk', 'Fraud in traffic, accounts and transactions', 'Anomalies in sensors, operations and billing'],
  },
]

export default function Features() {
  return (
    <section id="services" aria-labelledby="services-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="services-title" className="h2 mb-4 text-gray-100">What we build</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
            Working systems, not slide decks. Every project ends with a model running on your data, wired into your operation.
          </p>
        </div>

        <div className="mx-auto grid max-w-sm items-stretch gap-6 md:max-w-none md:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative flex h-full flex-col rounded-2xl border border-gray-700/60 bg-gray-800 p-6 transition duration-300 motion-safe:hover:-translate-y-1 hover:border-gray-600 md:p-7"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-5 h-1 w-10 rounded-full bg-purple-600 transition-all duration-300 group-hover:w-16" aria-hidden="true" />
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

        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-gray-400 sm:text-lg" data-aos="fade-up">
          Need the data pipelines, dashboards or infrastructure that make this possible? We build those too, as part of the project.
        </p>
      </div>
    </section>
  )
}
