function HeaderSkeleton() {
  return (
    <header role="status" aria-label="Loading restaurant information">
      <div aria-hidden="true" className="animate-pulse">
        <div className="relative pb-12">
          <div className="aspect-[4/3] w-full bg-tertiary/10" />
          <div className="absolute bottom-0 left-1/2 size-24 -translate-x-1/2 rounded-full border-4 border-white bg-tertiary/10 shadow-sm" />
        </div>

        <div className="px-6 pb-8 pt-5 text-center">
          <div className="mx-auto h-7 w-44 rounded-full bg-tertiary/10" />
          <div className="mx-auto mt-3 h-4 w-full max-w-xs rounded-full bg-tertiary/10" />
          <div className="mx-auto mt-2 h-4 w-48 rounded-full bg-tertiary/10" />
        </div>
      </div>
    </header>
  );
}

export default HeaderSkeleton;
