"use client";

import { useCallback, useState } from "react";
import FeaturedCardProduct from "./FeaturedCardProduct";
import MenuProductCard from "./MenuProductCard";
import ProductDetailsModal from "./ProductDetailsModal";

function ProductCardCollection({ products, variant, categoryName }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const isFeatured = variant === "featured";
  const ProductCard = isFeatured ? FeaturedCardProduct : MenuProductCard;

  const handleClose = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  function handleSelect(product) {
    setSelectedProduct(
      categoryName ? { ...product, category_name: categoryName } : product,
    );
  }

  return (
    <>
      <ul
        className={
          isFeatured
            ? "mt-5 flex items-stretch snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:gap-5 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            : "mt-5 grid gap-3 md:grid-cols-2 md:gap-4"
        }
      >
        {products.map((product) => (
          <li
            key={product.id}
            className={
              isFeatured
                ? "flex w-[78vw] max-w-[19rem] shrink-0 snap-start sm:w-72 lg:w-[19rem]"
                : undefined
            }
          >
            <ProductCard
              product={product}
              onClick={() => handleSelect(product)}
            />
          </li>
        ))}
      </ul>

      <ProductDetailsModal product={selectedProduct} onClose={handleClose} />
    </>
  );
}

export default ProductCardCollection;
