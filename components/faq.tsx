'use client'

import { useEffect } from 'react'

import { CONTACT_EMAIL } from '@/components/links'
import { Icon, type IconName } from '@/components/icons'

type FaqEntry = {
  icon: IconName
  q: string
  a: string
  id?: string
}

const faqs: FaqEntry[] = [
  {
    icon: 'puzzle',
    q: 'Is my problem a fit?',
    a: `Good fit: a task your team repeats often and can check objectively. Reading and filing documents, answering questions from company records, forecasting a number, deciding which cases to look at first, a feature inside your product. What data it needs depends on the task: document and search work starts from the files you already have; forecasting and prioritisation need past cases with the outcome. If you have one clear task, book the call. If you have several candidates or none yet, the Discovery Sprint exists for exactly that. Not sure? Email a redacted sample and the task to ${CONTACT_EMAIL}.`,
  },
  {
    icon: 'database',
    q: 'What data do you need?',
    a: 'Exports from the systems you already use: your database, your platform, spreadsheets, CSV files, document folders. Nothing has to be clean. Every Discovery Sprint and every build starts with a data audit where we tell you what is usable and what is missing. For models trained on history, a few thousand past cases with the outcome is a good rule of thumb.',
  },
  {
    icon: 'server',
    q: 'Does it connect to our systems or codebase?',
    a: 'At one of three levels, written into the pitch. Files: inputs and results move as spreadsheets, a shared folder, SFTP or an email inbox; we quote once we have seen one real export. Connected: we read from or write to your ERP, CRM or database through its API or a database view; we quote only after seeing the API documentation and a test login, or after a one-day integration check. Inside your software: changes in your codebase, shipped as pull requests your engineers review; this is billed per day (Embedded), never at a fixed price, because the scope depends on your code. We do not build bots that click through software with no API: too fragile to promise at a fixed price.',
  },
  {
    icon: 'check-badge',
    q: 'We already tried an AI pilot. Can you look at it?',
    a: 'Yes. Bring the pilot, the tool that was bought and not adopted, or the system another supplier built. We assess whether it can reach production, what it would take, and whether it is worth it, and say so in writing, including when the answer is no.',
  },
  {
    icon: 'key',
    q: 'What do I get at the end, and who owns it?',
    a: 'The working system with results against the acceptance test (for example: forecast error, share of documents filed correctly), plus everything we created to build it: code, models we trained, prompts, tests and documentation. On full payment the rights to all of that are yours, and you can run it yourself or with another team. Components we built before the project are licensed to you for use with it. Third-party models and software (for example a language-model provider) stay under their own terms, listed at handover, and your data, including any evaluation data you supplied, remains yours throughout.',
  },
  {
    icon: 'refresh',
    q: 'Where does it run, and who maintains it?',
    a: 'Pilot and Production builds are deployed where they will run, preferably in your own cloud account; a Starter runs on demand from files. Every build includes 3 months of Care. After that, a monthly plan (Care, Operate or Evolve, 30 days’ notice) or the handover pack: code in your repository, runbook, evaluation set, credentials list and a one-hour session, so you can take it in-house or to another supplier at any point. Hosting and model costs are never inside a plan fee.',
  },
  {
    id: 'data-protection',
    icon: 'lock',
    q: 'How do you protect our data?',
    a: 'Before any data is transferred we agree in writing where it is stored, who can access it, which subprocessors (including AI model providers) are used, how long it is kept and how it is deleted. We sign a data processing agreement where required, and we can work entirely inside your environment so data never leaves it.',
  },
  {
    icon: 'scale',
    q: 'What happens if the agreed result is not achieved?',
    a: 'The acceptance test is written into the proposal before the build starts. If a delivered build does not meet it on the agreed evaluation data, we keep working at our cost or you do not pay the final milestone. Your obligations (data access, a named contact, evaluation data) are written into the same proposal. A Discovery Sprint, integration check or feasibility test is different: it delivers a measurement and a written go/no-go, and a result below the bar is a valid answer, not a failure to deliver.',
  },
  {
    icon: 'clipboard',
    q: 'We are a public body. Can you work with our procedure?',
    a: 'Yes. Under the Código dos Contratos Públicos as revised from 1 October 2026, services under €75,000 can be bought by ajuste direto, and each of our fixed-price projects is below that limit. Tell us your purchase route and any value limit on the call. If your procedure does not allow payment before delivery, we invoice 100% on delivery, payable in 30 days.',
  },
  {
    icon: 'document',
    q: 'What do we get with a course?',
    a: 'Each module has an introduction, short narrated video lectures, worked examples, a conclusion and a 10-question quiz with feedback, written from the sources and learning outcomes agreed at the start. You review each module once before it is final. Everything is delivered as files ready to upload to your course platform. On full payment the course content is yours; the avatar and voice services used for narration stay under their own terms. Hosting the course, a final exam or capstone on your platform, and translations are quoted separately.',
  },
]

export default function Faq() {
  // Deep links such as /faq#data-protection must land on an open answer, not a collapsed question.
  useEffect(() => {
    const openTarget = () => {
      const target = window.location.hash && document.getElementById(window.location.hash.slice(1))
      if (target instanceof HTMLDetailsElement) target.open = true
    }
    openTarget()
    window.addEventListener('hashchange', openTarget)
    return () => window.removeEventListener('hashchange', openTarget)
  }, [])

  return (
    <section aria-labelledby="faq-title">
      <div className="max-w-6xl mx-auto px-4 pt-32 pb-16 sm:px-6 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h1 id="faq-title" className="h1 mb-4 text-gray-100">Questions we get before the call</h1>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-gray-800 border-y border-gray-800">
          {faqs.map((faq) => (
            <details key={faq.q} id={faq.id} className="group scroll-mt-24">
              <summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 [&::-webkit-details-marker]:hidden">
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-600/15 text-purple-300"
                  aria-hidden="true"
                >
                  <Icon name={faq.icon} className="h-5 w-5" />
                </span>
                <span className="h4 flex-1 text-gray-100">{faq.q}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="pb-6 pl-14 pr-9 text-base leading-relaxed text-gray-400 sm:text-lg">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
