import React from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import { useCart } from "../context/cart-context";

const Cart = () => {
  const { cartItems } = useCart();
  const price = cartItems.reduce(
    (prev, curr) => {
      return {
        ...prev,
        totalAmount: prev.totalAmount + curr.product.price * curr.quantity,
        discount:
          prev.discount +
          Math.ceil(curr.product.price * curr.quantity * curr.product.discount),
      };
    },
    { totalAmount: 0, discount: 0 }
  );

  return cartItems.length === 0 ? (
    <div className="text-center">
      <h3 className="font-bold text-2xl text-white m-2">No Items in cart</h3>
      <Link to="/" className="bg-slate-600 p-2 rounded-sm text-white">
        Shop now
      </Link>
    </div>
  ) : (
    <div className="flex p-4 gap-2">
      <ul className="flex flex-col gap-4 flex-1">
        {cartItems.map(({ product, quantity }) => (
          <CartItem key={product._id} product={product} quantity={quantity} />
        ))}
      </ul>
      <div className="w-64 h-fit text-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-4">
        <h4 className="text-2xl mb-2">Price Deails</h4>
        <p>
          Price: ({cartItems.length} Items) {price.totalAmount}
        </p>
        <p> Discount: {price.discount}</p>
        <p>Delivery charges: FREE</p>
        <p>Total Amount: {price.totalAmount-price.discount}</p>
      </div>
    </div>
  );
};

export default Cart;
