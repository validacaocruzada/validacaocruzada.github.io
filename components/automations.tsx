import { IconTile, type IconName } from '@/components/icons'

const automations: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'document',
    title: 'Invoices to spreadsheet',
    body: 'Supplier invoices dropped in a shared folder become rows in your spreadsheet: supplier, tax number, date, amount. Anything unclear is flagged for a person.',
  },
  {
    icon: 'chat-bubble',
    title: 'Enquiries logged and answered',
    body: 'Every enquiry from your form or sales inbox is read, checked against your criteria, added to your lead sheet, and a reply is drafted for you to send.',
  },
  {
    icon: 'inbox',
    title: 'Shared inbox sorted',
    body: 'Mail to info@ or support@ is labelled by type, routed to the right person, and gets a draft reply written from your own FAQ. A person presses send.',
  },
]

export default function Automations() {
  return (
    <section id="automations" aria-labelledby="automations-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h2 id="automations-title" className="h2 mb-4 text-gray-100">Examples of what we automate</h2>
          <p className="text-lg leading-relaxed text-gray-400 sm:text-xl">
            Three jobs most companies still do by hand. Yours may be a different one: bring it to the call. A person stays in charge of anything unclear and of anything that gets sent.
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {automations.map((automation) => (
            <article
              key={automation.title}
              className="flex h-full flex-col rounded-2xl border border-gray-700/60 bg-gray-800 p-6 transition duration-300 motion-safe:hover:-translate-y-1 hover:border-gray-600 md:p-7"
            >
              <IconTile name={automation.icon} className="mb-5 h-12 w-12" />
              <h3 className="h4 mb-3 text-gray-100">{automation.title}</h3>
              <p className="text-base leading-relaxed text-gray-400 sm:text-lg">{automation.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
