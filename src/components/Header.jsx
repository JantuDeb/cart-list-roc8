import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";

export const Header = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.length;
  return (
    <header className="text-2xl bg-slate-800 flex items-center py-4 px-8 text-white justify-between">
      <h1> Product listing page</h1>
      <Link to="/cart" className="relative">
        {itemCount > 0 && (
          <span className=" absolute left-4 bottom-2 z-10 bg-slate-600 w-6 h-6 flex justify-center items-center rounded-full text-sm font-bold">
            {itemCount}
          </span>
        )}
        <BsFillCartCheckFill size={20} />
      </Link>
    </header>
  );
};
