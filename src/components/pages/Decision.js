import React from "react";
import { decision } from "../data/data";
import LeftArrow from "../data/files/Icons/LeftArrow.png";
import RightArrow from "../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const Decision = () => {
  return (
    <>
      <div className="text-white w-screen min-h-screen decision">
        <div className="pt-10 flex flex-col bg-black bg-opacity-60 h-full md:justify-center items-center">
          <div>
            {decision.map((val, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="lg:ml-10">
                  <div className="font-serif w-full text-center font-semibold text-3xl py-2 lg:pb-12 md:text-5xl lg:text-start xl:text-6xl">
                    <h1>{val.header}</h1>
                  </div>

                  <div className="font-medium font-sans text-center text-base pb-4 md:text-2xl lg:text-xl lg:text-start lg:w-[90%] 2xl:text-3xl">
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
                      <div className="text-center xl:text-xl 2xl:text-3xl ">
                        {val.blueNote}
                      </div>
                    </div>

                    <div className="bg-[#7EB073] rounded-md w-[30%]">
                      <div className="flex justify-center">{val.bulb}</div>
                      <div className="text-center xl:text-xl 2xl:text-3xl">
                        {val.greenNote}
                      </div>
                    </div>

                    <div className="bg-[#E1929E] rounded-md w-[30%]">
                      <div className="flex justify-center">{val.bulb}</div>
                      <div className="text-center xl:text-xl 2xl:text-3xl">
                        {val.pinkNote}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block font-medium font-sans text-center text-xl pt-4 md:text-2xl lg:text-xl lg:text-start lg:w-[90%] 2xl:text-3xl">
                  <p>{val.note2}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex mt-10 justify-between gap-10 lg:gap-16">
            <div className="bg-[#8ca28f] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
              <img src={LeftArrow} alt="" />
            </div>
            <Link to="/decision/page2">
              <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
                <img src={RightArrow} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Decision;
