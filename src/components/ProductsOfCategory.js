import MenuProductCard from "./MenuProductCard";
import SectionHeading from "./SectionHeading";

function ProductsOfCategory({ category }) {
  const headingId = `category-${category.id}`;
  const products = category.products ?? [];

  return (
    <section
      id={headingId}
      aria-labelledby={`${headingId}-title`}
      className="scroll-mt-6"
    >
      <SectionHeading id={`${headingId}-title`} title={category.name} />

      {products.length > 0 ? (
        <ul className="mt-5 grid gap-3 md:grid-cols-2 md:gap-4">
          {products.map((product) => (
            <li key={product.id}>
              <MenuProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-5 text-center text-sm text-tertiary/50">
          No products available in this category.
        </p>
      )}
    </section>
  );
}

export default ProductsOfCategory;
