import CategoryArea from "@/components/CategoryArea";
import Header from "@/components/Header";
import MainProducts from "@/components/MainProducts";
import Offers from "@/components/Offers";
import ProductsByCategoryArea from "@/components/ProductsByCategoryArea";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      {/* Header */}
      <Suspense fallback={<Spinner />}>
        <Header />
      </Suspense>
      {/* Offer Area */}
      <Suspense fallback={<Spinner />}>
        <Offers />
      </Suspense>
      {/* Featured_Products */}
      <Suspense fallback={<Spinner />}>
        <MainProducts />
      </Suspense>
      {/* Categories Area */}
      <Suspense fallback={<Spinner />}>
        <CategoryArea />
      </Suspense>
      {/* Products Area by category */}
      <ProductsByCategoryArea />
    </>
  );
}
