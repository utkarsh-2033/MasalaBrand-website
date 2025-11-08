import { useIntersection } from '../../hooks/useIntersection'

interface Recipe {
  id: string
  name: string
  image: string
  dish: string
  tip: string
  masalaUsed: string
}

const recipes: Recipe[] = [
  {
    id: 'r1',
    name: 'Butter Chicken',
    image: '/src/assets/recipes/butter-chicken.jpg',
    dish: 'मक्खन मुर्ग',
    tip: 'Add Garam Masala in final stage for rich aroma',
    masalaUsed: 'Garam Masala',
  },
  {
    id: 'r2',
    name: 'Chole Bhature',
    image: '/src/assets/recipes/chole.jpg',
    dish: 'छोले भटूरे',
    tip: 'Use Chole Masala for authentic North Indian taste',
    masalaUsed: 'Chole Masala',
  },
  {
    id: 'r3',
    name: 'Vegetable Biryani',
    image: '/src/assets/recipes/biryani.jpg',
    dish: 'सब्ज़ी बिरयानी',
    tip: 'Layer vegetables with Biryani Masala and basmati rice',
    masalaUsed: 'Biryani Masala',
  },
]

const Recipes = () => {
  const [ref, isVisible] = useIntersection({ threshold: 0.2 })

  return (
    <section
      id="recipes"
      className="section-padding bg-brand-cream relative overflow-hidden"
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
          <h2 className="heading-secondary mb-4">Recipe Inspirations</h2>
          <p className="text-xl text-brand-turmeric font-heading mb-2">
            व्यंजन विचार — Culinary Ideas
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover delicious ways to use Archana Masale in your everyday
            cooking
          </p>
        </div>

        {/* Recipe Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <div
              key={recipe.id}
              className={`card-elevated overflow-hidden transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
              }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Cdefs%3E%3ClinearGradient id='grad${index}' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%237b2b1f;stop-opacity:0.8' /%3E%3Cstop offset='100%25' style='stop-color:%23d98f00;stop-opacity:0.8' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='400' fill='url(%23grad${index})'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='32' fill='white' font-family='serif'%3E${encodeURIComponent(
                      recipe.name
                    )}%3C/text%3E%3C/svg%3E`
                  }}
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-brand-maroon text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {recipe.masalaUsed}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-maroon mb-1">
                  {recipe.name}
                </h3>
                <p className="text-brand-saffron font-heading text-sm mb-3">
                  {recipe.dish}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  <span className="inline-flex items-start">
                    <svg
                      className="w-4 h-4 mr-2 mt-0.5 text-brand-cardamom flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                    </svg>
                    {recipe.tip}
                  </span>
                </p>
                <button className="w-full btn-outline text-sm py-2 flex items-center justify-center space-x-2 group">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                  <span>Save Recipe</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-600 mb-4">
            Want more recipe ideas and cooking tips?
          </p>
          <a
            href="mailto:recipes@archanamasale.com?subject=Recipe Booklet Request"
            className="btn-secondary inline-flex items-center space-x-2"
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
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span>Download Recipe Booklet</span>
          </a>
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

export default Recipes
