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
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-blue-800" // Changed to dark blue
                  width="64"
                  height="64"
                  rx="32"
                />
                <circle
                  className="stroke-current text-blue-100" // Dark blue theme for the circle
                  cx="32"
                  cy="32"
                  r="20"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  className="fill-current text-blue-300" // Lighter blue for inner glow effect
                  cx="32"
                  cy="32"
                  r="10"
                />
                {/* Crystal ball shading for a more 3D effect */}
                <path
                  className="stroke-current text-blue-300"
                  d="M32 12 Q44 32 32 52 Q20 32 32 12"
                  strokeWidth="0.5"
                />
                {/* Same lines as in the original SVG */}
                <path
                  className="stroke-current text-blue-300"
                  d="M43 42h-9M43 37h-9"
                  strokeLinecap="square"
                  strokeWidth="2"
                />
              </svg>

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
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-blue-800" // Dark blue background
                  width="64"
                  height="64"
                  rx="32"
                />
                {/* Lightbulb */}
                <g fill="none" stroke="currentColor" strokeWidth="2">
                  {/* Bulb */}
                  <circle
                    className="stroke-current text-blue-100" // Light bulb color
                    cx="32"
                    cy="24"
                    r="12"
                  />
                  {/* Filament */}
                  <path
                    className="stroke-current text-blue-300"
                    d="M32 24v-4"
                  />
                  {/* Base */}
                  <rect
                    className="fill-current text-blue-300"
                    x="28"
                    y="36"
                    width="8"
                    height="6"
                    rx="2"
                  />
                  {/* Screw threads */}
                  <path
                    className="stroke-current text-blue-300"
                    d="M28 42h8M28 44h8"
                  />
                </g>
                {/* Same lines as in the original SVG */}
                <path
                  className="stroke-current text-blue-300"
                  d="M43 42h-9M43 37h-9"
                  strokeLinecap="square"
                  strokeWidth="2"
                />
              </svg>

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
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-current text-blue-800" // Dark blue background
                  width="64"
                  height="64"
                  rx="32"
                />
                {/* Chart Trending Upwards */}
                <polyline
                  className="stroke-current text-blue-100" // Line color
                  points="16,48 28,36 40,40 52,24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                {/* Dots on the Chart */}
                <g className="fill-current text-blue-300">
                  <circle cx="16" cy="48" r="2" />
                  <circle cx="28" cy="36" r="2" />
                  <circle cx="40" cy="40" r="2" />
                  <circle cx="52" cy="24" r="2" />
                </g>
                {/* Same lines as in the original SVG */}
                <path
                  className="stroke-current text-blue-300"
                  d="M43 42h-9M43 37h-9"
                  strokeLinecap="square"
                  strokeWidth="2"
                />
              </svg>

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
