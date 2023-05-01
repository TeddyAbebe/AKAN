import React from "react";
import { executiveSummary } from "../data/data";
import lines from "../data/files/Images/lines.png";
import man from "../data/files/Images/man.png";
import SmileMan from "../data/files/Images/SmileMan.png";

const ExecutiveSummary = () => {
  return (
    <>
      <div className="bg-black text-white w-screen h-screen ">
        <div>
          {executiveSummary.map((val, i) => (
            <div className=" mx-14 mt-14  ">
              <div>
                <h1 className="text-5xl font-serif font-semibold ml-56 my-10">
                  {val.header}
                </h1>
              </div>

              <div className=" w-[40rem] p-8 ml-40 my-10 ">
                <p className="text-sm text-center"> {val.note}</p>
              </div>
              <div className="bglines flex space-x-12 w-[34rem] ml-52 absolute ">
                <img className="w-[16rem] " src={man} alt="" />
                <img className="w-[16rem]" src={SmileMan} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div>
          <img src={lines} alt="lines" />
        </div>
      </div>
    </>
  );
};

export default ExecutiveSummary;
