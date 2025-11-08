# Archana Masale — Traditional Indian Spices Marketing Site

> **परम्परा हर चम्मच में** — Tradition in every spoonful

A beautiful, fully responsive single-page marketing website for Archana Masale, showcasing authentic Indian spice blends with a traditional aesthetic.

## 🌟 Features

- **Fully Responsive** — Mobile-first design that looks great on all devices
- **Modern Stack** — Built with React 18, TypeScript, Vite, and Tailwind CSS
- **Traditional Design** — Warm, earthy color palette inspired by Indian spices
- **Accessible** — ARIA labels, keyboard navigation, focus management
- **Performance Optimized** — Lazy loading, image optimization, smooth animations
- **SEO Ready** — Meta tags, semantic HTML, Open Graph support
- **Interactive Components** — Product modals, accordions, smooth scrolling
- **Form Ready** — Contact form with validation (Netlify Forms / Formspree compatible)

## 🎨 Design Highlights

### Color Palette
- **Brand Maroon** `#7b2b1f` — Primary brand color
- **Saffron** `#f2a71b` — Accent color
- **Turmeric Orange** `#d98f00` — Secondary accent
- **Cardamom Green** `#6c8a4f` — Tertiary accent
- **Warm Cream** `#f7efe6` — Background color

### Typography
- **Headings** — Noto Serif Devanagari / Merriweather (serif)
- **Body** — Poppins (sans-serif)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed
- A code editor (VS Code recommended)

### Installation

1. **Clone or download this project** (if you haven't already)

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will open automatically at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
archana-masale/
├── public/
│   ├── manifest.json          # PWA manifest
│   └── favicon.ico            # Site favicon (placeholder)
├── src/
│   ├── assets/                # Images and media files
│   │   ├── logo.png          # Archana Masale logo
│   │   ├── hero-1.jpg        # Hero background image
│   │   ├── hero-2.jpg        # Hero feature image
│   │   └── products/         # Product images (placeholders)
│   ├── components/            # React components
│   │   ├── Header/           # Sticky navigation header
│   │   ├── Hero/             # Hero section with CTA
│   │   ├── About/            # Brand story section
│   │   ├── Products/         # Product grid
│   │   ├── ProductCard/      # Individual product card
│   │   ├── ProductModal/     # Product detail modal
│   │   ├── Recipes/          # Recipe inspiration cards
│   │   ├── Testimonials/     # Customer reviews
│   │   ├── FAQ/              # Collapsible FAQ section
│   │   ├── ContactForm/      # Contact form with validation
│   │   └── Footer/           # Footer with newsletter
│   ├── data/
│   │   └── products.ts       # Product data (easy to edit!)
│   ├── hooks/
│   │   ├── useIntersection.ts    # Scroll animation hook
│   │   └── useLocalStorage.ts    # Local storage hook
│   ├── styles/
│   │   └── texture.css       # Decorative texture styles
│   ├── utils/
│   │   └── scrollTo.ts       # Smooth scroll utilities
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # App entry point
│   └── index.css             # Global styles with Tailwind
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite configuration
└── README.md                 # This file
```

## 🖼️ Adding Your Images

### Replace Placeholder Images

The project includes SVG placeholders for images. Replace them with your actual images:

1. **Logo** — Replace `/src/assets/logo.png` with your logo (transparent PNG, ~200x200px recommended)

2. **Hero Images**
   - `/src/assets/hero-1.jpg` — Background hero image (1920x1080px recommended)
   - `/src/assets/hero-2.jpg` — Feature image (800x600px recommended)

3. **Product Images**
   - Add product images to `/src/assets/products/`
   - Update image paths in `/src/data/products.ts`
   - Recommended size: 600x600px, JPG or PNG

4. **Recipe Images**
   - Add recipe images to `/src/assets/recipes/`
   - Update paths in `/src/components/Recipes/index.tsx`

5. **Testimonial Photos**
   - Add user photos to `/src/assets/testimonials/`
   - Update paths in `/src/components/Testimonials/index.tsx`

### Image Optimization Tips
- Use WebP format for better compression
- Compress images before uploading (use TinyPNG, Squoosh, etc.)
- Provide multiple sizes for responsive images
- Use lazy loading (already implemented with `loading="lazy"`)

## ✏️ Updating Product Data

Edit `/src/data/products.ts` to add, remove, or modify products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  slug: 'product-slug',
  image: '/src/assets/products/image.jpg',
  weight: '100g',
  price: '₹120',
  tags: ['organic', 'best-seller'],
  short: 'Short description',
  ingredients: ['Ingredient 1', 'Ingredient 2'],
  nutrition: { calories: 20, fat: 0.5, protein: 1 },
  heroBadge: 'Small Batch',
  isFeatured: true,
  cookingTips: 'Cooking instructions...',
}
```

## 📮 Setting Up Forms

### Option 1: Netlify Forms (Recommended if deploying to Netlify)

The contact form is already configured for Netlify Forms. Just deploy to Netlify and it will work automatically!

1. Deploy to Netlify (see deployment section)
2. Forms will appear in Netlify dashboard under "Forms"
3. Set up email notifications in Netlify settings

### Option 2: Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your endpoint URL
3. Update `/src/components/ContactForm/index.tsx`:

```typescript
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

### Option 3: Simple Mailto Fallback

Change the form action to use mailto (no backend needed):

```typescript
<form action="mailto:contact@archanamasale.com" method="post" enctype="text/plain">
```

## 🌐 Deployment

### Deploy to Netlify (Recommended)

1. **Via Git**
   - Push your code to GitHub/GitLab
   - Connect repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts

### Deploy to GitHub Pages

1. Update `vite.config.ts`:
   ```typescript
   base: '/repository-name/'
   ```

2. Build and deploy:
   ```bash
   npm run build
   gh-pages -d dist
   ```

## 🎯 SEO & Performance

### SEO Checklist
- ✅ Semantic HTML5 elements
- ✅ Meta tags configured (title, description, OG tags)
- ✅ Alt text on all images
- ✅ Proper heading hierarchy (H1 → H6)
- ✅ Mobile-friendly (responsive design)
- ✅ Fast load times (optimized bundle)

### Generate Favicons

Use [RealFaviconGenerator](https://realfavicongenerator.net/) to generate all favicon sizes:
1. Upload your logo
2. Download generated files
3. Replace files in `/public/`
4. Update `index.html` with favicon links

### Performance Tips
- Images are lazy-loaded by default
- Tailwind CSS is purged in production
- Consider adding a CDN for images (Cloudinary, imgix)
- Enable Brotli compression on your server

## ♿ Accessibility

The site follows WCAG 2.1 AA guidelines:

- Keyboard navigation support
- ARIA labels and roles
- Focus indicators
- Sufficient color contrast
- Screen reader friendly
- Semantic HTML structure

Test with:
- Keyboard navigation (Tab, Enter, Escape)
- Screen readers (NVDA, JAWS, VoiceOver)
- [WAVE tool](https://wave.webaim.org/)
- Lighthouse audit (in Chrome DevTools)

## 🛠️ Customization

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  'brand-maroon': '#7b2b1f',    // Change to your color
  'brand-saffron': '#f2a71b',
  // ... etc
}
```

### Changing Fonts

1. Update Google Fonts link in `index.html`
2. Update `tailwind.config.ts`:

```typescript
fontFamily: {
  heading: ['YourFont', 'serif'],
  sans: ['YourFont', 'sans-serif'],
}
```

### Adding Sections

1. Create new component in `/src/components/`
2. Import and add to `/src/App.tsx`
3. Add navigation link in `/src/components/Header/index.tsx`

## 🔧 Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint
- `npm run format` — Format code with Prettier

## 📦 Tech Stack

- **React 18** — UI library
- **TypeScript** — Type safety
- **Vite** — Fast build tool
- **Tailwind CSS** — Utility-first CSS
- **React Focus Lock** — Focus management for modals

## 🤝 Support

For questions or issues with this template:
- Check the code comments
- Review this README
- Test in a clean environment

## 📝 License

This is a custom template for Archana Masale. Modify as needed for your use case.

## 🙏 Credits

- **Design Inspiration** — Traditional Indian aesthetics
- **Icons** — Heroicons (included via Tailwind)
- **Fonts** — Google Fonts (Noto Serif Devanagari, Merriweather, Poppins)

---

**Made with ❤️ and masala magic**

परम्परा हर चम्मच में — Tradition in every spoonful
