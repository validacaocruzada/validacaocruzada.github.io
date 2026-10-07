'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'

import { CONTACT_EMAIL, WEB3FORMS_ACCESS_KEY } from '@/components/links'

const focusRing = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'

// Each field overlays an invisible copy of its text, so it is exactly as wide as what it shows.
const wrapClass = 'relative mx-[0.2em] inline-block max-w-full align-baseline'
const mirrorClass = 'invisible block whitespace-pre border-b pb-1 pr-[0.15em] leading-tight'
const fieldClass =
  'absolute inset-0 h-full w-full min-w-0 border-0 border-b border-gray-600 bg-transparent p-0 pb-1 leading-tight text-gray-100 placeholder:text-gray-500 transition-colors hover:border-gray-400 focus:border-purple-400 focus:outline-none focus:ring-0'

const sources = ['LinkedIn', 'a search engine', 'a referral', 'an event', 'somewhere else']

type Field = 'need' | 'name' | 'title' | 'company' | 'country' | 'email' | 'phone' | 'source'
type Status = 'idle' | 'sending' | 'sent' | 'error'

const empty: Record<Field, string> = { need: '', name: '', title: '', company: '', country: '', email: '', phone: '', source: '' }

export default function Enquiry() {
  const [values, setValues] = useState(empty)
  const [status, setStatus] = useState<Status>('idle')

  if (!WEB3FORMS_ACCESS_KEY) return null

  const update = (field: Field) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setValues((current) => ({ ...current, [field]: event.target.value }))

  const input = (field: Field, placeholder: string, props: { type?: string; required?: boolean; autoComplete?: string } = {}) => (
    <span className={wrapClass}>
      <span aria-hidden="true" className={mirrorClass}>
        {values[field] || placeholder}
      </span>
      <input
        name={field}
        type={props.type ?? 'text'}
        required={props.required}
        autoComplete={props.autoComplete}
        aria-label={placeholder}
        placeholder={placeholder}
        value={values[field]}
        onChange={update(field)}
        className={fieldClass}
      />
    </span>
  )

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `xval.ai enquiry from ${values.name}${values.company ? `, ${values.company}` : ''}`,
          from_name: 'xval.ai website',
          botcheck: (form.elements.namedItem('botcheck') as HTMLInputElement).checked,
          ...values,
        }),
      })
      const result = await response.json()
      setStatus(result.success ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="enquiry" className="scroll-mt-20" aria-labelledby="enquiry-title">
      <div className="max-w-6xl mx-auto border-t border-gray-800/80 px-4 py-16 sm:px-6 md:py-24">
        <h2 id="enquiry-title" className="mb-8 text-xs font-bold uppercase tracking-widest text-purple-400 sm:text-sm">
          Tell us what you need
        </h2>

        {status === 'sent' ? (
          <p role="status" className="text-2xl leading-relaxed text-gray-100 md:text-4xl md:leading-relaxed">
            Thanks, {values.name.split(' ')[0]}. Pedro will reply to {values.email} within a business day.
          </p>
        ) : (
          <form onSubmit={submit}>
            <p className="text-2xl leading-relaxed text-gray-100 md:text-4xl md:leading-relaxed">
              I need{input('need', 'what you need', { required: true })}. I’m{input('name', 'your name', { required: true, autoComplete: 'name' })},
              {input('title', 'title', { autoComplete: 'organization-title' })}at{input('company', 'company', { autoComplete: 'organization' })}in
              {input('country', 'country', { autoComplete: 'country-name' })}. Reach me at
              {input('email', 'work email', { type: 'email', required: true, autoComplete: 'email' })}or
              {input('phone', 'phone', { type: 'tel', autoComplete: 'tel' })}. I heard about xval.ai from
              <span className={wrapClass}>
                <span aria-hidden="true" className={`${mirrorClass} pr-[0.9em]`}>
                  {values.source || 'somewhere'}
                </span>
                <select
                  name="source"
                  aria-label="where you heard about xval.ai"
                  value={values.source}
                  onChange={update('source')}
                  className={`${fieldClass} cursor-pointer appearance-none pr-[0.9em] ${values.source ? '' : 'text-gray-500'}`}
                >
                  <option value="" disabled>
                    somewhere
                  </option>
                  {sources.map((source) => (
                    <option key={source} value={source} className="bg-gray-800 text-gray-100">
                      {source}
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
              .
            </p>

            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <button
                type="submit"
                disabled={status === 'sending'}
                data-umami-event="Enquiry Form"
                className={`btn bg-purple-600 text-white shadow-lg shadow-purple-900/20 hover:bg-purple-700 disabled:opacity-60 ${focusRing}`}
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
