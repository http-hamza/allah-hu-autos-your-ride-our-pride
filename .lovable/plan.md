

# Allah-Hu-Autos — Complete E-Commerce Website Plan

## Overview
Build a fully functional, production-ready car accessories e-commerce frontend for **Allah-Hu-Autos** (Lahore & Quetta, Pakistan) using React + Vite + Tailwind CSS + TypeScript. All data is dummy/local, ready to swap with Supabase later.

**Theme:** Red (#e11d48), Black (#09090b), White — premium automotive aesthetic.
**Tagline:** "We Take Pride in Your Ride"

---

## Phase 1: Foundation

### Design System & Theme
- Update `index.css` with the red/black/white color scheme (rose-600 primary, zinc-950 dark, zinc-50 backgrounds)
- Add all custom CSS classes: `.gradient-hero`, `.btn-primary`, `.card-hover`, `.fade-in`, `.slide-up`, `.stagger`, `.glass`, `.text-gradient`, etc.
- Create reusable UI components: Button, Input, Select, Badge, Skeleton, Container

### Data Layer
- Create `lib/types.ts` with all TypeScript types (Product, Category, Vehicle, Order, Booking, etc.)
- Create `lib/dummy-data.ts` with ALL dummy data:
  - 43 categories, 100+ products with variants, 8 vehicle makes, 30+ models, 50+ vehicles
  - 2 branches, sample orders, bookings, reviews
  - Helper functions: `getProductsByCategory()`, `getProductBySlug()`, `searchProducts()`, etc.
- Create `lib/constants.ts` with business info, pricing rules, delivery fees

### State Management (React Context + localStorage)
- Cart context: add/remove/update items, persist to localStorage, computed totals
- Vehicle context: make → model → year selection, persist to localStorage

---

## Phase 2: Layout & Navigation

### Header
- Sticky header with logo, search bar, navigation links, cart icon with badge
- Vehicle selector bar below header when vehicle is selected
- Mobile hamburger menu with slide-out drawer

### Footer
- Premium dark footer with business info, branch details, categories, social links
- Operating hours, contact info

---

## Phase 3: Storefront Pages

### Homepage (`/`)
- Dark gradient hero with animated tagline, vehicle selector, trust badges, wave SVG separator
- Category grid (3-col mobile → 6-col desktop) with hover effects
- Featured products grid with staggered fade-in
- "Why Choose Us" section with 6 feature cards
- Dark CTA section for booking

### Category Pages (`/categories/:slug`)
- Dark hero with breadcrumb, sidebar with all 43 categories, product grid
- Sort dropdown, product count, pagination, empty state

### Product Detail (`/products/:slug`)
- Image gallery, breadcrumb, vehicle compatibility badge
- Price with discount %, variant selector, quantity controls
- Installation option toggle (branch Rs 1,500 / home Rs 2,000)
- Add to cart with toast notification

### Search (`/search`)
- Full-width search with debounce, popular search chips, real-time results

### Cart (`/cart`)
- Cart items list with quantity controls, installation indicators
- Order summary sidebar with delivery fee logic (free over Rs 5,000)

### Checkout (`/checkout`)
- Address form, branch selection, fulfillment type, booking slot picker
- Order summary, COD badge, place order button

### Order Confirmation (`/order-confirmation/:orderNumber`)
- Success page with order details

### Booking (`/booking`)
- 3-step wizard: branch + service → date + time slot → contact details
- Progress indicator, booking summary

### About (`/about`)
- Company story, branch info, team values

---

## Phase 4: Auth & Account

### Auth Pages (`/login`, `/register`)
- Clean centered card layout with email/password fields
- Dummy auth (stored in context)

### Account Pages (`/account/*`)
- Dashboard, My Orders, My Bookings, My Garage (saved vehicles), My Addresses
- All populated with dummy data

---

## Phase 5: Admin Panel

### Admin Layout
- Dark sidebar (zinc-950) with rose-600 accents, collapsible on mobile

### Admin Pages
- **Dashboard:** 4 stat cards, recent orders table
- **Products:** List table, add/edit forms
- **Orders:** List with status management
- **Bookings:** List with status management
- **Inventory:** Stock levels with low-stock warnings
- **Categories, Vehicles, Customers, Reviews, Settings** pages

---

## UX & Animations
- Card hover: translateY(-6px) + shadow + rose glow
- Staggered fade-in for grids (50ms delay between items)
- Hero text slide-up, floating decorative orbs
- Image zoom on product card hover (110%, 700ms)
- Cart badge pulse on count change
- All pages fade-in on mount
- Fully responsive: mobile-first with 375px support

---

## Routing Structure
All routes via React Router:
`/`, `/products`, `/products/:slug`, `/categories/:slug`, `/search`, `/cart`, `/checkout`, `/order-confirmation/:orderNumber`, `/booking`, `/about`, `/login`, `/register`, `/account`, `/account/orders`, `/account/bookings`, `/account/vehicles`, `/account/addresses`, `/admin`, `/admin/products`, `/admin/products/new`, `/admin/products/:id`, `/admin/orders`, `/admin/orders/:id`, `/admin/bookings`, `/admin/bookings/:id`, `/admin/inventory`, `/admin/categories`, `/admin/vehicles`, `/admin/customers`, `/admin/reviews`, `/admin/settings`

