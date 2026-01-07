import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductCard({
  product,
  addToCart,
  increment,
  decrement,
}) {
  return (
    <NavLink to={`/product/${product.id}`} className="group">
      <div className="h-[45vh] w-[20vw] flex flex-col  justify-evenly items-center rounded-2xl shadow-2xl font-poppins ">
        <div className="w-[18vw] h-[24vh] object-cover overflow-hidden rounded-2xl">
          <img
            src={product.image}
            alt="image"
            className="object-cover w-[18vw]"
          />
        </div>
        <div className="flex flex-row justify-between w-[17vw] h-[17vh]">
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-2xl font-bold text-zinc-950">
                {product.category} {product.shade}
              </div>
              <div className="text-[14px]">{product.name}</div>
            </div>
            <div className="text-[14px]">Stock: {product.stock}</div>
            <div className="text-2xl font-medium mb-3">${product.price}</div>
          </div>
          <div className="flex flex-col justify-between w-[5vw] items-center ">
            <div className="text-[20px] pt-4">★{product.rating}</div>
            <div>
              {product.added ? (
                <div className="flex mb-3 text-[20px] gap-6 cursor-pointer">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      decrement(product.id);
                    }}
                  >
                    -
                  </button>
                  <div className="w-2.5 flex justify-center cursor-pointer">
                    {product.quantity}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      increment(product.id);
                    }}
                  >
                    +
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="bg-[#ff4646] text-white h-[5vh] w-[6vw] rounded-2xl cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(product.id);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
