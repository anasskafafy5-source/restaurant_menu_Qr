import { getProducts } from "@/lib/data-service";
import FeaturedProducts from "./FeaturedProducts";

async function MainProducts() {
  const data = await getProducts();
  return (
    <div>
      <FeaturedProducts products={data} />
    </div>
  );
}

export default MainProducts;
