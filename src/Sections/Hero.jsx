import Button from "../Components/Button";
import { arrowRight } from "../../assets/icons";
import { statistics } from "../Constants";
const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl: padding-x pt-28">
        <p className="text-x1 font-montserrat text-coral-red">
          Our Black Friday Collection{" "}
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span>The best Deals 2023</span>
          <br />
          <span>Nike Shoes</span>
        </h1>
        <p>
          Discover Stylish Nike arrivals, quality comfort and innovation for
          your active Life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
