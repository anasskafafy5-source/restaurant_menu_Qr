import Header from "@/components/Header";
import Offers from "@/components/Offers";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Header />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <Offers />
      </Suspense>
    </>
  );
}
