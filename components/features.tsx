const services = [
  {
    title: 'Forecasting & predictive models',
    body: 'Demand, churn, risk, pricing, maintenance. Models trained on your data, validated on holdouts you control, deployed as an API or batch job you can call on Monday.',
    examples: ['Demand and revenue forecasting', 'Churn, default and fraud scoring', 'Predictive maintenance and anomaly detection'],
  },
  {
    title: 'LLM applications & agents',
    body: 'Document processing, retrieval over your knowledge base, and agents that execute multi-step workflows. Grounded in your data, with evaluation suites so you can trust the answers.',
    examples: ['Document extraction and classification', 'RAG assistants over internal knowledge', 'Workflow agents for back-office processes'],
  },
  {
    title: 'Data pipelines & analytics platforms',
    body: 'The plumbing that makes the models possible: ingestion, cleaning, feature stores, dashboards. Built to run unattended and hand over cleanly to your team.',
    examples: ['ETL / ELT pipelines and data warehouses', 'Feature engineering and MLOps', 'Dashboards and reporting automation'],
  },
]

export default function Features() {
  return (
    <section id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">What we build</h2>
            <p className="text-xl text-gray-400">
              Production systems, not slide decks. Every engagement ends with code running in your environment.
            </p>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-12 items-start md:max-w-none">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="relative flex flex-col h-full p-6 bg-gray-800 rounded-md"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <h4 className="h4 mb-3">{s.title}</h4>
                <p className="text-lg text-gray-400 mb-4">{s.body}</p>
                <ul className="text-gray-400 space-y-2 mt-auto">
                  {s.examples.map((e) => (
                    <li key={e} className="flex items-start">
                      <svg className="w-3 h-3 fill-current text-purple-500 mr-2 mt-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
