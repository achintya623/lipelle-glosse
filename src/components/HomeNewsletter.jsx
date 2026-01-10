import React from "react";

export default function HomeNewsletter() {
  return (
    <section className="w-full py-20 px-4">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
        {/* LEFT IMAGE */}
        <img
          className="w-[260px] sm:w-[320px] lg:w-[20vw] h-[360px] sm:h-[420px] lg:h-[70vh] object-cover rounded-2xl"
          src="/newsletter/download (1).jpg"
          alt="newsletter"
        />

        {/* CENTER CARD */}
        <div className="w-full max-w-xl flex flex-col items-center text-center px-6">
          <div className="shadow-2xl rounded-2xl w-full p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            <h2 className="font-volkhov text-2xl sm:text-3xl lg:text-[34px] font-bold">
              Subscribe To Our Newsletter
            </h2>

            <p className="font-volkhov font-medium text-gray-700 mt-6 text-sm sm:text-base">
              Stay in the loop with exclusive offers, new shade launches, beauty
              tips and early access to our limited-edition collections
            </p>

            <p className="font-volkhov text-lg sm:text-xl font-medium text-gray-700 mt-6">
              mike@ymail.com
            </p>
          </div>

          <button className="mt-10 px-10 py-3 bg-black text-white rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            SUBSCRIBE NOW
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <img
          className="w-[260px] sm:w-[320px] lg:w-[20vw] h-[360px] sm:h-[420px] lg:h-[70vh] object-cover rounded-2xl"
          src="/newsletter/download.jpg"
          alt="newsletter"
        />
      </div>
    </section>
  );
}
