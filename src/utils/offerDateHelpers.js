export const RESTAURANT_TIME_ZONE = "Africa/Cairo";
export const OFFER_STATUS_LABELS = {
  inactive: "Inactive",
  scheduled: "Coming soon",
  active: "Special offer",
  expired: "Expired",
};

const DATE_ONLY_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;
const MAX_BOUNDARY_SEARCH_HOURS = 36;
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;

const restaurantDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: RESTAURANT_TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const offerDateFormatter = new Intl.DateTimeFormat("en-EG", {
  timeZone: RESTAURANT_TIME_ZONE,
  day: "numeric",
  month: "short",
  year: "numeric",
});

function getValidDateOnlyParts(value) {
  if (typeof value !== "string") {
    return null;
  }

  const match = value.match(DATE_ONLY_PATTERN);

  if (!match) {
    return null;
  }

  const [, yearValue, monthValue, dayValue] = match;
  const year = Number(yearValue);
  const month = Number(monthValue);
  const day = Number(dayValue);
  const daysInMonth = new Date(Date.UTC(year, month, 0)).getUTCDate();

  if (month < 1 || month > 12 || day < 1 || day > daysInMonth) {
    return null;
  }

  return { year, month, day };
}

function getDateOnlyValue(value) {
  return getValidDateOnlyParts(value) ? value : null;
}

function getValidInstant(now) {
  if (!(now instanceof Date) || Number.isNaN(now.getTime())) {
    throw new TypeError("Expected a valid Date instance.");
  }

  return now;
}

export function getRestaurantDate(now = new Date()) {
  const dateParts = restaurantDateFormatter.formatToParts(getValidInstant(now));
  const values = Object.fromEntries(
    dateParts.map(({ type, value }) => [type, value]),
  );

  return `${values.year}-${values.month}-${values.day}`;
}

export function getOfferStatus(offer, now = new Date()) {
  if (offer?.is_active === false) {
    return "inactive";
  }

  const restaurantDate =
    getDateOnlyValue(now) ?? getRestaurantDate(getValidInstant(now));
  const startDate = getDateOnlyValue(offer?.start_date);
  const endDate = getDateOnlyValue(offer?.end_date);

  if (startDate && restaurantDate < startDate) {
    return "scheduled";
  }

  if (endDate && restaurantDate > endDate) {
    return "expired";
  }

  return "active";
}

export function formatOfferDate(value) {
  const dateParts = getValidDateOnlyParts(value);

  if (!dateParts) {
    return value || "";
  }

  const displayDate = new Date(
    Date.UTC(dateParts.year, dateParts.month - 1, dateParts.day, 12),
  );

  return offerDateFormatter.format(displayDate);
}

export function getDelayUntilNextRestaurantDate(now = new Date()) {
  const currentInstant = getValidInstant(now);
  const currentTime = currentInstant.getTime();
  const currentRestaurantDate = getRestaurantDate(currentInstant);
  let lowerTime = currentTime + 1;
  let upperTime =
    currentTime + MAX_BOUNDARY_SEARCH_HOURS * MILLISECONDS_PER_HOUR;

  while (lowerTime < upperTime) {
    const middleTime = Math.floor((lowerTime + upperTime) / 2);
    const middleRestaurantDate = getRestaurantDate(new Date(middleTime));

    if (middleRestaurantDate === currentRestaurantDate) {
      lowerTime = middleTime + 1;
    } else {
      upperTime = middleTime;
    }
  }

  return Math.max(1, lowerTime - currentTime + 50);
}
