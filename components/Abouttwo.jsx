import React from "react";

const Abouttwo = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="text-center space-y-8">
        {/* First Row - ONE */}
        <div className="relative group">
          <h1 className="text-6xl font-bold text-black transition-colors duration-300 cursor-pointer group-hover:text-green-500">
            COLLECTIVE PROGRESS
          </h1>
          {/* Side text */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg text-gray-600 whitespace-nowrap">
              Your growth fuels ours
            </p>
          </div>
        </div>

        {/* Second Row - TWO and THREE */}
        <div className="flex justify-center space-x-16">
          {/* TWO */}
          <div className="relative group">
            <h1 className="text-4xl font-bold text-black transition-colors duration-300 cursor-pointer group-hover:text-green-500">
             RISK-CONSCIOUS EXECUTION
            </h1>
            {/* Side text */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg text-gray-600 whitespace-nowrap">
                If we wont do it ourselves, we wont suggest it to you
              </p>
            </div>
          </div>

          {/* THREE */}
          <div className="relative group">
            <h1 className="text-4xl font-bold text-black transition-colors duration-300 cursor-pointer group-hover:text-green-500">
              RADICAL TRANSPARENCY
            </h1>
            {/* Side text */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full ml-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-lg text-gray-600 whitespace-nowrap">
                If we cant add value, we'll tell you upfront
              </p>
            </div>
          </div>
        </div>

        {/* Third Row - FOUR */}
        <div className="relative group">
          <h1 className="text-6xl font-bold text-black transition-colors duration-300 cursor-pointer group-hover:text-green-500">
            GLOBAL EFFICIENCY
          </h1>
          {/* Side text */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full mr-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-lg text-gray-600 whitespace-nowrap">
              Locally based, Globally optimised
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouttwo;
