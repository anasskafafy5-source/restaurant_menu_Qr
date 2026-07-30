"use client";

import { useEffect, useRef, useState } from "react";

const CATEGORIES_ID = "categories";
const PRODUCTS_AREA_ID = "products-by-category";

function FloatingCategoriesButton() {
  const [isVisible, setIsVisible] = useState(false);
  const isReturningToCategories = useRef(false);

  useEffect(() => {
    const productsArea = document.getElementById(PRODUCTS_AREA_ID);
    const categoriesArea = document.getElementById(CATEGORIES_ID);

    if (!productsArea || !categoriesArea) {
      return undefined;
    }

    let isProductsVisible = false;
    let isCategoriesVisible = false;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target.id === PRODUCTS_AREA_ID) {
            isProductsVisible = entry.isIntersecting;
          }

          if (entry.target.id === CATEGORIES_ID) {
            isCategoriesVisible = entry.isIntersecting;

            if (entry.isIntersecting) {
              isReturningToCategories.current = false;
            }
          }
        }

        setIsVisible(
          !isReturningToCategories.current &&
            isProductsVisible &&
            !isCategoriesVisible,
        );
      },
      { rootMargin: "-10% 0px -10% 0px" },
    );

    observer.observe(productsArea);
    observer.observe(categoriesArea);
    return () => observer.disconnect();
  }, []);

  function handleClick() {
    const categoriesArea = document.getElementById(CATEGORIES_ID);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    isReturningToCategories.current = true;
    setIsVisible(false);
    categoriesArea?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      aria-label="Back to categories"
      className={`fixed bottom-5 right-4 z-40 flex cursor-pointer touch-manipulation items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary sm:bottom-6 sm:right-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 15 6-6 6 6" />
      </svg>
      Categories
    </button>
  );
}

export default FloatingCategoriesButton;
