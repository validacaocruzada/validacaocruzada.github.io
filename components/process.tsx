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
    <section id="how-we-work">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">How a software factory works</h2>
            <p className="text-xl text-gray-400">
              Traditional teams scale with people. A software factory scales with compute. That is why we can quote in days and deliver in weeks.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-12 mb-16">
            {steps.map((s, i) => (
              <div key={s.n} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="text-purple-500 font-bold text-sm tracking-widest mb-2">{s.n}</div>
                <h4 className="h4 mb-3">{s.title}</h4>
                <p className="text-lg text-gray-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto bg-gray-800 rounded-md p-8 md:p-10" data-aos="fade-up">
            <div className="text-sm font-semibold uppercase tracking-widest text-purple-500 mb-4">Our two rules</div>
            <ul className="space-y-3 mb-6">
              <li className="text-2xl font-bold text-gray-100">Code must not be written by humans.</li>
              <li className="text-2xl font-bold text-gray-100">Code must not be reviewed by humans.</li>
            </ul>
            <p className="text-lg text-gray-400">
              Humans are excellent at deciding what should exist and how to tell whether it works. They are slow and inconsistent at typing it out and reading it back.
              So our engineers spend their time on the spec, the scenarios and the validation harness, and the agents spend the compute.
              Every decision is traceable, every behaviour is re-tested on every change, and the price does not grow with the number of lines.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
