import { useState } from 'react'
import { PRODUCTS, Product } from '../../data/products'
import ProductCard from '../ProductCard'
import ProductModal from '../ProductModal'
import { useIntersection } from '../../hooks/useIntersection'

const Products = () => {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 })
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState<'all' | 'featured'>('all')

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProduct(null), 300)
  }

  const filteredProducts =
    filter === 'featured'
      ? PRODUCTS.filter((p) => p.isFeatured)
      : PRODUCTS

  return (
    <section
      id="products"
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
          <h2 className="heading-secondary mb-4">Our Products</h2>
          <p className="text-xl text-brand-turmeric font-heading mb-2">
            हमारे उत्पाद — Crafted with Love
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our authentic range of traditional spice blends, each
            handcrafted to bring authentic Indian flavors to your kitchen.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex justify-center gap-4 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'all'
                ? 'bg-brand-maroon text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'featured'
                ? 'bg-brand-maroon text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Featured ({PRODUCTS.filter((p) => p.isFeatured).length})
          </button>
        </div>

        {/* Products Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="transition-all duration-500"
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <ProductCard
                product={product}
                onViewDetails={handleViewDetails}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found</p>
          </div>
        )}

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-spice text-white p-8 md:p-12 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold mb-4 font-heading">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              We also create custom spice blends for special occasions and bulk
              orders. Contact us to discuss your requirements.
            </p>
            <a
              href="mailto:custom@archanamasale.com?subject=Custom Blend Enquiry"
              className="inline-block bg-white text-brand-maroon px-8 py-3 rounded-lg font-semibold hover:bg-brand-cream transition-colors shadow-lg"
            >
              Request Custom Blend
            </a>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
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

export default Products
