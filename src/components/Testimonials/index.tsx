import { useIntersection } from '../../hooks/useIntersection'

interface Testimonial {
  id: string
  name: string
  city: string
  rating: number
  photo: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    city: 'Mumbai',
    rating: 5,
    photo: '/src/assets/testimonials/user1.jpg',
    quote:
      'Archana Masale has transformed my cooking! The Garam Masala is so aromatic and authentic. My family can taste the difference. Best quality spices I have found!',
  },
  {
    id: 't2',
    name: 'Rajesh Kumar',
    city: 'Delhi',
    rating: 5,
    photo: '/src/assets/testimonials/user2.jpg',
    quote:
      'As a chef, I am very particular about my spices. Archana Masale never disappoints. The freshness and purity are unmatched. Highly recommended!',
  },
  {
    id: 't3',
    name: 'Anita Patel',
    city: 'Ahmedabad',
    rating: 5,
    photo: '/src/assets/testimonials/user3.jpg',
    quote:
      'I love that these are 100% natural with no additives. The Chai Masala is perfect for morning tea. Reminds me of my grandmother\'s kitchen!',
  },
  {
    id: 't4',
    name: 'Vikram Singh',
    city: 'Jaipur',
    rating: 5,
    photo: '/src/assets/testimonials/user4.jpg',
    quote:
      'Been using Archana Masale for 3 years now. Consistent quality, amazing taste. The Biryani Masala makes restaurant-quality biryani at home!',
  },
  {
    id: 't5',
    name: 'Meera Reddy',
    city: 'Hyderabad',
    rating: 5,
    photo: '/src/assets/testimonials/user5.jpg',
    quote:
      'Small batch processing makes a huge difference! You can taste the care in every spoonful. My entire family is now converted to Archana Masale.',
  },
]

const Testimonials = () => {
  const [ref, isVisible] = useIntersection({ threshold: 0.2 })

  return (
    <section
      id="testimonials"
      className="section-padding bg-white relative overflow-hidden"
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
          <h2 className="heading-secondary mb-4">What Our Customers Say</h2>
          <p className="text-xl text-brand-turmeric font-heading mb-2">
            ग्राहक समीक्षा — Trusted by Thousands
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card-elevated p-6 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
              }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg
                  className="w-10 h-10 text-brand-saffron opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-brand-saffron fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* User Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%237b2b1f'/%3E%3Ctext x='50' y='60' font-size='40' text-anchor='middle' fill='white' font-family='sans-serif'%3E${testimonial.name[0]}%3C/text%3E%3C/svg%3E`
                  }}
                />
                <div>
                  <p className="font-semibold text-brand-maroon">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Testimonials - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 mt-8">
          {testimonials.slice(3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card-elevated p-6 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${(index + 3) * 150}ms` : '0ms',
              }}
            >
              <div className="flex items-start space-x-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%237b2b1f'/%3E%3Ctext x='50' y='60' font-size='40' text-anchor='middle' fill='white' font-family='sans-serif'%3E${testimonial.name[0]}%3C/text%3E%3C/svg%3E`
                  }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold text-brand-maroon">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.city}
                      </p>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-brand-saffron fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { number: '10,000+', label: 'Happy Customers' },
            { number: '25+', label: 'Years Experience' },
            { number: '100%', label: 'Natural Products' },
            { number: '4.9/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-brand-maroon mb-2">
                {stat.number}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
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

export default Testimonials
