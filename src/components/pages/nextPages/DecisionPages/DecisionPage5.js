import React from "react";
import { DecisionPageFive } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import iPhone from "../../../data/files/Images/iphone-12-Screen.png";
import Card21 from "../../../data/files/Images/Card21.png";
import Card22 from "../../../data/files/Images/Card22.png";

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
          <div className="relative duration-300 ease-in-out sm:hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textTwentyNine">
              <div className="w-7 h-5 sm:w-5 sm:h-4 left-[68%] sm:left-[71%] top-[15.5%] sm:text-[8px] absolute"></div>

              <p className="text29 absolute border bg-[#D08370] text-black font-fira font-normal rounded-lg text-[5px] sm:text-[7px] top-[22%] sm:top-[23%] mx-3 p-1">
                Confirmation email looks & feels off-brand and is inconsistent
                with what the user has seen throughout the journey; potentially
                eroding trust. The copy could also do with more personality
              </p>
            </div>

            <div className="cursor-pointer textThirty">
              <div className="w-7 h-5 sm:w-5 sm:h-4 left-[56%] sm:left-[59%] top-[68%] sm:text-[8px] absolute"></div>

              <p className="text30 absolute border bg-[#BCD6AC] text-black font-fira font-normal rounded-lg text-[5px] sm:text-[7px] top-[62%] sm:top-[55%] mx-3 p-1">
                Good use of Order Summary to reassure users
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5"
                src={Card21}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out sm:hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textThirtyOne">
              <div className="w-7 h-5 sm:w-5 sm:h-4 left-[72.5%] sm:left-[75%] top-[71%] sm:text-[8px] absolute"></div>

              <p className="text31 absolute border bg-[#D08370] text-black font-fira font-normal rounded-lg text-[5px] sm:text-[7px] top-[65%] sm:top-[57%] mx-3 p-1">
                Missed opportunity to keep users engaged with content 
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5"
                src={Card22}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/decision/page4">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>

        <Link>
          <div className="bg-[#8ca28f] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={RightArrow} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DecisionPage5;
