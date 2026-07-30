import Image from "next/image";
import { formatPrice } from "@/utils/helper";

function FeaturedCardProduct({ product }) {
  const image = product.image_url ?? product.image;
  const discount = Number(product.discount);
  const hasDiscount =
    Number.isFinite(discount) &&
    discount > 0 &&
    product.total_price != null &&
    Number(product.total_price) < Number(product.regular_price);
  const price = hasDiscount ? product.total_price : product.regular_price;

  return (
    <article className="h-full w-full overflow-hidden rounded-3xl border border-tertiary/5 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-52 bg-tertiary/5">
        {image && (
          <div className="absolute left-1/2 top-5 size-40 -translate-x-1/2 overflow-hidden rounded-xl">
            <Image
              src={image}
              alt={product.name}
              fill
              sizes="160px"
              className="object-cover transition duration-500 hover:scale-[1.03]"
            />
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-tertiary shadow-sm">
          Featured
        </span>

        {!product.is_available && (
          <span className="absolute right-4 top-4 rounded-full bg-tertiary/80 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-white">
            Unavailable
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-4 p-5">
        <div className="min-w-0">
          <h3 className="font-serif text-xl font-semibold leading-6 text-tertiary sm:text-2xl">
            {product.name}
          </h3>
          {product.description && (
            <p className="mt-1.5 text-sm leading-5 text-tertiary/60">
              {product.description}
            </p>
          )}
        </div>

        <div className="shrink-0 text-right">
          <p className="font-serif text-xl font-semibold text-primary">
            {formatPrice(price)}
          </p>
          {hasDiscount && (
            <p className="mt-0.5 text-xs text-tertiary/40 line-through">
              {formatPrice(product.regular_price)}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default FeaturedCardProduct;
