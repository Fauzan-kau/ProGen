# ProGen Project Structure

## 📁 Complete Directory Tree

```
progen/
├── public/                       # Static assets served as-is
│
├── src/
│   ├── app/                      # Application bootstrap
│   │   └── App.tsx              # Main router & app shell
│   │
│   ├── assets/                   # Static resources
│   │   ├── images/              # Image files
│   │   ├── icons/               # Icon files (SVG recommended)
│   │   └── fonts/               # Custom fonts (if not using CDN)
│   │
│   ├── components/               # Reusable UI components
│   │   ├── ui/                  # Generic UI components
│   │   │   ├── Button.tsx       # Variant: primary, secondary, outline, ghost
│   │   │   ├── Card.tsx         # Hoverable card with shadows
│   │   │   ├── Container.tsx    # Responsive container wrapper
│   │   │   └── index.ts         # Barrel export
│   │   │
│   │   └── layout/              # Layout-specific components
│   │       ├── Navbar.tsx       # Sticky navbar with mobile menu
│   │       ├── Footer.tsx       # Multi-column footer
│   │       └── index.ts         # Barrel export
│   │
│   ├── features/                 # Feature-based modules (domain logic)
│   │   └── landing/             # Landing page feature
│   │       ├── components/      # Feature-specific components
│   │       │   ├── Hero.tsx     # Hero section with CTA
│   │       │   ├── Features.tsx # 6-card features grid
│   │       │   ├── Programs.tsx # Programs/courses section
│   │       │   ├── CTASection.tsx # Final conversion section
│   │       │   └── index.ts     # Export all components
│   │       │
│   │       ├── hooks/           # Feature-specific hooks (ready for use)
│   │       ├── services/        # Feature-specific API calls (ready for use)
│   │       └── index.ts         # Public API exports
│   │
│   ├── layouts/                  # Layout wrappers
│   │   └── MainLayout.tsx       # Main layout with navbar + footer
│   │
│   ├── pages/                    # Route components (composition only!)
│   │   ├── HomePage.tsx         # Landing page composition
│   │   └── index.ts             # Barrel export
│   │
│   ├── services/                 # Global API clients
│   │   └── api.ts               # Base HTTP client with request wrapper
│   │
│   ├── store/                    # Global state management (Zustand)
│   │   ├── useThemeStore.ts     # Example: theme state with persistence
│   │   └── index.ts             # Barrel export
│   │
│   ├── styles/                   # Global styles & design system
│   │   ├── index.css            # Tailwind imports + global styles
│   │   └── theme.ts             # Design tokens as TypeScript
│   │
│   ├── types/                    # Global TypeScript types
│   │   └── index.ts             # Shared interfaces & types
│   │
│   ├── utils/                    # Helper functions & constants
│   │   ├── constants.ts         # App-wide constants
│   │   ├── helpers.ts           # Utility functions (cn, debounce, etc.)
│   │   └── index.ts             # Barrel export
│   │
│   ├── main.tsx                  # Application entry point
│   └── vite-env.d.ts            # Vite environment variable types
│
├── .env.example                  # Environment variables template
├── .eslintrc.cjs                # ESLint configuration
├── .gitignore                   # Git ignore rules
├── .prettierrc                  # Prettier formatting config
├── index.html                   # HTML entry point
├── package.json                 # Dependencies & scripts
├── postcss.config.js            # PostCSS config (for Tailwind)
├── tailwind.config.js           # Tailwind + design tokens config
├── tsconfig.json                # TypeScript config with path aliases
├── tsconfig.node.json           # TypeScript config for Vite
├── vite.config.ts               # Vite bundler config
│
├── README.md                    # Project overview & quick start
├── ARCHITECTURE.md              # Architecture deep dive
├── CONTRIBUTING.md              # Development guidelines
└── PROJECT_STRUCTURE.md         # This file
```

## 🎯 Key Directories Explained

### `/src/app`
**Purpose:** Application initialization and routing
**Files:** App.tsx (main router)
**Rule:** Keep routing logic separate from features

### `/src/components`
**Purpose:** Reusable UI components used across features
**Subdirectories:**
- `ui/` - Generic components (Button, Card, Input)
- `layout/` - Layout-specific (Navbar, Footer, Sidebar)

**Rule:** No business logic, pure presentation

### `/src/features`
**Purpose:** Feature-based modules (self-contained)
**Structure:**
```
features/
  └── feature-name/
      ├── components/    # Feature-specific UI
      ├── hooks/         # Feature-specific logic
      ├── services/      # Feature-specific API calls
      └── index.ts       # Public exports only
```

**Rule:** Features should be independent and composable

### `/src/pages`
**Purpose:** Route composition ONLY
**Rule:** Pages import and arrange features, NO business logic

### `/src/services`
**Purpose:** Global API clients and external integrations
**Example:** `api.ts` - Base HTTP client for all API requests

### `/src/store`
**Purpose:** Global state management (Zustand)
**Example:** `useThemeStore.ts` - Dark mode theme state

### `/src/styles`
**Purpose:** Design system and global styles
**Files:**
- `index.css` - Tailwind imports + global CSS
- `theme.ts` - Design tokens for programmatic access

### `/src/types`
**Purpose:** Global TypeScript interfaces and types
**Rule:** Feature-specific types go in feature folders

### `/src/utils`
**Purpose:** Pure helper functions and constants
**Rule:** No side effects, just pure functions

## 🗂️ File Naming Conventions

| File Type | Convention | Example |
|-----------|------------|---------|
| Components | PascalCase.tsx | `Button.tsx`, `Hero.tsx` |
| Hooks | camelCase.ts | `useAuth.ts`, `usePrograms.ts` |
| Utils | camelCase.ts | `helpers.ts`, `constants.ts` |
| Types | camelCase.ts | `index.ts`, `api.ts` |
| Services | camelCase.ts | `api.ts`, `analytics.ts` |
| Stores | camelCase.ts | `useThemeStore.ts` |
| Pages | PascalCase.tsx | `HomePage.tsx`, `AboutPage.tsx` |

## 🔗 Path Aliases (Absolute Imports)

Configured in `vite.config.ts` and `tsconfig.json`:

```typescript
@/              → src/
@components/    → src/components/
@features/      → src/features/
@layouts/       → src/layouts/
@pages/         → src/pages/
@services/      → src/services/
@store/         → src/store/
@styles/        → src/styles/
@utils/         → src/utils/
@types/         → src/types/
@assets/        → src/assets/
```

**Usage:**
```typescript
import { Button } from '@components/ui';
import { Hero } from '@features/landing';
import { api } from '@services/api';
import { theme } from '@styles/theme';
```

## 📦 Module Dependencies

```
App.tsx
  └── MainLayout
      ├── Navbar (uses @components/ui)
      └── Footer (uses @components/ui)
  └── Pages
      └── HomePage
          └── Features
              ├── Hero (uses @components/ui)
              ├── Features (uses @components/ui)
              ├── Programs (uses @components/ui)
              └── CTASection (uses @components/ui)
```

## 🚀 Adding New Features

To add a new feature:

1. Create feature folder:
   ```bash
   mkdir -p src/features/my-feature/{components,hooks,services}
   ```

2. Build components in isolation

3. Export via `index.ts`:
   ```typescript
   // features/my-feature/index.ts
   export { MyComponent } from './components';
   export { useMyHook } from './hooks';
   ```

4. Compose in page:
   ```typescript
   // pages/MyPage.tsx
   import { MyComponent } from '@features/my-feature';
   ```

5. Add route:
   ```typescript
   // app/App.tsx
   <Route path="/my-page" element={<MyPage />} />
   ```

## 🎨 Style Organization

```
Tailwind Config
    ↓
Design Tokens (colors, spacing, fonts)
    ↓
Global CSS (base styles, utilities)
    ↓
Component Styles (Tailwind classes)
```

## 📊 Scalability Path

```
MVP (Current)
  └── Single landing page
  └── Basic components
  └── No backend yet

Phase 2
  └── Add authentication feature
  └── Add dashboard feature
  └── Connect to backend API

Phase 3
  └── Add course enrollment
  └── Add payment processing
  └── Add admin panel

Enterprise
  └── Multiple feature teams
  └── Micro-frontend architecture
  └── Advanced state management
```

---

**This structure is designed to scale from MVP to enterprise while maintaining clean architecture.**
