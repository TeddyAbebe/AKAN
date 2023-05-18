import React from "react";
import { ConsiderationPageTwo } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import Card1 from "../../../data/files/Images/Card1.svg";
import Card2 from "../../../data/files/Images/Card2.svg";
import Card3 from "../../../data/files/Images/Card3.svg";
import Card4 from "../../../data/files/Images/Card4.svg";
import iPhone from "../../../data/files/Images/iphone-12-Screen.png";
import { IoChatboxSharp } from "react-icons/io5";
import angle from "../../../data/files/Images/angle.png";

const ConsiderationPage2 = () => {
  return (
    <div className="lines relative flex flex-col bg-black text-white w-screen min-h-screen">
      <div>
        <h2 className="absolute top-[3%] right-[1%] z-[1] font-fira font-bold text-[17px]">
          JES:23%
        </h2>
      </div>
      <img src={angle} alt="" className="absolute top-0 right-0" />

      <div className="mt-32 lg:mt-36 flex flex-col justify-center items-center gap-6">
        <div>
          {ConsiderationPageTwo.map((val, i) => (
            <div className="text-xl sm:text-2xl font-joane font-bold text-center md:text-2xl lg:text-3xl">
              <h1>{val.header}</h1>
            </div>
          ))}
        </div>

        <div className="w-full gap-6 flex justify-evenly lg:justify-center lg:gap-14">
          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="firstText cursor-pointer">
              <div className="">
                <IoChatboxSharp className="absolute top-[20%] left-[20%] fill-[#bcd6ac] h-3 w-3 sm:w-6 sm:h-6" />
                <p className="text-[6px] sm:text-[8px] text-black font-bold absolute top-[20.5%] left-[25%] sm:top-[21.5%] sm:left-[26%]">
                  1
                </p>
              </div>
              <p className="text1 absolute border bg-[#bcd6ac] text-black font-fira font-normal rounded-lg text-[5px] sm:text-[10px] mx-2 p-0.5 top-[15%] left-[33%]">
                Mobile responsive landing page
              </p>
            </div>

            <div className="secondText cursor-pointer">
              <IoChatboxSharp className="absolute  top-[40%] left-[30%] fill-[#bcd6ac] h-3 w-3 sm:h-6 sm:w-6" />

              <p className="absolute text-[6px] sm:text-[8px] top-[41.5%] text-black font-bold left-[35%] sm:left-[36.5%]">
                2
              </p>
              <p className="text2 absolute border bg-[#bcd6ac] text-black font-fira font-normal rounded-lg text-[5px] sm:text-[10px] mx-2 p-0.5 top-[49%]">
                Good use of imagery colours to grab attention
              </p>
            </div>

            <div className="thirdText cursor-pointer">
              <div>
                <IoChatboxSharp className="absolute top-[82%] left-[48%] fill-[#bcd6ac] w-3 h-3 sm:w-6 sm:h-6" />
                <p className="absolute text-[6px] sm:text-[8px] top-[82.5%] sm:top-[84%] left-[53%] sm:left-[54%] text-black font-bold">
                  3
                </p>
              </div>
              <p className="text3 absolute border bg-[#bcd6ac] text-black font-fira font-normal rounded-lg text-[5px] sm:text-[10px] p-0.5 mx-2 top-[54.5%]">
                CTA covering logo and product & links to catalogue without
                proper onboarding
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div>
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl "
                src={Card1}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="fourthText cursor-pointer">
              <div>
                <IoChatboxSharp className="absolute top-[37%] left-[20%] fill-[#d08370] h-3 w-3 sm:h-6 sm:w-6" />
                <p className="text-[6px] sm:text-[8px] absolute top-[37.5%] sm:top-[38%] left-[23%] sm:left-[25.5%] text-black font-bold">
                  4a
                </p>
              </div>

              <p className="text4 text-black absolute border bg-[#d08370] font-fira font-normal rounded-lg text-[5px] sm:text-[10px] p-0.5 top-[9%] mx-2">
                Discount on product so early in the interaction can devalue the
                brand and it’s products
              </p>
            </div>

            <div className="fifthText cursor-pointer">
              <div>
                <IoChatboxSharp className="absolute top-[76%] left-[12%] fill-[#d08370] w-3 h-3 sm:h-6 sm:w-6" />
                <p className="text-[6px] sm:text-[8px] absolute top-[77.5%] left-[17%] text-black font-bold">
                  4b
                </p>
              </div>
              <p className="text5 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg mx-3 text-[5px] sm:text-[10px] p-0.5 top-[55%] sm:top-[60%]">
                So many pop ups not staggered is disruptive
              </p>
            </div>

            <div className="sixthText cursor-pointer">
              <div>
                <IoChatboxSharp className="absolute top-[80%] left-[65%] fill-[#d08370] h-3 w-3 sm:h-6 sm:w-6" />
                <p className="text-[6px] sm:text-[8px] absolute top-[81.5%] left-[69.5%] text-black font-bold">
                  4c
                </p>
              </div>
              <p className="text6 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[5px] sm:text-[10px] mx-3 p-0.5 top-[61%] sm:top-[66%]">
                So many pop ups not staggered is disruptive
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div>
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl "
                src={Card2}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="seventhText cursor-pointer">
              <div>
                <IoChatboxSharp
                  className="absolute left-[78%] top-[50%]
                sm:left-[75%] fill-[#d08370] h-3 w-3 sm:h-6 sm:w-6"
                />
                <p className="text-[6px] sm:text-[8px] text-black font-bold absolute top-[51.5%] left-[82%]">
                  5
                </p>
              </div>
              <p className="text7 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[10px] p-0.5 top-[30%] sm:top-[10%] mx-3">
                Good use of imagery to grab attention, however it’s a missed
                opportunity to show the product vs the packaging
              </p>
            </div>

            <div className="eighthText cursor-pointer">
              <div>
                <IoChatboxSharp className="absolute top-[82%] left-[55%] fill-[#d08370] h-3 w-3 sm:h-6 sm:w-6" />
                <p className="text-[6px] sm:text-[8px] absolute top-[83.5%] left-[62%] text-black font-bold">
                  6
                </p>
              </div>
              <p className="text8 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[10px] mx-3 p-0.5 top-[57%] sm:top-[43%]">
                ‘Take Quiz’ can make the process seem daunting & tedious - ‘Tea
                Finder’ could be more fit for purpose and helpful for the user
              </p>
            </div>
            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div>
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl "
                src={Card3}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="ninthText cursor-pointer">
              <div>
                <IoChatboxSharp className="absolute top-[65%] left-[70%] sm:top-[70%] fill-[#d08370] w-3 h-3 sm:h-6 sm:w-6" />
                <p className="text-[6px] sm:text-[8px] absolute top-[66%] sm:top-[71.5%] left-[76.5%] text-black font-bold">
                  7
                </p>
              </div>
              <p className="text9 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[10px] mx-2 p-0.5 top-[48%] sm:top-[43%]">
                Good use of ‘Social Proof’ but could be moved above the fold and
                made prominent
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div>
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5 rounded-xl sm:rounded-2xl"
                src={Card4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/consideration">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>
        <Link to="/consideration/page3">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={RightArrow} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ConsiderationPage2;
