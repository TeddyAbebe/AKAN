import React from "react";
import { ConsiderationPageThree } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import Card5 from "../../../data/files/Images/Card5.svg";
import Card6 from "../../../data/files/Images/Card6.svg";
import Card7 from "../../../data/files/Images/Card7.svg";
import Card8 from "../../../data/files/Images/Card8.svg";
import iPhone from "../../../data/files/Images/iphone-12-Screen.png";
import { IoChatboxSharp } from "react-icons/io5";

const ConsiderationPage3 = () => {
  return (
    <div className="lines flex flex-col bg-black text-white w-screen min-h-screen lg:w-screen">
      <div className="mt-32 lg:mt-36 flex flex-col justify-center items-center gap-6">
        <div className="flex w-full justify-between lg:justify-center md:gap-24">
          <div className="">
            <div className="text-lg sm:text-2xl font-joane font-bold text-center md:text-3xl">
              <h1>{ConsiderationPageThree.FirstHeader.header1}</h1>
            </div>
          </div>

          <div className="">
            <div className="text-lg sm:text-2xl font-joane font-bold text-center md:text-3xl">
              <h1>{ConsiderationPageThree.SecondHeader.header2}</h1>
            </div>
          </div>
        </div>

        <div className="w-full gap-6 flex justify-evenly lg:justify-center lg:gap-14">
          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="tenthText cursor-pointer">
              <div className="">
                <IoChatboxSharp className="absolute top-[35%] left-[8%] sm:top-[40%] fill-[#bcd6ac] h-6 w-6" />
                <p className="text-[8px] absolute sm:top-[41.5%] sm:left-[14.5%] text-black font-bold">
                  8
                </p>
              </div>
              <p className="text10 absolute border bg-[#bcd6ac] text-black font-fira font-normal rounded-lg text-[8px] sm:text-[10px] mx-2 p-0.5 left-[15%] sm:top-[10%]">
                Good use of chat box to help users find the right product for
                their need
              </p>
            </div>

            <div className="elevenText cursor-pointer">
              <div className="">
                <IoChatboxSharp
                  className="absolute top-[45%] left-[73%] sm:top-[45%]
                sm:left-[75%] fill-[#d08370] h-6 w-6"
                />
                <p className="text-[8px] absolute sm:top-[46.5%] sm:left-[81.5%] font-bold text-black">
                  9
                </p>
              </div>
              <p className="text11 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[6px] sm:text-[10px] mx-2 p-0.5 right-[8%] sm:top-[54%]">
                Use of Gifs, while fun could come across as unprofessional so
                ensure they align with your tone of voice
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div>
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl "
                src={Card5}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="elevenText cursor-pointer">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-2 h-2 stroke-amber-300 fill-amber-300 absolute top-[2%] left-[22%] sm:top-[4%] sm:left-[24%]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>

                <IoChatboxSharp className="absolute top-[7%] left-[18%] fill-[#d08370] h-6 w-6" />
                <p className="text-[8px] absolute top-[8.5%] sm:left-[22.5%] text-black font-bold">
                  10
                </p>
              </div>
              <p className="text11 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[6px] sm:text-[10px] mx-2 p-0.5 top-[16%]">
                ‘Quiz’ UX feels clunky, and use of ‘herbalist algorithm’ makes
                it feel impersonal and generic. Do your users want
                recommendations from machines or expert/humans?
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div>
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl "
                src={Card6}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="elevenText cursor-pointer">
              <div className="">
                <IoChatboxSharp
                  className="absolute top-[5%] left-[3%] sm:top-[8%]
                sm:left-[5%] fill-[#d08370] h-6 w-6"
                />
                <p className="font-bold text-[8px] absolute top-[5%] left-[7%] sm:left-[10%] sm:top-[9.5%] text-black">
                  11
                </p>
              </div>
              <p className="text11 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[6px] sm:text-[10px] mx-2 p-0.5 top-[15%] left-[12%]">
                ‘Filter’ button is hidden and difficult to find
              </p>
            </div>

            <div className="twelveText cursor-pointer">
              <div className="">
                <IoChatboxSharp className="absolute top-[33%] left-[33%] sm:top-[40%] fill-[#bcd6ac] h-6 w-6" />
                <p className="text-[8px] absolute top-[33%] left-[36%] sm:top-[41.5%] sm:left-[38%] text-black font-bold">
                  12
                </p>
              </div>
              <p className="text12 absolute border bg-[#bcd6ac] text-black font-fira font-normal rounded-lg text-[6px] sm:text-[10px] mx-2 p-0.5 top-[49%]">
                Great use of imagery to showcase products
              </p>
            </div>

            <div className="thirteenText cursor-pointer">
              <div className="">
                <IoChatboxSharp className="absolute top-[76%] left-[10%] fill-[#d08370] h-6 w-6" />
                <p className="text-[8px] absolute top-[77.5%] left-[13.5%] sm:left-[14%] text-black font-bold">
                  13
                </p>
              </div>
              <p className="text13 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[6px] sm:text-[10px] mx-2 p-0.5 top-[50%]">
                Missed opportunity to include short and enticing product
                description
              </p>
            </div>

            <div className="fourteenText cursor-pointer">
              <div className="">
                <IoChatboxSharp className="absolute top-[85%] left-[25%] fill-[#d08370] h-6 w-6" />
                <p className="text-[8px] absolute top-[86%] left-[28%] sm:top-[87%] sm:left-[29%] font-bold text-black">
                  14
                </p>
              </div>
              <p className="text14 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[6px] sm:text-[10px] mx-2 p-0.5 top-[59%]">
                Opportunity to use pop window provide more detailed product
                information
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div>
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl "
                src={Card7}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="fifteenText cursor-pointer">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-2 h-2 stroke-amber-300 fill-amber-300 absolute top-[25%] left-[52.5%] sm:top-[30%] sm:left-[54%]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>

                <IoChatboxSharp className="absolute top-[30%] left-[48%] sm:top-[33%] fill-[#d08370] h-6 w-6" />
                <p className=" text-[8px] absolute top-[30%] text-black left-[52%] sm:left-[53%] sm:top-[34.5%] font-bold">
                  15
                </p>
              </div>
              <p className="text15 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[6px] sm:text-[10px] mx-2 p-0.5 top-[42%]">
                Limited filtering options; enable users to filter by benefit,
                taste, type (tea/blend) and subscription vs non-subscription
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div>
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl "
                src={Card8}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/consideration/page2">
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

export default ConsiderationPage3;
