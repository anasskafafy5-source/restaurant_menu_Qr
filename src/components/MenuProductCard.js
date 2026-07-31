import { formatPrice, getProductPricing } from "@/utils/helper";
import ProductImage from "./ProductImage";

function MenuProductCard({ product, onClick }) {
  const { finalPrice, hasDiscount, regularPrice } =
    getProductPricing(product);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`View details for ${product.name}`}
      className="flex min-h-36 w-full cursor-pointer gap-3 rounded-2xl border border-tertiary/5 bg-white p-3 text-left shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:min-h-40 sm:gap-4 sm:p-4"
    >
      <div className="relative size-20 shrink-0 self-start overflow-hidden rounded-xl bg-neutral sm:size-24">
        <ProductImage
          product={product}
          sizes="(max-width: 640px) 80px, 96px"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="min-w-0 font-serif text-base font-semibold leading-5 text-tertiary sm:text-lg sm:leading-6">
            {product.name}
          </h3>

          <div className="flex shrink-0 flex-wrap justify-end gap-1">
            {product.is_featured && (
              <span className="rounded bg-secondary/25 px-1.5 py-1 text-[8px] font-semibold uppercase tracking-wide text-tertiary">
                Featured
              </span>
            )}
            <span
              className={`rounded px-1.5 py-1 text-[8px] font-semibold uppercase tracking-wide ${
                product.is_available
                  ? "bg-primary/10 text-primary"
                  : "bg-tertiary/10 text-tertiary/60"
              }`}
            >
              {product.is_available ? "Available" : "Unavailable"}
            </span>
          </div>
        </div>

        {product.description && (
          <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-tertiary/65 sm:text-sm">
            {product.description}
          </p>
        )}

        <div className="mt-auto pt-3">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="font-serif text-lg font-semibold text-primary">
              {formatPrice(finalPrice)}
            </span>
            {hasDiscount && (
              <span className="text-[10px] text-tertiary/40 line-through">
                {formatPrice(regularPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

export default MenuProductCard;
