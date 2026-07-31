import Image from "next/image";
import { formatPrice, getOfferPricing } from "@/utils/helper";
import {
  formatOfferDate,
  getOfferStatus,
  OFFER_STATUS_LABELS,
} from "@/utils/offerDateHelpers";
import Modal from "./Modal";

const TITLE_ID = "offer-details-title";
const DESCRIPTION_ID = "offer-details-description";

function OfferDetailsModal({ offer, restaurantDate, onClose }) {
  if (!offer) {
    return null;
  }

  return (
    <Modal
      isOpen
      onClose={onClose}
      labelledBy={TITLE_ID}
      describedBy={offer.description ? DESCRIPTION_ID : undefined}
    >
      <OfferDetailsContent
        offer={offer}
        restaurantDate={restaurantDate}
      />
    </Modal>
  );
}

function OfferDetailsContent({ offer, restaurantDate, onClose }) {
  const { hasDiscount, newPrice, oldPrice } = getOfferPricing(offer);
  const status = getOfferStatus(offer, restaurantDate);
  const isComingSoon = status === "scheduled";
  const isUnavailable = status === "inactive" || status === "expired";
  const hasOfferDates = offer.start_date || offer.end_date;

  return (
    <div className="overflow-hidden rounded-3xl bg-neutral">
      <div className="relative aspect-[4/3] w-full bg-tertiary/5 sm:aspect-[16/10]">
        {offer.image_url ? (
          <Image
            src={offer.image_url}
            alt={offer.title || "Offer"}
            fill
            sizes="(max-width: 640px) calc(100vw - 32px), 512px"
            className="object-cover"
          />
        ) : (
          <div className="grid h-full place-items-center text-primary/40">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="size-12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v18M5.5 6.5l13 11m0-11-13 11" />
              <circle cx="12" cy="12" r="9" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <span
          className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white ${
            isUnavailable ? "bg-tertiary/70" : "bg-primary"
          }`}
        >
          {OFFER_STATUS_LABELS[status]}
        </span>

        <h2
          id={TITLE_ID}
          className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-tertiary"
        >
          {offer.title}
        </h2>

        <div className="mt-4 flex flex-wrap items-baseline gap-3">
          <span className="font-serif text-2xl font-semibold text-primary">
            {formatPrice(newPrice)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-tertiary/45 line-through">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>

        {hasOfferDates && (
          <p className="mt-4 flex flex-wrap items-center gap-1 text-sm leading-5 text-tertiary/55">
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

        {offer.description && (
          <p
            id={DESCRIPTION_ID}
            className="mt-5 whitespace-pre-line break-words text-sm leading-6 text-tertiary/70 sm:text-base sm:leading-7"
          >
            {offer.description}
          </p>
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

export default OfferDetailsModal;
