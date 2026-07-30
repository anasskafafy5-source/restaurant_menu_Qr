"use client";

import Image from "next/image";

const CATEGORY_PALETTE = [
  {
    card: "bg-primary/15 ring-primary/15 hover:bg-primary/20",
    text: "text-tertiary",
  },
  {
    card: "bg-secondary/25 ring-secondary/25 hover:bg-secondary/30",
    text: "text-tertiary",
  },
  {
    card: "bg-tertiary ring-tertiary/20 hover:bg-tertiary/90",
    text: "text-neutral",
  },
  {
    card: "bg-white ring-tertiary/10 hover:bg-primary/5",
    text: "text-tertiary",
  },
];

function getPaletteIndex(categoryId) {
  const numericId = Number(categoryId);

  if (Number.isInteger(numericId)) {
    const zeroBasedId = Math.max(0, numericId - 1);
    return zeroBasedId % CATEGORY_PALETTE.length;
  }

  const stableId = String(categoryId ?? "");
  let hash = 0;

  for (const character of stableId) {
    hash = (hash * 31 + character.charCodeAt(0)) % CATEGORY_PALETTE.length;
  }

  return hash;
}

function handleCategoryClick(categoryId) {
  const categorySection = document.getElementById(`category-${categoryId}`);
  categorySection?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function CategoryCard({ category }) {
  const image = category.image_url ?? category.image;
  const name = category.name || "Category";
  const palette = CATEGORY_PALETTE[getPaletteIndex(category.id)];

  return (
    <button
      type="button"
      onClick={() => handleCategoryClick(category.id)}
      className={`mx-4 my-1.5 flex min-w-0 cursor-pointer touch-manipulation items-center gap-2 rounded-2xl px-3 py-2.5 text-left shadow-sm ring-1 transition-[transform,box-shadow,background-color] duration-500 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mx-6 ${palette.card}`}
    >
      <span className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-neutral/80 ring-1 ring-tertiary/5 sm:size-16">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 56px, 64px"
            className="object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="grid h-full w-full place-items-center font-serif text-lg font-semibold text-primary/70"
          >
            {name.charAt(0)}
          </span>
        )}
      </span>

      <span
        className={`min-w-0 flex-1 truncate text-base font-semibold tracking-[-0.01em] sm:text-lg ${palette.text} [text-shadow:0_1px_0_rgb(255_255_255_/_0.3),0_2px_4px_rgb(28_28_28_/_0.12)]`}
      >
        {name}
      </span>
    </button>
  );
}

export default CategoryCard;
