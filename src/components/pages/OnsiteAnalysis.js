import React from "react";
import { onsiteAnalysis } from "../data/data";
import LeftArrow from "../data/files/Icons/LeftArrow.png";
import RightArrow from "../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const OnsiteAnalysis = () => {
  return (
    <>
      <div className="text-white flex flex-col w-screen min-h-screen analysisBg">
        <div className="flex flex-col h-full justify-center items-center ">
          {onsiteAnalysis.map((val, i) => (
            <div className=" flex flex-col items-center">
              <div>
                <h1 className="text-center font-joane font-bold text-3xl lg:text-5xl 2xl:text-7xl py-10">
                  {val.header}
                </h1>
              </div>
              <div className="text-center 2xl:text-3xl font-normal font-fira w-full md:w-3/4 lg:w-1/2 ">
                <p className="">{val.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-grow"></div>

        <div className="flex justify-center sm:justify-end gap-10 p-3">
          <Link>
            <div className="bg-[#8ca28f] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
              <img src={LeftArrow} alt="" />
            </div>
          </Link>
          
          <Link to="/analysis/page2">
            <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
              <img src={RightArrow} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OnsiteAnalysis;
