export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">          

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <h4 className="h4 mb-2">Predictive Analytics</h4>
              <p className="text-lg text-gray-400 text-center">
                Harness machine learning to analyse data trends and make accurate predictions, guiding decision-making processes across various sectors.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >

              <h4 className="h4 mb-2">Generative AI</h4>
              <p className="text-lg text-gray-400 text-center">
                Leverage Generative AI to create novel content, from realistic images to specialized text, changing the way we write, build and create.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >

              <h4 className="h4 mb-2">Process Optimisation</h4>
              <p className="text-lg text-gray-400 text-center">
                Analyse and optimise critical operational processes, ensuring maximum quality, efficiency and resource utilisation.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
