import React from "react";
import { decision } from "../data/data";
import LeftArrow from "../data/files/Icons/LeftArrow.png";
import RightArrow from "../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const Decision = () => {
  return (
    <>
      <div className="text-white w-screen min-h-screen decision">
        <div className="pt-10 flex flex-col bg-black bg-opacity-60 h-full">
          <div className="flex md:justify-center items-center">
            {decision.map((val, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="lg:ml-10">
                  <div className="w-full text-center font-joane font-bold  text-3xl py-2 lg:pb-12 md:text-5xl lg:text-start xl:text-6xl">
                    <h1>{val.header}</h1>
                  </div>

                  <div className="text-center text-base font-fira font-normal pb-4 md:text-2xl lg:text-xl lg:text-start lg:w-[90%] 2xl:text-3xl">
                    <p>{val.note1}</p>
                  </div>
                </div>

                <div className="lg:w-[75%]">
                  <div className="flex justify-center gap-2 my-2 lg:justify-normal">
                    <div className="">{val.icon}</div>
                    <div className="text-xl font-nevrada md:text-2xl md:mb-4 2xl:text-3xl">
                      {val.iconNote}
                    </div>
                  </div>

                  <div className="flex w-full justify-evenly lg:justify-between">
                    <div className="bg-[#97A5EB] rounded-md p-3 w-1/3 duration-300 ease-in-out hover:scale-[1.12] cursor-pointer">
                      <div className="flex justify-center">{val.bulb}</div>
                      <div className="text-center text-sm xl:text-lg 2xl:text-2xl font-fira font-normal">
                        {val.blueNote}
                      </div>
                    </div>

                    <div className="bg-[#7EB073] rounded-md p-3 w-1/3 duration-300 ease-in-out hover:scale-[1.12] cursor-pointer mx-6">
                      <div className="flex justify-center">{val.bulb}</div>
                      <div className="text-center text-sm xl:text-lg 2xl:text-2xl font-fira font-normal">
                        {val.greenNote}
                      </div>
                    </div>

                    <div className="bg-[#E1929E] rounded-md p-3 w-1/3 duration-300 ease-in-out hover:scale-[1.12] cursor-pointer">
                      <div className="flex justify-center">{val.bulb}</div>
                      <div className="text-center text-sm xl:text-lg 2xl:text-2xl font-fira font-normal">
                        {val.pinkNote}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block text-center font-fira font-normal text-xl pt-4 md:text-2xl lg:text-xl lg:text-start lg:w-[90%] 2xl:text-3xl">
                  <p>{val.note2}</p>
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
            
            <Link to="/decision/page2">
              <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
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
