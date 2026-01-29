# 🚀 ProGen Quick Start Guide

Get up and running in 5 minutes!

## ⚡ Prerequisites

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm** 9.x or higher (comes with Node.js)
- **Git** (optional, for version control)

Verify installation:
```bash
node --version  # Should be v18.x or higher
npm --version   # Should be 9.x or higher
```

## 📦 Step 1: Install Dependencies

```bash
# Navigate to project directory
cd progen

# Install all dependencies
npm install
```

This will install:
- React + React DOM
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Zustand (state management)
- All dev dependencies

## 🏃 Step 2: Start Development Server

```bash
npm run dev
```

You should see:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Open browser:** Navigate to `http://localhost:5173/`

## 🎨 What You'll See

### Landing Page with:
- ✅ **Hero Section** - Career-focused message with CTAs
- ✅ **Features Grid** - 6 key benefits cards
- ✅ **Programs Section** - 3 course offerings
- ✅ **CTA Section** - Final conversion area
- ✅ **Responsive Navbar** - With mobile hamburger menu
- ✅ **Footer** - Multi-column with links

### Fully Mobile Responsive
- Desktop (1280px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🛠️ Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint

# Format code with Prettier
npm run format
```

## 🎯 Quick Test Checklist

After starting the dev server, verify:

- [ ] Page loads without errors
- [ ] Navbar is visible and sticky
- [ ] Hero section displays with red CTA buttons
- [ ] Features grid shows 6 cards
- [ ] Programs section shows 3 program cards
- [ ] Footer is visible at bottom
- [ ] Resize browser - layout adapts to mobile
- [ ] Mobile menu (hamburger) works < 768px
- [ ] All buttons have hover effects
- [ ] Red accent color (#FC5B50) is visible on CTAs

## 🌈 Testing Responsive Design

### Method 1: Browser DevTools
1. Open Chrome DevTools (F12)
2. Click "Toggle Device Toolbar" (Ctrl+Shift+M)
3. Select different devices (iPhone, iPad, etc.)

### Method 2: Manual Resize
1. Resize browser window to different widths:
   - 375px (Mobile)
   - 768px (Tablet)
   - 1280px (Desktop)

### Expected Behavior:
- Text sizes adjust (smaller on mobile)
- Grid layouts stack (3 cols → 2 cols → 1 col)
- Navbar shows hamburger menu on mobile
- Spacing adjusts (less padding on mobile)

## 🎨 Customization Quick Start

### Change Brand Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  brand: {
    red: {
      DEFAULT: '#YOUR_COLOR',    // Replace with your primary
      hover: '#YOUR_HOVER_COLOR', // Replace with your hover
    },
  },
}
```

### Change Fonts

Edit `tailwind.config.js`:
```javascript
fontFamily: {
  heading: ['Your-Heading-Font', 'system-ui', 'sans-serif'],
  body: ['Your-Body-Font', 'system-ui', 'sans-serif'],
}
```

Update Google Fonts import in `src/styles/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your-Font&display=swap');
```

### Add New Page

1. **Create feature components:**
```bash
mkdir -p src/features/about/components
```

2. **Create page:**
```typescript
// src/pages/AboutPage.tsx
import { AboutHero, Team, Mission } from '@features/about';

export const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <Team />
      <Mission />
    </>
  );
};
```

3. **Add route:**
```typescript
// src/app/App.tsx
import { AboutPage } from '@pages';

<Route path="/about" element={<AboutPage />} />
```

### Modify Content

Landing page content is in:
- `src/features/landing/components/Hero.tsx` - Hero text & stats
- `src/features/landing/components/Features.tsx` - Features cards
- `src/features/landing/components/Programs.tsx` - Program offerings
- `src/features/landing/components/CTASection.tsx` - Final CTA

## 🔧 Environment Setup

1. **Copy environment template:**
```bash
cp .env.example .env
```

2. **Configure variables:**
```env
VITE_API_BASE_URL=https://your-api-url.com
VITE_ENABLE_DARK_MODE=true
```

3. **Access in code:**
```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Rebuild TypeScript
npm run build
```

### Styling Not Applied
```bash
# Ensure Tailwind is processing
# Check terminal for CSS build errors
# Hard refresh browser (Ctrl+Shift+R)
```

## 📚 Next Steps

1. **Read Documentation:**
   - `README.md` - Project overview
   - `ARCHITECTURE.md` - Architecture patterns
   - `CONTRIBUTING.md` - Development guidelines
   - `PROJECT_STRUCTURE.md` - File organization

2. **Explore Code:**
   - Start with `src/app/App.tsx` (entry point)
   - Check `src/pages/HomePage.tsx` (page composition)
   - Review `src/features/landing/` (feature structure)
   - Examine `src/components/ui/` (reusable components)

3. **Start Building:**
   - Add new features in `src/features/`
   - Create reusable components in `src/components/ui/`
   - Connect to backend via `src/services/api.ts`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

Output: `dist/` folder ready for deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
1. Build: `npm run build`
2. Push `dist/` folder to `gh-pages` branch
3. Configure GitHub Pages to serve from `gh-pages`

## 💡 Tips for Success

1. **Use Path Aliases:** Always import with `@components`, `@features`, etc.
2. **Follow Architecture:** Keep pages simple, put logic in features
3. **Mobile First:** Design for mobile, then enhance for desktop
4. **Use Design Tokens:** Never hard-code colors or spacing
5. **Type Everything:** Leverage TypeScript for fewer bugs

## 🆘 Need Help?

- Check existing documentation files
- Review example components in `src/components/ui/`
- Refer to `CONTRIBUTING.md` for code standards
- Check `ARCHITECTURE.md` for patterns

---

**You're all set! Happy coding! 🎉**

The project is production-ready and designed to scale. Start building your features!
