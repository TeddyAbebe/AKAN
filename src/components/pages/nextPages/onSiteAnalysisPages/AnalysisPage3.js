import React from "react";
import { analysisPageThird, analysisPageThirdNotes } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const AnalysisPage3 = () => {
  return (
    <div className="bg-black flex flex-col pt-32 sm:pt-10 items-center text-white w-screen min-h-screen">
      <div className="">
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
                  className="sm:h-52 xl:h-64 2xl:h-96"
                  src={val.graph}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-evenly lg:gap-4 ">
          {analysisPageThirdNotes.map((val, i) => (
            <div className="">
              <img className="sm:h-34 lg:h-40 xl:h-72" src={val.note} alt="" />
            </div>
          ))}
        </div>

        <div className="flex mt-1.5 justify-center gap-10 lg:gap-16">
          <Link to="/analysis/page2">
            <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
              <img src={LeftArrow} alt="" />
            </div>
          </Link>
          <Link to="/analysis/page4">
            <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
              <img src={RightArrow} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage3;
