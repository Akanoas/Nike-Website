import { star } from "../../assets/icons";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PopularProductCard = ({ imgURL, name, price }) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart({ name, price });
    toast.success(`Added ${name} to the cart`, {
      position: "top-right",
      autoClose: 2000, // Automatically close the notification after 2000 milliseconds (2 seconds)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <div className="relative">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      </div>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserra text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palaquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold text-2xl leading-normal text-coral-red">
        {price}
      </p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-coral-red text-white px-3 py-1 rounded-full hover:bg-opacity-80 transition duration-300 ease-in-out w-[280px]"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PopularProductCard;
