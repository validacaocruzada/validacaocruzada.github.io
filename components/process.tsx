const steps = [
  {
    n: '01',
    title: 'Call',
    duration: '30 minutes · free',
    body: 'You tell us the decision you want automated and what data you have. We tell you whether it is feasible, what we would build and roughly what it costs. No preparation needed.',
  },
  {
    n: '02',
    title: 'Spec',
    duration: 'Within days',
    body: 'We send a written proposal: the data we need, the success criteria in plain numbers, the timeline and a fixed price. You sign off before anything is built.',
  },
  {
    n: '03',
    title: 'Sprint',
    duration: '2–6 weeks',
    body: 'Fixed-length build with a fixed end date. You see results on your real data along the way. The clock starts the day the data reaches us.',
  },
  {
    n: '04',
    title: 'Deliver',
    duration: 'On the agreed date',
    body: 'A results presentation against the success criteria and a working system with source, documentation and a handover session. Then you decide the next step.',
  },
]

export default function Process() {
  return (
    <section id="how-we-work" aria-labelledby="process-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="process-title" className="h2 mb-4 text-gray-100">How it works</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
            One call, a written spec, a fixed-length sprint, a deliverable. You know the price and the date before we start.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <li
              key={step.n}
              className="flex h-full flex-col rounded-2xl border border-gray-700/60 bg-gray-800 p-6 transition duration-300 motion-safe:hover:-translate-y-1 hover:border-gray-600 md:p-7"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-5 font-mono text-sm font-bold tracking-widest text-purple-400">{step.n}</div>
              <h3 className="h4 mb-2 text-gray-100">{step.title}</h3>
              <div className="mb-4 text-sm font-bold text-purple-300">{step.duration}</div>
              <p className="text-base leading-relaxed text-gray-400 sm:text-lg">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
