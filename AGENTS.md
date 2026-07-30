# AGENTS.md

# Restaurant QR Menu

## Project Overview

This project is a modern digital restaurant QR menu.

Customers open the menu by scanning a QR code.

The goal is to help users browse food as quickly and effortlessly as possible.

This project is NOT:

- A restaurant landing page
- An e-commerce website
- A food ordering application
- A dashboard
- A management system

Always keep the experience simple and focused.

---

# Tech Stack

- Next.js
- React
- JavaScript
- Tailwind CSS
- Supabase

Prefer using native Next.js features whenever possible.

Use:

- Server Components
- fetch()
- next/image
- Loading UI
- Error UI
- Route Handlers when appropriate

Avoid introducing unnecessary libraries.

---

# Core Philosophy

Every decision should improve one thing:

Helping users find food faster.

Whenever adding a new feature, ask:

"Does this make browsing the menu easier?"

If the answer is no, don't add it.

Always prefer simplicity over complexity.

---

# Design Philosophy

The UI should feel:

- Premium
- Modern
- Minimal
- Elegant
- Fast
- Mobile-first

Prioritize:

- Excellent spacing
- Typography
- Visual hierarchy
- Clean layouts
- High-quality food images
- Soft shadows
- Rounded corners
- Smooth animations

Avoid visual clutter.

---

# User Experience

The customer opens the menu after scanning a QR code.

The browsing flow should always be:

1. Restaurant information
2. Offers
3. Categories
4. Search
5. Featured products
6. Products

Users should never feel lost.

Navigation should require the fewest interactions possible.

---

# Page Structure

The application is a single scrolling page.

Page order:

1. Restaurant Cover
2. Restaurant Logo
3. Restaurant Name
4. Short Description
5. Offers Carousel
6. Categories
7. Search
8. Featured Products
9. Products grouped by category
10. Footer

Do not redesign this flow unless there is a significant UX improvement.

---

# Header

Keep it compact.

Include:

- Cover image
- Circular logo
- Restaurant name
- One-line description

Avoid oversized hero sections.

---

# Offers

Offers appear immediately below the restaurant information.

Requirements:

- Horizontal carousel
- One card visible
- Pagination dots
- Auto slide every 3 seconds
- Pause autoplay while interacting
- Hide controls when only one offer exists

Offers should visually stand out from the rest of the page.

---

# Categories

Categories are navigation only.

Clicking a category should:

- Smoothly scroll to the corresponding product section.

Never filter products.

Products should always remain grouped by category.

---

# Search

Place search directly below Categories.

Search should:

- Search all products instantly.
- Display an empty state when there are no results.

---

# Featured Products

Display featured products horizontally.

Only products marked as featured should appear.

Keep cards compact.

---

# Products

Products must remain grouped by category.

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

Never merge all products into one long list.

---

# Product Card

Each card should contain:

- Product image
- Product name
- Short description
- Price
- Discount (optional)
- Availability badge
- Featured badge (optional)

Cards should remain lightweight and easy to scan.

---

# Product Details

Clicking a product opens a Bottom Sheet or Modal.

Include:

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

# Floating Button

When users scroll into the products section:

Display a floating button.

Purpose:

Smoothly scroll back to the Categories section.

Do not use a sticky category bar.

---

# Footer

Keep the footer minimal.

Include only:

- Phone number
- Address
- Social media links

Nothing else.

---

# Never Add Unless Explicitly Requested

Do NOT add:

- Authentication
- User accounts
- Shopping cart
- Checkout
- Orders
- Payments
- Favorites
- Reviews
- Ratings
- Comments
- Notifications
- Multi-page navigation
- Complex menus
- Admin features
- Dashboard features

This project is intentionally simple.

---

# Performance

Always prioritize performance.

Prefer:

- Server Components
- Optimized images
- Lazy loading where appropriate
- Small reusable components
- Minimal JavaScript
- Clean rendering

Avoid unnecessary client-side state.

---

# Accessibility

Always include:

- Semantic HTML
- Keyboard accessibility
- Proper alt text
- Visible focus states
- Accessible buttons
- Accessible form controls when applicable

---

# Code Style

Write clean, readable, maintainable code.

Prefer:

- Small components
- Clear naming
- Reusable UI
- Simple logic
- Consistent structure

Avoid:

- Overengineering
- Deep component nesting
- Unnecessary abstractions
- Large components with multiple responsibilities

---

# Design Decisions

Every screen should feel like a real premium restaurant product.

The experience should focus on:

- Speed
- Simplicity
- Readability
- Smooth interactions
- Excellent visual hierarchy

Avoid unnecessary decorative elements.

---

# AI Instructions

When modifying this project:

- Preserve the existing visual style.
- Maintain the established user flow.
- Reuse existing components whenever possible.
- Avoid introducing new libraries unless explicitly requested.
- Keep the UI clean and minimal.
- Prefer improving existing components over replacing them.
- Do not change the overall architecture without a strong technical reason.

Every change should make the menu easier to browse, not more complicated.
