import { arrowRight } from "../../assets/icons";
import { offer } from "../../assets/images";
import Button from "../Components/Button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red ">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Unlock an exclusive experience with our special offer for first-time
          customers. Enjoy a 30% discount on your first purchase, combining
          style and savings. Elevate your wardrobe with premium quality shoes,
          curated just for you. Indulge in luxury, embrace comfort, and make
          your first step into unparalleled fashion. Don't miss this
          limited-time opportunity.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Exclusive Deals Await! Unwrap Special Offers Today. Limited-Time
          Savings Inside!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            border-color="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
