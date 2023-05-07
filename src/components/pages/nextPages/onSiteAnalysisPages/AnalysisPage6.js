import React from "react";
import { analysisPageSix, analysisPageSixDiagram } from "../../../data/data";

const AnalysisPage6 = () => {
  return (
    <div className="bg-black flex flex-col pt-24 sm:pt-10 items-center text-white w-screen min-h-screen analysisPageFour">
      <div>
        <div>
          {analysisPageSix.map((val, i) => (
            <div className="flex flex-col justify-center items-center">
              <div className="sm:mb-10">
                <h1 className="text-center font-sans font-bold text-3xl sm:text-5xl lg:text-6xl">
                  {val.header}
                </h1>
              </div>
              <div className="">
                <p>{val.note}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          {analysisPageSixDiagram.map((val, i) => (
            <div className="border">
              <img src={val.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage6;
