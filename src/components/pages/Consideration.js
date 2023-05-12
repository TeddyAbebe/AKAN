import React, { useEffect, useState } from "react";
import { consideration } from "../data/data";
import LeftArrow from "../data/files/Icons/LeftArrow.png";
import RightArrow from "../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const Consideration = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let stopAnimation, startAnimation;

    if (isAnimating) {
      // Stop the animation after 3 seconds
      stopAnimation = setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    } else {
      // Start the animation again after 2 seconds
      startAnimation = setTimeout(() => {
        setIsAnimating(true);
      }, 2000);
    }

    return () => {
      clearTimeout(stopAnimation);
      clearTimeout(startAnimation);
    };
  }, [isAnimating]);
  return (
    <>
      <div className="text-white w-screen min-h-screen consideration">
        <div className="flex flex-col bg-black bg-opacity-60 h-full">
          <div className="flex h-full flex-col inset-0 justify-center items-center">
            {consideration.map((val, i) => (
              <div key={i} className="flex flex-col lg:px-4">
                <div>
                  <h1 className="text-center font-joane font-bold text-3xl py-2 lg:text-5xl lg:text-start 2xl:text-7xl  lg:pb-6">
                    {val.header}
                  </h1>
                </div>

                <div>
                  <p className="text-center text-xl font-fira font-normal py-4 md:pl-3 lg:pb-16 lg:w-[75%] lg:text-start lg:text-2xl">
                    {val.note}
                  </p>
                </div>

                <div className=" flex flex-col pl-4 gap-3 text-2xl lg:text-3xl font-joane font-normal">
                  <div className="flex flex-row">
                    <div
                      className={`mr-3 ${isAnimating ? "animate-spin" : ""}`}
                    >
                      {val.icon1}
                    </div>
                    <div>{val.list1}</div>
                  </div>

                  <div className="flex flex-row">
                    <div
                      className={`mr-3 ${isAnimating ? "animate-spin" : ""}`}
                    >
                      {val.icon2}
                    </div>

                    <div>{val.list2}</div>
                  </div>

                  <div className="flex flex-row">
                    <div
                      className={`mr-3 ${isAnimating ? "animate-spin" : ""}`}
                    >
                      {val.icon3}
                    </div>

                    <div>{val.list3}</div>
                  </div>

                  <div className="flex flex-row">
                    <div
                      className={`mr-3 ${isAnimating ? "animate-spin" : ""}`}
                    >
                      {val.icon4}
                    </div>

                    <div>{val.list4}</div>
                  </div>
                </div>

                <div></div>
              </div>
            ))}
          </div>
          <div className="flex-grow"></div>

          <div className="flex justify-center sm:justify-end gap-10 p-3">
            <Link>
              <div className="bg-[#8ca28f] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
                <img src={LeftArrow} alt="" />
              </div>
            </Link>

            <Link to="/consideration/page2">
              <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
                <img src={RightArrow} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consideration;
