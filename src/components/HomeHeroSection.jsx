import React from "react";
import { Link } from "react-router-dom";

export default function HomeHeroSection() {
  return (
    <div>
      <div className="flex flex-row w-[98vw] h-screen justify-center pt-10">
        <div>
          <div>
            <img
              className="w-100 rounded-2xl h-180 object-cover"
              src="/hero/Red haired model on a gradient studio background.jpg"
              alt="image"
            />
          </div>
        </div>
        <div className="w-120 h-180 flex flex-col pl-10 pr-10 items-center ">
          <img
            className="rounded-2xl h-40 object-cover w-120"
            src="/hero/download (1).jpg"
            alt=""
          />
          <div className="text-7xl font-poppins h-25 font-semibold mt-5 ">
            ULTIMATE
          </div>
          <div className="flex flex-col leading-30 items-start  justify-start p-0 m-0">
            <span
              className="text-[150px] font-poppins  text-white  font-semibold p-0 m-0"
              style={{ WebkitTextStroke: "0.01em black" }}
            >
              SALE
            </span>
          </div>
          <div className="text-2xl h-15 w-120 flex justify-center items-center ">
            NEW COLLECTION
          </div>
          <div className="h-30 w-120 flex justify-center items-center ">
            <Link to="/shop">
              <button className="h-15 w-50 bg-black text-white rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105">
                SHOP NOW
              </button>
            </Link>
          </div>
          <img
            className="rounded-2xl h-40 object-cover w-120"
            src="/hero/Einfache Anleitung für Smokey Eyes.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-100 rounded-2xl h-180 object-cover"
            src="/hero/download.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
