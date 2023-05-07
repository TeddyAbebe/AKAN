import React from "react";
import {
  analysisPageSec,
  analysisPageSecCards,
  analysisPageSecNotes,
} from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const AnalysisPage2 = () => {
  return (
    <div className="flex flex-col items-center text-white w-screen min-h-screen analysisPageSec ">
      <div className=" flex text-center items-center justify-center mt-20  lg:mt-5 lg:w-[50%]">
        {analysisPageSec.map((val, i) => (
          <div className="">
            <h1 className="font-sans font-bold text-4xl sm:text-5xl">
              {val.header}
            </h1>
          </div>
        ))}
      </div>

      <div className="flex justify-evenly lg:justify-center lg:gap-12 items-center">
        {analysisPageSecCards.map((val, i) => (
          <div className="w-1/3 md:w-1/4">
            <div className="my-10 lg:my-2">
              <img className="" src={val.card} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-evenly lg:gap-4 ">
        {analysisPageSecNotes.map((val, i) => (
          <div className="">
            <img className="md:h-34 lg:h-28 xl:h-72" src={val.note} alt="" />
          </div>
        ))}
      </div>

      <div className="flex mt-1 gap-10 lg:gap-16">
        <Link to="/analysis">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
            <img src={LeftArrow} />
          </div>
        </Link>
        <Link to="/analysis/page3">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
            <img src={RightArrow} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AnalysisPage2;
