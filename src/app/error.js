"use client";

import { useEffect } from "react";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      role="alert"
      className="flex min-h-[70dvh] items-center justify-center bg-neutral px-6 py-12 text-center"
    >
      <div className="w-full max-w-sm rounded-3xl border border-tertiary/10 bg-white p-7 shadow-sm">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="size-7"
          >
            <path
              d="M12 8v4m0 4h.01M10.3 3.8 2.7 17a2 2 0 0 0 1.74 3h15.12a2 2 0 0 0 1.74-3L13.7 3.8a2 2 0 0 0-3.4 0Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="mt-5 font-serif text-2xl font-semibold text-tertiary">
          We couldn&apos;t load the menu
        </h2>
        <p className="mt-2 text-sm leading-6 text-tertiary/60">
          Please try again in a moment.
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-6 min-h-12 w-full cursor-pointer rounded-xl bg-primary px-5 py-3 font-semibold text-white transition duration-300 hover:bg-primary/90 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
