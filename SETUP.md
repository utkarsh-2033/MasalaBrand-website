# Quick Setup Guide for Archana Masale Website

## 🚀 Step-by-Step Setup

### 1. Install Dependencies
Open PowerShell in this folder and run:
```powershell
npm install
```

This will install all required packages (React, TypeScript, Tailwind CSS, etc.)

### 2. Add Your Images

**Required Images:**
- `/src/assets/logo.png` - Your logo (200x200px recommended)
- `/src/assets/hero-1.jpg` - Hero background (1920x1080px)
- `/src/assets/hero-2.jpg` - Hero feature image (800x600px)

**Optional but Recommended:**
- `/src/assets/products/*.jpg` - Product images (600x600px each)
- `/src/assets/recipes/*.jpg` - Recipe images (600x400px each)
- `/src/assets/testimonials/*.jpg` - User photos (100x100px each)

**If images are missing:** The site will show placeholder SVGs with your text.

### 3. Update Product Data

Edit `/src/data/products.ts` to:
- Add or remove products
- Change prices, descriptions, ingredients
- Update image paths

### 4. Customize Colors & Branding

Edit `/tailwind.config.ts` to change:
- Brand colors (maroon, saffron, turmeric, etc.)
- Fonts
- Spacing and sizing

### 5. Start Development Server

```powershell
npm run dev
```

Your site will open at http://localhost:3000

### 6. Make Changes

Edit any component in `/src/components/` and see live changes!

### 7. Build for Production

```powershell
npm run build
```

Output will be in `/dist` folder - ready to deploy!

## 🎨 Customization Checklist

- [ ] Replace logo image
- [ ] Add hero images
- [ ] Update product data and images
- [ ] Customize colors in Tailwind config
- [ ] Update contact information (email, phone, address)
- [ ] Set up form handling (Netlify/Formspree)
- [ ] Add Google Maps embed to contact section
- [ ] Generate and add favicon
- [ ] Update meta tags in index.html
- [ ] Test on mobile devices
- [ ] Run accessibility audit

## 📧 Setting Up Contact Forms

### Option 1: Netlify (Easiest)
1. Deploy to Netlify
2. Forms work automatically!

### Option 2: Formspree
1. Sign up at formspree.io
2. Get your form endpoint
3. Update ContactForm component

### Option 3: Custom Backend
Integrate with your own API endpoint.

## 🌐 Deployment Options

### Netlify (Recommended)
```powershell
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Vercel
```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 🆘 Troubleshooting

**Images not showing?**
- Check file paths are correct
- Ensure images are in `/src/assets/` folder
- Images must have correct file extensions

**Build errors?**
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then reinstall
- Check TypeScript errors in your code editor

**Styles not working?**
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.ts` paths include all files
- Restart dev server after config changes

**Need help?**
- Check README.md for detailed documentation
- Review code comments in components
- Ensure Node.js version is 18 or higher

## 📝 Important Files to Edit

1. **Product Data** → `/src/data/products.ts`
2. **Colors** → `/tailwind.config.ts`
3. **Contact Info** → `/src/components/ContactForm/index.tsx` & `/src/components/Footer/index.tsx`
4. **Meta Tags** → `/index.html`
5. **Company Info** → `/src/components/About/index.tsx`

## ✅ Before Going Live

- [ ] All images replaced and optimized
- [ ] Contact form working and tested
- [ ] All links working (social media, email, etc.)
- [ ] Test on mobile and tablet
- [ ] Run Lighthouse audit (Performance, SEO, Accessibility)
- [ ] Test in different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Add privacy policy and terms pages
- [ ] Test all interactive elements (modals, accordions, forms)
- [ ] Verify all text and prices are correct

---

**Happy Coding! 🎉**

परम्परा हर चम्मच में — Tradition in every spoonful
