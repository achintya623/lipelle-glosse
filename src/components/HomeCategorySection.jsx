import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function HomeCategorySection({
  products,
  addToCart,
  decrement,
  increment,
}) {
  const [selectedCategory, setSelectedCategory] = useState("Gloss");

  const visibleProducts = products.filter((product) => {
    const matchesCategory = product.category === selectedCategory;

    return matchesCategory;
  });
  return (
    <div>
      <div className="flex flex-col w-[98vw] h-[152vh] justify-start items-start pt-10">
        <div className="font-poppins text-6xl w-[98vw] font-bold h-25 flex items-center justify-center">
          New Arrivals
        </div>
        <div className="font-poppins text-4xl h-25 w-[98vw] font-medium flex items-center justify-center mt-5 mb-5">
          Where real beauty meets timeless luxury
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row w-[98vw] justify-center gap-10 p-5">
            {["Matte", "Gloss", "Cream", "Liquid"].map((cat) => {
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-6 py-2 rounded-2xl w-[200px] h-[60px] font-medium transition-all duration-300 text-[20px] font-poppins cursor-pointer
                    ${
                      isActive
                        ? "bg-black text-white transition-all duration-300  hover:-translate-y-1 hover:scale-105 shadow-xl"
                        : "bg-transparent text-black transition-all duration-300  hover:-translate-y-1 hover:scale-105"
                    }
                `}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <div className="flex justify-center w-[98vw]">
            <div className="grid grid-cols-3 gap-10 w-[65vw] items-center ">
              {visibleProducts.length === 0 && <p>No products found</p>}

              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  decrement={decrement}
                  increment={increment}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
