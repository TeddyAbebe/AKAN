import React from "react";
import { loyality } from "../data/data";
import LeftArrow from "../data/files/Icons/LeftArrow.png";
import RightArrow from "../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const Loyality = () => {
  return (
    <>
      <div className="bg-black text-white w-screen min-h-screen flex flex-col dotmap">
        <div className="">
          {loyality.map((val, i) => (
            <div key={i} className="lg:pt-14 px-12">
              <div className="lg:mb-6">
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
                <div className="text-xl font-medium text-center mb-4 lg:text-start lg:text-4xl">
                  {val.head}
                </div>

                <div className="flex flex-wrap w-full justify-start md:justify-evenly lg:justify-between lg:ml-24 lg:w-[80%] max-w-[80rem]">
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

        <div className="flex mt-5 justify-center gap-10 lg:gap-16">
          <div className="bg-[#8ca28f] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
            <img src={LeftArrow} alt="" />
          </div>
          <Link to="/loyality/page2">
            <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
              <img src={RightArrow} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Loyality;
