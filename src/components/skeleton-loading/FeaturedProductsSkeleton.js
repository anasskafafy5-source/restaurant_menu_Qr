function FeaturedCardSkeleton() {
  return (
    <li className="w-[78vw] max-w-[19rem] shrink-0 sm:w-72 lg:w-[19rem]">
      <div className="h-full overflow-hidden rounded-3xl border border-tertiary/5 bg-white shadow-sm">
        <div className="relative h-52 bg-tertiary/5">
          <div className="absolute left-1/2 top-5 size-40 -translate-x-1/2 rounded-xl bg-tertiary/10" />
          <div className="absolute left-4 top-4 h-6 w-20 rounded-full bg-secondary/25" />
        </div>
        <div className="flex items-start justify-between gap-4 p-5">
          <div className="min-w-0 flex-1">
            <div className="h-5 w-3/4 rounded-full bg-tertiary/10" />
            <div className="mt-2 h-4 w-full rounded-full bg-tertiary/10" />
            <div className="mt-2 h-4 w-2/3 rounded-full bg-tertiary/10" />
          </div>
          <div className="h-6 w-12 rounded-full bg-primary/15" />
        </div>
      </div>
    </li>
  );
}

function FeaturedProductsSkeleton() {
  return (
    <section
      role="status"
      aria-label="Loading featured products"
      className="overflow-hidden py-8"
    >
      <div aria-hidden="true" className="mx-auto max-w-6xl animate-pulse">
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6">
          <div className="h-6 w-44 rounded-full bg-tertiary/10 sm:h-8 sm:w-60" />
          <div className="h-3 w-12 rounded-full bg-primary/15" />
        </div>
        <ul className="mt-5 flex gap-4 overflow-hidden px-4 pb-4 sm:gap-5 sm:px-6">
          <FeaturedCardSkeleton />
          <FeaturedCardSkeleton />
          <FeaturedCardSkeleton />
        </ul>
      </div>
    </section>
  );
}

export default FeaturedProductsSkeleton;
