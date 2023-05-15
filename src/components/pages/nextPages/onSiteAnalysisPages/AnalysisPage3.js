import React from "react";
import { analysisPageThird, analysisPageThirdNotes } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import graph from "../../../data/files/Images/graph.svg";

const AnalysisPage3 = () => {
  return (
    <div className="bg-black flex flex-col pt-32 sm:pt-10 text-white w-screen min-h-screen">
      <div className="flex flex-col items-center">
        <div>
          {analysisPageThird.map((val, i) => (
            <div className="flex flex-col justify-center items-center">
              <div className="w-2/3 sm:w-[90%]">
                <h1 className="text-center font-joane font-bold text-3xl sm:text-5xl md:text-5xl">
                  {val.header}
                </h1>
              </div>
              <div className="md:w-full">
                <img
                  className="sm:h-52 xl:h-64 2xl:h-96 duration-500 ease-in-out hover:scale-[1.2] cursor-pointer"
                  src={graph}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-evenly lg:gap-10">
          {analysisPageThirdNotes.map((val, i) => (
            <div className="duration-1000 ease-in-out hover:scale-[1.2] cursor-pointer">
              <img className="sm:h-34 lg:h-40 xl:h-60" src={val.note} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/analysis/page2">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>
        <Link to="/analysis/page4">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={RightArrow} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AnalysisPage3;
