import React from "react";
import { Link } from "react-router-dom";
import HomeHeroSection from "../components/HomeHeroSection";
import HomeShowcase from "../components/HomeShowcase";
import HomeCategorySection from "../components/HomeCategorySection";
import HomeInstaSection from "../components/HomeInstaSection";
import HomeNewsletter from "../components/HomeNewsletter";

export default function Home({
  products,
  cart,
  setCart,
  addToCart,
  decrement,
  increment,
}) {
  return (
    <div>
      <HomeHeroSection />
      <HomeShowcase />
      <HomeCategorySection
        products={products}
        cart={cart}
        setCart={setCart}
        addToCart={addToCart}
        decrement={decrement}
        increment={increment}
      />
      <HomeInstaSection />
      <HomeNewsletter />
    </div>
  );
}
