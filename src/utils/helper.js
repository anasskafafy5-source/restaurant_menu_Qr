const DATE_ONLY_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

function parseDate(date, { endOfDay = false } = {}) {
  if (!date) {
    return null;
  }

  if (typeof date === "string") {
    const dateOnlyParts = date.match(DATE_ONLY_PATTERN);

    if (dateOnlyParts) {
      const [, year, month, day] = dateOnlyParts.map(Number);
      const parsedDate = new Date(
        year,
        month - 1,
        day,
        endOfDay ? 23 : 0,
        endOfDay ? 59 : 0,
        endOfDay ? 59 : 0,
        endOfDay ? 999 : 0,
      );

      const isValidDate =
        parsedDate.getFullYear() === year &&
        parsedDate.getMonth() === month - 1 &&
        parsedDate.getDate() === day;

      return isValidDate ? parsedDate : null;
    }
  }

  const parsedDate = new Date(date);
  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
}

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

export function formatDate(date) {
  const parsedDate = parseDate(date);

  if (!parsedDate) {
    return date || "";
  }

  return new Intl.DateTimeFormat("en-EG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

export function isDateExpired(date) {
  const parsedDate = parseDate(date, { endOfDay: true });

  return parsedDate ? parsedDate.getTime() < Date.now() : false;
}
