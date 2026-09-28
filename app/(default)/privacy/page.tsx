import type { Metadata } from 'next'
import Link from 'next/link'

import { CONTACT_EMAIL, UMAMI_WEBSITE_ID } from '@/components/links'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How xval.ai handles website, contact and project data.',
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
            xval.ai is operated by Validação Cruzada Lda. (NIPC 516373366), Portugal. Contact:{' '}
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
              ? 'We use Umami, a cookie-free analytics service that does not collect personal data. We record aggregate page views and clicks on the booking and email links.'
              : 'This website uses no analytics, cookies or third-party trackers.'}
          </p>
        </section>

        <section>
          <h2 className="h4 mb-3">Booking a call</h2>
          <p>
            Booking uses Google Calendar appointment scheduling. The details you enter are processed by Google under its terms and stored in our calendar to run the call.
          </p>
        </section>

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
          <h2 className="h4 mb-3">Your rights</h2>
          <p>
            You can ask what personal data we hold about you and request its correction or deletion at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className={emailClass}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>

        <p className="text-sm">Last updated: September 2026.</p>

        <Link className="inline-block text-purple-400 underline decoration-purple-400/40 underline-offset-4 hover:text-purple-300" href="/">
          Back to xval.ai
        </Link>
      </div>
    </section>
  )
}
