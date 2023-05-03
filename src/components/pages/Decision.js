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
            className="flex-1 object-contain min-h-screen"
            alt=""
          />
        </div>

        <div className="flex flex-row absolute inset-0 bg-black bg-opacity-60 justify-center items-center backdrop-blur-sm">
          {decision.map((val, i) => (
            <div key={i} className="lg:px-10 2xl:w-full">
              <div className="font-serif font-semibold lg:text-5xl lg:my-10 2xl:text-7xl">
                <h1>{val.header}</h1>
              </div>

              <div className="lg:my-6 lg:text-xl lg:w-[68%] 2xl:w-full 2xl:text-2xl">
                <p>{val.note1}</p>
              </div>

              <div className="lg:mx-12 ">
                <div className="flex lg:my-8 2xl:my-12">
                  <div className="lg:mr-2">{val.icon}</div>
                  <div className="lg:font-semibold lg:text-2xl 2xl:text-4xl">
                    {val.iconNote}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row ">
                  <div className="bg-[#97A5EB] md:w-[25%] 2xl:w-[30%] rounded-md">
                    <div className="lg:mx-24 lg:px-2 lg:mt-2 lg:mb-2 2xl:mx-40  2xl:mt-4 2xl:mb-4">
                      {val.bulb}
                    </div>
                    <div className="text-center">{val.blueNote}</div>
                  </div>

                  <div className="bg-[#7EB073] my-4 md:my-0 md:mx-4 md:w-[25%] 2xl:w-[30%] rounded-md">
                    <div className="lg:mx-24 lg:px-2 lg:mt-2 lg:mb-2 2xl:mx-40  2xl:mt-4 2xl:mb-4">
                      {val.bulb}
                    </div>
                    <div className="text-center">{val.greenNote}</div>
                  </div>

                  <div className="bg-[#E1929E] md:w-[25%] 2xl:w-[30%] rounded-md">
                    <div className="lg:mx-24 lg:px-2 lg:mt-2 lg:mb-2 2xl:mx-40  2xl:mt-4 2xl:mb-4">
                      {val.bulb}
                    </div>
                    <div className="text-center">{val.pinkNote}</div>
                  </div>
                </div>
              </div>

              <div className="lg:my-6 lg:text-xl lg:w-[68%] 2xl:my-8 2xl:w-full 2xl:text-2xl ">
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
