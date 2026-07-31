function EmptyProductsMessage({ categoryName }) {
  const description = categoryName
    ? `There are no products available in ${categoryName} right now.`
    : "There are no products available right now. Please check again soon.";

  return (
    <div
      role="status"
      className="mx-auto mt-5 flex max-w-lg flex-col items-center rounded-2xl border border-tertiary/5 bg-white px-6 py-8 text-center shadow-sm"
    >
      <div
        aria-hidden="true"
        className="grid size-12 place-items-center rounded-full bg-primary/10 text-primary"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="size-6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 15h16M6 15a6 6 0 0 1 12 0M12 9V7m-9 8h18m-16 3h14" />
        </svg>
      </div>

      <h3 className="mt-4 font-serif text-xl font-semibold text-tertiary">
        No products available
      </h3>
      <p className="mt-1.5 text-sm leading-6 text-tertiary/60">
        {description}
      </p>
    </div>
  );
}

export default EmptyProductsMessage;
