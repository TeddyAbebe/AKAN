import React, { useEffect, useState } from "react";
import { analysisPageFour } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const AnalysisPage5 = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let stopAnimation, startAnimation;

    if (isAnimating) {
      // Stop the animation after 2 seconds
      stopAnimation = setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    } else {
      // Start the animation again after 2 seconds
      startAnimation = setTimeout(() => {
        setIsAnimating(true);
      }, 3000);
    }

    return () => {
      clearTimeout(stopAnimation);
      clearTimeout(startAnimation);
    };
  }, [isAnimating]);

  return (
    <div className="bg-black flex flex-col pt-24 sm:pt-10 text-white w-screen min-h-screen analysisPageFour">
      <div>
        {analysisPageFour.map((val, i) => (
          <div className="flex flex-col justify-center items-center">
            <div className="sm:mb-4">
              <h1 className="text-center font-joane font-bold text-3xl sm:text-4xl lg:text-5xl">
                {val.header}
              </h1>
            </div>
            <div className="flex gap-16 mb-4">
              <img
                className={`h-36 md:h-48 my-7 xl:h- 2xl:h-64 duration-300 ease-in-out hover:scale-[1.2] cursor-pointer ${
                  isAnimating ? "animate-none" : ""
                }`}
                src={val.chart}
                alt=""
              />
              <img
                className="h-36 md:h-48 my-7 xl:h- 2xl:h-64"
                src={val.desc}
                alt=""
              />
            </div>
            <div className="2xl:w-[40rem] flex flex-col justify-center items-center gap-3">
              <div className="bg-[#497e47] w-[70%] flex rounded-lg duration-700 ease-in-out hover:scale-[1.2] cursor-pointer">
                <div className="flex items-center h-30 md:h-20 p-4 gap-5 font-fira font-semibold">
                  <i>{val.icon1}</i>
                  <p>{val.note1}</p>
                </div>
              </div>
              <div className="bg-[#497e47] w-[70%] flex rounded-lg duration-700 ease-in-out hover:scale-[1.2] cursor-pointer">
                <div className="flex items-center h-30 md:h-20 p-4 gap-5 font-fira font-semibold">
                  <i>{val.icon2}</i>
                  <p>{val.note2}</p>
                </div>
              </div>
              <div className="bg-[#497e47] w-[70%] rounded-lg duration-700 ease-in-out hover:scale-[1.2] cursor-pointer">
                <div className="flex items-center h-30 md:h-20 p-4 gap-5 font-fira font-semibold">
                  <i>{val.icon3}</i>
                  <p>{val.note3}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/analysis/page3">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>
        <Link to="/analysis/page5">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={RightArrow} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AnalysisPage5;
