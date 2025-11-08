import { useState, useEffect } from 'react'
import { scrollTo } from '../../utils/scrollTo'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'home', label: 'Home', hindi: 'होम' },
    { id: 'about', label: 'About', hindi: 'हमारे बारे में' },
    { id: 'products', label: 'Products', hindi: 'उत्पाद' },
    { id: 'recipes', label: 'Recipes', hindi: 'व्यंजन' },
    { id: 'testimonials', label: 'Reviews', hindi: 'समीक्षा' },
    { id: 'faq', label: 'FAQ', hindi: 'सवाल' },
    { id: 'contact', label: 'Contact', hindi: 'संपर्क' },
  ]

  const handleNavClick = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      scrollTo(id)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white bg-opacity-95 py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/src/assets/logo.png"
              alt="Archana Masale Logo"
              className="h-12 md:h-14 w-auto"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="45" fill="%237b2b1f"/%3E%3Ctext x="50" y="60" font-size="40" text-anchor="middle" fill="white" font-family="serif"%3Eअ%3C/text%3E%3C/svg%3E'
              }}
            />
            <div>
              <h1 className="font-heading text-xl md:text-2xl font-bold text-brand-maroon">
                Archana Masale
              </h1>
              <p className="text-xs text-brand-turmeric font-medium hidden md:block">
                परम्परा हर चम्मच में
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="menubar">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-gray-700 hover:text-brand-maroon transition-colors font-medium focus-visible-ring rounded px-2 py-1 group"
                role="menuitem"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-maroon transition-all duration-300 group-hover:w-full"></span>
                </span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-brand-maroon focus-visible-ring rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
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
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-brand-cream z-40 overflow-y-auto">
          <nav className="container-custom py-8 space-y-6" role="menu">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left text-lg font-semibold text-gray-800 hover:text-brand-maroon transition-colors focus-visible-ring rounded p-3"
                role="menuitem"
              >
                <span className="block">{link.label}</span>
                <span className="block text-sm text-brand-turmeric mt-1">
                  {link.hindi}
                </span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
