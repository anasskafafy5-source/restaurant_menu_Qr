import { getCategoriesWithProducts } from "@/lib/data-service";
import FloatingCategoriesButton from "./FloatingCategoriesButton";
import ProductsOfCategory from "./ProductsOfCategory";

async function ProductsByCategoryArea() {
  const categories = await getCategoriesWithProducts();

  if (!categories?.length) {
    return null;
  }

  return (
    <section
      id="products-by-category"
      aria-label="Products by category"
      className="mx-auto max-w-6xl space-y-10 px-4 pb-14 pt-6 sm:space-y-12 sm:px-6"
    >
      {categories.map((category) => (
        <ProductsOfCategory category={category} key={category.id} />
      ))}
      <FloatingCategoriesButton />
    </section>
  );
}

export default ProductsByCategoryArea;
