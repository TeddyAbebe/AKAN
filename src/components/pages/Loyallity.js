import React from "react";
import { loyality } from "../data/data";

const Loyallity = () => {
  return (
    <>
      <div className=" bg-black text-white w-screen min-h-screen">
        <div>
          {loyality.map((val, i) => (
            <div key={i} className=" px-4">
              <div className="text-center font-serif font-semibold text-xl md:text-left md:text-3xl lg:text-5xl md:my-10 2xl:text-8xl">
                <h1>{val.header}</h1>
              </div>
              <div className="text-sm lg:my-6 lg:text-xl lg:w-[54rem] 2xl:w-[96rem] 2xl:text-3xl">
                <p>{val.note1}</p>
                <br />
                <p>{val.note2}</p>
                <br />
                <p>{val.note3}</p>
              </div>

              <div className="text-xl mb-3 font-semibold md:my-14 lg:text-2xl 2xl:text-6xl">
                {val.head}
              </div>

              <div className="flex flex-col max-w-[60rem] w-[70%] md:flex-row xl:ml-10 md:w-full lg:h-[9rem]">
                <div className="bg-[#97A5EB] rounded-md max-w-[30rem]">
                  <div className="flex justify-center items-center">
                    {val.icon}
                  </div>
                  <div className="text-center font-semibold">
                    {val.blueNote}
                  </div>
                </div>

                <div className="bg-[#7EB073] rounded-md max-w-[30rem] my-4 md:my-0 md:mx-3">
                  <div className="flex justify-center items-center">
                    {val.icon}
                  </div>
                  <div className="text-center font-semibold">
                    {val.greenNote}
                  </div>
                </div>

                <div className="bg-[#E1929E] rounded-md max-w-[30rem]">
                  <div className="flex justify-center items-center">
                    {val.icon}
                  </div>
                  <div className="text-center font-semibold">
                    {val.pinkNote}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Loyallity;
