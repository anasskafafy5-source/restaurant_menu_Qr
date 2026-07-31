import { formatPrice, getProductPricing } from "@/utils/helper";
import ProductImage from "./ProductImage";

function FeaturedCardProduct({ product, onClick }) {
  const { finalPrice, hasDiscount, regularPrice } =
    getProductPricing(product);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`View details for ${product.name}`}
      className="group flex h-96 w-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-tertiary/5 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <div className="relative h-52 shrink-0 bg-tertiary/5">
        <div className="absolute left-1/2 top-5 size-40 -translate-x-1/2 overflow-hidden rounded-xl">
          <ProductImage
            product={product}
            sizes="160px"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <span className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-tertiary shadow-sm">
          Featured
        </span>

        {!product.is_available && (
          <span className="absolute right-4 top-4 rounded-full bg-tertiary/80 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-white">
            Unavailable
          </span>
        )}
      </div>

      <div className="flex min-h-0 flex-1 items-start justify-between gap-4 p-5">
        <div className="min-w-0">
          <h3 className="line-clamp-2 font-serif text-xl font-semibold leading-6 text-tertiary sm:text-2xl">
            {product.name}
          </h3>
          {product.description && (
            <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-tertiary/60">
              {product.description}
            </p>
          )}
        </div>

        <div className="shrink-0 text-right">
          <p className="font-serif text-xl font-semibold text-primary">
            {formatPrice(finalPrice)}
          </p>
          {hasDiscount && (
            <p className="mt-0.5 text-xs text-tertiary/40 line-through">
              {formatPrice(regularPrice)}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}

export default FeaturedCardProduct;
