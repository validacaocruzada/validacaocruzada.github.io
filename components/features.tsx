import { Icon, IconTile, type IconName } from '@/components/icons'

type Offer = { icon: IconName; title: string; body: string }

const advise: Offer[] = [
  {
    icon: 'magnifying-glass',
    title: 'Discovery session',
    body: 'A working session with your team: how the work is done today, where the hours go, what data you already have. You leave with a short list of tasks worth automating with AI, what each would take, and a proposal for the first one.',
  },
  {
    icon: 'academic-cap',
    title: 'Training for your team',
    body: 'Half-day to two-day sessions for the people who will use AI at work: what it can and cannot do, how to use it safely with company data, and how to spot the next task worth automating.',
  },
]

const build: Offer[] = [
  {
    icon: 'database',
    title: 'Data pipelines and ETL',
    body: 'Getting data out of the ERP, CRM, spreadsheets and files into one place you can rely on: pipelines that run on schedule, databases enriched from external sources, deduplication and validation so the numbers agree with each other.',
  },
  {
    icon: 'chart',
    title: 'Dashboards and metrics',
    body: 'The metrics the business runs on, defined once and kept current: dashboards your team opens every morning, analysis of what moved and why, answers to specific questions from your own data.',
  },
  {
    icon: 'sparkles',
    title: 'Machine learning models',
    body: 'Models trained on your history: forecast demand, score leads, flag risk, decide which cases to look at first. Built against a baseline and an evaluation set, delivered running inside your systems, answering every week without anyone asking.',
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
            Two kinds of work. Advice on where AI fits and how your team uses it; and the build itself, delivered running in your systems.
          </p>
        </div>

        <div className="space-y-14">
          <Track id="advise-title" label="Advise" items={advise} cols="md:grid-cols-2" />
          <Track id="build-title" label="Build" items={build} cols="md:grid-cols-3" />
        </div>

        <p className="mx-auto mt-10 flex max-w-3xl items-start justify-center gap-3 text-center text-base leading-relaxed text-gray-400 sm:text-lg">
          <Icon name="arrow-right" className="mt-1 h-5 w-5 shrink-0 text-purple-400 sm:mt-1.5" />
          <span>
            One clear, scoped workflow goes straight to a fixed-price proposal. Several candidates, an open question, or a stalled pilot go through the assessment first.
          </span>
        </p>
      </div>
    </section>
  )
}
