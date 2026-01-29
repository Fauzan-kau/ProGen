# ProGen - Career-Focused Tech Education Platform

A production-ready, enterprise-grade React application built with modern best practices and a scalable feature-based architecture.

## 🚀 Tech Stack

- **React 18** - Modern UI library with functional components
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS with custom design tokens
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management (ready for use)

## 🏗️ Architecture

### Feature-Based Modular Structure

This project follows a **feature-based architecture** (not page-centric), ensuring:

- ✅ Maximum scalability
- ✅ Clear separation of concerns
- ✅ Easy to maintain and extend
- ✅ Reusable components and logic

```
src/
├── app/                # App bootstrap, providers, routing
│   └── App.tsx
├── assets/             # Static files (images, icons, fonts)
├── components/         # Reusable UI components
│   ├── ui/            # Button, Card, Container, etc.
│   └── layout/        # Navbar, Footer
├── features/           # Domain-based feature modules
│   └── landing/       # Landing page feature
│       ├── components/ # Feature-specific components
│       ├── hooks/     # Feature-specific hooks
│       ├── services/  # Feature-specific services
│       └── index.ts   # Public API
├── layouts/            # Layout wrappers (MainLayout, etc.)
├── pages/              # Route composition ONLY (no logic)
├── services/           # Global API clients, HTTP setup
├── store/              # Global state management
├── styles/             # Theme, design tokens, global CSS
├── utils/              # Helper functions, constants
├── types/              # Global TypeScript types
└── main.tsx            # Application entry point
```

## 🎨 Design System

### Brand Colors

```typescript
Primary Red:     #FC5B50  // CTAs, highlights
Hover Red:       #FC443C  // Hover states
Light BG:        #F8F5E8  // Light mode background
Dark BG:         #313743  // Dark mode background
Text on Light:   #313743
Text on Dark:    #F8F5E8
```

### Typography

- **Headings**: Poppins (geometric, modern)
- **Body**: Inter (clean, readable)

### Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 🎯 Key Features

### Fully Mobile Responsive
- Mobile-first design approach
- Responsive typography and spacing
- Touch-optimized interactions
- Hamburger menu for mobile navigation

### Component Architecture

**UI Components** (`src/components/ui/`)
- `Button` - Multiple variants (primary, secondary, outline, ghost)
- `Card` - Hoverable cards with shadow effects
- `Container` - Responsive container with max-width options

**Layout Components** (`src/components/layout/`)
- `Navbar` - Sticky navbar with mobile menu
- `Footer` - Multi-column footer with links

### Path Aliases

Absolute imports configured for better DX:

```typescript
import { Button } from '@components/ui';
import { Hero } from '@features/landing';
import { theme } from '@styles/theme';
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with path aliases
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind with brand tokens
- `.eslintrc.cjs` - ESLint rules
- `.prettierrc` - Code formatting rules

## 📱 Pages & Features

### Landing Page (`/`)
- **Hero Section** - Career-focused messaging with CTAs
- **Features Section** - 6 key value propositions
- **Programs Section** - Course offerings
- **CTA Section** - Final conversion section

## 🧩 Extending the Application

### Adding a New Feature

1. Create feature folder:
```bash
mkdir -p src/features/my-feature/{components,hooks,services}
```

2. Build feature components in isolation

3. Export public API via `index.ts`:
```typescript
export { MyFeature } from './components';
```

4. Compose in a page:
```typescript
import { MyFeature } from '@features/my-feature';

export const MyPage = () => <MyFeature />;
```

### Adding a New Page

Pages should **only compose features**, no logic:

```typescript
// src/pages/MyPage.tsx
import { Feature1, Feature2 } from '@features/my-feature';

export const MyPage = () => {
  return (
    <>
      <Feature1 />
      <Feature2 />
    </>
  );
};
```

## 🎨 Styling Guidelines

- Use Tailwind utility classes
- Never hard-code colors (use theme tokens)
- Mobile-first responsive design
- Use design tokens from `tailwind.config.js`

```tsx
// ✅ Good
<div className="bg-brand-red text-white px-4 md:px-8">

// ❌ Bad
<div className="bg-[#FC5B50] text-white px-8">
```

## 🌐 Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Configure your environment:
- `VITE_API_BASE_URL` - Backend API URL
- `VITE_GOOGLE_ANALYTICS_ID` - Analytics tracking
- `VITE_ENABLE_DARK_MODE` - Dark mode feature flag

## 🚢 Production Deployment

```bash
# Build optimized production bundle
npm run build

# Output: dist/ folder ready for deployment
```

Deploy to:
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **AWS S3 + CloudFront**
- Any static hosting service

## 📖 Code Quality

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for consistent formatting
- **Strict mode** enabled
- **No unused variables/imports**

## 🎯 Performance

- Vite's optimized build process
- Code splitting via React Router
- Lazy loading ready (add as needed)
- Optimized assets and fonts
- Minimal bundle size

## 📄 License

MIT License - feel free to use for your projects!

---

Built with ❤️ for long-term scalability and developer experience.
