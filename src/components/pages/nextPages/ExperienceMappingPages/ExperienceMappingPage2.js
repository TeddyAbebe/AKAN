import React from "react";
import { experienceMappingPageTwo } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const ExperienceMappingPage2 = () => {
  return (
    <div className="bg-black text-white w-screen min-h-screen analysisPageFour">
      <div>
        {experienceMappingPageTwo.map((val, i) => (
          <div className="mt-24 lg:mt-10 flex flex-col justify-center items-center">
            <div className="font-bold text-2xl my-5 lg:mb-10 md:text-5xl">
              <h1>{val.header}</h1>
            </div>
            <div className="text-center md:font-medium md:text-star max-w-[44rem] mb-16  lg:mb-18">
              <p>{val.note}</p>
            </div>
            <div>
              <img src={val.image} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-10 justify-center gap-10 lg:gap-16">
        <Link to="/mapping">
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

export default ExperienceMappingPage2;
