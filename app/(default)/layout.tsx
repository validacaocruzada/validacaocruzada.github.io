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
      <main className="grow">

        <PageIllustration />

        {children}

      </main>

      <Footer />
      <Analytics />
    </>
  )
}
