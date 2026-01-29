# ProGen Architecture Documentation

## 🏛️ Architectural Philosophy

This project is built with **enterprise-grade scalability** in mind, following these core principles:

### 1. Feature-Based Modular Architecture

**Why?** Traditional page-based structures become unmaintainable as apps grow.

**How?** Each feature is a self-contained module with its own:
- Components (UI specific to this feature)
- Hooks (business logic and state)
- Services (API calls, data fetching)
- Types (feature-specific interfaces)

```
features/
  └── landing/
      ├── components/    # Hero, Features, Programs, etc.
      ├── hooks/         # useLandingData, useEnrollment
      ├── services/      # fetchPrograms, submitEnrollment
      └── index.ts       # Public API exports
```

**Benefits:**
- ✅ Isolated, testable modules
- ✅ Easy to add/remove features
- ✅ Multiple teams can work in parallel
- ✅ Clear ownership and boundaries

### 2. Pages as Route Composition Only

**Rule:** Pages should NEVER contain business logic.

**Why?** Keeps routing separate from features, making both easier to change.

```tsx
// ✅ GOOD - Pure composition
export const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Programs />
    </>
  );
};

// ❌ BAD - Logic in page
export const HomePage = () => {
  const [data, setData] = useState();
  useEffect(() => { /* fetch */ }, []);
  return <div>{/* render */}</div>;
};
```

### 3. Separation of Concerns

Each layer has a single responsibility:

| Layer | Responsibility | Examples |
|-------|----------------|----------|
| **Components** | UI presentation only | Button, Card, Navbar |
| **Features** | Domain-specific modules | Landing, Auth, Dashboard |
| **Pages** | Route composition | HomePage, AboutPage |
| **Services** | API/data fetching | api.ts, analytics.ts |
| **Store** | Global state | useThemeStore |
| **Utils** | Pure helper functions | formatCurrency, cn |
| **Layouts** | Page structure | MainLayout, AuthLayout |

### 4. Design Token System

**Rule:** Never hard-code colors, spacing, or typography.

**Why?** Centralized design system ensures consistency and makes theme changes trivial.

```tsx
// ✅ GOOD - Uses design tokens
<Button variant="primary" size="lg" />
<div className="bg-brand-red px-4 md:px-8" />

// ❌ BAD - Hard-coded values
<button className="bg-[#FC5B50] px-8" />
```

**Token Layers:**
1. `tailwind.config.js` - Core design tokens
2. `src/styles/theme.ts` - Programmatic access
3. `src/styles/index.css` - Global CSS utilities

### 5. Mobile-First Responsive Design

**Rule:** Design for mobile, then enhance for larger screens.

```tsx
// Mobile → Tablet → Desktop
<div className="text-base md:text-lg lg:text-xl" />
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
```

**Breakpoints:**
- `default` - Mobile (< 640px)
- `sm` - Small tablets (≥ 640px)
- `md` - Tablets (≥ 768px)
- `lg` - Laptops (≥ 1024px)
- `xl` - Desktops (≥ 1280px)

## 📁 File Organization Patterns

### Component Structure

```tsx
// Button.tsx
interface ButtonProps extends BaseComponentProps {
  variant?: Variant;
  size?: Size;
  // ... props
}

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  // ... implementation
};
```

**Rules:**
- Named exports (not default)
- Props interface defined inline
- Prop defaults in destructuring
- No business logic in UI components

### Feature Module Structure

```
features/
  └── landing/
      ├── components/
      │   ├── Hero.tsx
      │   ├── Features.tsx
      │   └── index.ts          # Export all
      ├── hooks/
      │   └── useLandingData.ts
      ├── services/
      │   └── landingApi.ts
      └── index.ts               # Public API
```

**Public API Pattern:**
```typescript
// features/landing/index.ts
export { Hero, Features, Programs } from './components';
export { useLandingData } from './hooks';
// Only export what other features/pages need
```

### Service Layer Pattern

```typescript
// services/api.ts - Base HTTP client
export const api = {
  get: <T>(endpoint: string, options?: RequestOptions) => { /* ... */ },
  post: <T>(endpoint: string, data?: unknown) => { /* ... */ },
};

// features/auth/services/authApi.ts - Feature-specific API
export const authApi = {
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
};
```

## 🎯 Design Patterns

### 1. Composition Over Inheritance

```tsx
// ✅ Composition
<Card hoverable padding="lg">
  <CardHeader />
  <CardContent />
</Card>

// ❌ Inheritance
class HoverableCard extends Card { /* ... */ }
```

### 2. Container/Presentational Components

```tsx
// Container - handles logic
const ProgramsContainer = () => {
  const { programs, loading } = usePrograms();
  return <ProgramsList programs={programs} loading={loading} />;
};

// Presentational - pure UI
const ProgramsList = ({ programs, loading }) => {
  if (loading) return <Spinner />;
  return programs.map(p => <ProgramCard {...p} />);
};
```

### 3. Custom Hooks for Reusable Logic

```tsx
// hooks/usePrograms.ts
export const usePrograms = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPrograms().then(setPrograms).finally(() => setLoading(false));
  }, []);

  return { programs, loading };
};
```

### 4. Centralized State Management

```typescript
// store/useAuthStore.ts
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: async (credentials) => {
    const user = await api.login(credentials);
    set({ user });
  },
  logout: () => set({ user: null }),
}));
```

## 🚀 Scalability Strategy

### Adding New Features

1. Create feature folder: `features/my-feature/`
2. Build in isolation with own components/hooks/services
3. Export public API via `index.ts`
4. Compose in pages as needed

### Adding New Pages

1. Create page in `pages/MyPage.tsx`
2. Import and compose features
3. Add route in `app/App.tsx`

```tsx
// pages/DashboardPage.tsx
import { Sidebar, Stats, Activity } from '@features/dashboard';

export const DashboardPage = () => (
  <div className="flex">
    <Sidebar />
    <main>
      <Stats />
      <Activity />
    </main>
  </div>
);

// app/App.tsx
<Route path="/dashboard" element={<DashboardPage />} />
```

### Adding Global State

```typescript
// store/useCartStore.ts
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => ({
        items: [...state.items, item]
      })),
      removeItem: (id) => set((state) => ({
        items: state.items.filter(i => i.id !== id)
      })),
    }),
    { name: 'cart-storage' }
  )
);
```

### Adding API Endpoints

```typescript
// features/checkout/services/checkoutApi.ts
import { api } from '@services/api';

export const checkoutApi = {
  createOrder: (order) => api.post('/orders', order),
  getOrderStatus: (id) => api.get(`/orders/${id}`),
};
```

## 🧪 Testing Strategy (Future)

```
features/
  └── landing/
      ├── components/
      │   ├── Hero.tsx
      │   └── Hero.test.tsx      # Component tests
      ├── hooks/
      │   ├── useLandingData.ts
      │   └── useLandingData.test.ts  # Hook tests
      └── services/
          ├── landingApi.ts
          └── landingApi.test.ts  # API tests
```

## 📊 Performance Optimization

### Code Splitting (Future)

```tsx
import { lazy, Suspense } from 'react';

const DashboardPage = lazy(() => import('@pages/DashboardPage'));

<Route
  path="/dashboard"
  element={
    <Suspense fallback={<Spinner />}>
      <DashboardPage />
    </Suspense>
  }
/>
```

### Asset Optimization

- SVG icons as inline components
- Images in `assets/images/` with proper formats
- Fonts preloaded in `index.html`

## 🔐 Security Best Practices

1. **Environment Variables** - Never commit `.env` files
2. **API Security** - Use HTTPS, validate tokens
3. **XSS Prevention** - React auto-escapes by default
4. **CSRF Protection** - Implement CSRF tokens for mutations

## 📚 Further Reading

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [Zustand](https://github.com/pmndrs/zustand)

---

**Remember:** This architecture is designed to scale from MVP to enterprise. Start simple, expand as needed, maintain consistency.
