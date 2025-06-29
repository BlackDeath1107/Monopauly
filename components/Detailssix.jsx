import React from 'react'
import Image from 'next/image'
import City from '../assets/City.jpg'

const Detailssix = () => {
  return (
     <div className="flex pt-[250px] items-center justify-center">
        <div className="flex flex-row items-center justify-center w-full gap-10 p-4 rounded-md ">
          <div className="">
            <Image src={City} className="rounded-md"></Image>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-start justify-center text-black ">
              <div>
                <h1
                  className="text-9xl text-white"
                  style={{ WebkitTextStroke: "2px black" }}
                >
                  50+
                </h1>
              </div>
             
            </div>
            <div>
              <h1 className="text-black text-5xl text-center font-bold">JURISDICTIONS</h1>
              <h1 className="w-[420px] text-black text-justify text-2xl pt-8">
               U.S. Reach,Global Support. We can assist clients across all 50 states and internationally.
              </h1>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Detailssix