import React from "react";
import { DecisionPageThree } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import iPhone from "../../../data/files/Images/iphone-12-Screen.png";
import Card13 from "../../../data/files/Images/Card13.svg";
import Card14 from "../../../data/files/Images/Card14.svg";
import Card15 from "../../../data/files/Images/Card15.svg";
import Card16 from "../../../data/files/Images/Card16.svg";
import { IoChatboxSharp } from "react-icons/io5";

const DecisionPage3 = () => {
  return (
    <div className="dotmap flex flex-col bg-black text-white w-screen min-h-screen">
      <div className="mt-32 lg:mt-36 flex flex-col justify-center items-center gap-6">
        <div className="flex w-full justify-between lg:justify-center md:gap-24">
          <div className="">
            <div className="text-lg sm:text-2xl font-joane font-bold text-center md:text-3xl">
              <h1>{DecisionPageThree.FirstHeader.header}</h1>
            </div>
          </div>

          <div className="">
            <div className="text-lg sm:text-2xl font-joane font-bold text-center md:text-3xl">
              <h1>{DecisionPageThree.SecondHeader.header}</h1>
            </div>
          </div>
        </div>

        <div className="w-full gap-6 flex justify-evenly lg:justify-center lg:gap-14">
          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textTwenty">
              <div className="">
                <IoChatboxSharp className="absolute left-[60%] top-[50%] fill-[#d08370] h-3 w-3 sm:h-6 sm:w-6" />
                <p className="text-black font-bold text-[6px] sm:text-[8px] absolute top-[51.5%] left-[65%]">
                  20
                </p>
              </div>

              <p className="text20 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[1%] sm:top-[59%] mx-3 p-1">
                Currently the page feels very dense and clunky - which can be
                overwhelming. You can simplify this section with collapsible
                containers so users don’t need keep scrolling down the length of
                the page for the information they want
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl"
                src={Card13}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textTwentOne">
              <div className="">
                <IoChatboxSharp className="absolute left-[81%] top-[20%] sm:left-[80%] fill-[#d08370] h-3 w-3 sm:h-6 sm:w-6" />
                <p className="text-black font-bold text-[6px] sm:text-[8px] absolute top-[21.5%] left-[85%]">
                  21
                </p>
              </div>

              <p className="text21 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[5px] sm:text-[7px] top-[29%] mx-3 p-1">
                Once an item is added to the cart a back end code is displayed
                in error - this can be confusing for users and presents the
                brand as unprofessional
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl"
                src={Card14}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textTwentyTwo">
              <div className="">
                <div>
                  <IoChatboxSharp className="absolute left-[70%] top-[23%] sm:top-[26%] sm:left-[75%] fill-[#bcd6ac] h-3 w-3 sm:h-6 sm:w-6" />
                  <p className="text-black font-bold text-[6px] sm:text-[8px] absolute sm:top-[27.5%] top-[24%] left-[74%] sm:left-[80%]">
                    22
                  </p>
                </div>
              </div>

              <p className="text22 absolute border bg-[#bcd6ac] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[31%] sm:top-[10%] mx-3 p-1">
                Good use of ‘strikethrough pricing’ to reinforce value for the
                user
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl"
                src={Card15}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textTwentyThree">
              <div className="">
                <IoChatboxSharp className="absolute left-[40%] top-[40%] fill-[#bcd6ac] h-3 w-3 sm:h-6 sm:w-6" />
                <p className="text-black font-bold text-[6px] sm:text-[8px] absolute top-[41%] left-[43%] sm:top-[41.5%] sm:left-[45.5%]">
                  23
                </p>
              </div>

              <p className="text23 absolute border bg-[#bcd6ac] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[48%] sm:top-[19%] mx-3 p-1">
                Good use of cross-sell in the Cart to provide additional value
                to users and increase average basket value
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl"
                src={Card16}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/decision/page2">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>
        <Link to="/decision/page4">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={RightArrow} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DecisionPage3;
