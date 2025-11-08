import { useState, FormEvent } from 'react'
import { scrollToTop } from '../../utils/scrollTo'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) return

    // Simulate newsletter signup
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setNewsletterStatus('success')
      setEmail('')
      setTimeout(() => setNewsletterStatus('idle'), 3000)
    } catch {
      setNewsletterStatus('error')
      setTimeout(() => setNewsletterStatus('idle'), 3000)
    }
  }

  return (
    <footer className="bg-brand-maroon text-white relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="rangoli-pattern absolute inset-0"></div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/assets/logo.png"
                  alt="Archana Masale"
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"%3E%3Ccircle cx="30" cy="30" r="28" fill="white"/%3E%3Ctext x="30" y="38" font-size="24" text-anchor="middle" fill="%237b2b1f" font-family="serif"%3Eअ%3C/text%3E%3C/svg%3E'
                  }}
                />
                <div>
                  <h3 className="font-heading text-xl font-bold">
                    Archana Masale
                  </h3>
                  <p className="text-sm text-brand-saffron">
                    परम्परा हर चम्मच में
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Authentic Indian spice blends crafted with love and tradition
                for over 25 years.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-colors focus-visible-ring"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-colors focus-visible-ring"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-colors focus-visible-ring"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center transition-colors focus-visible-ring"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg font-bold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-brand-saffron transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-brand-saffron transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-gray-300 hover:text-brand-saffron transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#recipes"
                    className="text-gray-300 hover:text-brand-saffron transition-colors"
                  >
                    Recipes
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-300 hover:text-brand-saffron transition-colors"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-300 hover:text-brand-saffron transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-brand-saffron transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-heading text-lg font-bold mb-4">
                Customer Service
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:orders@archanamasale.com"
                    className="text-gray-300 hover:text-brand-saffron transition-colors"
                  >
                    Place an Order
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:wholesale@archanamasale.com"
                    className="text-gray-300 hover:text-brand-saffron transition-colors"
                  >
                    Wholesale Enquiry
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:custom@archanamasale.com"
                    className="text-gray-300 hover:text-brand-saffron transition-colors"
                  >
                    Custom Blends
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-brand-saffron transition-colors"
                  >
                    Shipping Information
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-brand-saffron transition-colors"
                  >
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-brand-saffron transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-brand-saffron transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-heading text-lg font-bold mb-4">
                Newsletter
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to receive updates, recipes, and special offers!
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-saffron"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-brand-saffron hover:bg-brand-turmeric text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Subscribe
                </button>
                {newsletterStatus === 'success' && (
                  <p className="text-brand-saffron text-sm">
                    Thank you for subscribing!
                  </p>
                )}
                {newsletterStatus === 'error' && (
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Archana Masale. All rights reserved.
              Made with{' '}
              <span className="text-red-500" aria-label="love">
                ❤
              </span>{' '}
              in India
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="#"
                className="text-gray-300 hover:text-brand-saffron transition-colors"
              >
                Privacy
              </a>
              <span className="text-gray-500">•</span>
              <a
                href="#"
                className="text-gray-300 hover:text-brand-saffron transition-colors"
              >
                Terms
              </a>
              <span className="text-gray-500">•</span>
              <a
                href="#"
                className="text-gray-300 hover:text-brand-saffron transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-brand-saffron hover:bg-brand-turmeric text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 focus-visible-ring"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  )
}

export default Footer
