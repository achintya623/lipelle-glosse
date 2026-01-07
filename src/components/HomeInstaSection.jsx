import React from "react";

export default function HomeInstaSection() {
  return (
    <div>
      <div className="flex flex-col w-[98vw] h-[90vh] justify-start items-start pt-10">
        <div className="font-poppins text-6xl w-[98vw] font-bold h-25 flex items-center justify-center">
          Follow Us On Instagram
        </div>
        <div className="font-poppins text-4xl h-25 w-[98vw] font-medium flex items-center justify-center mt-10 mb-10">
          Where every new shade tells a story
        </div>
        <div className="flex flex-row w-[99.2vw] items-center justify-center">
          <img
            className="w-[23vw] h-[33vh] object-cover items-center justify-center"
            src="/insta section/3.jpg"
            alt=""
          />
          <img
            className="w-[11vw] h-[40vh] object-cover items-center justify-center"
            src="/insta section/4.jpg"
            alt=""
          />
          <img
            className="w-[13vw] h-[33vh] object-cover items-center justify-center"
            src="/insta section/5.jpg"
            alt=""
          />
          <img
            className="w-[11vw] h-[40vh] object-cover items-center justify-center"
            src="/insta section/6.jpg"
            alt=""
          />
          <img
            className="w-[13vw] h-[33vh] object-cover items-center justify-center "
            src="/insta section/Daniela Braga Poses in Red-Hot Fashions for Harper’s Bazaar – Fashion Gone Rogue.jpg"
            alt=""
          />
          <img
            className="w-[10vw] h-[40vh] object-cover items-center justify-center"
            src="/insta section/Vale a pena usar cosméticos com efeito Cinderela_.jpg"
            alt=""
          />
          <img
            className="w-[23vw] h-[33vh] object-cover items-center justify-center"
            src="/insta section/Lábios.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
