import type { Metadata } from 'next'
import Link from 'next/link'

import { CONTACT_EMAIL, OG_IMAGE, SITE_URL, UMAMI_WEBSITE_ID, WEB3FORMS_ACCESS_KEY } from '@/components/links'

const title = 'Privacy · xval.ai'
const description = 'How xval.ai handles website, contact and project data.'

export const metadata: Metadata = {
  title: 'Privacy',
  description,
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    type: 'website',
    url: `${SITE_URL}/privacy`,
    siteName: 'xval.ai',
    title,
    description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [OG_IMAGE.url],
  },
}

const emailClass = 'text-purple-400 underline decoration-purple-400/40 underline-offset-4 hover:text-purple-300'

export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-16 md:pt-44 md:pb-24">
      <h1 className="h1 mb-10">Privacy</h1>

      <div className="space-y-8 text-gray-400">
        <section>
          <h2 className="h4 mb-3">Who we are</h2>
          <p>
            xval.ai is operated by Validação Cruzada, Lda. (NIPC 516 373 366), Portugal, which is the controller of the personal data described here. Contact:{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className={emailClass}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="h4 mb-3">Website analytics</h2>
          <p>
            {UMAMI_WEBSITE_ID
              ? 'We use Umami Cloud (Umami Software, Inc., USA) to see how the site is used. It sets no cookies. For each page view it receives the page address, the referring page, your browser, operating system, device type, screen size and language; your IP address is used, without being stored, to derive country, region and city and a visit identifier. We also record clicks on the booking, email, form and founder profile links, and each successful form submission, not what you type. Umami keeps this data for 6 months and processes it for us under its data processing agreement; its servers are in the EU and the US, and transfers to the US are covered by Standard Contractual Clauses. Legal basis: our legitimate interest in knowing which pages are used (Art. 6(1)(f) GDPR); you can object at any time by emailing us.'
              : 'This website uses no analytics, cookies or third-party trackers.'}
          </p>
        </section>

        <section>
          <h2 className="h4 mb-3">Booking a call</h2>
          <p>
            Booking uses Google Calendar appointment scheduling. The details you enter are processed by Google under its terms and stored in our calendar to run the call.
          </p>
        </section>

        {WEB3FORMS_ACCESS_KEY && (
          <section id="enquiry-form">
            <h2 className="h4 mb-3">Enquiry form</h2>
            <p>
              The form collects your name, organisation, what you need and by when, who signs, a budget range and your work email. We use them to reply to your enquiry and prepare a call, on the basis of our legitimate interest in answering business enquiries (Art. 6(1)(f) GDPR). Every field is needed for a useful reply; if you prefer, email us instead.
            </p>
            <p className="mt-3">
              The form is processed for us by Web3Forms (Web3Creative, India) under its{' '}
              <a href="https://web3forms.com/dpa" className={emailClass} target="_blank" rel="noopener noreferrer">
                data processing agreement
              </a>
              . Web3Forms emails your answers to us and keeps a copy for up to three years on Amazon Web Services, Cloudflare and Hetzner infrastructure; your IP and email address are checked by the spam filters CleanTalk and Akismet (USA). Transfers outside the EEA are covered by the European Commission&apos;s Standard Contractual Clauses included in that agreement. Details in the{' '}
              <a href="https://web3forms.com/privacy" className={emailClass} target="_blank" rel="noopener noreferrer">
                Web3Forms privacy policy
              </a>
              . We keep the email we receive like any other, for as long as needed to respond and to run any resulting engagement.
            </p>
          </section>
        )}

        <section>
          <h2 className="h4 mb-3">Email</h2>
          <p>
            If you email us, we keep the correspondence for as long as needed to respond and to run any resulting engagement.
          </p>
        </section>

        <section>
          <h2 className="h4 mb-3">Project data</h2>
          <p>
            Data shared for a project is governed by the written agreement for that project, including a data processing agreement where required.
          </p>
        </section>

        <section>
          <h2 className="h4 mb-3">Hosting</h2>
          <p>
            The site is hosted on GitHub Pages (GitHub, Inc., USA), which logs visitors’ IP addresses for security purposes under the{' '}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" className={emailClass} target="_blank" rel="noopener noreferrer">
              GitHub Privacy Statement
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="h4 mb-3">Your rights</h2>
          <p>
            You can ask us for access to your personal data, its correction or deletion, restriction of its use, or a copy in a portable format, at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className={emailClass}>
              {CONTACT_EMAIL}
            </a>
            . Where we rely on our legitimate interest (analytics, enquiries, booking), you can object at any time. You can also complain to the Comissão Nacional de Proteção de Dados (CNPD), Av. D. Carlos I, 134, 1.º, 1200-651 Lisboa,{' '}
            <a href="https://www.cnpd.pt" className={emailClass} target="_blank" rel="noopener noreferrer">
              www.cnpd.pt
            </a>
            .
          </p>
        </section>

        <p className="text-sm">Last updated: October 2026.</p>

        <Link className="inline-block text-purple-400 underline decoration-purple-400/40 underline-offset-4 hover:text-purple-300" href="/">
          Back to xval.ai
        </Link>
      </div>
    </section>
  )
}
