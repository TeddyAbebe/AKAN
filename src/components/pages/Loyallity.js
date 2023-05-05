import React from "react";
import { loyality } from "../data/data";
// import dotmap from "../data/files/Images/dotmap.png";

const Loyallity = () => {
  return (
    <>
      <div className="bg-black text-white w-screen min-h-screen dotmap">
        {/* <div className="flex-1 h-screen absolute top-0 left-0 overflow-hidden">
          <img
            src={dotmap}
            className="flex-1 object-cover min-h-screen"
            alt=""
          />
        </div> */}
        <div>
          {loyality.map((val, i) => (
            <div key={i} className="lg:pt-20 px-12">
              <div className="lg:mb-8">
                <div className="font-serif w-full text-center font-semibold text-2xl py-2 lg:text-start lg:text-5xl lg:pb-10 2xl:pb-16">
                  <h1>{val.header}</h1>
                </div>
                <div className="flex flex-col font-normal font-sans text-cente text-xs md:text-lg gap-y-3 lg:gap-y-4 lg:text-start 2xl:w-[90%] 2xl:text-2xl max-w-[100rem]">
                  <div>
                    <p>{val.note1}</p>
                  </div>
                  <div>
                    <p>{val.note2}</p>
                  </div>
                  <div>
                    <p>{val.note3}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col ">
                <div className="text-xl font-medium text-center mb-2 lg:text-start lg:text-4xl">
                  {val.head}
                </div>

                <div className="flex flex-wrap flex-co w-full justify-start md:justify-evenly lg:justify-between lg:ml-24 lg:w-[80%] max-w-[80rem]">
                  <div className="bg-[#97A5EB] rounded-md w-[50%] md:w-[30%]">
                    <div className="flex justify-center">
                      <img src={val.icon} alt="" />
                    </div>
                    <div className="text-center text-sm xl:text-xl 2xl:text-3xl ">
                      {val.blueNote}
                    </div>
                  </div>

                  <div className="bg-[#7EB073] rounded-md w-[50%] md:w-[30%]">
                    <div className="flex justify-center">
                      <img src={val.icon} alt="" />
                    </div>
                    <div className="text-center text-sm xl:text-xl 2xl:text-3xl">
                      {val.greenNote}
                    </div>
                  </div>

                  <div className="bg-[#E1929E] rounded-md w-[50%] md:w-[30%]">
                    <div className="flex justify-center">
                      <img src={val.icon} alt="" />
                    </div>
                    <div className="text-center text-sm xl:text-xl 2xl:text-3xl">
                      {val.pinkNote}
                    </div>
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
