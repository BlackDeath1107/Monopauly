import React from "react";
import Image from "next/image";
import Hands from "../assets/Hands.jpg"
const Detailsfive = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-start justify-start">
      <div className="pb-16">
        <h1 className="text-8xl font-extrabold text-black">COMMITED</h1>
        <h1 className="text-9xl font-bold text-green-400">TEAM</h1>
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-16 p-4 rounded-md ">
        <div className="">
          <Image src={Hands} height={400} width={400} className="rounded-md"></Image>
        </div>
       <div className="w-[500px] text-justify">
           <h1 className="text-black font-semibold text-4xl">You can connect with our team anytime- <span className="text-green-500 font-bold">directly</span>. We prioritize swift responses to keep your momentum going</h1>
       </div>
      </div>
    </div>
  );
};

export default Detailsfive;
