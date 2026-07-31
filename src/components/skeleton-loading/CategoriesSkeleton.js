function CategorySkeleton() {
  return (
    <div className="mx-4 my-1.5 flex items-center gap-2 rounded-2xl bg-primary/10 px-3 py-2.5 shadow-sm ring-1 ring-primary/10 sm:mx-6">
      <div className="size-14 shrink-0 rounded-xl bg-tertiary/10 sm:size-16" />
      <div className="h-5 w-36 rounded-full bg-tertiary/10" />
    </div>
  );
}

function CategoriesSkeleton() {
  return (
    <div role="status" aria-label="Loading categories">
      <div aria-hidden="true" className="flex animate-pulse flex-col">
        <CategorySkeleton />
        <CategorySkeleton />
        <CategorySkeleton />
      </div>
    </div>
  );
}

export default CategoriesSkeleton;
