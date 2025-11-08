import { useState } from 'react'
import { Product } from '../../data/products'

interface ProductCardProps {
  product: Product
  onViewDetails: (product: Product) => void
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false)

  const getBadgeColor = (tag: string) => {
    if (tag.includes('best-seller')) return 'bg-red-500'
    if (tag.includes('organic')) return 'bg-brand-cardamom'
    if (tag.includes('signature')) return 'bg-brand-maroon'
    if (tag.includes('premium')) return 'bg-brand-turmeric'
    return 'bg-brand-saffron'
  }

  return (
    <div className="card-elevated overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 bg-gradient-to-br from-brand-cream to-gray-100">
        <img
          src={imageError ? generatePlaceholder(product.name) : product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={() => setImageError(true)}
        />

        {/* Hero Badge */}
        {product.heroBadge && (
          <div className="absolute top-4 left-4 bg-brand-maroon text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            {product.heroBadge}
          </div>
        )}

        {/* Tags */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {product.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className={`${getBadgeColor(
                tag
              )} text-white px-2 py-1 rounded text-xs font-semibold shadow-md`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={() => onViewDetails(product)}
            className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 btn-primary"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-xl font-bold text-brand-maroon mb-2 line-clamp-2 group-hover:text-brand-turmeric transition-colors">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.short}
        </p>

        {/* Weight & Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500 font-medium">
            {product.weight}
          </span>
          <span className="text-2xl font-bold text-brand-maroon">
            {product.price}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onViewDetails(product)}
          className="w-full btn-outline text-sm py-2 flex items-center justify-center space-x-2"
        >
          <span>View Full Details</span>
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

// Generate placeholder image
const generatePlaceholder = (name: string) => {
  const colors = ['7b2b1f', 'f2a71b', 'd98f00', '6c8a4f']
  const color = colors[Math.floor(Math.random() * colors.length)]
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23${color}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='white' font-family='serif'%3E${encodeURIComponent(
    name
  )}%3C/text%3E%3C/svg%3E`
}

export default ProductCard
