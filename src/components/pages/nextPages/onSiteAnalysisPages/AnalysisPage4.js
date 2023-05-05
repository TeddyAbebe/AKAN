import React from "react";
import { analysisPageFour, analysisPageFourNotes } from "../../../data/data";

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
              <img className="h-52 md:h-72 my-10" src={val.pyramid} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 mx-4">
        {analysisPageFourNotes.map((val, i) => (
          <div className="">
            <img className="" src={val.note} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalysisPage4;
