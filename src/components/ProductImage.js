import Image from "next/image";

function ProductImage({ product, sizes, className = "object-cover" }) {
  const image = product.image_url ?? product.image;
  const productName = product.name || "Product";

  if (!image) {
    return (
      <div
        role="img"
        aria-label={`${productName} image unavailable`}
        className="grid h-full w-full place-items-center bg-tertiary/5 text-tertiary/25"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        >
          <circle cx="12" cy="12" r="7" />
          <path d="M4 12h16M12 4c2 2.25 3 4.9 3 8s-1 5.75-3 8c-2-2.25-3-4.9-3-8s1-5.75 3-8Z" />
        </svg>
      </div>
    );
  }

  return (
    <Image
      src={image}
      alt={productName}
      fill
      sizes={sizes}
      className={className}
    />
  );
}

export default ProductImage;
