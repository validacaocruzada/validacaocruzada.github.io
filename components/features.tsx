import { Icon, IconTile, type IconName } from '@/components/icons'
import { BOOKING_URL } from '@/components/links'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'
const linkClass = `text-gray-200 underline decoration-purple-400/60 underline-offset-4 hover:text-white ${focusRing}`

type Offer = { icon: IconName; title: string; meta?: string; body: string }

const advise: Offer[] = [
  {
    icon: 'magnifying-glass',
    title: 'Discovery Sprint',
    meta: '1 week · credited against a build started within 90 days',
    body: 'For several candidate tasks, or when we need your data in hand to see how the work is done. We sit in on the next real run of the task, such as this week’s review or this month’s batch, and do it with you, partly automated on your own exports. You keep that result and every rule written down, the main ones in code. You also get what data you can export yourselves, a baseline from recent history where it exists, and a pitch for the next step. Useful even if you stop there.',
  },
  {
    icon: 'target',
    title: 'Test before you commit',
    meta: '1 day to 2 weeks · go/no-go in writing',
    body: 'Before we promise a number, we measure it on your data. A Feasibility Sprint (2 weeks for each AI step) builds an evaluation set: real cases from your documents with the correct answer. It tries the approaches against a pass bar, the minimum result agreed in writing, and reports the result, the failures and the cost per case. An Integration check (1 day) tests whether we can read from or write to your system, with a written pass or fail. If it is a go, the measured number becomes the build’s acceptance test: the result it must reach before it is done.',
  },
]

const automate: Offer[] = [
  {
    icon: 'bolt',
    title: 'AI automations',
    body: 'Work that arrives as documents, emails, photos and tickets, handled by AI inside your systems. For example: purchase orders typed into the ERP, supplier files checked against the required list, field photos screened for anomalies, product descriptions written from ERP data. It can also answer plain-language questions from your records. It connects through an import file, or through your system’s API or database where one is available; we confirm which before pricing. A person checks only the ambiguous cases.',
  },
  {
    icon: 'package',
    title: 'Software you own instead of a subscription',
    body: 'If your team uses a small, stable part of an expensive tool, we rebuild that part around how you work. It follows your data model and your workflow, uses AI where it helps, and connects to your systems. Delivered in weeks for a fixed price; after migration you retire or reduce the subscription. Not a copy of the product: the part of the job your team actually does. On full payment you receive the rights to what we build; third-party software and models stay under their own terms.',
  },
]

const data: Offer[] = [
  {
    icon: 'database',
    title: 'Data pipelines and ETL',
    body: 'Getting data out of the ERP, CRM, spreadsheets and files into one place you can rely on. Pipelines run on schedule, databases are enriched from external sources, and deduplication and validation make the numbers agree with each other.',
  },
  {
    icon: 'chart',
    title: 'Dashboards and metrics',
    body: 'The metrics the business runs on, defined once and kept current. Dashboards your team opens every morning, analysis of what moved and why, and answers to specific questions from your own data.',
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
    body: 'An online course produced from sources and learning outcomes agreed at kickoff, delivered as files ready to upload to your course platform. Each module has short narrated video lectures, worked examples and a 10-question quiz with feedback. You review each module once; we do not host or administer your platform. Start with one module to test the format with your learners before you commit to a full course. On full payment the course content is yours; the avatar and voice services used for narration stay under their own terms.',
  },
  {
    icon: 'chat-bubble',
    title: 'Workshops',
    meta: 'Half a day to 2 days · up to 12 people',
    body: 'Sessions for your learners, members or partners, built around exercises on real cases and, on request, your own data. Run as a stand-alone session or alongside a course, for the people who want to apply what it teaches.',
  },
  {
    icon: 'academic-cap',
    title: 'Training for your team',
    meta: 'Half a day to 2 days · up to 12 people',
    body: 'For the people who will use AI at work: what it can and cannot do, and how to use it safely with company data. They also learn to spot the next task worth automating. On request, the examples are built from your own documents.',
  },
]

function Track({ id, label, items, cols }: { id: string; label: string; items: Offer[]; cols: string }) {
  return (
    <div>
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
      <section id="software" aria-labelledby="software-title">
        <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 id="software-title" className="h2 mb-4 text-gray-100">Software</h2>
            <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
              Advice on where AI fits and tests that measure it before you commit; then the build itself, handed over working on your data.
            </p>
          </div>

          <p className="mx-auto mb-14 flex max-w-3xl items-start justify-center gap-3 text-center text-base leading-relaxed text-gray-400 sm:text-lg">
            <Icon name="arrow-right" className="mt-1 h-5 w-5 shrink-0 text-purple-400 sm:mt-1.5" />
            <span>
              One clear workflow goes straight to a pitch and a fixed-price build. Several candidate tasks or a stalled AI project start with a Discovery Sprint; an open question about accuracy or integration starts with a test. No specific task yet, only a mandate to use AI? Start with{' '}
              <a href="#training" className={linkClass}>
                training for your team
              </a>
              .
            </span>
          </p>

          <div className="space-y-14">
            <Track id="automate-title" label="Automate" items={automate} cols="md:grid-cols-2" />
            <Track id="data-title" label="Data and models" items={data} cols="md:grid-cols-3" />
            <Track id="advise-title" label="Advise and test" items={advise} cols="md:grid-cols-2" />
          </div>

        </div>
      </section>

      <section id="training" aria-labelledby="training-title">
        <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 id="training-title" className="h2 mb-4 text-gray-100">Training</h2>
            <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
              Courses, workshops and team sessions, designed and delivered: we produce the course your learners take, or teach the people in the room.
            </p>
          </div>

          <Track id="training-formats-title" label="Three formats" items={training} cols="md:grid-cols-3" />

          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-gray-400 sm:text-lg">
            Courses, workshops or a session for your team:{' '}
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-umami-event="Book Call Training" className={linkClass}>
              Book a free 30-minute call
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
