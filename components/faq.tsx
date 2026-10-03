import { ASSESSMENT_DURATION, CONTACT_EMAIL } from '@/components/links'
import { Icon, type IconName } from '@/components/icons'

type FaqEntry = {
  icon: IconName
  q: string
  a: string
  id?: string
}

const faqs: FaqEntry[] = [
  {
    icon: 'puzzle',
    q: 'Is my problem a fit?',
    a: `Good fit: a task your team repeats often and can check objectively. Reading and filing documents, answering questions from company records, forecasting a number, deciding which cases to look at first, a feature inside your product. What data it needs depends on the task: document and search work starts from the files you already have; forecasting and prioritisation need past cases with the outcome. If you have one clear task, book the call. If you have several candidates or none yet, the ${ASSESSMENT_DURATION} assessment exists for exactly that. Not sure? Email a redacted sample and the task to ${CONTACT_EMAIL}.`,
  },
  {
    icon: 'database',
    q: 'What data do you need?',
    a: 'Exports from the systems you already use: your database, your platform, spreadsheets, CSV files, document folders. Nothing has to be clean. Every assessment and every build starts with a data audit where we tell you what is usable and what is missing. For models trained on history, a few thousand past cases with the outcome is a good rule of thumb.',
  },
  {
    icon: 'server',
    q: 'Does it connect to our systems or codebase?',
    a: 'Yes; that is where the work is delivered. Operational builds connect to your ERP, WMS, CRM or line-of-business system through its API, database or file exchange, and push results back the same way. Product builds are written in your repository, in your language and conventions, and shipped as pull requests your engineers review. Integration effort is part of the fixed scope, not an extra.',
  },
  {
    icon: 'check-badge',
    q: 'We already tried an AI pilot. Can you look at it?',
    a: 'Yes. Bring the pilot, the tool that was bought and not adopted, or the system another supplier built. We assess whether it can reach production, what it would take, and whether it is worth it, and say so in writing, including when the answer is no.',
  },
  {
    icon: 'key',
    q: 'What do I get at the end, and who owns it?',
    a: 'The working system delivered where your team works, with results against the acceptance test (for example: forecast error, share of documents filed correctly), plus everything we created to build it: code, models we trained, prompts, tests and documentation. You own all of that and can run it yourself or with another team. Third-party models and software (for example a language-model provider) stay under their own licences, and your data, including any evaluation data you supplied, remains yours throughout.',
  },
  {
    icon: 'refresh',
    q: 'Where does it run, and who maintains it?',
    a: 'Either on your servers or on our cloud; we recommend once we know the data volume and where it lives. Maintenance, monitoring and retraining are available as a monthly service, cancel anytime. The handover includes code, tests, runbooks and the evaluation set, so you can take it in-house or to another supplier at any point.',
  },
  {
    id: 'data-protection',
    icon: 'lock',
    q: 'How do you protect our data?',
    a: 'Before any data is transferred we agree in writing where it is stored, who can access it, which subprocessors (including AI model providers) are used, how long it is kept and how it is deleted. We sign a data processing agreement where required, and we can work entirely inside your environment so data never leaves it.',
  },
  {
    icon: 'scale',
    q: 'What happens if the agreed result is not achieved?',
    a: 'The acceptance test is written into the proposal before the build starts. If the delivered system does not meet it on the agreed evaluation data, we keep working at our cost or you do not pay the final milestone. Your obligations (data access, a named contact, evaluation data) are written into the same proposal.',
  },
]

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20" aria-labelledby="faq-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="faq-title" className="h2 mb-4 text-gray-100">Questions we get before the call</h2>
        </div>

        <dl className="mx-auto grid max-w-4xl gap-x-10 gap-y-10 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.q} id={faq.id} className="relative scroll-mt-24 pl-14">
              <dt className="h4 mb-3 text-gray-100">
                <span
                  className="absolute left-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-600/15 text-purple-300"
                  aria-hidden="true"
                >
                  <Icon name={faq.icon} className="h-5 w-5" />
                </span>
                {faq.q}
              </dt>
              <dd className="text-base leading-relaxed text-gray-400 sm:text-lg">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
