import React from "react";
import {
  analysisPageSec,
  analysisPageSecCards,
  analysisPageSecNotes,
} from "../../../data/data";

const AnalysisPage2 = () => {
  return (
    <div className="flex flex-col  justify-center items-center text-white w-screen min-h-screen analysisPageSec ">
      <div className=" flex text-center items-center justify-center mt-20  lg:mt-4 lg:w-[50%]">
        {analysisPageSec.map((val, i) => (
          <div className="">
            <h1 className="font-sans font-bold text-4xl sm:text-6xl">
              {val.header}
            </h1>
          </div>
        ))}
      </div>

      <div className="flex justify-evenly lg:justify-center lg:gap-12 items-center">
        {analysisPageSecCards.map((val, i) => (
          <div className="w-1/3 md:w-1/4">
            <div className="my-10 lg:my-5">
              <img className="" src={val.card} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-evenly lg:gap-4 ">
        {analysisPageSecNotes.map((val, i) => (
          <div className="">
            <img className="md:h-34 lg:h-52 xl:h-72" src={val.note} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalysisPage2;
