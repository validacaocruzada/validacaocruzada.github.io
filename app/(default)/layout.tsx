import Analytics from '@/components/analytics'
import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="grow focus:outline-none">

        <PageIllustration />

        {children}

      </main>

      <Footer />
      <Analytics />
    </>
  )
}
