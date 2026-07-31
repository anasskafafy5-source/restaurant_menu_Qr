import Image from "next/image";
import { formatPrice, getOfferPricing } from "@/utils/helper";
import {
  formatOfferDate,
  getOfferStatus,
  OFFER_STATUS_LABELS,
} from "@/utils/offerDateHelpers";

export default function OfferCard({ offer, restaurantDate, onClick }) {
  const { hasDiscount, newPrice, oldPrice } = getOfferPricing(offer);
  const status = getOfferStatus(offer, restaurantDate);
  const isComingSoon = status === "scheduled";
  const isUnavailable = status === "inactive" || status === "expired";
  const hasOfferDates = offer.start_date || offer.end_date;
  const statusLabel = OFFER_STATUS_LABELS[status];

  return (
    <article className="h-64 w-full overflow-hidden rounded-2xl bg-primary/15 shadow-sm">
      <button
        type="button"
        onClick={onClick}
        aria-label={`View details for ${offer.title}`}
        className="flex h-full w-full cursor-pointer flex-col p-4 text-left transition duration-300 hover:bg-primary/5 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_6rem] gap-4">
          <div className="flex min-h-0 min-w-0 flex-col items-start overflow-hidden">
            <span
              className={`rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-white ${
                isUnavailable ? "bg-tertiary/70" : "bg-primary"
              }`}
            >
              {statusLabel}
            </span>

            <h2 className="mt-3 line-clamp-2 font-serif text-xl font-semibold leading-6 text-tertiary">
              {offer.title}
            </h2>

            {offer.description && (
              <p className="mt-2 line-clamp-2 text-sm leading-5 text-tertiary/70">
                {offer.description}
              </p>
            )}

            {hasOfferDates && (
              <p className="mt-2 flex flex-wrap items-center gap-1 text-xs leading-4 text-tertiary/55">
                {isComingSoon ? (
                  <>
                    <span>Coming soon on</span>
                    <time dateTime={offer.start_date}>
                      {formatOfferDate(offer.start_date)}
                    </time>
                  </>
                ) : (
                  <>
                    {offer.start_date && (
                      <time dateTime={offer.start_date}>
                        {formatOfferDate(offer.start_date)}
                      </time>
                    )}
                    {offer.start_date && offer.end_date && <span>–</span>}
                    {offer.end_date && (
                      <time dateTime={offer.end_date}>
                        {formatOfferDate(offer.end_date)}
                      </time>
                    )}
                  </>
                )}
              </p>
            )}
          </div>

          <div className="relative size-24 justify-self-end overflow-hidden rounded-xl bg-neutral">
            <Image
              src={offer.image_url}
              alt={offer.title}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-auto flex shrink-0 items-baseline gap-2 pt-4">
          <span className="font-serif text-xl font-semibold text-primary">
            {formatPrice(newPrice)}
          </span>
          {hasDiscount && (
            <span className="text-[11px] text-tertiary/50 line-through">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>
      </button>
    </article>
  );
}
