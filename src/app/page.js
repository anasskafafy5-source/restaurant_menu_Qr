import CategoryArea from "@/components/CategoryArea";
import Header from "@/components/Header";
import MainProducts from "@/components/MainProducts";
import Offers from "@/components/Offers";
import ProductsByCategoryArea from "@/components/ProductsByCategoryArea";
import CategoriesSkeleton from "@/components/skeleton-loading/CategoriesSkeleton";
import FeaturedProductsSkeleton from "@/components/skeleton-loading/FeaturedProductsSkeleton";
import HeaderSkeleton from "@/components/skeleton-loading/HeaderSkeleton";
import OffersSkeleton from "@/components/skeleton-loading/OffersSkeleton";
import ProductsByCategorySkeleton from "@/components/skeleton-loading/ProductsByCategorySkeleton";
import { Suspense } from "react";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      {/* Header */}
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      {/* Offer Area */}
      <Suspense fallback={<OffersSkeleton />}>
        <Offers />
      </Suspense>
      {/* Featured_Products */}
      <Suspense fallback={<FeaturedProductsSkeleton />}>
        <MainProducts />
      </Suspense>
      {/* Categories Area */}
      <Suspense fallback={<CategoriesSkeleton />}>
        <CategoryArea />
      </Suspense>
      {/* Products Area by category */}
      <Suspense fallback={<ProductsByCategorySkeleton />}>
        <ProductsByCategoryArea />
      </Suspense>
    </>
  );
}
