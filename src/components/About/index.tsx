import { useIntersection } from '../../hooks/useIntersection'

const About = () => {
  const [ref, isVisible] = useIntersection({ threshold: 0.2 })

  return (
      <section
      id="about"
      className="section-padding paper-texture relative overflow-hidden"
      ref={ref as any}
    >
      <div className="texture-overlay absolute inset-0 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-px w-16 bg-brand-maroon"></div>
            <MortarPestleIcon className="w-8 h-8 text-brand-maroon mx-4" />
            <div className="h-px w-16 bg-brand-maroon"></div>
          </div>
          <h2 className="heading-secondary mb-4">Our Story</h2>
          <p className="text-xl text-brand-turmeric font-heading">
            हमारी कहानी — A Legacy of Flavor
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <img
                src="/assets/hero-2.jpg"
                alt="Traditional spice preparation"
                className="rounded-2xl shadow-spice w-full h-[500px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="500"%3E%3Crect width="600" height="500" fill="%23f7efe6"/%3E%3Ccircle cx="300" cy="250" r="100" fill="%237b2b1f" opacity="0.1"/%3E%3C/svg%3E'
                }}
                loading="lazy"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-saffron rounded-full opacity-20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-cardamom rounded-full opacity-20 -z-10"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                For over <strong className="text-brand-maroon">25 years</strong>
                , Archana Masale has been bringing the authentic taste of Indian
                traditions to kitchens across the country. Our journey began in
                a small village where our grandmother, Archana, perfected her
                spice blends using age-old recipes passed down through
                generations.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Every blend we create honors that legacy. We source the finest
                spices directly from farmers who share our commitment to quality
                and sustainability. Each batch is{' '}
                <strong className="text-brand-maroon">
                  handcrafted in small quantities
                </strong>
                , ensuring the freshness and potency that makes our masalas
                truly special.
              </p>

              <p className="text-gray-700 leading-relaxed">
                From <em>farm to masala</em>, we preserve the soul of
                traditional Indian cooking. No artificial colors, no
                preservatives — just pure, authentic spices that bring warmth
                and flavor to your family's table.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-brand-maroon">
                <div className="flex items-center space-x-2 mb-2">
                  <svg
                    className="w-6 h-6 text-brand-cardamom"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="font-semibold text-brand-maroon">
                    100% Natural
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  No artificial additives or preservatives
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-brand-saffron">
                <div className="flex items-center space-x-2 mb-2">
                  <svg
                    className="w-6 h-6 text-brand-saffron"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="font-semibold text-brand-maroon">
                    Small Batch
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  Handcrafted for maximum freshness
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-brand-turmeric">
                <div className="flex items-center space-x-2 mb-2">
                  <svg
                    className="w-6 h-6 text-brand-turmeric"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <h3 className="font-semibold text-brand-maroon">
                    Farm Fresh
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  Direct from farmers to your kitchen
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-brand-cardamom">
                <div className="flex items-center space-x-2 mb-2">
                  <svg
                    className="w-6 h-6 text-brand-cardamom"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="font-semibold text-brand-maroon">
                    Traditional
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  Recipes passed through generations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Mortar & Pestle Icon Component
const MortarPestleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h10v2H7zm0 4h7v2H7z" />
  </svg>
)

export default About
