import React from "react";
import { home } from "../data/data";
import woman from "../data/files/Images/woman.png";
import lines from "../data/files/Images/lines.png";
import send from "../data/files/Icons/send.png";

const Home = () => {
  return (
    <>
      <div className="bg-black text-white w-full min-h-screen">
        <div className="flex flex-row p-8">
          {home.map((val, i) => (
            <div className="px-1 flex flex-row h-auto" key={i}>
              <div className="w-full lg:w-3/5 ">
                <h1 className="text-3xl lg:text-6xl mb-6 md:mb-14 font-joane font-bold">
                  {val.header}
                </h1>

                <p className="font-normal md:font-medium text-sm lg:text-lg mb-5 font-fira">
                  {val.note}
                </p>

                <div>
                  <button className="flex justify-center items-center gap-2 bg-[#497E4F] h-12 w-48 text-white font-bold rounded-md 2xl:w-[15rem] 2xl:text-2xl duration-300 ease-in-out hover:scale-[1.12] cursor-pointer ">
                    Start
                    <div className="">
                      <img src={send} alt="" />
                    </div>
                  </button>
                </div>
              </div>

              <div className="w-64 hidden lg:flex ml-10">
                <img src={woman} alt="Smile Woman" />
              </div>
            </div>
          ))}
        </div>

        <div>
          <img className="lg:h-44 2xl:h-fit w-full" src={lines} alt="lines" />
        </div>
      </div>
    </>
  );
};

export default Home;
