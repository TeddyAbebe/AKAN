import React from "react";
import { analysisPageThird, analysisPageThirdNotes } from "../../../data/data";

const AnalysisPage3 = () => {
  return (
    <div className="bg-black flex flex-col pt-32 sm:pt-10 items-center text-white w-screen min-h-screen">
      <div className="">
        <div>
          {analysisPageThird.map((val, i) => (
            <div className="flex flex-col justify-center items-center">
              <div className="w-2/3 sm:w-[90%]">
                <h1 className="text-center font-sans font-bold text-3xl sm:text-5xl md:text-5xl">
                  {val.header}
                </h1>
              </div>
              <div className="md:w-full">
                <img className="sm:h-56 xl:h-72" src={val.graph} alt="" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-evenly lg:gap-4 ">
          {analysisPageThirdNotes.map((val, i) => (
            <div className="">
              <img className="sm:h-34 lg:h-52 xl:h-72" src={val.note} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage3;
