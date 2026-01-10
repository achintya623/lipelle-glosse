import React from "react";

export default function HomeInstaSection() {
  return (
    <section className="w-full py-12 ">
      <div className="flex flex-col items-center">
        <h2 className="font-poppins text-3xl sm:text-4xl lg:text-6xl font-bold text-center">
          Follow Us On Instagram
        </h2>

        <p className="font-poppins text-lg sm:text-xl lg:text-3xl font-medium text-center mt-6 mb-10">
          Where every new shade tells a story
        </p>

        {/* IMAGE STRIP */}
        <div className="w-full flex justify-center overflow-hidden items-center">
          <div
            className="
      flex items-center justify-center
      scale-[0.45]
      xs:scale-[0.9]
      sm:scale-[0.85]
      lg:scale-100
      transition-transform duration-300
      origin-center
    "
          >
            <img
              className="w-[40vw] sm:w-[26vw] lg:w-[23vw] h-[26vh] sm:h-[30vh] lg:h-[33vh] object-cover "
              src="/insta section/3.jpg"
            />

            <img
              className="w-[24vw] sm:w-[14vw] lg:w-[11vw] h-[30vh] sm:h-[34vh] lg:h-[40vh] object-cover "
              src="/insta section/4.jpg"
            />

            <img
              className="w-[28vw] sm:w-[18vw] lg:w-[13vw] h-[26vh] sm:h-[30vh] lg:h-[33vh] object-cover "
              src="/insta section/5.jpg"
            />

            <img
              className="w-[24vw] sm:w-[14vw] lg:w-[11vw] h-[30vh] sm:h-[34vh] lg:h-[40vh] object-cover "
              src="/insta section/6.jpg"
            />

            <img
              className="w-[28vw] sm:w-[18vw] lg:w-[13vw] h-[26vh] sm:h-[30vh] lg:h-[33vh] object-cover "
              src="/insta section/Daniela Braga Poses in Red-Hot Fashions for Harper’s Bazaar – Fashion Gone Rogue.jpg"
            />

            <img
              className="w-[24vw] sm:w-[14vw] lg:w-[10vw] h-[30vh] sm:h-[34vh] lg:h-[40vh] object-cover "
              src="/insta section/Vale a pena usar cosméticos com efeito Cinderela_.jpg"
            />

            <img
              className="w-[40vw] sm:w-[26vw] lg:w-[23vw] h-[26vh] sm:h-[30vh] lg:h-[33vh] object-cover "
              src="/insta section/Lábios.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
