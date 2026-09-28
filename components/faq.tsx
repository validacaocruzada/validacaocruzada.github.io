import { CONTACT_EMAIL } from '@/components/links'

type FaqEntry = {
  q: string
  a: string
  id?: string
}

const faqs: FaqEntry[] = [
  {
    q: 'Is my problem a fit?',
    a: `Good fit: a decision or a number your team produces repeatedly today (fraud / not fraud, how much to order, which category this document belongs to) and a few months of history where you can see what happened. If you have both, book the call. Not sure? Email a redacted sample and the decision you want to improve to ${CONTACT_EMAIL} and we will tell you whether a call is worth your time.`,
  },
  {
    q: 'What data do you need?',
    a: 'Exports from the systems you already use: your database, your platform, spreadsheets, CSV files. Nothing has to be clean. Part of every project is a data audit where we tell you what is usable and what is missing. As a rule of thumb, a few thousand past cases with the outcome is enough to start.',
  },
  {
    q: 'What do I get at the end?',
    a: 'A results presentation with the numbers against the success criteria we agreed (for example: forecast error, share of cases classified correctly), and the working system: model, code, tests and documentation, delivered where your team works. Then you decide whether we maintain it or your team takes it over.',
  },
  {
    q: 'Who owns what you build?',
    a: 'You do. Code, models, tests and documentation are delivered to you. If you decide to run it yourself, or with another team, you can.',
  },
  {
    q: 'Where does it run, and who maintains it?',
    a: 'Either on your servers or on our cloud; we recommend once we know the data volume and where it lives. Maintenance, monitoring and retraining are available as a monthly service, cancel anytime. You can also take it in-house at any point.',
  },
  {
    id: 'data-protection',
    q: 'How do you protect our data?',
    a: 'Before any data is transferred we agree in writing where it is stored, who can access it, which subprocessors (including AI model providers) are used, how long it is kept and how it is deleted. We sign a data processing agreement where required, and we can work entirely inside your environment so data never leaves it.',
  },
  {
    q: 'What happens if the agreed result is not achieved?',
    a: 'The acceptance test is written into the proposal before the build starts. If the delivered system does not meet it on the agreed evaluation data, we keep working at our cost or you do not pay the final milestone. Your obligations (data access, a named contact, evaluation data) are written into the same proposal.',
  },
  {
    q: 'How do you deliver quickly without cutting corners?',
    a: 'A named engineer owns the specification, architecture, review and acceptance test. We use AI-assisted coding to speed up implementation; every change is reviewed by that engineer and tested against your data before release. Price is set by scope and acceptance criteria, not hours or team size. We agree before starting which tools may see your data or code.',
  },
]

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="faq-title" className="h2 mb-4 text-gray-100">Questions we get before the call</h2>
        </div>

        <dl className="mx-auto grid max-w-4xl gap-x-10 gap-y-10 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.q} id={faq.id}>
              <dt className="h4 mb-3 text-gray-100">{faq.q}</dt>
              <dd className="text-base leading-relaxed text-gray-400 sm:text-lg">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
