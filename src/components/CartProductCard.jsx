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
      <div className="h-[26vh] w-[66vw] m-4 flex flex-row  justify-evenly items-center rounded-2xl shadow-2xl font-poppins transition-all duration-300  hover:-translate-y-1 hover:scale-102 cursor-pointer">
        <div className="w-[18vw] h-[24vh] object-cover overflow-hidden rounded-2xl">
          <img
            src={product.image}
            alt="image"
            className="w-[18vw] object-cover "
          />
        </div>
        <div className="flex flex-row justify-between w-[40vw] h-[17vh] items-center">
          <div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-2xl font-bold text-zinc-950">
                  {product.category} {product.shade}
                </div>
                <div className="text-[14px]">{product.name}</div>
              </div>
              <div className="text-[14px]">Stock: {product.stock}</div>
            </div>
          </div>
          <div className="text-2xl font-medium ">${product.price}</div>
          <div className="flex text-[20px] gap-6 items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                decrement(product.id);
              }}
              className="transition-all duration-300  hover:-translate-y-1 hover:scale-105 cursor-pointer"
            >
              -
            </button>
            <div className="w-2.5 flex justify-center">{product.quantity}</div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                increment(product.id);
              }}
              className="transition-all duration-300  hover:-translate-y-1 hover:scale-105 cursor-pointer"
            >
              +
            </button>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              deleteFromCart(product.id);
            }}
            className="bg-[#ff4646] text-white h-[5vh] w-[6vw] rounded-2xl flex justify-center items-center transition-all duration-300  hover:-translate-y-1 hover:scale-105 cursor-pointer"
          >
            Delete
          </div>
        </div>
      </div>
    </NavLink>
  );
}
