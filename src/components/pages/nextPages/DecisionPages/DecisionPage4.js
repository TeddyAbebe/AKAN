import React from "react";
import { DecisionPageFour } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import iPhone from "../../../data/files/Images/iphone-12-Screen.png";
import Card17 from "../../../data/files/Images/Card17.svg";
import Card18 from "../../../data/files/Images/Card18.svg";
import Card19 from "../../../data/files/Images/Card19.svg";
import Card20 from "../../../data/files/Images/Card20.png";
import { IoChatboxSharp } from "react-icons/io5";

const DecisionPage4 = () => {
  return (
    <div className="dotmap bg-black flex flex-col text-white w-screen min-h-screen">
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
          <div className="relative duration-300 ease-in-out sm:hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textTwentyFour">
              <div className="">
                <IoChatboxSharp className="absolute left-[15%] top-[2%] fill-[#d08370] h-3 w-3 sm:h-6 sm:w-6" />
                <p className="text-black font-bold text-[6px] sm:text-[8px] absolute left-[20%] top-[3.5%]">
                  24
                </p>
              </div>

              <p className="text24 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[11%] right-[35%] left-[5%] p-1">
                This page in the checkout experience looks & feels off-brand,
                and is inconsistent with what the user has seen throughout the
                journey; potentially eroding trust in a crucial phase of the
                journey
              </p>
            </div>

            <div className="cursor-pointer textTwentyFive">
              <div className="">
                <IoChatboxSharp className="absolute left-[70%] top-[15%] fill-[#d08370] h-3 w-3 sm:h-6 sm:w-6" />
                <p className="text-black font-bold text-[6px] sm:text-[8px] absolute top-[16.5%] left-[74.5%]">
                  25
                </p>
              </div>

              <p className="text25 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[24%] mx-3 p-1">
                Opportunity to add Progress Bar to calm users and set
                expectations
              </p>
            </div>

            <div className="cursor-pointer textTwentySix">
              <div className="">
                <IoChatboxSharp className="absolute left-[55%] top-[65%] fill-[#d08370] h-3 w-3 sm:h-6 sm:w-6" />
                <p className="text-black font-bold text-[6px] sm:text-[8px] absolute top-[66.5%] left-[60%]">
                  26
                </p>
              </div>

              <p className="text26 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[72%] sm:top-[40%] mx-2 p-1">
                Opportunity to simplify form by allowing users to search for an
                address using postcode and remove non-essential fields like
                ‘Company’.
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl"
                src={Card17}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out sm:hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textTwentyEight">
              <div className="">
                <IoChatboxSharp className="absolute h-3 w-3 sm:h-6 sm:w-6 left-[55%] top-[50%] fill-[#d08370]" />

                <p className="text-black font-bold text-[6px] sm:text-[8px] absolute top-[51.5%] left-[60%]">
                  27
                </p>
              </div>

              <p className="text28 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[26%] sm:top-[28%] mx-3 p-1">
                Hidden fees can erode trust so all ‘extra’ fees should be
                highlighted earlier in the journey
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl"
                src={Card18}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out sm:hover:scale-[1.2] cursor-pointer">
            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl"
                src={Card19}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out sm:hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textTwentyEight">
              <div className="w-3 h-2 sm:w-5 sm:h-4 left-[55%] top-[32%] sm:text-[8px] absolute"></div>

              <p className="text28 absolute border bg-[#D08370] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[40%] sm:top-[40%] mx-3 p-1">
                Copy could do with some injection of imagination to entice
                users. Opportunity to briefly highlight the benefit of signing
                up to your newsletter
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5"
                src={Card20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/decision/page3">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>
        <Link to="/decision/page5">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={RightArrow} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DecisionPage4;
