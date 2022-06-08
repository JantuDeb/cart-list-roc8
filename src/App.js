import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Cart from "./pages/Cart";
import { Products } from "./pages/Products";

export const App = () => {
  return (
    <div className=" min-h-screen dark:bg-gray-700">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
