function OffersSkeleton() {
  return (
    <section
      role="status"
      aria-label="Loading special offers"
      className="px-4 pb-8"
    >
      <div
        aria-hidden="true"
        className="mx-auto flex h-64 max-w-sm animate-pulse flex-col rounded-2xl bg-primary/10 p-4 shadow-sm"
      >
        <div className="grid grid-cols-[minmax(0,1fr)_6rem] gap-4">
          <div>
            <div className="h-6 w-20 rounded-full bg-primary/20" />
            <div className="mt-3 h-5 w-3/4 rounded-full bg-tertiary/10" />
            <div className="mt-2 h-4 w-full rounded-full bg-tertiary/10" />
            <div className="mt-2 h-4 w-2/3 rounded-full bg-tertiary/10" />
            <div className="mt-3 h-3 w-32 rounded-full bg-tertiary/10" />
          </div>
          <div className="size-24 rounded-xl bg-tertiary/10" />
        </div>
        <div className="mt-auto h-6 w-20 rounded-full bg-primary/20" />
      </div>
    </section>
  );
}

export default OffersSkeleton;
