import ProductCardCollection from "./ProductCardCollection";

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

        <ProductCardCollection products={featuredProducts} variant="featured" />
      </div>
    </section>
  );
}

export default FeaturedProducts;
