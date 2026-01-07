import React from "react";

export default function HomeNewsletter() {
  return (
    <div className="flex flex-row w-[98vw] h-screen justify-center items-center pt-10">
      <div>
        <div>
          <img
            className="w-80 rounded-2xl h-180 object-cover"
            src="src\pages\images\newsletter\download (1).jpg"
            alt="image"
          />
        </div>
      </div>
      <div className="w-180 h-180 flex flex-col pl-10 pr-10 items-center justify-center ">
        <div className="h-100 w-120 flex flex-col justify-center items-center">
          <div className="m-10 shadow-2xl rounded-2xl w-160 h-60">
            <div className="font-volkhov text-[34px] font-bold pl-10">
              Subscribe To Our Newsletter
            </div>
            <div className="font-volkhov font-medium p-4 text-gray-700 h-[12vh]">
              Stay in the loop with exclusive offers, new shade launches, beauty
              tips and early access to our limited-edition collections
            </div>
            <div className="font-volkhov text-2xl font-medium pl-10 text-gray-700">
              mike@ymail.com
            </div>
          </div>
          <button className="h-15 w-50 bg-black text-white rounded-2xl">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
      <div>
        <img
          className="w-80 rounded-2xl h-180 object-cover"
          src="src\pages\images\newsletter\download.jpg"
          alt="image"
        />
      </div>
    </div>
  );
}
