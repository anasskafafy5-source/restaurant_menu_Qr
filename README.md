# Nay Menu — Restaurant QR Menu

A modern, mobile-first restaurant menu that lets customers browse current offers, categories, featured products, and detailed menu items directly from a QR code.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-149ECA?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Database_%26_Storage-3FCF8E?logo=supabase&logoColor=white)
![Build](https://img.shields.io/badge/Production_Build-Passing-2E7D32)

[**View the Live Customer Menu**](https://restaurant-menu-qr-drab.vercel.app/) · [**Admin Dashboard Repository**](https://github.com/anasskafafy5-source/restaurant-menu-management--Admin-)

> This repository contains the public customer experience. Restaurant content is maintained through a separate Admin Dashboard and delivered to the menu through Supabase.

## Project overview

Nay Menu is the customer-facing half of a restaurant menu management solution. A customer scans a QR code and immediately browses the restaurant's menu in the browser—there is no application to install and no account to create.

Restaurant staff use the separate Admin Dashboard to maintain restaurant information, categories, products, prices, discounts, availability, featured items, offers, and images. The public menu reads this content from Supabase and refreshes its statically generated output on a short revalidation cycle, so updates can be published without changing or redeploying the customer application.

The product is intentionally focused on menu discovery. Ordering, checkout, payments, reservations, and delivery are outside its scope.

## The business problem

Printed and PDF menus create avoidable friction for both restaurants and their customers:

- Price or product changes make printed menus outdated and expensive to replace.
- PDF menus are difficult to read and navigate on mobile screens.
- Temporary promotions are hard to schedule and remove consistently.
- Large menus become slow to browse without clear category navigation.
- Availability and discount information can become inconsistent.
- Staff may need a developer to make routine content changes.

Nay Menu replaces that workflow with a centralized management experience and a responsive QR menu. Staff can maintain reusable content and images in the Admin Dashboard, while customers receive an organized, category-based menu with current availability, pricing, promotions, and product details.

## Customer-facing features

- **Mobile-first responsive interface** designed for QR-code access on phones, tablets, and desktop screens.
- **Restaurant identity header** with cover image, circular logo, restaurant name, description, and polished image fallbacks.
- **Offers carousel** with one visible offer, three-second autoplay, interaction pausing, navigation arrows, pagination dots, and offer detail modals.
- **Cairo-aware offer scheduling** using date-only rules for scheduled, active, expired, and inactive states.
- **Inclusive offer end dates** and an automatic status refresh after the restaurant date changes at Cairo midnight.
- **Category navigation** that smoothly scrolls customers to the matching product group without filtering or leaving the page.
- **Featured products** presented in a compact horizontal browsing experience.
- **Products grouped by category** with images, short descriptions, pricing, discounts, availability, and featured indicators.
- **Reusable product detail modal** with a prominent image, category, full description, ingredients when available, pricing, discounts, and availability.
- **Accessible interactions** with semantic buttons, visible focus states, keyboard navigation, modal focus trapping, Escape handling, and focus restoration.
- **Section-specific Suspense skeletons** for the header, offers, categories, featured products, and category product groups.
- **Purposeful empty states** for missing products, categories, offers, and featured items.
- **Optimized image delivery** through `next/image`, responsive `sizes`, Supabase Storage restrictions, and graceful placeholders.
- **Static generation with one-minute revalidation** for fast delivery without leaving restaurant content stale for long periods.

## Admin Dashboard

The public menu is paired with a separate management application:

[**Open the Admin Dashboard Repository →**](https://github.com/anasskafafy5-source/restaurant-menu-management--Admin-)

The dashboard is responsible for maintaining the content consumed by this customer menu:

- Restaurant settings, including name, description, cover, and logo
- Categories and their images
- Products, descriptions, ingredients, prices, and discounts
- Product availability and featured status
- Offers, promotional pricing, active state, and date range
- Supabase-hosted menu images

The two applications remain independently deployable while sharing Supabase as their content and storage layer.

## Technology stack

| Technology | Role in the project |
| --- | --- |
| [Next.js 16](https://nextjs.org/) | App Router, Server Components, static prerendering, Suspense, image optimization, and revalidation |
| [React 19](https://react.dev/) | Component composition and focused client-side interactions |
| JavaScript | Application and business logic |
| [Tailwind CSS 4](https://tailwindcss.com/) | Responsive, mobile-first styling and design tokens |
| [Supabase](https://supabase.com/) | PostgreSQL-backed restaurant content and public image storage |
| [Vercel](https://vercel.com/) | Hosting for the live customer menu |

## Architecture and rendering

The application uses the Next.js App Router and keeps server/client responsibilities intentionally small:

- Async **Server Components** fetch settings, offers, categories, and related products.
- A focused **Supabase service layer** owns database queries and error propagation.
- Small **Client Components** handle only image failure state, carousel behavior, category scrolling, product selection, modals, and the floating category-return control.
- Products are loaded through the categories relationship and reused for featured and grouped product sections.
- Each main section has its own **Suspense fallback**, allowing meaningful loading placeholders instead of a generic spinner.
- The home route is statically prerendered and exports `revalidate = 60`, providing Incremental Static Regeneration on a one-minute cycle.
- Shared helpers centralize price formatting, discount calculations, and offer date behavior.
- Offer status comparisons use `Africa/Cairo` and date-only `YYYY-MM-DD` values, avoiding UTC parsing differences between the server and browser.

The result is a fast initial document with minimal client-side JavaScript reserved for interactions that genuinely require the browser.

## Project structure

```text
restaurant-menu-customer/
├── public/                         # Public static assets
├── src/
│   ├── app/
│   │   ├── error.js                # Route-level customer error UI
│   │   ├── favicon.ico
│   │   ├── globals.css             # Tailwind import, theme tokens, and shared motion
│   │   ├── layout.js               # Root layout, metadata, and optimized font
│   │   └── page.js                 # Single-page composition, Suspense, and ISR
│   ├── components/
│   │   ├── Header.js               # Restaurant information
│   │   ├── OffersContainer.js      # Interactive offer carousel
│   │   ├── CategoryArea.js         # Category navigation
│   │   ├── FeaturedProducts.js     # Featured product rail
│   │   ├── ProductsByCategoryArea.js
│   │   ├── ProductDetailsModal.js
│   │   ├── OfferDetailsModal.js
│   │   ├── Modal.jsx               # Shared accessible modal foundation
│   │   └── skeleton-loading/       # Section-specific loading skeletons
│   ├── lib/
│   │   ├── data-service.js         # Settings, offers, and category/product queries
│   │   └── supabase.js             # Supabase client configuration
│   └── utils/
│       ├── helper.js               # Price and discount helpers
│       └── offerDateHelpers.js     # Cairo date and offer-status rules
├── next.config.mjs                 # Supabase image host configuration
├── package.json
└── README.md
```

- `src/app` defines the single route, root metadata, global styles, error UI, Suspense boundaries, and revalidation policy.
- `src/components` contains server-rendered sections and focused interactive components.
- `src/components/skeleton-loading` contains layout-aware placeholders for every primary section.
- `src/lib` owns Supabase configuration and database access.
- `src/utils` contains reusable pricing and restaurant-date business logic.
- `public` contains static assets served directly by Next.js. No project screenshots are currently stored there.

## Customer journey

1. A customer scans the restaurant QR code and opens the menu in a browser.
2. The restaurant identity and current promotional offers appear first.
3. The customer discovers featured items and browses the category navigation.
4. Selecting a category scrolls directly to its grouped products.
5. Selecting a product opens its full details without navigating away.
6. Closing the modal returns the customer to the same place in the menu.
7. Content changes made through the dashboard become visible after the next revalidation.

## Local installation

### Prerequisites

- Node.js 20.9 or later, as required by Next.js 16
- npm
- A Supabase project containing the expected restaurant tables and public Storage assets

Clone and install the customer menu:

```bash
git clone https://github.com/anasskafafy5-source/restaurant_menu_Qr.git
cd restaurant_menu_Qr
npm install
```

Create `.env.local` in the project root, add the required Supabase values, and start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment variables

The application requires these exact variables:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

`NEXT_PUBLIC_SUPABASE_URL` also determines which Supabase Storage hostname Next.js accepts for optimized remote images.

These values are designed for public browser access and must not contain a Supabase service-role key. Public access must still be restricted through appropriate Row Level Security, table grants, and Storage policies configured in Supabase. Those policies are deployment configuration and are not defined in this repository.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the Next.js development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Serves the completed production build |
| `npm run lint` | Runs ESLint across the project |

## Product scope

Nay Menu is deliberately a browsing and menu-management solution. It does not provide:

- Online ordering or a shopping cart
- Checkout or online payments
- Delivery management or tracking
- Table reservations
- Inventory management
- Point-of-sale functionality
- Customer accounts, ratings, or reviews

Keeping these workflows outside the customer menu makes the QR experience fast, direct, and easy to use.

## Production readiness

The repository currently includes:

- A passing ESLint check
- A successful optimized Next.js production build
- Responsive mobile and desktop layouts
- Server-rendered Supabase content
- One-minute static revalidation
- Next.js image optimization and header image fallbacks
- Section-specific loading skeletons and customer-friendly empty states
- Route-level error handling
- Centralized Cairo offer date logic
- Keyboard-accessible product and offer details modals

Production deployment still requires valid environment variables and correctly configured Supabase database and Storage access policies.

## Optional future enhancements

The current application is complete for its defined scope. Possible future additions for restaurants with broader requirements include:

- Product search for exceptionally large menus
- Additional language support
- Richer social-sharing metadata and menu analytics
- Multi-branch restaurant configuration

## Author

**Anass Mahmoud**
