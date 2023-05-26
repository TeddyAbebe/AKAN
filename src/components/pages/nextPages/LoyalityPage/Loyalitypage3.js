import React from "react";
import { loyalityPageThree } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import iPhone from "../../../data/files/Images/iPhoneScreenWhite.png";
import Card27 from "../../../data/files/Images/Card27.svg";
import { IoChatboxSharp } from "react-icons/io5";
import angle from "../../../data/files/Images/angle2.png";


const Loyalitypage3 = () => {
  return (
    <div className="flex flex-col dotmap bg-black text-white w-screen min-h-screen">
      <div>
        <h2 className="absolute top-[3%] right-[1%] z-[1] font-fira font-bold text-[17px]">
          JES:50%
        </h2>
      </div>
      <img src={angle} alt="" className="absolute top-0 right-0" />
      <div className="mt-32 lg:mt-20 flex flex-col justify-center items-center gap-6">
        <div>
          {loyalityPageThree.map((val, i) => (
            <div className="text-xl sm:text-2xl font-joane font-bold text-center md:text-3xl">
              <h1>{val.header}</h1>
            </div>
          ))}
        </div>

        <div className="w-full gap-6 flex justify-center">
          <div className="relative duration-300 ease-in-out hover:scale-[1.15] cursor-pointer">
            <div className="textFourtyOne cursor-pointer">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-2 h-2 stroke-amber-300 fill-amber-300 absolute top-[26%] left-[53%]  sm:top-[28%] sm:left-[56%]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <IoChatboxSharp className="absolute top-[30%] left-[50%] fill-[#bcd6ac] h-3 w-3 sm:h-6 sm:w-6" />
                <p className="text-[6px] sm:text-[8px] text-black font-bold absolute top-[31.5%] left-[55%]">
                  41
                </p>
              </div>
              <p className="text41 absolute border bg-[#bcd6ac] text-black font-fira font-normal rounded-lg text-[5px] sm:text-[10px] mx-2 p-0.5 top-[40%]">
                TPs Brewing is fantastic; it’s distinctive and more noise should
                be made of this USP.
              </p>
            </div>
            <img className="-mb-[150%]  sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="ml-0.5 w-[94%] sm:h-[155px] sm:w-[92%]  sm:ml-1.5"
                src={Card27}
                alt=""
              />
            </div>
          </div>

          
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
