"use client";

import { useEffect, useMemo, useState } from "react";
import OfferCard from "./OfferCard";

function OffersContainer({ offers }) {
  const theOffers = useMemo(
    () => offers.filter((offer) => offer.is_active),
    [offers],
  );

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const offerCount = theOffers.length;
  const currentOffer = theOffers.at(index);

  useEffect(() => {
    if (offerCount <= 1 || isPaused) {
      return undefined;
    }

    const autoplay = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % offerCount);
    }, 3000);

    return () => window.clearInterval(autoplay);
  }, [isPaused, offerCount]);

  if (!currentOffer) {
    return null;
  }

  function handleNext() {
    setIndex((currentIndex) => (currentIndex + 1) % offerCount);
  }

  function handlePrevious() {
    setIndex((currentIndex) => (currentIndex - 1 + offerCount) % offerCount);
  }

  return (
    <div
      className="mx-auto max-w-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse") setIsPaused(true);
      }}
      onPointerUp={(event) => {
        if (event.pointerType !== "mouse") setIsPaused(false);
      }}
      onPointerCancel={(event) => {
        if (event.pointerType !== "mouse") setIsPaused(false);
      }}
    >
      {offerCount > 1 ? (
        <>
          <div className="grid grid-cols-[2rem_minmax(0,1fr)_2rem] items-center gap-2">
            <ArrowButton direction="left" onClick={handlePrevious} />
            <div
              key={currentOffer.id ?? index}
              className="offer-card-enter min-w-0"
            >
              <OfferCard offer={currentOffer} />
            </div>
            <ArrowButton direction="right" onClick={handleNext} />
          </div>
          <div className="mt-3">
            <Dots count={offerCount} currentIndex={index} onSelect={setIndex} />
          </div>
        </>
      ) : (
        <OfferCard offer={currentOffer} />
      )}
    </div>
  );
}

export default OffersContainer;

function Dots({ count, currentIndex, onSelect }) {
  return (
    <div
      className="flex min-w-12 items-center justify-center"
      role="group"
      aria-label="Choose an offer"
    >
      {Array.from({ length: count }, (_, dotIndex) => (
        <button
          key={dotIndex}
          type="button"
          onClick={() => onSelect(dotIndex)}
          className="group grid size-10 shrink-0 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={`Show offer ${dotIndex + 1}`}
          aria-current={dotIndex === currentIndex ? "true" : undefined}
        >
          <span
            className={`h-1.5 rounded-full transition-all ${
              dotIndex === currentIndex
                ? "w-5 bg-primary"
                : "w-1.5 bg-primary/30 group-hover:bg-primary/60"
            }`}
            aria-hidden="true"
          />
        </button>
      ))}
    </div>
  );
}

function ArrowButton({ direction, onClick }) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      className="grid size-8 shrink-0 place-items-center rounded-full bg-white/90 text-tertiary shadow-sm transition hover:bg-white hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      aria-label={isLeft ? "Show previous offer" : "Show next offer"}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={isLeft ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
      </svg>
    </button>
  );
}
