import React from "react";
import { DecisionPageTwo } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import iPhone from "../../../data/files/Images/iphone-12-Screen.png";
import Card9 from "../../../data/files/Images/Card9.png";
import Card10 from "../../../data/files/Images/Card10.svg";
import Card11 from "../../../data/files/Images/Card11.svg";
import Card12 from "../../../data/files/Images/Card12.svg";
import { IoChatboxSharp } from "react-icons/io5";
import angle from "../../../data/files/Images/angle.png";


const DecisionPage2 = () => {
  return (
    <div className="dotmap relative flex flex-col bg-black text-white w-screen min-h-screen">
      <div>
        <h2 className="absolute top-[3%] right-[1%] z-[1] font-fira font-bold text-[17px]">
          JES:38%
        </h2>
      </div>
      <img src={angle} alt="" className="absolute top-0 right-0" />
      <div className="mt-32 lg:mt-36 flex flex-col gap-6 justify-center items-center">
        <div>
          {DecisionPageTwo.map((val, i) => (
            <div className="text-lg sm:text-2xl font-joane font-bold text-center md:text-3xl">
              <h1>{val.header}</h1>
            </div>
          ))}
        </div>

        <div className="w-full gap-6 flex justify-evenly lg:justify-center lg:gap-14">
          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textSixteen">
              <div className="w-3 h-2 sm:w-5 sm:h-4 left-[41%] top-[35%] sm:text-[8px] absolute"></div>

              <p className="text16 absolute border bg-[#bcd6ac] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[40%] sm:top-[42%] mx-3 p-1">
                Beautiful use of imagery to grab attention and entice
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 "
                src={Card9}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textSeventeen">
              <div className="">
                <IoChatboxSharp className="absolute sm:left-[10%] left-[15%] top-[78%] sm:top-[80%] fill-[#d08370] w-3 h-3 sm:w-6 sm:h-6" />
                <p className="text-black font-bold text-[6px] sm:text-[8px] absolute top-[79%] left-[17%] sm:top-[81.5%] sm:left-[15%]">
                  17
                </p>
              </div>

              <p className="text17 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[5px] sm:text-[7px] top-[55%] sm:top-[68%] mx-3 p-1">
                Only x2 subscription options doesn’t allow flexibility
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl"
                src={Card10}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textEightteen">
              <div>
                <IoChatboxSharp className="absolute left-[35%] top-[3%] fill-[#d08370] h-3 w-3 sm:w-6 sm:h-6" />

                <p className="text-black font-bold text-[6px] sm:text-[8px] absolute sm:top-[5%] top-[3.5%] left-[38%] sm:left-[40%]">
                  18
                </p>
              </div>

              <p className="text18 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[5px] sm:text-[7px] top-[12%] mx-3 p-1">
                The product description needs an injection of personality.
                Moreover, taste is a key selling point but there’s little
                information on what customer’s taste buds can expect
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl"
                src={Card11}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textNineteen">
              <div>
                <IoChatboxSharp className="absolute left-[40%] top-[40%] fill-[#d08370] h-3 w-3 sm:w-6 sm:h-6" />

                <p className="text-black font-bold text-[6px] sm:text-[8px] absolute sm:top-[41.5%] top-[40.5%] left-[43%] sm:left-[46%]">
                  19
                </p>
              </div>

              <p className="text19 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[5px] sm:text-[7px] top-[50%] sm:top-[27%] mx-3 p-1">
                Icons to depicting the product benefits appear very generic
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl"
                src={Card12}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/decision">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>
        <Link to="/decision/page3">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={RightArrow} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DecisionPage2;
