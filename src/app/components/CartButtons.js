import { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CartContext } from "../contexts/Cart";
import { useRouter } from "next/navigation";

const CartButtons = () => {
  const { cart } = useContext(CartContext);

  const quantity = cart?.quantity;
  const [mounted, setMounted] = useState(false);

  const { replace } = useRouter();

  const goToCart = () => {
    replace("/cart");
  };
  const goToContact = () => {
    replace("/contact");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="flex relative flex-row items-center justify-center gap-2">
        <IoChatbubblesOutline
          color="#585858"
          size={30}
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
        />
        <AiOutlineShoppingCart
          color="#585858"
          size={30}
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
        />
      </div>
    );

  return (
    <div className="flex relative flex-row items-center justify-center gap-2">
      {/* Chat icon first */}
      <IoChatbubblesOutline
        onClick={goToContact}
        color="#585858"
        size={30}
        className="cursor-pointer transition-transform duration-300 hover:scale-110"
      />

      {/* Shopping cart icon wrapped with a div for proper positioning */}
      <div className="relative">
        {/* Badge showing the quantity of items in the cart */}
        {quantity > 0 && (
          <button
            onClick={goToCart}
            className="w-5 h-5 z-50 text-sm absolute top-[-5px] right-[-5px] rounded-full bg-[#3c3b6e]"
          >
            {quantity}
          </button>
        )}

        <AiOutlineShoppingCart
          onClick={goToCart}
          color="#585858"
          size={30}
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default CartButtons;
