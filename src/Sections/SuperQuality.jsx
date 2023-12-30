import { shoe8 } from "../../assets/images";
import Button from "../Components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center
    max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red ">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Our shoes stand out for their exceptional quality, blending comfort
          with style effortlessly. Crafted with precision and premium materials,
          each pair promises durability and a perfect fit. Elevate your style,
          experience unparalleled comfort, and step confidently into every
          moment with our outstanding footwear.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Step into luxury, embrace comfort. Walk with confidence.
        </p>
        <div className="mt-11">
          <Button label="View Detail" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
