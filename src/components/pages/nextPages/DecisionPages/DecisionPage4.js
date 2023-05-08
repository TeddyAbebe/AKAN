import React from "react";
import {
  DecisionPageFoueCards,
  DecisionPageFour,
} from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const DecisionPage4 = () => {
  return (
    <div className="dotmap bg-black text-white w-screen min-h-screen">
      <div className="mt-32 lg:mt-36 flex flex-col justify-center items-center gap-6">
        <div className="flex w-full justify-between lg:justify-center md:gap-24">
          <div className="">
            <div className="text-lg sm:text-2xl font-joane font-bold text-center md:text-3xl">
              <h1>{DecisionPageFour.FirstHeader.header}</h1>
            </div>
          </div>

          <div className="">
            <div className="text-lg sm:text-2xl font-joane font-bold text-center md:text-3xl">
              <h1>{DecisionPageFour.SecondHeader.header}</h1>
            </div>
          </div>
        </div>

        <div className="w-full gap-6 flex justify-evenly lg:justify-center lg:gap-14">
          {DecisionPageFoueCards.map((val, i) => (
            <div className="">
              <img className="lg:h-64" src={val.card} alt="" />
            </div>
          ))}
        </div>

        <div className="flex mt-10 justify-between gap-10 lg:gap-16">
          <Link to="/decision/page3">
            <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
              <img src={LeftArrow} alt="" />
            </div>
          </Link>
          <Link to="/decision/page5">
            <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
              <img src={RightArrow} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DecisionPage4;
