import React from "react";

function Cart({ cart, handleRemove, total, handleClear }) {
  return (
    <div className="p-6  min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow max-w-2xl mx-auto gap-5">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        {cart.length === 0 && <p className="text-gray-500">No items added</p>}

        {cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 bg-gray-100 mb-5 rounded"
          >
            <div className="flex">
              <div className=" flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full m-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-8 h-8 object-cover rounded p-1"
                />
              </div>

              <div className="">
                <h4>{item.title}</h4>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>

            <button
              onClick={() => handleRemove(index)}
              className="text-red-500 text-sm btn"
            >
              Remove
            </button>
          </div>
        ))}

        <div className="flex justify-between mt-4 font-semibold">
          <span>Total:</span>
          <span>${total}</span>
        </div>

        <button
          className="mt-5 w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-full"
          onClick={handleClear}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
