import Image from "next/image";
import { formatDate, formatPrice, isDateExpired } from "@/utils/helper";

export default function OfferCard({ offer }) {
  const hasDiscount = offer.old_price && offer.old_price !== offer.new_price;
  const isExpired = isDateExpired(offer.end_date);
  const hasOfferDates = offer.start_date || offer.end_date;

  return (
    <article className="flex h-48 w-full flex-col overflow-hidden rounded-2xl bg-primary/15 p-4 shadow-sm">
      <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_40%] gap-4">
        <div className="flex min-w-0 flex-col items-start overflow-hidden">
          <span
            className={`rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-white ${
              isExpired ? "bg-tertiary/70" : "bg-primary"
            }`}
          >
            {isExpired ? "Expired" : "Special offer"}
          </span>

          <h2 className="mt-3 line-clamp-2 font-serif text-lg font-semibold leading-5 text-tertiary">
            {offer.title}
          </h2>

          {offer.description && (
            <p className="mt-1.5 line-clamp-2 text-xs leading-4 text-tertiary/70">
              {offer.description}
            </p>
          )}

          {hasOfferDates && (
            <p className="mt-2 flex flex-wrap items-center gap-1 text-[10px] leading-4 text-tertiary/55">
              {offer.start_date && (
                <time dateTime={offer.start_date}>
                  {formatDate(offer.start_date)}
                </time>
              )}
              {offer.start_date && offer.end_date && <span>–</span>}
              {offer.end_date && (
                <time dateTime={offer.end_date}>{formatDate(offer.end_date)}</time>
              )}
            </p>
          )}
        </div>

        <div className="relative aspect-square w-full max-w-28 justify-self-end overflow-hidden rounded-xl bg-neutral">
          <Image
            src={offer.image_url}
            alt={offer.title}
            fill
            sizes="(max-width: 448px) 36vw, 112px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-auto flex shrink-0 items-baseline gap-2 pt-3">
        <span className="font-serif text-lg font-semibold text-primary">
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
