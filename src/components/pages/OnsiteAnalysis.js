import React from "react";
import { onsiteAnalysis } from "../data/data";
// import analysis from "../data/files/Images/analysisBG.png";



const OnsiteAnalysis = () => {
  return (
    <>
      <div className="text-white w-screen min-h-screen analysisBg">
        {/* <div className="flex-1 h-screen absolute top-0 left-0 overflow-hidden">
          <img
            src={analysis}
            className="flex-1 object-cover min-h-screen"
            alt=""
          />
        </div> */}

        <div className="flex flex-row inset-2 justify-center items-center ">
          {onsiteAnalysis.map((val, i) => (
            <div className=" flex flex-col items-center">
              <div>
                <h1 className="text-center font-serif font-semibold text-3xl lg:text-5xl 2xl:text-7xl py-10">
                  {val.header}
                </h1>
              </div>
              <div className="text-center 2xl:text-3xl font-medium font-sans w-full md:w-3/4 lg:w-1/2 ">
                <p className="">{val.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OnsiteAnalysis;
