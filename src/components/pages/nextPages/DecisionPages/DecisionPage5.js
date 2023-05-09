import React from "react";
import { DecisionPageFive, DecisionPageFiveCards } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import iPhone from "../../../data/files/Images/iphone-12-Screen.png";

const DecisionPage5 = () => {
  return (
    <div className="dotmap flex flex-col bg-black text-white w-screen min-h-screen">
      <div className="mt-32 lg:mt-36 flex flex-col justify-center items-center gap-6">
        <div>
          {DecisionPageFive.map((val, i) => (
            <div className="text-lg sm:text-2xl font-joane font-bold text-center md:text-3xl">
              <h1>{val.header}</h1>
            </div>
          ))}
        </div>

        <div className="w-full gap-6 flex justify-evenly lg:justify-center lg:gap-14">
          {DecisionPageFiveCards.map((val, i) => (
            <div className="duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
              <img className="-mb-[180%]  sm:h-[253px]" src={iPhone} alt="" />
              <div>
                <img
                  className="w-[92%] ml-2 sm:h-[246px] sm:ml-1.5"
                  src={val.card}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/decision/page4">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>

        <div className="bg-[#8ca28f] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
          <img src={RightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DecisionPage5;
