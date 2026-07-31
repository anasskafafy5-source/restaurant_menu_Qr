import EmptyProductsMessage from "./EmptyProductsMessage";
import ProductCardCollection from "./ProductCardCollection";
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
        <ProductCardCollection
          products={products}
          variant="menu"
          categoryName={category.name}
        />
      ) : (
        <EmptyProductsMessage categoryName={category.name} />
      )}
    </section>
  );
}

export default ProductsOfCategory;
