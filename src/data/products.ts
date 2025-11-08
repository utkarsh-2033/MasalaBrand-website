export interface Product {
  id: string
  name: string
  slug: string
  image: string
  weight: string
  price: string
  tags: string[]
  short: string
  ingredients: string[]
  nutrition: {
    calories: number
    fat: number
    protein: number
  }
  heroBadge?: string
  isFeatured?: boolean
  cookingTips?: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'am-01',
    name: 'Garam Masala (Signature Blend)',
    slug: 'garam-masala',
    image: '/src/assets/products/garam-masala.jpg',
    weight: '100g',
    price: '₹120',
    tags: ['signature', '100% natural', 'best-seller'],
    short: 'Warm aromatic blend for every Indian curry',
    ingredients: [
      'Coriander',
      'Cumin',
      'Black Pepper',
      'Cardamom',
      'Cinnamon',
      'Clove',
      'Bay Leaf',
      'Mace',
    ],
    nutrition: { calories: 20, fat: 0.5, protein: 1 },
    heroBadge: 'Small Batch',
    isFeatured: true,
    cookingTips:
      'Add during final stages of cooking for maximum aroma. Use 1-2 tsp per dish for 4 servings.',
  },
  {
    id: 'am-02',
    name: 'Haldi Powder (Turmeric)',
    slug: 'haldi-powder',
    image: '/src/assets/products/turmeric.jpg',
    weight: '150g',
    price: '₹90',
    tags: ['100% natural', 'organic', 'cold-pressed'],
    short: 'Pure golden turmeric — health in a jar',
    ingredients: ['100% Organic Turmeric Root'],
    nutrition: { calories: 29, fat: 1, protein: 0.9 },
    heroBadge: 'Cold Pressed',
    isFeatured: true,
    cookingTips:
      'Use in dal, curries, and rice. Mix with milk for traditional haldi doodh. ½ tsp per serving.',
  },
  {
    id: 'am-03',
    name: 'Lal Mirch Powder (Red Chili)',
    slug: 'lal-mirch',
    image: '/src/assets/products/red-chili.jpg',
    weight: '100g',
    price: '₹95',
    tags: ['extra hot', 'signature', 'small batch'],
    short: 'Fiery red chilies ground to perfection',
    ingredients: ['Kashmiri Red Chili', 'Guntur Chili'],
    nutrition: { calories: 40, fat: 2, protein: 2 },
    heroBadge: '100% Natural',
    isFeatured: false,
    cookingTips:
      'Blend of Kashmiri for color and Guntur for heat. Adjust to taste. Start with ½ tsp.',
  },
  {
    id: 'am-04',
    name: 'Chole Masala (Chickpea Spice Mix)',
    slug: 'chole-masala',
    image: '/src/assets/products/chole-masala.jpg',
    weight: '100g',
    price: '₹110',
    tags: ['signature', 'specialty blend'],
    short: 'Authentic North Indian chickpea curry blend',
    ingredients: [
      'Coriander',
      'Cumin',
      'Dry Mango Powder',
      'Black Salt',
      'Pomegranate Seeds',
      'Ginger',
      'Black Pepper',
      'Cinnamon',
    ],
    nutrition: { calories: 25, fat: 0.8, protein: 1.2 },
    heroBadge: 'Specialty',
    isFeatured: true,
    cookingTips:
      'Perfect for chole bhature and chickpea curries. Add 2 tbsp for 500g chickpeas.',
  },
  {
    id: 'am-05',
    name: 'Chai Masala (Tea Spice)',
    slug: 'chai-masala',
    image: '/src/assets/products/chai-masala.jpg',
    weight: '80g',
    price: '₹85',
    tags: ['signature', 'aromatic', 'best-seller'],
    short: 'Aromatic blend for authentic Indian chai',
    ingredients: [
      'Cardamom',
      'Cinnamon',
      'Ginger',
      'Black Pepper',
      'Clove',
      'Nutmeg',
    ],
    nutrition: { calories: 15, fat: 0.3, protein: 0.5 },
    heroBadge: 'Aromatic',
    isFeatured: true,
    cookingTips:
      'Add ¼ tsp to boiling milk and water with tea leaves. Simmer for 2-3 minutes.',
  },
  {
    id: 'am-06',
    name: 'Biryani Masala (Premium)',
    slug: 'biryani-masala',
    image: '/src/assets/products/biryani-masala.jpg',
    weight: '100g',
    price: '₹130',
    tags: ['premium', 'signature', 'aromatic'],
    short: 'Royal blend for the perfect biryani',
    ingredients: [
      'Bay Leaf',
      'Star Anise',
      'Cardamom',
      'Cinnamon',
      'Mace',
      'Nutmeg',
      'Fennel',
      'Black Cardamom',
    ],
    nutrition: { calories: 22, fat: 0.6, protein: 0.9 },
    heroBadge: 'Premium',
    isFeatured: true,
    cookingTips:
      'Layer with rice and marinated meat. Use 2-3 tbsp for 1kg meat biryani.',
  },
]
