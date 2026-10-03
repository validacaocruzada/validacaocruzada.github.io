import { BOOKING_URL, CONTACT_EMAIL } from '@/components/links'
import { Icon, type IconName } from '@/components/icons'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'

const highlights: { icon: IconName; label: string }[] = [
  { icon: 'clock', label: '1-week assessment · 2–6-week builds' },
  { icon: 'tag', label: 'Fixed scope, fixed price' },
  { icon: 'key', label: 'You own the code' },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="hero-title">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-16 pt-32 md:pb-24 md:pt-44">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 text-xs font-bold uppercase tracking-widest text-purple-400 sm:text-sm">
              AI consulting and software development
            </div>
            <h1 id="hero-title" className="h1 mb-6 text-gray-100">
              Decide what to build with AI. Then we build it.
            </h1>
            <p className="mx-auto mb-9 max-w-3xl text-lg leading-relaxed text-gray-400 sm:text-xl">
              We tell you which parts of your operation are worth automating with machine learning and language models, then design, build and deliver the application into production. Fixed scope, fixed price, agreed before work starts. You own the code.
            </p>

            <div className="flex justify-center">
              <a
                className={`btn bg-purple-600 text-white shadow-xl shadow-purple-900/30 hover:bg-purple-700 ${focusRing}`}
                href={BOOKING_URL}
                data-umami-event="Book Call"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a free 30-minute call
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-gray-300">
              {highlights.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <Icon name={item.icon} className="h-5 w-5 text-purple-400" />
                  {item.label}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm leading-relaxed text-gray-400">
              Free, 30 minutes, no preparation. You leave knowing whether your case is clear enough for a proposal, needs a one-week assessment first, or is not a fit.
            </p>
            <p className="mt-3 text-sm text-gray-400">
              Prefer email?{' '}
              <a
                className={`text-sm text-gray-400 underline-offset-4 hover:underline ${focusRing}`}
                href={`mailto:${CONTACT_EMAIL}`}
                data-umami-event="Email"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
