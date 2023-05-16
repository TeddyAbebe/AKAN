import React from "react";
import { DecisionPageTwo } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import iPhone from "../../../data/files/Images/iphone-12-Screen.png";
import Card9 from "../../../data/files/Images/Card9.png";
import Card10 from "../../../data/files/Images/Card10.png";
import Card11 from "../../../data/files/Images/Card11.png";
import Card12 from "../../../data/files/Images/Card12.png";

const DecisionPage2 = () => {
  return (
    <div className="dotmap flex flex-col bg-black text-white w-screen min-h-screen">
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
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5"
                src={Card9}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textSeventeen">
              <div className="w-3 h-2 sm:w-5 sm:h-4 left-[10%] top-[73%] sm:top-[80%] sm:text-[8px] absolute">
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
                    17
                  </p>
                </div>
              </div>

              <p className="text17 absolute border bg-[#E7644A] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[60%] sm:top-[70%] mx-3 p-1">
                Only x2 subscription options doesn’t allow flexibility
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5"
                src={Card10}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textEightteen">
              <div className="w-3 h-2 sm:w-5 sm:h-4 left-[35%] top-[1%] sm:text-[8px] absolute">
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
                  <p className="text-black font-bold text-[8px] absolute top-[37%] left-[45%] sm:left-[35%]">
                    18
                  </p>
                </div>
              </div>

              <p className="text18 absolute border bg-[#E7644A] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[13%] sm:top-[10%] mx-3 p-1">
                The product description needs an injection of personality.
                Moreover, taste is a key selling point but there’s little
                information on what customer’s taste buds can expect
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5"
                src={Card11}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textNineteen">
              <div className="w-3 h-2 sm:w-5 sm:h-4 left-[40%] top-[40%] sm:text-[8px] absolute">
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
                    19
                  </p>
                </div>
              </div>

              <p className="text19 absolute border bg-[#E7644A] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[53%] sm:top-[30%] mx-3 p-1">
                Icons to depicting the product benefits appear very generic
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5"
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
