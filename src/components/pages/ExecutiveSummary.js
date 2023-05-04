import React from "react";
import { executiveSummary } from "../data/data";
import lines from "../data/files/Images/lines.png";
import man from "../data/files/Images/man.png";
import SmileMan from "../data/files/Images/SmileMan.png";

const ExecutiveSummary = () => {
  return (
    <>
      <div className="bg-black text-white min-w-screen min-h-screen lg:w-screen">
        <div className="">
          {executiveSummary.map((val, i) => (
            <div className="flex flex-col justify-center items-center">
              <div>
                <h1 className="text-2xl pt-6 lg:text-5xl 2xl:text-7xl font-serif font-semibold">
                  {val.header}
                </h1>
              </div>

              <div className="w-full py-4 lg:w-[72%] 2xl:w-full xl:py-8 ">
                <p className="text-lg xl:text-xl 2xl:text-2xl text-center">{val.note}</p>
              </div>

              <div className="flex px-2 xl:w-full lg:justify-center lg:gap-8 ">
                <img className="w-1/2 lg:w-1/4" src={man} alt="" />
                <img className="w-1/2 lg:w-1/4" src={SmileMan} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div>
          <img className="w-full border" src={lines} alt="lines" />
        </div>
      </div>
    </>
  );
};

export default ExecutiveSummary;
