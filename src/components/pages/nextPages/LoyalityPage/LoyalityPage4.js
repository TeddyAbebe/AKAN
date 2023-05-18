import React from "react";
import { loyalityPageFour } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import iPhone from "../../../data/files/Images/iPhoneScreenWhite.png";
import Card31 from "../../../data/files/Images/Card31.svg";
import { IoChatboxSharp } from "react-icons/io5";


const LoyalityPage4 = () => {
  return (
    <div className="flex flex-col dotmap bg-black text-white w-screen min-h-screen">
      <div className="mt-16 lg:mt-24 flex flex-col justify-center items-center gap-6">
        <div>
          {loyalityPageFour.map((val, i) => (
            <div className="text-xl sm:text-2xl font-joane font-bold text-center md:text-3xl">
              <h1>{val.header}</h1>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <div className="relative duration-300 ease-in-out hover:scale-[1.15] cursor-pointer">
            <div className="cursor-pointer textFourtySix">
              <div>
                <IoChatboxSharp className="absolute left-[10%] top-[35%] fill-[#d08370] h-6 w-6" />

                <p className="text-black font-bold text-[8px] absolute top-[37%] left-[13%]">
                  46
                </p>
              </div>

              <p className="text46 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[5px] sm:text-[7px] top-[42%] sm:top-[30%] sm:left-[26%] mx-3 p-1">
                Not personalised and timing of the content relevant given the
                time of year but also really random - i’d expect something more
                personalised to my order. Yet this is recommended a product i’ve
                already ordered
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[265px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="ml-1.5 sm:h-[250px] sm:w-[90%] rounded-xl sm:rounded-2xl"
                src={Card31}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/loyality/page3">
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

export default LoyalityPage4;
