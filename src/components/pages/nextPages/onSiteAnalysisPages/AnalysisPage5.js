import React from "react";
import { analysisPageFive } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const AnalysisPage5 = () => {
  return (
    <div className="bg-black flex flex-col pt-24 sm:pt-10 text-white w-screen min-h-screen analysisPageFour">
      <div>
        {analysisPageFive.map((val, i) => (
          <div className="flex flex-col justify-center items-center">
            <div className="sm:mb-8">
              <h1 className="text-center font-joane font-bold text-3xl sm:text-4xl lg:text-5xl">
                {val.header}
              </h1>
            </div>
            <div className="">
              <img
                className="h-36 md:h-48 my-7 xl:h- 2xl:h-64"
                src={val.graph}
                alt=""
              />
            </div>
            <div className="2xl:w-[40rem]">
              <img className="h-48 sm:h-56 w-full" src={val.note} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/analysis/page4">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>
        <Link to="/analysis/page6">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
            <img src={RightArrow} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AnalysisPage5;
