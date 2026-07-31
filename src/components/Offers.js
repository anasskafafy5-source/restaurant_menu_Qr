import { getOffers } from "@/lib/data-service";
import { getRestaurantDate } from "@/utils/offerDateHelpers";
import OffersContainer from "./OffersContainer";

async function Offers() {
  const offers = await getOffers();
  const initialRestaurantDate = getRestaurantDate();

  return (
    <section aria-label="Special offers" className="px-4 pb-8">
      <OffersContainer
        offers={offers}
        initialRestaurantDate={initialRestaurantDate}
      />
    </section>
  );
}

export default Offers;
