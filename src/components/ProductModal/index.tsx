import FocusLock from 'react-focus-lock'
import { Product } from '../../data/products'
import { useEffect } from 'react'

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen || !product) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Content */}
      <FocusLock>
        <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors focus-visible-ring flex items-center justify-center"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Product Image */}
          <div className="relative h-80 bg-gradient-to-br from-brand-cream to-brand-saffron/20">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect width='800' height='400' fill='%23f7efe6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='32' fill='%237b2b1f' font-family='serif'%3E${encodeURIComponent(
                  product.name
                )}%3C/text%3E%3C/svg%3E`
              }}
            />
            {product.heroBadge && (
              <div className="absolute top-6 left-6 bg-brand-maroon text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                {product.heroBadge}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-6">
              <h2
                id="modal-title"
                className="heading-tertiary mb-2 text-brand-maroon"
              >
                {product.name}
              </h2>
              <p className="text-gray-600 text-lg">{product.short}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-brand-saffron bg-opacity-20 text-brand-turmeric px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Price & Weight */}
            <div className="flex items-center justify-between mb-8 p-4 bg-brand-cream rounded-lg">
              <div>
                <p className="text-sm text-gray-600 mb-1">Weight</p>
                <p className="text-xl font-bold text-brand-maroon">
                  {product.weight}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Price</p>
                <p className="text-3xl font-bold text-brand-maroon">
                  {product.price}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div>
                <h3 className="text-xl font-bold text-brand-maroon mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
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
                  Ingredients
                </h3>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-brand-cardamom"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nutrition & Cooking Tips */}
              <div className="space-y-6">
                {/* Nutrition */}
                <div>
                  <h3 className="text-xl font-bold text-brand-maroon mb-4 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Nutrition (per serving)
                  </h3>
                  <div className="bg-brand-cream p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Calories</span>
                      <span className="font-semibold text-brand-maroon">
                        {product.nutrition.calories} kcal
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Fat</span>
                      <span className="font-semibold text-brand-maroon">
                        {product.nutrition.fat}g
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Protein</span>
                      <span className="font-semibold text-brand-maroon">
                        {product.nutrition.protein}g
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cooking Tips */}
                {product.cookingTips && (
                  <div>
                    <h3 className="text-xl font-bold text-brand-maroon mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                      </svg>
                      Cooking Tips
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed bg-brand-saffron bg-opacity-10 p-4 rounded-lg border-l-4 border-brand-saffron">
                      {product.cookingTips}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex gap-4">
              <a
                href="mailto:orders@archanamasale.com?subject=Product Enquiry"
                className="flex-1 btn-primary text-center"
              >
                Buy Now
              </a>
              <button
                onClick={onClose}
                className="flex-1 btn-outline text-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </FocusLock>
    </div>
  )
}

export default ProductModal
