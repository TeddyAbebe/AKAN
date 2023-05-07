import React from 'react'
import { loyalityPageTwo, loyalityPageTwoCards } from '../../../data/data';
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const LoyalityPage2 = () => {
  return (
    <div className="dotmap bg-black text-white w-screen min-h-screen">
      <div className="mt-32 lg:mt-20 flex flex-col justify-center items-center gap-6">
        <div>
          {loyalityPageTwo.map((val, i) => (
            <div className="text-xl sm:text-2xl font-bold text-center md:text-3xl">
              <h1>{val.header}</h1>
            </div>
          ))}
        </div>

        <div className="w-full gap-6 flex justify-between lg:justify-center">
          {loyalityPageTwoCards.map((val, i) => (
            <div className="border bg-white w-[85px] h-[142px] sm:w-[115px] sm:h-[215px]  lg:w-[195px] lg:h-[370px] flex justify-center items-center rounded-xl sm:rounded-3xl">
              <img className="w-full h-1/2" src={val.card} alt="" />
            </div>
          ))}
        </div>
        <div className="flex mt-10 justify-between gap-10 lg:gap-16">
          <Link to="/loyality">
            <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
              <img src={LeftArrow} alt="" />
            </div>
          </Link>
          <Link to="/loyality/page3">
            <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
              <img src={RightArrow} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoyalityPage2