"use client";
import React, { useState } from "react";
import Link from "next/link";

const Base = () => {
  const [position, setPosition] = useState({ top: "0px", left: "0px" });

  const handleHover = () => {
    const randomX =
      Math.floor(Math.random() * window.innerWidth * 0.5) *
      (Math.random() > 0.5 ? 1 : -1);
    const randomY =
      Math.floor(Math.random() * window.innerHeight * 0.5) *
      (Math.random() > 0.5 ? 1 : -1);
    setPosition({ top: `${randomY}px`, left: `${randomX}px` });
  };

  return (
    <div className="pt-[300px] ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-8xl font-bold text-black">HEY THERE</h1>
        <h1 className="text-8xl font-bold text-green-500">WELCOME!</h1>
        <h1 className="text-xl text-black w-[30%] text-center">
          To improve your experience we need to ask you a crucial question. What
          kind of law firm are you looking for?
        </h1>
        <h1 className="text-3xl text-black">
          <span className="font-bold">MONO</span>PAULY
        </h1>
        <div className="relative w-full h-fit bg-green-400/20 flex flex-row items-center justify-center mt-10 gap-10">
          <Link href="/details" className="bg-white p-4 rounded-sm text-black">
            APYTICAL
          </Link>
          {position && (
            <button
              className="bg-white hover:bg-gray-200 duration-300 p-4 w-fit rounded-sm text-black transform relative "
              style={{
                transform: `translate(${position.left}, ${position.top})`,
              }}
              onMouseEnter={handleHover}
            >
              <h1>TYPICAL</h1>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Base;
