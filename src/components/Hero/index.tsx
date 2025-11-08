import { scrollTo } from '../../utils/scrollTo'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-1.jpg"
          alt="Traditional Indian spices and masala jars"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080"%3E%3Cdefs%3E%3ClinearGradient id="grad" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%237b2b1f;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23d98f00;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1920" height="1080" fill="url(%23grad)"/%3E%3C/svg%3E'
          }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* Spice particles effect */}
      <div className="spice-particles absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="spice-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-saffron bg-opacity-20 backdrop-blur-sm border border-brand-saffron px-4 py-2 rounded-full">
              <MortarPestleIcon className="w-5 h-5 text-brand-saffron" />
              <span className="text-brand-saffron font-semibold text-sm">
                100% Natural • Small Batch • Traditional
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="text-brand-cream">Archana Masale</span>
              </h1>
              <p className="font-heading text-3xl md:text-4xl text-brand-saffron mb-2">
                परम्परा हर चम्मच में
              </p>
              <p className="text-xl md:text-2xl text-brand-cream font-light italic">
                Tradition in every spoonful
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
              Experience the authentic taste of India with our handcrafted spice
              blends. From farm to masala, we preserve the soul of traditional
              recipes in every jar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('products')}
                className="btn-primary text-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Shop Products</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </span>
              </button>
              <a
                href="mailto:contact@archanamasale.com?subject=Distributor Enquiry"
                className="btn-secondary text-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Contact Distributor</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-brand-cardamom bg-opacity-20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-brand-cardamom"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">100% Natural</p>
                  <p className="text-xs text-gray-300">No Preservatives</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded-full bg-brand-saffron bg-opacity-20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-brand-saffron"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Premium Quality</p>
                  <p className="text-xs text-gray-300">Handpicked Spices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Featured Image */}
          <div className="hidden lg:block relative">
            <div className="relative animate-fade-in">
              <img
                src="/assets/hero-2.jpg"
                alt="Woman with traditional Indian spices"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="600"%3E%3Crect width="600" height="600" fill="%23f7efe6"/%3E%3Ctext x="300" y="300" font-size="24" text-anchor="middle" fill="%237b2b1f" font-family="serif"%3EArchana Masale%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-maroon text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">25+</p>
                <p className="text-sm">Years of Tradition</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollTo('about')}
          className="animate-bounce text-white focus-visible-ring rounded-full p-2"
          aria-label="Scroll to next section"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
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

export default Hero
