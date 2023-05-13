import React, { useEffect, useState } from "react";
import { analysisPageFour, analysisPageFourNotes } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const AnalysisPage4 = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let stopAnimation, startAnimation;

    if (isAnimating) {
      // Stop the animation after 2 seconds
      stopAnimation = setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
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
        <div>
          {analysisPageFour.map((val, i) => (
            <div className="flex flex-col justify-center items-center">
              <div className="">
                <h1 className="text-center font-joane font-bold text-3xl sm:text-5xl lg:text-6xl">
                  {val.header}
                </h1>
              </div>
              
              <div className="flex">
                <div className="flex flex-col justify-center items-center gap-2.5 py-8">
                  <img
                    src={val.funnel1}
                    alt=""
                    className="h-[97.05px] w-[283px] duration-500 ease-in-out hover:scale-[1.1] cursor-pointer"
                  />
                  <img
                    src={val.funnel2}
                    alt=""
                    className="h-[70.59px] w-[208.33px] duration-500 ease-in-out hover:scale-[1.15] cursor-pointer"
                  />
                  <img
                    src={val.funnel3}
                    alt=""
                    className="mb-3 h-[58.41px] w-[145.67px] duration-500 ease-in-out hover:scale-[1.2] cursor-pointer"
                  />
                  <img
                    src={val.funnel4}
                    alt=""
                    className="h-[42.68px] w-[73px] duration-500 ease-in-out hover:scale-[1.3] cursor-pointer"
                  />
                </div>

                <div className="relative flex flex-col gap-16 pt-14">
                  <div className="flex">
                    <img
                      src={val.arrow}
                      alt=""
                      className="h-[60px] w-[80px] absolute left-[-30%]"
                    />
                    <p className="ml-12 mt-8 font-fira font-bold text-xl">
                      49% proceed
                    </p>
                  </div>

                  <div className="flex">
                    <img
                      src={val.arrow}
                      alt=""
                      className="h-[60px] w-[80px] absolute left-[-50%] mt-[-20%] "
                    />
                    <p className="font-fira font-bold text-xl">19% proceed</p>
                  </div>

                  <div className="flex">
                    <img
                      src={val.arrow}
                      alt=""
                      className="h-[60px] w-[80px] absolute ml-[-70%] mt-[-25%]"
                    />
                    <p className="font-fira font-bold ml-[-20%] text-xl">
                      15% proceed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 mx-4 items-center">
          {analysisPageFourNotes.map((val, i) => (
            <div className="">
              <img
                className="md:h-[75px] duration-500 ease-in-out hover:scale-[1.2] cursor-pointer "
                src={val.note}
                alt=""
              />
            </div>
          ))}
        </div>
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

export default AnalysisPage4;
