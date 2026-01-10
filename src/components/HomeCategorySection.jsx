import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function HomeCategorySection({
  products,
  addToCart,
  decrement,
  increment,
}) {
  const [selectedCategory, setSelectedCategory] = useState("Gloss");

  const visibleProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <section className="w-full flex flex-col items-center py-16 px-6">
      {/* HEADINGS */}
      <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
        New Arrivals
      </h2>

      <p className="font-poppins text-lg sm:text-xl lg:text-2xl text-center mt-4 mb-10 max-w-xl">
        Where real beauty meets timeless luxury
      </p>

      {/* CATEGORY BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {["Matte", "Gloss", "Cream", "Liquid"].map((cat) => {
          const isActive = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-2xl min-w-[120px] transition-all duration-300 font-poppins text-sm sm:text-base
                ${
                  isActive
                    ? "bg-black text-white scale-105 shadow-lg"
                    : "bg-transparent text-black border border-black hover:scale-105"
                }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* PRODUCT GRID */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProducts.length === 0 && (
          <p className="text-center col-span-full">No products found</p>
        )}

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
    </section>
  );
}
