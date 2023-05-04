import React from "react";
import { decision } from "../data/data";
import decisionBG from "../data/files/Images/decision.png";

const Decision = () => {
  return (
    <>
      <div className="text-white w-screen min-h-screen relative">
        <div className="flex-1 h-screen absolute top-0 left-0 overflow-hidden">
          <img
            src={decisionBG}
            className="flex-1 object-cover min-h-screen w-screen"
            alt=""
          />
        </div>

        <div className="flex flex-row absolute inset-0 bg-black bg-opacity-60 justify-center items-center backdrop-blur-sm">
          {decision.map((val, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="lg:ml-10">
                <div className="font-serif w-full text-center font-semibold text-3xl py-2 lg:pb-12 md:text-5xl lg:text-start xl:text-6xl">
                  <h1>{val.header}</h1>
                </div>

                <div className="font-medium font-sans text-center text-xl pb-4 md:text-2xl lg:text-xl lg:text-start lg:w-[90%] 2xl:text-3xl">
                  <p>{val.note1}</p>
                </div>
              </div>

              <div className="lg:w-[70%]">
                <div className="flex justify-center gap-2 my-2 lg:justify-normal">
                  <div className="">{val.icon}</div>
                  <div className="text-xl font-medium md:text-2xl md:mb-4 2xl:text-3xl">
                    {val.iconNote}
                  </div>
                </div>

                <div className="flex flex-wrap w-full justify-evenly lg:justify-between">
                  <div className="bg-[#97A5EB] rounded-md w-[30%]">
                    <div className="flex justify-center">{val.bulb}</div>
                    <div className="text-center xl:text-xl 2xl:text-3xl ">{val.blueNote}</div>
                  </div>

                  <div className="bg-[#7EB073] rounded-md w-[30%]">
                    <div className="flex justify-center">{val.bulb}</div>
                    <div className="text-center xl:text-xl 2xl:text-3xl">{val.greenNote}</div>
                  </div>

                  <div className="bg-[#E1929E] rounded-md w-[30%]">
                    <div className="flex justify-center">{val.bulb}</div>
                    <div className="text-center xl:text-xl 2xl:text-3xl">{val.pinkNote}</div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block font-medium font-sans text-center text-xl pt-4 md:text-2xl lg:text-xl lg:text-start lg:w-[90%] 2xl:text-3xl">
                <p>{val.note2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Decision;
