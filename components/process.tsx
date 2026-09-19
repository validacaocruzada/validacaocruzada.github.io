const steps = [
  {
    n: '01',
    title: 'Specify',
    body: 'We turn your problem into a written spec and a set of acceptance scenarios: concrete inputs, expected outputs, and the metric that means “done”. You sign off before anything is built.',
  },
  {
    n: '02',
    title: 'Grow',
    body: 'AI agents write the code, the tests and the infrastructure. A validation harness runs the scenarios thousands of times and the agents iterate until the results converge. Our engineers watch the metrics, not the diffs.',
  },
  {
    n: '03',
    title: 'Ship',
    body: 'You receive the running system, the source, the harness and the documentation. Deployed in your cloud or ours, owned by you, with a handover session for your team.',
  },
]

export default function Process() {
  return (
    <section id="how-we-work" aria-labelledby="process-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="process-title" className="h2 mb-4 text-gray-100">How a software factory works</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
            Traditional teams scale with people. A software factory scales with compute. That is why we can quote in days and deliver in weeks.
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <article
              key={step.n}
              className="rounded-2xl border border-gray-700/60 bg-gray-800 p-6 transition duration-300 motion-safe:hover:-translate-y-1 hover:border-gray-600 md:p-7"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-5 font-mono text-sm font-bold tracking-widest text-purple-400">{step.n}</div>
              <h3 className="h4 mb-3 text-gray-100">{step.title}</h3>
              <p className="text-base leading-relaxed text-gray-400 sm:text-lg">{step.body}</p>
            </article>
          ))}
        </div>

        <aside
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-purple-500/40 bg-gray-800 p-7 shadow-2xl shadow-purple-900/10 md:p-10"
          data-aos="fade-up"
        >
          <div className="absolute inset-y-0 left-0 w-1 bg-purple-600" aria-hidden="true" />
          <div className="mb-5 text-xs font-bold uppercase tracking-widest text-purple-400 sm:text-sm">Our two rules</div>
          <ul className="mb-7 space-y-3">
            <li className="border-b border-gray-700/70 pb-3 font-mono text-lg font-bold tracking-tight text-gray-100 sm:text-2xl">
              Code must not be written by humans.
            </li>
            <li className="font-mono text-lg font-bold tracking-tight text-gray-100 sm:text-2xl">
              Code must not be reviewed by humans.
            </li>
          </ul>
          <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
            Humans are excellent at deciding what should exist and how to tell whether it works. They are slow and inconsistent at typing it out and reading it back.
            So our engineers spend their time on the spec, the scenarios and the validation harness, and the agents spend the compute.
            Every decision is traceable, every behaviour is re-tested on every change, and the price does not grow with the number of lines.
          </p>
        </aside>
      </div>
    </section>
  )
}
