import React from "react";

function Header({ view, setView, cartCount }) {
  return (
    <div className="text-center py-10 ">
      <h1 className="text-4xl font-bold mb-2">Premium Digital Tools</h1>

      <p className="text-gray-500 mb-6">
        Choose from our curated collection of premium digital products
      </p>

      <div className="inline-flex border border-gray-200 p-1 rounded-full">
        <button
          onClick={() => setView("products")}
          className={`px-5 py-2 rounded-full ${
            view === "products"
              ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
              : "text-gray-600"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setView("cart")}
          className={`px-5 py-2 rounded-full ${
            view === "cart"
              ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
              : "text-gray-600"
          }`}
        >
          Cart ({cartCount})
        </button>
      </div>
    </div>
  );
}

export default Header;
