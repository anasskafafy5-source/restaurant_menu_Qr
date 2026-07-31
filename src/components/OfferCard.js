import Image from "next/image";
import {
  formatDate,
  formatPrice,
  isDateExpired,
  isDateUpcoming,
} from "@/utils/helper";

export default function OfferCard({ offer }) {
  const hasDiscount = offer.old_price && offer.old_price !== offer.new_price;
  const isComingSoon = isDateUpcoming(offer.start_date);
  const isExpired = !isComingSoon && isDateExpired(offer.end_date);
  const hasOfferDates = offer.start_date || offer.end_date;
  const statusLabel = isComingSoon
    ? "Coming soon"
    : isExpired
      ? "Expired"
      : "Special offer";

  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-primary/15 p-4 shadow-sm">
      <div className="grid grid-cols-[minmax(0,1fr)_6rem] gap-4">
        <div className="flex min-w-0 flex-col items-start">
          <span
            className={`rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-white ${
              isExpired ? "bg-tertiary/70" : "bg-primary"
            }`}
          >
            {statusLabel}
          </span>

          <h2 className="mt-3 font-serif text-xl font-semibold leading-6 text-tertiary">
            {offer.title}
          </h2>

          {offer.description && (
            <p className="mt-2 text-sm leading-5 text-tertiary/70">
              {offer.description}
            </p>
          )}

          {hasOfferDates && (
            <p className="mt-2 flex flex-wrap items-center gap-1 text-xs leading-4 text-tertiary/55">
              {isComingSoon ? (
                <>
                  <span>Coming soon on</span>
                  <time dateTime={offer.start_date}>
                    {formatDate(offer.start_date)}
                  </time>
                </>
              ) : (
                <>
                  {offer.start_date && (
                    <time dateTime={offer.start_date}>
                      {formatDate(offer.start_date)}
                    </time>
                  )}
                  {offer.start_date && offer.end_date && <span>–</span>}
                  {offer.end_date && (
                    <time dateTime={offer.end_date}>
                      {formatDate(offer.end_date)}
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

      <div className="mt-auto flex items-baseline gap-2 pt-4">
        <span className="font-serif text-xl font-semibold text-primary">
          {formatPrice(offer.new_price)}
        </span>
        {hasDiscount && (
          <span className="text-[11px] text-tertiary/50 line-through">
            {formatPrice(offer.old_price)}
          </span>
        )}
      </div>
    </article>
  );
}
