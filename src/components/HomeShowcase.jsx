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
  const [animate, setAnimate] = useState(false);
  const [direction, setDirection] = useState("right");

  function nextSlide() {
    setDirection("right");
    setAnimate(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setAnimate(false);
    }, 300);
  }

  function prevSlide() {
    setDirection("left");
    setAnimate(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setAnimate(false);
    }, 300);
  }

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-10 py-20 gap-12">
      <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-left items-center lg:items-start lg:pl-90 4k:pl-170 ">
        <h1 className="font-volkhov text-3xl sm:text-4xl lg:text-5xl max-w-xl">
          Luxury Lips. Limitless Confidence
        </h1>

        <p className="mt-6 text-sm sm:text-base lg:text-lg font-poppins text-gray-600 max-w-xl">
          From soft everyday nudes to bold statement reds, Lipelle Glosse is
          crafted to elevate your beauty routine with hydrating pigments and
          long-lasting color.
        </p>

        <Link to="/shop">
          <button className="mt-8 px-10 py-3 bg-black text-white rounded-2xl transition-all duration-300 hover:scale-105">
            BUY NOW
          </button>
        </Link>

        <p className="mt-10 font-volkhov text-xl sm:text-2xl max-w-lg">
          Discover shades designed to empower your every mood
        </p>

        <div className="flex gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-black text-white text-lg hover:scale-110 transition"
          >
            ᐊ
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-black text-white text-lg hover:scale-110 transition"
          >
            ᐅ
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:pr-70 4k:pr-170">
        <div className="relative w-[260px] sm:w-[340px] lg:w-[460px] h-[360px] sm:h-[480px] lg:h-[620px] overflow-hidden rounded-3xl shadow-xl">
          <div className="relative w-[260px] sm:w-[340px] lg:w-[460px] h-[360px] sm:h-[480px] lg:h-[620px] overflow-hidden rounded-3xl shadow-xl">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`
        absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out
        ${index === current ? "opacity-100 z-10" : "opacity-0"}
      `}
                alt="lipstick"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
