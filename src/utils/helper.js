export function formatPrice(price) {
  const numericPrice = Number(price);

  if (!Number.isFinite(numericPrice)) {
    return price;
  }

  return new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}

export function getProductPricing(product) {
  const discount = Number(product?.discount);
  const regularPrice = product?.regular_price;
  const discountedPrice = product?.total_price;
  const hasDiscount =
    Number.isFinite(discount) &&
    discount > 0 &&
    discountedPrice != null &&
    Number(discountedPrice) < Number(regularPrice);

  return {
    hasDiscount,
    regularPrice,
    finalPrice: hasDiscount ? discountedPrice : regularPrice,
  };
}

export function getOfferPricing(offer) {
  const oldPrice = offer?.old_price;
  const newPrice = offer?.new_price;

  return {
    hasDiscount: Boolean(oldPrice && oldPrice !== newPrice),
    oldPrice,
    newPrice,
  };
}
