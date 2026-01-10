import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductCard({
  product,
  addToCart,
  increment,
  decrement,
}) {
  return (
    <NavLink to={`/product/${product.id}`} className="">
      <div className="w-full  bg-white flex flex-col justify-between rounded-2xl shadow-xl font-poppins transition-all duration-300 hover:-translate-y-1 hover:scale-105">
        {/* IMAGE */}
        <div className="w-full h-[220px] sm:h-[240px] overflow-hidden rounded-t-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="p-4 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-950">
              {product.category} {product.shade}
            </h3>
            <p className="text-sm text-gray-600">{product.name}</p>
          </div>

          <div className="text-sm text-gray-500 mt-1">
            Stock: {product.stock}
          </div>

          <div className="flex justify-between items-center mt-3">
            <span className="text-xl font-semibold">${product.price}</span>
            <span className="text-sm">★ {product.rating}</span>
          </div>

          {/* CART CONTROLS */}
          <div className="mt-4 flex justify-center">
            {product.added ? (
              <div className="flex items-center gap-4 text-lg">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    decrement(product.id);
                  }}
                  className="hover:scale-110 transition"
                >
                  −
                </button>
                <span>{product.quantity}</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    increment(product.id);
                  }}
                  className="hover:scale-110 transition"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="bg-[#ff4646] text-white px-6 py-2 rounded-xl text-sm hover:bg-[#b63636] transition"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(product.id);
                }}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </NavLink>
  );
}
