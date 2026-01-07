import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Shop({ products, addToCart, decrement, increment }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const visibleProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shade.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "ALL" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="flex justify-start my-8 pl-10 font-poppins">
        <div className="relative w-[380px]">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
            🔎︎
          </span>
          <input
            type="text"
            placeholder="Search lipstick or shade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="
        w-full pl-10 py-3 rounded-2xl border border-neutral-300
        text-sm tracking-wide outline-none
        focus:border-black focus:ring-1 focus:ring-black
        transition-all duration-300
        placeholder:text-neutral-400
      "
          />
        </div>
      </div>

      <div className="flex">
        <div className="w-[15vw] flex flex-col justify-start h-[50vh]">
          <div className="items-center flex justify-center mt-10 font-volkhov text-2xl">
            Shade
          </div>
          <div className="w-[15vw] flex flex-row justify-center h-[30vh] p-10">
            <div className="grid grid-cols-2 items-start w-[15vw]">
              {["ALL", "Matte", "Gloss", "Cream", "Liquid"].map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    className={`
                    px-2 py-2 rounded-2xl w-25 h-10 font-medium transition-all duration-300 text-[15px] font-poppins
                    ${
                      isActive
                        ? "bg-black text-white scale-105 shadow-xl"
                        : "bg-transparent text-black hover:scale-105"
                    }
                `}
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[82vw] flex flex-row justify-start pl-10">
          <div className="grid grid-cols-3 gap-4 w-[65vw] items-center">
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
  );
}
