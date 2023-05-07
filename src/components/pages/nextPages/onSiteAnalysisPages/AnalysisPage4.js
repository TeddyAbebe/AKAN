import React from "react";
import { analysisPageFour, analysisPageFourNotes } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const AnalysisPage4 = () => {
  return (
    <div className="bg-black flex flex-col pt-24 sm:pt-10 items-center text-white w-screen min-h-screen analysisPageFour">
      <div>
        {analysisPageFour.map((val, i) => (
          <div className="flex flex-col justify-center items-center">
            <div className="">
              <h1 className="text-center font-sans font-bold text-3xl sm:text-5xl lg:text-6xl">
                {val.header}
              </h1>
            </div>
            <div className="">
              <img className="h-52 md:h-64 my-10" src={val.pyramid} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 mx-4">
        {analysisPageFourNotes.map((val, i) => (
          <div className="">
            <img className="md:h-20" src={val.note} alt="" />
          </div>
        ))}
      </div>

      <div className="flex mt-8 gap-10 lg:gap-16">
        <Link to="/analysis/page3">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
            <img src={LeftArrow} />
          </div>
        </Link>
        <Link to="/analysis/page5">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
            <img src={RightArrow} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AnalysisPage4;
