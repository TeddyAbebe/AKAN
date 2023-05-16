import React from "react";
import { loyalityPageFour } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import iPhone from "../../../data/files/Images/iPhoneScreenWhite.png";
import Card31 from "../../../data/files/Images/Card31.svg"

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
              <div className="w-3 h-2 sm:w-5 sm:h-4 left-[5%] top-[73%] sm:top-[35%] sm:text-[8px] absolute">
                <div>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-[37%] left-[23%]"
                  >
                    <path
                      d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                      fill="#E7644A"
                      stroke="white"
                    />
                    <path d="M2 4H17V13H2V4Z" fill="#E7644A" />
                  </svg>
                  <p className="text-black font-bold text-[8px] absolute top-[37%] left-[35%]">
                    46
                  </p>
                </div>
              </div>

              <p className="text46 absolute border bg-[#E7644A] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[60%] sm:top-[30%] sm:left-[26%] mx-3 p-1">
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
