import { getOffers } from "@/lib/data-service";
import OffersContainer from "./OffersContainer";

async function Offers() {
  const offers = await getOffers();

  return (
    <section aria-label="Special offers" className="px-4 pb-8">
      <OffersContainer offers={offers} />
    </section>
  );
}

export default Offers;
