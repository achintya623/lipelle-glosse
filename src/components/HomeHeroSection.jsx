import React from "react";
import { Link } from "react-router-dom";

export default function HomeHeroSection() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen items-center justify-center gap-6 px-4 sm:px-8 pt-10 lg:px-10 box-border ">
      <img
        className="w-full sm:w-[300px] lg:w-[300px] h-[260px] sm:h-[420px] lg:h-[700px] rounded-2xl object-cover"
        src="/hero/Red haired model on a gradient studio background.jpg"
        alt="model"
      />
      <div className="w-full lg:w-[500px] flex flex-col items-center text-center gap-6">
        <img
          className="w-full max-w-[420px] h-[140px] sm:h-[180px] lg:h-[135px] rounded-2xl object-cover"
          src="/hero/download (1).jpg"
          alt="product"
        />

        <div className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-semibold">
          ULTIMATE
        </div>

        <span
          className="text-[72px] sm:text-[110px] lg:text-[150px] font-poppins text-white font-semibold leading-none"
          style={{ WebkitTextStroke: "0.01em black" }}
        >
          SALE
        </span>

        <div className="text-lg sm:text-xl lg:text-2xl">NEW COLLECTION</div>

        <Link to="/shop">
          <button className="px-8 py-3 sm:px-10 sm:py-4 text-sm sm:text-base lg:text-lg bg-black text-white rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105">
            SHOP NOW
          </button>
        </Link>

        <img
          className="w-full max-w-[420px] h-[140px] sm:h-[180px] lg:h-[135px] rounded-2xl object-cover"
          src="/hero/Einfache Anleitung für Smokey Eyes.jpg"
          alt="makeup"
        />
      </div>
      <img
        className="w-full sm:w-[300px] lg:w-[300px] h-[260px] sm:h-[420px] lg:h-[700px] rounded-2xl object-cover"
        src="/hero/download.jpg"
        alt="lipstick"
      />
    </div>
  );
}
