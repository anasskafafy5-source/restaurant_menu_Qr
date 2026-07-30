import FeaturedCardProduct from "./FeaturedCardProduct";

function FeaturedProducts({ products }) {
  const featuredProducts = products.filter((product) => product.is_featured);

  if (featuredProducts.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="featured-products-title" className="py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6">
          <h2
            id="featured-products-title"
            className="font-serif text-[18px] font-semibold tracking-tight text-tertiary sm:text-3xl"
          >
            Recommended for You
          </h2>
          <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="sm:hidden">Swipe</span>
            <span className="hidden sm:inline">Scroll</span>
          </span>
        </div>

        <ul className="mt-5 flex items-stretch snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:gap-5 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {featuredProducts.map((product) => (
            <li
              key={product.id}
              className="flex w-[78vw] max-w-[19rem] shrink-0 snap-start sm:w-72 lg:w-[19rem]"
            >
              <FeaturedCardProduct product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeaturedProducts;
