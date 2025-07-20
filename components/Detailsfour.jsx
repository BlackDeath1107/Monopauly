import React from 'react'
import Image from 'next/image';
import Kol from '../assets/Kol.png';
const Detailsfour = () => {
  return (
    <div className="">
      <div className="bg-green-400 p-3">
        <h1 className="text-black text-7xl font-extrabold text-center">
          GLOBAL COMPLIANCE PARTNER MONOPAULY
        </h1>
      </div>
        <div className="flex flex-row items-center justify-between pt-24">
          <div className="">
            <div className="flex flex-col gap-2 ">
              <h1 className="text-9xl text-white font-extrabold">WORLDWIDE</h1>
              <h1 className="text-9xl text-white font-extrabold">PRESENCE</h1>
              <h1 className="text-9xl text-green-400 font-extrabold">
                MONOPAULY
              </h1>
              <h1 className="text-7xl text-green-400 font-extrabold">
                BASED IN CALCUTTA
              </h1>
              <h1 className="text-7xl text-green-600 font-extrabold">
                BUILT FOR THE WORLD
              </h1>

              <h1 className="text-4xl text-white font-extrabold">
                Full-service incorporation-wherever you are.
              </h1>
            </div>
          </div>
          <div className="pr-10">
           <Image src={Kol} height={800} width={800}></Image>
          </div>
        </div>
      
    </div>
  );
}

export default Detailsfour