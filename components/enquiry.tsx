'use client'

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react'

import { CONTACT_EMAIL, WEB3FORMS_ACCESS_KEY } from '@/components/links'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'

// Each field overlays an invisible copy of its text, so it is exactly as wide as what it shows.
const wrapClass = 'relative inline-block align-baseline'
const mirrorClass = 'invisible block whitespace-pre border-b pb-1 pr-[0.15em] leading-tight'
const fieldClass =
  'absolute inset-0 h-full w-full min-w-0 border-0 border-b border-gray-500 bg-transparent p-0 pb-1 leading-tight text-gray-100 placeholder:text-gray-400 transition-colors hover:border-gray-400 focus:border-purple-400 focus:shadow-[0_1px_0_0_#ABABFF] focus:outline-none focus:ring-0 [&:user-invalid]:border-red-400'

// BANT only (../proposals/discovery-guide.md, stage 1): need, timeline, authority, budget. Everything else in the intake
// record is asked in the first minutes of the call. Option text is sent verbatim, so it reads as the client's answer.
// Keep every option and placeholder under ~27 characters: a select cannot wrap, and longer text is cut off at 360 px.
const options = {
  signer: ['I sign', 'I sign with someone else', 'Someone else signs'],
  budget: ['up to €10,000', '€10,000–€30,000', 'over €30,000', 'not set yet'],
}

type Choice = keyof typeof options
type Field = Choice | 'name' | 'company' | 'need' | 'deadline' | 'email'
type Status = 'idle' | 'sending' | 'sent' | 'error'

const empty: Record<Field, string> = { name: '', company: '', need: '', deadline: '', signer: '', budget: '', email: '' }

// Each field sits in a no-wrap line with its trailing punctuation, so '.' and ',' never start a line. A field followed
// by punctuation drops its right margin so the punctuation sits against it.
const lineClass = 'inline-block max-w-full whitespace-nowrap align-baseline'
const spacedClass = 'mx-[0.2em] max-w-[calc(100%-0.4em)]'
const suffixedClass = 'ml-[0.2em] max-w-[calc(100%-0.4em)]'

export default function Enquiry() {
  const [values, setValues] = useState(empty)
  const [status, setStatus] = useState<Status>('idle')
  const thanks = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (status === 'sent') thanks.current?.focus()
  }, [status])

  if (!WEB3FORMS_ACCESS_KEY) return null

  const update = (field: Field) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setValues((current) => ({ ...current, [field]: event.target.value }))

  const input = (
    field: Field,
    placeholder: string,
    label: string,
    props: { type?: string; autoComplete?: string; suffix?: string } = {},
  ) => {
    const suffix = props.suffix ?? ''
    return (
      <span className={lineClass}>
        <span className={`${wrapClass} ${suffix ? suffixedClass : spacedClass}`}>
          <span aria-hidden="true" className={mirrorClass}>
            {values[field] || placeholder}
          </span>
          <input
            name={field}
            type={props.type ?? 'text'}
            required
            pattern={props.type === 'email' ? undefined : '.*\\S.*'}
            autoComplete={props.autoComplete}
            aria-label={label}
            placeholder={placeholder}
            value={values[field]}
            onChange={update(field)}
            className={fieldClass}
          />
        </span>
        {suffix}
      </span>
    )
  }

  const choice = (field: Choice, placeholder: string, label: string, suffix = '') => (
    <span className={lineClass}>
      <span className={`${wrapClass} ${suffix ? suffixedClass : spacedClass}`}>
        {/* Wider than the select's own padding: Chrome indents select text a few px, which clips the last letter otherwise. */}
        <span aria-hidden="true" className={`${mirrorClass} pr-[1.3em]`}>
          {values[field] || placeholder}
        </span>
        <select
          name={field}
          aria-label={label}
          aria-invalid={false}
          required
          value={values[field]}
          onChange={update(field)}
          className={`${fieldClass} cursor-pointer appearance-none pr-[0.9em] ${values[field] ? '' : 'text-gray-400'}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options[field].map((option) => (
            <option key={option} value={option} className="bg-gray-800 text-gray-100">
              {option}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="pointer-events-none absolute right-0 top-1/2 h-[0.5em] w-[0.5em] -translate-y-1/2 text-gray-500"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
      {suffix}
    </span>
  )

  async function submit(event: FormEvent<HTMLFormElement>) {
    // Without JS the form posts natively to Web3Forms using the hidden inputs; with JS the JSON body below is sent instead.
    event.preventDefault()
    if (status === 'sending') return
    const form = event.currentTarget
    const answers = Object.fromEntries(
      Object.entries(values).map(([field, value]) => [field, value.trim()]),
    ) as Record<Field, string>
    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `xval.ai enquiry from ${answers.name}, ${answers.company}`,
          from_name: 'xval.ai website',
          botcheck: (form.elements.namedItem('botcheck') as HTMLInputElement).checked,
          ...answers,
        }),
      })
      const result = await response.json()
      if (result.success) {
        ;(window as Window & { umami?: { track: (event: string) => void } }).umami?.track('Enquiry Form')
      }
      setStatus(result.success ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const firstName = values.name.trim().split(/\s+/)[0]

  return (
    <section id="enquiry" aria-labelledby="enquiry-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <h2 id="enquiry-title" className="mb-4 text-xs font-bold uppercase tracking-widest text-purple-400 sm:text-sm">
          Tell us what you need
        </h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-400">
          Not ready to book a call? Fill in the sentence and Pedro replies within a business day.
        </p>

        {status === 'sent' ? (
          <p
            ref={thanks}
            tabIndex={-1}
            role="status"
            className="text-xl leading-relaxed text-gray-100 focus:outline-none sm:text-2xl md:text-4xl md:leading-relaxed"
          >
            {firstName ? `Thanks, ${firstName}.` : 'Thanks.'} Pedro will reply to {values.email.trim()} within a business
            day.
          </p>
        ) : (
          <form onSubmit={submit} method="post" action="https://api.web3forms.com/submit">
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="xval.ai enquiry" />
            <input type="hidden" name="from_name" value="xval.ai website" />

            <p className="text-xl leading-relaxed text-gray-100 sm:text-2xl md:text-4xl md:leading-relaxed">
              I’m{input('name', 'your name', 'your name', { autoComplete: 'name' })}from
              {input('company', 'organisation', 'your organisation', { autoComplete: 'organization', suffix: '.' })} We need
              {input('need', 'a course, workshop or build', 'what you need: a course, workshop or build')}by
              {input('deadline', 'when', 'when you need it done', { suffix: '.' })}
              {choice('signer', 'Who signs', 'who signs', ',')} and our budget is
              {choice('budget', 'how much', 'how much budget', '.')} Reach me at
              {input('email', 'work email', 'your work email', { type: 'email', autoComplete: 'email', suffix: '.' })}
            </p>

            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-gray-400">
              “Not set yet” is a fine answer for budget. Validação Cruzada, Lda. uses your answers only to reply to this
              enquiry. They reach us through Web3Forms, our form processor, which checks your IP and email address with
              spam filters and may process them outside the EU. How long we keep them and your rights:{' '}
              <a
                href="/privacy#enquiry-form"
                className={`text-purple-400 underline underline-offset-4 hover:text-purple-300 ${focusRing}`}
              >
                Privacy
              </a>
              .
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <button
                type="submit"
                aria-disabled={status === 'sending'}
                className={`btn bg-purple-600 text-white shadow-lg shadow-purple-900/20 hover:bg-purple-700 aria-disabled:opacity-60 ${focusRing}`}
              >
                {status === 'sending' ? 'Sending…' : 'Send'}
              </button>
              {status === 'error' && (
                <p role="alert" className="text-base text-gray-300">
                  That did not go through. Email{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-purple-400 underline underline-offset-4">
                    {CONTACT_EMAIL}
                  </a>{' '}
                  instead.
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
