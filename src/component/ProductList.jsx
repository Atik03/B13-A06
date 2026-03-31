import React, { useEffect, useState } from "react";

function ProductList({ handleAdd }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const badgeStyle = (badge) => {
    switch (badge) {
      case "Best Seller":
        return "bg-yellow-100 text-yellow-600";
      case "Popular":
        return "bg-blue-100 text-blue-600";
      case "New":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="p-6 min-h-screen w-11/12 mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition hover:scale-105"
          >
            <div className="flex w-full h-auto justify-between">
              <div className=" flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full m-2 border-gray-200 border">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-8 h-8 object-cover rounded p-1"
                />
              </div>

              <span
                className={`text-xs w-[70px] h-[25px] flex justify-center items-center rounded-full ${badgeStyle(
                  item.badge,
                )}`}
              >
                {item.badge}
              </span>
            </div>

            <h3 className="text-lg font-semibold mt-3">{item.title}</h3>

            <p className="text-sm text-gray-500 mt-1">{item.description}</p>

            <h2 className="font-bold mt-3">${item.price}</h2>

            <ul className="text-sm mt-3 space-y-1 text-gray-600">
              {item.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <button
              onClick={() => handleAdd(item)}
              className="mt-5 w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-full"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
