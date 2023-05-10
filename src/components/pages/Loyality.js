import React from "react";
import { loyality } from "../data/data";
import LeftArrow from "../data/files/Icons/LeftArrow.png";
import RightArrow from "../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const Loyality = () => {
  return (
    <>
      <div className="flex flex-col bg-black text-white w-screen min-h-screen dotmap">
        <div className="">
          {loyality.map((val, i) => (
            <div key={i} className="lg:pt-14 px-12">
              <div className="lg:mb-6">
                <div className="w-full text-center font-joane font-bold text-2xl py-2 lg:text-start lg:text-5xl lg:pb-10 2xl:pb-16">
                  <h1>{val.header}</h1>
                </div>
                <div className="flex flex-col font-fira font-normal text-cente text-xs md:text-lg gap-y-3 lg:gap-y-4 lg:text-start 2xl:w-[90%] 2xl:text-2xl max-w-[100rem]">
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
                <div className="text-xl font-joane font-bold text-center mb-4 lg:text-start lg:text-3xl">
                  {val.head}
                </div>

                <div className="flex w-full justify-start md:justify-evenly lg:justify-between lg:ml-24 lg:w-[80%] max-w-[80rem] font-fira font-normal">
                  <div className="bg-[#97A5EB] rounded-md w-[50%] p-2 md:w-1/3 duration-300 ease-in-out hover:scale-[1.12] cursor-pointer">
                    <div className="flex justify-center">
                      <img className="h-5 xl:h-9" src={val.icon} alt="" />
                    </div>
                    <div className="text-center text-sm xl:text-lg 2xl:text-2xl ">
                      {val.blueNote}
                    </div>
                  </div>

                  <div className="bg-[#7EB073] rounded-md w-[50%] p-2 md:w-1/3 mx-6 duration-300 ease-in-out hover:scale-[1.12] cursor-pointer">
                    <div className="flex justify-center">
                      <img className="h-5 xl:h-9" src={val.icon} alt="" />
                    </div>
                    <div className="text-center text-sm xl:text-lg 2xl:text-2xl">
                      {val.greenNote}
                    </div>
                  </div>

                  <div className="bg-[#E1929E] rounded-md w-[50%] p-2 md:w-1/3 duration-300 ease-in-out hover:scale-[1.12] cursor-pointer">
                    <div className="flex justify-center">
                      <img className="h-5 xl:h-9" src={val.icon} alt="" />
                    </div>
                    <div className="text-center text-sm xl:text-lg 2xl:text-2xl">
                      {val.pinkNote}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-grow"></div>

        <div className="flex justify-center sm:justify-end gap-10 p-3">
          <Link>
            <div className="bg-[#8ca28f] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
              <img src={LeftArrow} alt="" />
            </div>
          </Link>

          <Link to="/loyality/page2">
            <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
              <img src={RightArrow} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Loyality;
