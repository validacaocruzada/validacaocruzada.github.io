import { Icon, IconTile, type IconName } from '@/components/icons'

type Offer = { icon: IconName; title: string; meta?: string; body: string }

const advise: Offer[] = [
  {
    icon: 'magnifying-glass',
    title: 'Discovery Sprint',
    meta: '1 week · credited against the build',
    body: 'For several candidate tasks, or when we need your data in hand to see how the work is done. We sit in on one real occurrence of the task, such as this week’s review or this month’s batch, and do it with you, partly automated on your own exports. You keep that result, every rule written down and the main ones in code, what data you can export yourselves, a baseline from recent history, and a pitch for the next step. Useful even if you stop there.',
  },
  {
    icon: 'target',
    title: 'Test before you commit',
    meta: '1 day to 2 weeks · go/no-go in writing',
    body: 'Before we promise a number, we measure it on your data. A feasibility test builds an evaluation set from your documents, tries the approaches against a pass bar agreed in writing, and reports the result, the failures and the cost per case. An integration check proves in one day that we can read from or write to your system. If it is a go, the measured number becomes the build’s acceptance test.',
  },
]

const automate: Offer[] = [
  {
    icon: 'bolt',
    title: 'AI automations',
    body: 'Work that arrives as documents, emails, photos and tickets, handled by AI inside your systems: purchase orders typed into the ERP, supplier files checked against the required list, field photos screened for anomalies, product descriptions written from ERP data, plain-language questions answered from your records. A person checks only the ambiguous cases.',
  },
  {
    icon: 'package',
    title: 'Software you own instead of a subscription',
    body: 'If your team uses a small, stable part of an expensive tool, we rebuild that part around how you work: your data model, your workflow, AI where it helps, connected to your systems. Delivered in weeks for a fixed price; after migration you retire or reduce the subscription. Not a copy of the product: the part of the job your team actually does.',
  },
]

const data: Offer[] = [
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

const training: Offer[] = [
  {
    icon: 'document',
    title: 'Courses for your learners',
    meta: 'One pilot module, or a full course of six',
    body: 'An online course written and produced from your sources and learning outcomes, delivered ready to upload to your course platform. Each module has short narrated video lectures, worked examples and a 10-question quiz with feedback. Start with one module to test the format with your learners, then commission the rest.',
  },
  {
    icon: 'chat-bubble',
    title: 'Workshops',
    meta: 'Half day to two days · up to 12 people',
    body: 'Sessions for your learners, members or partners, built around exercises on real cases and, where you have it, your own data. Run on their own or alongside a course, for the people who want to apply what it teaches.',
  },
  {
    icon: 'academic-cap',
    title: 'Training for your team',
    meta: 'Half day to two days · up to 12 people',
    body: 'For the people who will use AI at work: what it can and cannot do, how to use it safely with company data, and how to spot the next task worth automating. On request, the examples are built from your own documents.',
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
            <h4 className={`h4 text-gray-100 ${item.meta ? 'mb-2' : 'mb-3'}`}>{item.title}</h4>
            {item.meta && <div className="mb-4 text-sm font-bold text-purple-300">{item.meta}</div>}
            <p className="text-base leading-relaxed text-gray-400 sm:text-lg">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <>
      <section id="software" className="scroll-mt-20" aria-labelledby="software-title">
        <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 id="software-title" className="h2 mb-4 text-gray-100">Software</h2>
            <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
              Advice on where AI fits and tests that measure it before you commit; then the build itself, handed over working on your data.
            </p>
          </div>

          <div className="space-y-14">
            <Track id="advise-title" label="Advise and test" items={advise} cols="md:grid-cols-2" />
            <Track id="automate-title" label="Automate" items={automate} cols="md:grid-cols-2" />
            <Track id="data-title" label="Data & models" items={data} cols="md:grid-cols-3" />
          </div>

          <p className="mx-auto mt-10 flex max-w-3xl items-start justify-center gap-3 text-center text-base leading-relaxed text-gray-400 sm:text-lg">
            <Icon name="arrow-right" className="mt-1 h-5 w-5 shrink-0 text-purple-400 sm:mt-1.5" />
            <span>
              One clear workflow goes straight to a pitch and a fixed-price build. Several candidates or a stalled pilot start with a Discovery Sprint; an open question about accuracy or integration starts with a test.
            </span>
          </p>
        </div>
      </section>

      <section id="training" className="scroll-mt-20" aria-labelledby="training-title">
        <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 id="training-title" className="h2 mb-4 text-gray-100">Training</h2>
            <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
              Courses, workshops and team sessions, designed and delivered: we produce the course your learners take, or teach the people in the room.
            </p>
          </div>

          <Track id="training-formats-title" label="Three formats" items={training} cols="md:grid-cols-3" />
        </div>
      </section>
    </>
  )
}
