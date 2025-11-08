# Deployment Guide — Archana Masale Website

This guide covers multiple deployment options for your Archana Masale website.

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended) ⭐

**Why Netlify?**
- Free tier available
- Automatic deployments from Git
- Built-in form handling (no backend needed!)
- Free SSL certificates
- CDN included
- Easy custom domain setup

**Deploy via Drag & Drop (Easiest)**

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [Netlify Drop](https://app.netlify.com/drop)

3. Drag and drop your `dist` folder

4. Done! Your site is live

**Deploy via Git (Recommended for updates)**

1. Push your code to GitHub/GitLab/Bitbucket

2. Go to [Netlify](https://app.netlify.com)

3. Click "New site from Git"

4. Connect your repository

5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18

6. Click "Deploy site"

**Set up Netlify Forms**

Forms are already configured! After deployment:
1. Go to your site's dashboard on Netlify
2. Click "Forms" in the sidebar
3. Set up email notifications
4. Test your contact form

**Custom Domain**

1. Go to "Domain settings" in Netlify
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. SSL certificate is added automatically!

---

### Option 2: Vercel

**Why Vercel?**
- Excellent performance
- Free tier available
- Automatic Git deployments
- Great developer experience

**Deploy Steps**

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

**Via Git**

1. Push to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Configure:
   - **Framework:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy!

---

### Option 3: GitHub Pages

**Why GitHub Pages?**
- Free
- Integrated with GitHub
- Good for static sites

**Setup Steps**

1. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // Important!
   })
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add to `package.json` scripts:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: `gh-pages` branch

**Note:** Forms won't work on GitHub Pages (use Formspree instead)

---

### Option 4: Traditional Web Hosting (cPanel/FTP)

**For shared hosting with cPanel:**

1. Build your project:
   ```bash
   npm run build
   ```

2. Upload contents of `dist/` folder to your hosting:
   - Via FTP (FileZilla, etc.)
   - Or via cPanel File Manager
   - Upload to `public_html` or `www` directory

3. Configure `.htaccess` for SPA routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

### Option 5: AWS S3 + CloudFront

**For enterprise-grade hosting:**

1. Build project:
   ```bash
   npm run build
   ```

2. Create S3 bucket:
   - Enable static website hosting
   - Upload `dist/` contents

3. Set up CloudFront CDN:
   - Point to S3 bucket
   - Configure SSL certificate

4. Update DNS to point to CloudFront

**Using AWS CLI:**
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

---

## 📧 Form Handling Setup

### Netlify Forms (Automatic)
Already configured! Works after Netlify deployment.

### Formspree Setup

1. Sign up at [formspree.io](https://formspree.io)

2. Create a new form

3. Get your endpoint URL

4. Update `src/components/ContactForm/index.tsx`:
   ```typescript
   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   })
   ```

### Custom API Endpoint

Integrate with your backend:
```typescript
await fetch('https://your-api.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

---

## 🌍 Custom Domain Setup

### Netlify/Vercel

1. Add custom domain in platform dashboard
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: [provided by platform]

   Type: CNAME
   Name: www
   Value: [provided by platform]
   ```
3. SSL is automatic!

### Other Hosting

1. Point domain to hosting IP:
   ```
   Type: A
   Name: @
   Value: [your server IP]
   ```

2. Set up SSL certificate:
   - Use Let's Encrypt (free)
   - Or cPanel AutoSSL
   - Or Cloudflare SSL

---

## 🔒 Security Checklist

Before going live:

- [ ] Enable HTTPS/SSL
- [ ] Set up proper CORS if using APIs
- [ ] Hide sensitive environment variables
- [ ] Enable security headers:
  ```
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  ```
- [ ] Set up CSP (Content Security Policy)
- [ ] Enable DDoS protection (Cloudflare)

---

## 📊 Analytics & Monitoring

### Google Analytics

Add to `index.html` before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Other Options
- Plausible Analytics (privacy-focused)
- Fathom Analytics
- Microsoft Clarity (free heatmaps)
- Hotjar (user behavior)

---

## ⚡ Performance Optimization

**Before Deployment:**

1. Optimize images:
   ```bash
   # Install imageoptim-cli
   npm install -g imageoptim-cli
   imageoptim --directory src/assets
   ```

2. Check bundle size:
   ```bash
   npm run build
   # Check dist/ folder size
   ```

3. Run Lighthouse audit:
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit
   - Fix issues

**After Deployment:**

- Enable CDN (most platforms include this)
- Enable Brotli compression
- Set proper cache headers
- Consider lazy loading routes

---

## 🧪 Pre-Deployment Testing

Test checklist:

- [ ] All pages load correctly
- [ ] All images display properly
- [ ] Forms submit successfully
- [ ] Mobile responsive on all devices
- [ ] Works in all major browsers (Chrome, Firefox, Safari, Edge)
- [ ] All links work (internal and external)
- [ ] Contact information is correct
- [ ] SEO meta tags are set
- [ ] Favicon displays correctly
- [ ] Console has no errors
- [ ] Accessibility audit passes (Lighthouse)
- [ ] Performance score > 90 (Lighthouse)

---

## 🆘 Troubleshooting

**Build fails:**
- Check Node.js version (18+)
- Delete `node_modules` and reinstall
- Check for TypeScript errors

**Images not showing after deployment:**
- Verify image paths (use absolute paths)
- Check if images are in `dist/` after build
- Ensure images aren't too large (compress them)

**Forms not working:**
- Verify Netlify/Formspree setup
- Check console for errors
- Test form validation

**404 errors on refresh:**
- Configure SPA routing (see hosting-specific instructions above)
- Add `_redirects` file for Netlify
- Add `vercel.json` for Vercel

---

## 📚 Additional Resources

- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Web.dev Performance](https://web.dev/performance/)

---

**Need Help?**

Check SETUP.md and README.md for detailed instructions.

**Happy Deploying! 🚀**
