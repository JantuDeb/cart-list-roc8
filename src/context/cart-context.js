const { createContext, useContext, useState } = require("react");

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((cartItems) => [...cartItems, { product, quantity: 1 }]);
  };

  const updateQuantity = ({ productId, value }) => {
    const newCartItems = cartItems.map((cartItem) =>
      cartItem.product._id === productId
        ? { ...cartItem, quantity: cartItem.quantity + value }
        : cartItem
    );
    setCartItems(newCartItems);
  };

  const removeFromCart = (productId) => {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.product._id !== productId
    );
    setCartItems(newCartItems);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
