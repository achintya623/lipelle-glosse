import React from "react";
import { NavLink } from "react-router-dom";

export default function CartProductCard({
  product,
  decrement,
  increment,
  deleteFromCart,
}) {
  return (
    <NavLink to={`/product/${product.id}`} className="group w-full">
      <div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-6
        flex flex-col sm:flex-row items-center gap-6 transition-all duration-300 hover:scale-[1.02]"
      >
        {/* IMAGE */}
        <div className="w-full sm:w-[140px] h-[180px] sm:h-[160px] overflow-hidden rounded-xl flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* INFO */}
        <div className="flex-1 flex flex-col gap-2 text-center sm:text-left">
          <h3 className="text-lg font-bold">
            {product.category} {product.shade}
          </h3>
          <p className="text-sm text-gray-600">{product.name}</p>
          <p className="text-sm">Stock: {product.stock}</p>
          <p className="text-lg font-semibold">${product.price}</p>
        </div>

        {/* ACTIONS */}
        <div className="flex sm:flex-col items-center gap-4">
          {/* QUANTITY */}
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

          {/* DELETE */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              deleteFromCart(product.id);
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </NavLink>
  );
}
