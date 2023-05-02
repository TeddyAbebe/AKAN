import React from "react";
import { executiveSummary } from "../data/data";
import lines from "../data/files/Images/lines.png";
import man from "../data/files/Images/man.png";
import SmileMan from "../data/files/Images/SmileMan.png";

const ExecutiveSummary = () => {
  return (
    <>
      <div className="bg-black text-white w-screen h-screen">
        <div className="lg:px-[10rem] 2xl:px-[35rem] py-[4rem]">
          {executiveSummary.map((val, i) => (
            <div className="">
              <div>
                <h1 className="lg:w-[35rem] lg:text-5xl lg:ml-[5rem]  2xl:w-[50rem] 2xl:ml-[20rem]  2xl:text-7xl font-serif font-semibold">
                  {val.header}
                </h1>
              </div>

              <div className=" lg:w-[40rem] 2xl:w-[60rem] 2xl:ml-[14rem] py-8 ">
                <p className="lg:text-sm 2xl:text-2xl text-center">{val.note}</p>
              </div>

              <div className="lg:w-[32rem] 2xl:ml-[7rem] 2xl:w-[75rem] flex space-x-12 absolute">
                <img className="lg:w-[16rem] 2xl:w-[36rem] " src={man} alt="" />
                <img
                  className="lg:w-[16rem] 2xl:w-[36rem]"
                  src={SmileMan}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <img className="w-full" src={lines} alt="lines" />
        </div>
      </div>
    </>
  );
};

export default ExecutiveSummary;
