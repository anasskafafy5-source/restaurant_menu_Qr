import { getCategoriesWithProducts } from "@/lib/data-service";
import FeaturedProducts from "./FeaturedProducts";

async function MainProducts() {
  const data = await getCategoriesWithProducts();
  const temp = data.map((cat) => cat.products).flat();
  const products = temp.filter((t) => t.is_featured);

  return (
    <div>
      <FeaturedProducts products={products} />
    </div>
  );
}

export default MainProducts;
