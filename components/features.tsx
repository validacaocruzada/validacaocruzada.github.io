import { ASSESSMENT_CREDIT_WINDOW, ASSESSMENT_DURATION, ASSESSMENT_PRICE } from '@/components/links'
import { Icon, IconTile, type IconName } from '@/components/icons'

type Offer = { icon: IconName; title: string; body: string }

const advise: Offer[] = [
  {
    icon: 'magnifying-glass',
    title: 'AI assessment',
    body: `${ASSESSMENT_DURATION}, ${ASSESSMENT_PRICE}, credited against a build that starts within ${ASSESSMENT_CREDIT_WINDOW}. We go through your operation and your data and come back with a ranked list of what is worth automating, what to buy instead of build, which subscriptions a fixed-price build would replace with the numbers side by side, what to leave alone, and a proposal for the first build.`,
  },
  {
    icon: 'check-badge',
    title: 'Review of an existing AI project',
    body: 'A pilot that stalled, a tool that was bought and not adopted, or a system another supplier built. We tell you whether it can reach production, what it would take, and whether it is worth it.',
  },
  {
    icon: 'academic-cap',
    title: 'Training for your team',
    body: 'Half-day to two-day sessions for the people who will use AI at work: what it can and cannot do, how to use it safely with company data, and how to spot the next task worth automating.',
  },
]

const build: Offer[] = [
  {
    icon: 'document',
    title: 'Document and workflow applications',
    body: 'Invoices, contracts, claims, supplier files, emails, tickets. Language models read them, extract what matters, classify, route and answer, with a person in the loop where the decision matters.',
  },
  {
    icon: 'chart',
    title: 'Forecasting and prioritisation',
    body: 'How many units will sell, how many people are needed on Saturday, which of 500 applications to look at first, which customers are about to leave. Models trained on your history, answering every week automatically.',
  },
  {
    icon: 'package',
    title: 'Replace a subscription with software you own',
    body: 'If your team uses only a small, stable part of an expensive tool, we assess whether rebuilding that workflow pays. When it does, we build that part: your data model, your workflow, AI where it helps, connected to your systems. Delivered in weeks for a fixed price; after migration and acceptance you can retire or reduce the subscription. Not a copy of the product: the part of the job your team does, built around how you do it.',
  },
  {
    icon: 'code',
    title: 'AI features inside your product',
    body: 'Classification, extraction, recommendations or an assistant inside the software you sell. We work in your repository, follow your conventions and ship behind your feature flags, with evaluation data your team can rerun.',
  },
]

function Track({ id, label, items, cols }: { id: string; label: string; items: Offer[]; cols: string }) {
  return (
    <div aria-labelledby={id}>
      <h3 id={id} className="mb-6 text-xs font-bold uppercase tracking-widest text-purple-400 sm:text-sm">
        {label}
      </h3>
      <div className={`grid items-stretch gap-6 lg:gap-8 ${cols}`}>
        {items.map((item) => (
          <article
            key={item.title}
            className="group relative flex h-full flex-col rounded-2xl border border-gray-700/60 bg-gray-800 p-6 transition duration-300 motion-safe:hover:-translate-y-1 hover:border-gray-600 md:p-7"
          >
            <IconTile name={item.icon} className="mb-5 h-12 w-12 transition duration-300 group-hover:border-purple-400/40 group-hover:bg-purple-600/25" />
            <h4 className="h4 mb-3 text-gray-100">{item.title}</h4>
            <p className="text-base leading-relaxed text-gray-400 sm:text-lg">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section id="services" className="scroll-mt-20" aria-labelledby="services-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="services-title" className="h2 mb-4 text-gray-100">What we do</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
            Two kinds of work. Advice on what to build, buy or leave alone; and the build itself, delivered running in your systems.
          </p>
        </div>

        <div className="space-y-14">
          <Track id="advise-title" label="Advise" items={advise} cols="md:grid-cols-3" />
          <Track id="build-title" label="Build" items={build} cols="md:grid-cols-2" />
        </div>

        <p className="mx-auto mt-10 flex max-w-3xl items-start justify-center gap-3 text-center text-base leading-relaxed text-gray-400 sm:text-lg">
          <Icon name="arrow-right" className="mt-1 h-5 w-5 shrink-0 text-purple-400 sm:mt-1.5" />
          <span>
            One clear, scoped workflow goes straight to a fixed-price proposal. Several candidates, an open question, or a stalled pilot go through the assessment first. When the agreed build needs a pipeline or dashboard to run, it is included in the fixed scope.
          </span>
        </p>
      </div>
    </section>
  )
}
