import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HomeShowcase() {
  const images = [
    "/home showcase/download.jpg",
    "/home showcase/Glerry - Hea Lin Kwon.jpg",
    "/home showcase/Photo editing.jpg",
    "/home showcase/Shop All.jpg",
  ];

  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent((prev) => (prev + 1) % images.length);
  }

  function prevSlide() {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <div>
      <div className="flex flex-row w-[98vw] h-[90vh] justify-center pt-10">
        <div className="flex flex-col w-1/2 items-end ">
          <div className=" w-160 font-volkhov text-5xl">
            Luxury Lips. Limitless Confidence
          </div>
          <div className=" w-160.5 pt-10 pb-10 font-poppins text-1xl">
            From soft everyday nudes to bold statement reds, Lipelle Glosse is
            crafted to elevate your beauty routine. Each lipstick is enriched
            with hydrating pigments that deliver long-lasting color without
            drying your lips.
          </div>
          <div className="h-30 w-272 flex justify-center items-center">
            <Link to="/shop">
              <button className="h-15 w-50 bg-black text-white rounded-2xl">
                BUY NOW
              </button>
            </Link>
          </div>
          <div className=" w-162 font-volkhov text-4xl pt-10">
            Discover shades designed to empower your every mood
          </div>
          <div className="flex gap-6 mt-16">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-black text-white text-xl"
            >
              ᐊ
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-black text-white text-xl"
            >
              ᐅ
            </button>
          </div>
        </div>
        <div className="flex flex-col w-1/2 items-start justify-start relative">
          <div className="w-[640px] flex justify-end items-center">
            <img
              src={images[current]}
              className="w-[520px] h-[650px] object-cover rounded-3xl shadow-xl transition-all duration-500"
              alt="lipstick"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
