import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";
import { Rating } from "./Rating";

export const Product = ({ product }) => {
  const { photos, title, price, rating } = product;
  const { addToCart, cartItems } = useCart();

  const addToCartHandler = () => addToCart(product);
  const isInCart = cartItems.some(
    (cartItem) => cartItem.product._id === product._id
  );

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-4 rounded-t-lg w-max h-72 object-cover"
        src={photos[0]?.secure_url}
        alt="product"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <Rating rating={rating} />
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ₹ {price}
          </span>
          {isInCart ? (
            <Link
              to="/cart"
              className="text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Go to cart
            </Link>
          ) : (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
