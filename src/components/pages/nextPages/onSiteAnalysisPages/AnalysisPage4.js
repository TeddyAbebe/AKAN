import React from "react";
import { analysisPageFour, analysisPageFourNotes } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const AnalysisPage4 = () => {
  return (
    <div className="bg-black flex flex-col pt-24 sm:pt-10 text-white w-screen min-h-screen analysisPageFour">
      <div>
        <div>
          {analysisPageFour.map((val, i) => (
            <div className="flex flex-col justify-center items-center">
              <div className="">
                <h1 className="text-center font-joane font-bold text-3xl sm:text-5xl lg:text-6xl">
                  {val.header}
                </h1>
              </div>
              <div className="">
                <img
                  className="h-52 md:h-64 my-10 xl:h-64 2xl:h-96 "
                  src={val.pyramid}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 mx-4 items-center">
          {analysisPageFourNotes.map((val, i) => (
            <div className="">
              <img className="md:h-20" src={val.note} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/analysis/page3">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>
        <Link to="/analysis/page5">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={RightArrow} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AnalysisPage4;
