import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">xval.ai<br/><br/>Building AI<br/>for the most critical professions in the world</h1>

            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">We create AI technology to address the crucial challenges of our time.</p>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Get in touch at <b>hello@xval.ai</b>.</p>

          </div>

        </div>

      </div>
    </section>
  )
}

