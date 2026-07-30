# PROJECT.md

# Restaurant QR Menu

## Overview

Restaurant QR Menu is a modern digital menu built for restaurants.

Customers access the menu by scanning a QR code.

The application focuses entirely on browsing the menu quickly with a clean, premium user experience.

This project is presentation-only.

There is:

- No ordering
- No checkout
- No authentication
- No dashboard
- No user accounts

The application exists only to display restaurant information and menu items.

---

# Application Type

This project is a single-page application built with the Next.js App Router.

All content is displayed within one page.

Navigation happens through smooth scrolling between sections rather than page navigation.

---

# Tech Stack

- Next.js (App Router)
- React
- JavaScript
- Tailwind CSS
- Supabase

The project should rely on native Next.js features whenever possible.

Prefer:

- Server Components
- fetch()
- next/image
- Loading UI
- Error UI

Avoid unnecessary third-party libraries.

---

# Folder Structure

```
src
│
├── app
├── components
└── lib
```

---

## app

Contains:

- Pages
- Layouts
- Metadata
- Loading UI
- Error UI

Keep pages as Server Components unless client-side interaction is required.

---

## components

Contains reusable UI components.

Expected components include:

- Header
- OffersCarousel
- CategoryList
- SearchBar
- FeaturedProducts
- ProductSection
- ProductCard
- ProductModal
- FloatingCategoriesButton
- Footer

Components should be:

- Small
- Reusable
- Easy to maintain
- Focused on a single responsibility

---

## lib

Contains project logic.

Examples:

- Supabase client
- Data fetching functions
- Utility functions
- Constants
- Helper functions

Keep business logic outside UI components whenever possible.

---

# Database

The project uses Supabase.

## settings

Stores restaurant information.

Fields include:

- name
- description
- logo
- cover
- phone
- facebook
- instagram

Only one row is expected.

---

## categories

Stores menu categories.

Examples:

- Burgers
- Pizza
- Drinks
- Desserts

---

## products

Stores restaurant products.

Fields include:

- name
- description
- image
- regular_price
- discount
- total_price
- category_id
- is_featured
- is_available

Each product belongs to one category.

---

## offers

Stores promotional offers.

Fields include:

- title
- description
- image
- old_price
- new_price
- start_date
- end_date
- is_active

---

# Application Flow

The page should always follow this order:

1. Restaurant Cover
2. Restaurant Logo
3. Restaurant Name
4. Restaurant Description
5. Offers Carousel
6. Categories
7. Search
8. Featured Products
9. Products Grouped by Category
10. Footer

This structure should remain consistent.

---

# Navigation

Navigation is scroll-based.

Clicking a category should smoothly scroll to its corresponding section.

Do not navigate between pages.

Do not filter products.

Products always remain grouped by category.

---

# Search

Search is placed directly below the Categories section.

Requirements:

- Search across all products.
- Update results instantly.
- Display an empty state when no products match.

---

# Featured Products

Display featured products horizontally.

Only products marked as featured should appear.

Keep cards compact and visually prominent.

---

# Product Sections

Products should always be grouped by category.

Example:

Burgers

- Product
- Product
- Product

Pizza

- Product
- Product

Drinks

- Product
- Product

Do not merge every product into a single list.

---

# Product Card

Each card should display:

- Product image
- Product name
- Short description
- Price
- Discount (optional)
- Availability badge
- Featured badge (optional)

Cards should be lightweight and easy to scan.

---

# Product Details

Clicking a product opens a Bottom Sheet or Modal.

Display:

- Large image
- Product name
- Full description
- Ingredients (if available)
- Price
- Old price (if discounted)
- Availability
- Category

Never navigate to another page.

---

# Offers

Offers appear immediately below the restaurant information.

Requirements:

- Horizontal carousel
- One visible card
- Pagination dots
- Auto-play every 3 seconds
- Pause autoplay during interaction
- Hide controls when only one offer exists

Offers should visually stand out.

---

# Floating Button

When users scroll into the products section:

Display a floating button.

Purpose:

Smoothly scroll back to the Categories section.

Do not create a sticky category navigation.

---

# Footer

Keep the footer simple.

Include only:

- Phone number
- Address
- Social media links

---

# Images

Use next/image whenever possible.

Optimize images for different screen sizes.

Lazy load images where appropriate.

---

# Styling

Use Tailwind CSS.

The design should feel:

- Premium
- Modern
- Minimal
- Elegant
- Mobile-first

Focus on:

- Clean layouts
- Consistent spacing
- Typography
- Visual hierarchy
- High-quality food images

Avoid unnecessary decorative elements.

---

# Performance

Always prioritize performance.

Prefer:

- Server Components
- Optimized rendering
- Lazy loading
- Minimal client-side JavaScript
- Efficient data fetching

---

# Coding Guidelines

Write code that is:

- Clean
- Readable
- Reusable
- Maintainable

Prefer:

- Small components
- Clear naming
- Simple logic
- Reusable utilities

Avoid:

- Duplicate code
- Overengineering
- Large components
- Unnecessary abstractions

---

# Current Scope

The current version focuses only on displaying:

- Restaurant information
- Offers
- Categories
- Search
- Featured products
- Products

The experience should always remain fast, clean, intuitive, and enjoyable on mobile devices.