import React from "react";
import { experienceMappingPageTwo } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import mappingPage2 from "../../../data/files/Images/mappingPage2.svg";

const ExperienceMappingPage2 = () => {
  return (
    <div className="bg-black text-white flex flex-col w-screen min-h-screen analysisPageFour">
      <div className="">
        {experienceMappingPageTwo.map((val, i) => (
          <div className="mt-24 lg:mt-10 flex flex-col justify-center items-center">
            <div className="font-joane font-bold text-2xl my-5 lg:mb-10 md:text-5xl">
              <h1>{val.header}</h1>
            </div>
            <div className="text-center font-fira font-normal max-w-[44rem] mb-16  lg:mb-18">
              <p>{val.note}</p>
            </div>
            <div>
              <img src={mappingPage2} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/mapping">
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

export default ExperienceMappingPage2;
