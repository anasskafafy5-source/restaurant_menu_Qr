import { formatPrice, getProductPricing } from "@/utils/helper";
import Modal from "./Modal";
import ProductImage from "./ProductImage";

const TITLE_ID = "product-details-title";
const DESCRIPTION_ID = "product-details-description";

function getCategoryName(product) {
  if (typeof product.category === "string") {
    return product.category;
  }

  return (
    product.category_name ??
    product.category?.name ??
    product.categories?.name ??
    null
  );
}

function ProductDetailsModal({ product, onClose }) {
  if (!product) {
    return null;
  }

  return (
    <Modal
      isOpen
      onClose={onClose}
      labelledBy={TITLE_ID}
      describedBy={product.description ? DESCRIPTION_ID : undefined}
    >
      <ProductDetailsContent product={product} />
    </Modal>
  );
}

function ProductDetailsContent({ product, onClose }) {
  const categoryName = getCategoryName(product);
  const { finalPrice, hasDiscount, regularPrice } =
    getProductPricing(product);
  const ingredients = Array.isArray(product.ingredients)
    ? product.ingredients.join(", ")
    : product.ingredients;
  const hasAvailability = typeof product.is_available === "boolean";

  return (
    <div className="overflow-hidden rounded-3xl bg-neutral">
      <div className="relative aspect-[4/3] w-full bg-tertiary/5 sm:aspect-[16/10]">
        <ProductImage
          product={product}
          sizes="(max-width: 640px) calc(100vw - 32px), 512px"
          className="object-cover"
        />
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          {categoryName ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {categoryName}
            </p>
          ) : (
            <span />
          )}

          {hasAvailability && (
            <span
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                product.is_available
                  ? "bg-primary/10 text-primary"
                  : "bg-tertiary/10 text-tertiary/60"
              }`}
            >
              {product.is_available ? "Available" : "Unavailable"}
            </span>
          )}
        </div>

        <h2
          id={TITLE_ID}
          className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-tertiary"
        >
          {product.name}
        </h2>

        <div className="mt-4 flex flex-wrap items-baseline gap-3">
          <span className="font-serif text-2xl font-semibold text-primary">
            {formatPrice(finalPrice)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-tertiary/45 line-through">
              {formatPrice(regularPrice)}
            </span>
          )}
        </div>

        {product.description && (
          <p
            id={DESCRIPTION_ID}
            className="mt-5 whitespace-pre-line break-words text-sm leading-6 text-tertiary/70 sm:text-base sm:leading-7"
          >
            {product.description}
          </p>
        )}

        {ingredients && (
          <div className="mt-5 border-t border-tertiary/10 pt-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-tertiary/55">
              Ingredients
            </h3>
            <p className="mt-2 text-sm leading-6 text-tertiary/70">
              {ingredients}
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={onClose}
          className="mt-6 min-h-12 w-full cursor-pointer rounded-xl bg-primary px-5 py-3 text-base font-semibold text-white transition duration-300 hover:bg-primary/90 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ProductDetailsModal;
