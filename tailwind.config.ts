import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-maroon': '#7b2b1f',
        'brand-saffron': '#f2a71b',
        'brand-turmeric': '#d98f00',
        'brand-cardamom': '#6c8a4f',
        'brand-cream': '#f7efe6',
      },
      fontFamily: {
        heading: ['"Noto Serif Devanagari"', 'Merriweather', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      boxShadow: {
        'spice': '0 4px 20px rgba(123, 43, 31, 0.15)',
        'spice-hover': '0 8px 30px rgba(123, 43, 31, 0.25)',
      },
      backgroundImage: {
        'texture': "url('/texture-pattern.png')",
      },
    },
  },
  plugins: [],
} satisfies Config
