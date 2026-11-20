import { IconTile, type IconName } from '@/components/icons'

const benefits: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'clock',
    title: 'Running in 3 weeks',
    body: 'Three weeks from the kickoff date we agree: one for access, one for setup, one for testing on your examples.',
  },
  {
    icon: 'tag',
    title: 'One fixed price',
    body: '€3,000, excluding VAT, covers setup on your data, the test, the handover session and three months of support. Hosting and AI usage are paid separately.',
  },
  {
    icon: 'refresh',
    title: 'Supported for 3 months',
    body: 'For three months after delivery we monitor it, keep it updated and fix problems, with a reply by the next business day.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" aria-labelledby="benefits-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="benefits-title" className="h2 text-gray-100">What you get</h2>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="flex h-full flex-col rounded-2xl border border-gray-700/60 bg-gray-800 p-6 transition duration-300 motion-safe:hover:-translate-y-1 hover:border-gray-600 md:p-7"
            >
              <IconTile name={benefit.icon} className="mb-5 h-12 w-12" />
              <h3 className="h4 mb-3 text-gray-100">{benefit.title}</h3>
              <p className="text-base leading-relaxed text-gray-400 sm:text-lg">{benefit.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
