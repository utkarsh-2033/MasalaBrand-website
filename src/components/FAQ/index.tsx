import { useState } from 'react'
import { useIntersection } from '../../hooks/useIntersection'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Are your spices 100% natural?',
    answer:
      'Yes! All Archana Masale products are 100% natural with no artificial colors, preservatives, or additives. We use only pure, high-quality spices sourced directly from farmers.',
  },
  {
    id: 'faq2',
    question: 'How long do the spices stay fresh?',
    answer:
      'Our spices maintain peak freshness for 12-18 months when stored in a cool, dry place away from direct sunlight. We recommend using within 6 months of opening for best flavor.',
  },
  {
    id: 'faq3',
    question: 'Do you offer bulk or wholesale orders?',
    answer:
      'Yes! We offer bulk orders for restaurants, catering services, and retailers. Please contact us at wholesale@archanamasale.com for pricing and minimum order quantities.',
  },
  {
    id: 'faq4',
    question: 'Where can I buy Archana Masale products?',
    answer:
      'Our products are available through select retailers and online. Contact us directly for distributor information in your area or to place an order.',
  },
  {
    id: 'faq5',
    question: 'Can I create custom spice blends?',
    answer:
      'Absolutely! We love creating custom blends for special occasions, events, or specific recipes. Reach out to us at custom@archanamasale.com with your requirements.',
  },
  {
    id: 'faq6',
    question: 'Are your products gluten-free and vegan?',
    answer:
      'Yes, all our spice blends are naturally gluten-free and vegan. We use only plant-based ingredients with no animal products or by-products.',
  },
]

const FAQ = () => {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 })
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section
      id="faq"
      className="section-padding paper-texture relative overflow-hidden"
      ref={ref as React.LegacyRef<HTMLElement>}
    >
      <div className="texture-overlay absolute inset-0 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
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
          <h2 className="heading-secondary mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-brand-turmeric font-heading mb-2">
            सामान्य प्रश्न — We're Here to Help
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`mb-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 text-left focus-visible-ring"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-brand-maroon pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-brand-maroon flex-shrink-0 transition-transform duration-300 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {openId === faq.id && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="mt-4 pt-4 border-t border-gray-200 text-gray-700 leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-maroon mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We're here to help! Reach out to us and we'll get back to you as
              soon as possible.
            </p>
            <a
              href="mailto:support@archanamasale.com"
              className="btn-primary inline-flex items-center space-x-2"
            >
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
              <span>Contact Support</span>
            </a>
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

export default FAQ
