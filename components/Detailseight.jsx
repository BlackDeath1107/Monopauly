import React from "react";
import Link from "next/link";

const Detailseight = () => {
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-8 left-8 border-4 border-white rounded-full px-6 py-3 hover:scale-105 transition-transform duration-200 z-10">
        <h1 className="text-3xl font-bold text-white">Let's Talk</h1>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="relative w-full flex justify-center group">
          <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-screen left-1/2 transform -translate-x-1/2"></div>
          <Link href="/about">
            <h1 className="text-8xl text-white font-bold relative z-10 group-hover:text-black transition-colors duration-300">
              ABOUT US
            </h1>
          </Link>
        </div>

        <div className="relative w-full flex justify-center group">
          <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-screen left-1/2 transform -translate-x-1/2"></div>
          <h1 className="text-8xl text-white font-bold relative z-10 group-hover:text-black transition-colors duration-300">
            SERVICES
          </h1>
        </div>

        <div className="relative w-full flex justify-center group">
          <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-screen left-1/2 transform -translate-x-1/2"></div>
          <h1 className="text-8xl text-white font-bold relative z-10 group-hover:text-black transition-colors duration-300">
            TEAM
          </h1>
        </div>

        <div className="relative w-full flex justify-center group">
          <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-screen left-1/2 transform -translate-x-1/2"></div>
          <h1 className="text-8xl text-white font-bold relative z-10 group-hover:text-black transition-colors duration-300">
            IN THEIR WORDS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Detailseight;
