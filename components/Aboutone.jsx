import React from "react";

const Aboutone = () => {
  return (
    <div
      className="flex items-center justify-center flex-col text-center"
      style={{
        backgroundImage: `url('/src/assets/MainBg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div>
        <h1 className="text-black font-extrabold text-8xl">
          U.S. PAPERWORK <span className="text-black mx-4">≠</span> U.S. RATES
        </h1>
        <h1 className="text-white text-7xl font-bold">
          TRY MONOPAULY. TRY GEOARBITRAGE
        </h1>
        <div className="flex flex-row gap-5 items-start justify-between w-[1500px] pt-10">
          <h1 className="text-justify w-[750px] text-xl text-black">
            Monopauly's inception in 2023 was driven by a single, clear goal: To
            help U.S. and other such high-cost market individuals save
            significantly on LLC formations, DBA filings, and compliance by
            leveraging the power of currency arbitrage- offering high-quality
            legal and business services at a fraction of domestic costs.
          </h1>
          <h1 className="text-justify w-[750px] text-xl text-black">
            Our clients benefit from the cost advantages of the global economy,
            including favourable forex rates, efficient processes, and deep
            legal know-how- all at a fraction of U.S. prices. Why overspend on
            the system, when you can outsmart it?
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Aboutone;
