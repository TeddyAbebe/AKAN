import React from "react";
import { experienceMapping } from "../data/data";
import LeftArrow from "../data/files/Icons/LeftArrow.png";
import RightArrow from "../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const ExperienceMapping = () => {
  return (
    <>
      <div className="text-white w-screen min-h-screen mapping ">
        <div className="flex flex-col h-full justify-center items-center">
          <div>
            {experienceMapping.map((val, i) => (
              <div className="flex flex-col items-center">
                <div>
                  <h1 className="text-center font-serif font-semibold text-3xl lg:text-5xl 2xl:text-7xl py-2 lg:py-10">
                    {val.header}
                  </h1>
                </div>

                <div className="text-center 2xl:text-3xl font-medium font-sans w-full md:w-3/4 lg:w-1/2">
                  <p className="">{val.note}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex mt-10 justify-between gap-10 lg:gap-16">
            <div className="bg-[#8ca28f] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
              <img src={LeftArrow} alt=""/>
            </div>
            <Link to="/mapping/page2">
              <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
                <img src={RightArrow} alt=""/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceMapping;
