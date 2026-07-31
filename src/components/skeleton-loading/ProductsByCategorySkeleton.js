function MenuProductSkeleton() {
  return (
    <div className="flex min-h-36 gap-3 rounded-2xl border border-tertiary/5 bg-white p-3 shadow-sm sm:min-h-40 sm:gap-4 sm:p-4">
      <div className="size-20 shrink-0 rounded-xl bg-tertiary/10 sm:size-24" />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <div className="h-5 w-2/3 rounded-full bg-tertiary/10" />
          <div className="h-5 w-14 rounded bg-primary/10" />
        </div>
        <div className="mt-3 h-3 w-full rounded-full bg-tertiary/10" />
        <div className="mt-2 h-3 w-3/4 rounded-full bg-tertiary/10" />
        <div className="mt-auto h-5 w-16 rounded-full bg-primary/15" />
      </div>
    </div>
  );
}

function CategoryProductsSkeleton() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-primary/10" />
        <div className="h-3 w-32 rounded-full bg-tertiary/10" />
        <div className="h-px flex-1 bg-primary/10" />
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 md:gap-4">
        <MenuProductSkeleton />
        <MenuProductSkeleton />
      </div>
    </div>
  );
}

function ProductsByCategorySkeleton() {
  return (
    <section
      role="status"
      aria-label="Loading products by category"
      className="mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-6"
    >
      <div
        aria-hidden="true"
        className="animate-pulse space-y-10 sm:space-y-12"
      >
        <CategoryProductsSkeleton />
        <CategoryProductsSkeleton />
      </div>
    </section>
  );
}

export default ProductsByCategorySkeleton;
