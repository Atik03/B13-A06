import "./App.css";

import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import RatingSection from "./component/RatingSection";
import React, { useState } from "react";
import Header from "./component/Header";
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateAccount from "./component/CreateAccount";

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const handleClear = () => {
    setCart([]);
  };

  const handleAdd = (item) => {
    setCart((prev) => [...prev, item]);
    toast.success(`Item added to cart`);
  };

  const handleRemove = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    toast.error(`Item removed from cart`);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar cartCount={cart.length}></Navbar>
      <HeroSection></HeroSection>
      <RatingSection></RatingSection>
      <ToastContainer />

      <Header view={view} setView={setView} cartCount={cart.length} />

      {view === "products" ? (
        <ProductList handleAdd={handleAdd} />
      ) : (
        <Cart
          cart={cart}
          handleRemove={handleRemove}
          total={total}
          handleClear={handleClear}
        />
      )}

      <CreateAccount></CreateAccount>
    </>
  );
}

export default App;
