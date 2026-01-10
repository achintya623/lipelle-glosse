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
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      {/* SEARCH */}
      <div className="flex justify-center sm:justify-start my-8 font-poppins">
        <div className="relative w-full sm:w-[380px]">
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
              transition-all duration-300 placeholder:text-neutral-400
            "
          />
        </div>
      </div>

      {/* LAYOUT */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* FILTERS */}
        <aside className="w-full md:w-48 shrink-0">
          <h3 className="text-center md:text-left font-volkhov text-xl mb-6">
            Shade
          </h3>

          <div className="grid grid-cols-3 md:grid-cols-2 gap-4">
            {["ALL", "Matte", "Gloss", "Cream", "Liquid"].map((cat) => {
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-3 py-2 rounded-2xl text-sm font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-black text-white scale-105 shadow-lg"
                        : "bg-transparent text-black hover:scale-105"
                    }
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </aside>

        {/* PRODUCTS GRID */}
        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </div>
  );
}
