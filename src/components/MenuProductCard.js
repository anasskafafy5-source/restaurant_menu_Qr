import Image from "next/image";
import { formatPrice } from "@/utils/helper";

function MenuProductCard({ product }) {
  const image = product.image_url ?? product.image;
  const discount = Number(product.discount);
  const hasDiscount =
    Number.isFinite(discount) &&
    discount > 0 &&
    product.total_price != null &&
    Number(product.total_price) < Number(product.regular_price);
  const price = hasDiscount ? product.total_price : product.regular_price;

  return (
    <article className="flex min-h-36 gap-3 rounded-2xl border border-tertiary/5 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:min-h-40 sm:gap-4 sm:p-4">
      <div className="relative size-20 shrink-0 self-start overflow-hidden rounded-xl bg-neutral sm:size-24">
        {image && (
          <Image
            src={image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 80px, 96px"
            className="object-cover"
          />
        )}
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
              {formatPrice(price)}
            </span>
            {hasDiscount && (
              <span className="text-[10px] text-tertiary/40 line-through">
                {formatPrice(product.regular_price)}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default MenuProductCard;
