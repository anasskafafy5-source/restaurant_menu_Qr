import { getCategories, getCategoriesWithProducts } from "@/lib/data-service";
import CategoryCard from "./CategoryCard";

async function CategoryArea() {
  const data = await getCategoriesWithProducts();

  return (
    <div id="categories" className="flex scroll-mt-6 flex-col">
      {data?.map((category) => (
        <CategoryCard category={category} key={category.id} />
      ))}
    </div>
  );
}

export default CategoryArea;
