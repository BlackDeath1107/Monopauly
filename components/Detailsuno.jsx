import React from "react";
import MainBg from "../assets/MainBg.jpg";

const Detailsuno = () => {
  return (
    <div
      className=" flex items-center justify-center flex-col text-center "
      style={{
        backgroundImage: `url(${MainBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div>
        <h1 className="text-white text-[80px]">WITH US YOU ARE</h1>
        <h1 className="text-white text-[80px] font-bold">NOT SCROLLING DOWN</h1>
        <h1 className="text-[80px] font-bold text-green-400">YOU WILL BE SCALING UP!</h1>
      </div>
    </div>
  );
};

export default Detailsuno;
