import React from "react";
import { onsiteAnalysis } from "../data/data";

const OnsiteAnalysis = () => {
  return (
    <>
      <div className="analysis lg:py-40 2xl:p-52 items-center text-white w-screen h-screen">
        <div>
          {onsiteAnalysis.map((val, i) => (
            <div className="">
              <div className="">
                <h1 className="text-center font-serif font-semibold lg:text-5xl 2xl:text-7xl py-10">
                  {val.header}
                </h1>
              </div>
              <div className="text-center lg:ml-[17rem] lg:w-[33rem] 2xl:w-[60rem] 2xl:text-3xl font-medium font-sans 2xl:ml-[30rem]">
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
