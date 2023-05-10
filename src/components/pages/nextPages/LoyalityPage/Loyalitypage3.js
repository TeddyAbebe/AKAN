import React from "react";
import { loyalityPageThree, loyalityPageThreeCards } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import Card27 from "../../../data/files/Images/Card27.png";
import iPhone from "../../../data/files/Images/iPhoneScreenWhite.png";

const Loyalitypage3 = () => {
  return (
    <div className="flex flex-col dotmap bg-black text-white w-screen min-h-screen">
      <div className="mt-32 lg:mt-20 flex flex-col justify-center items-center gap-6">
        <div>
          {loyalityPageThree.map((val, i) => (
            <div className="text-xl sm:text-2xl font-joane font-bold text-center md:text-3xl">
              <h1>{val.header}</h1>
            </div>
          ))}
        </div>

        <div className="w-full gap-6 flex justify-evenly lg:justify-center">
          <div className="duration-300 ease-in-out hover:scale-[1.15] cursor-pointer">
            <img className="-mb-[150%]  sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="ml-0.5 w-[94%] sm:h-[155px] sm:w-[92%]  sm:ml-1.5"
                src={Card27}
                alt=""
              />
            </div>
          </div>
          {loyalityPageThreeCards.map((val, i) => (
            // <div className="border bg-white flex justify-center items-center rounded-xl sm:rounded-3xl">
            //   <img className="" src={val.card} alt="" />
            // </div>
            <div className="duration-300 ease-in-out hover:scale-[1.15] cursor-pointer">
              <img className="-mb-[182%]  sm:h-[253px]" src={iPhone} alt="" />
              <div>
                <img
                  className="w-[94%] ml-0.5 sm:h-[246px] sm:ml-1"
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
        <Link to="/loyality/page2">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>

        <Link to="/loyality/page4">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={RightArrow} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Loyalitypage3;
