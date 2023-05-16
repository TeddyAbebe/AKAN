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
              <div className="w-3 h-2 sm:w-5 sm:h-4 left-[15%] sm:text-[8px] absolute">
                <div className="w-3 h-2 sm:w-5 sm:h-4 left-[55%] top-[73%] sm:top-[50%] sm:text-[8px] absolute">
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
                      24
                    </p>
                  </div>
                </div>
              </div>

              <p className="text24 absolute border bg-[#E7644A] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[18%] sm:top-[15%] right-[35%] left-[5%] p-1">
                This page in the checkout experience looks & feels off-brand,
                and is inconsistent with what the user has seen throughout the
                journey; potentially eroding trust in a crucial phase of the
                journey
              </p>
            </div>

            <div className="cursor-pointer textTwentyFive">
              <div className="w-3 h-2 sm:w-5 sm:h-4 left-[55%] top-[10%] sm:text-[8px] absolute">
                <div className="w-3 h-2 sm:w-5 sm:h-4 left-[55%] top-[73%] sm:top-[50%] sm:text-[8px] absolute">
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
                      25
                    </p>
                  </div>
                </div>
              </div>

              <p className="text25 absolute border bg-[#E7644A] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[26%] sm:top-[22%] mx-3 p-1">
                Opportunity to add Progress Bar to calm users and set
                expectations
              </p>
            </div>

            <div className="cursor-pointer textTwentySix">
              <div className="w-3 h-2 sm:w-5 sm:h-4 left-[55%] top-[65%] sm:text-[8px] absolute">
                <div className="w-3 h-2 sm:w-5 sm:h-4 left-[55%] top-[73%] sm:top-[50%] sm:text-[8px] absolute">
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
                      26
                    </p>
                  </div>
                </div>
              </div>

              <p className="text26 absolute border bg-[#E7644A] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[47%] sm:top-[45%] mx-3 p-1">
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
              <div className="w-3 h-2 sm:w-5 sm:h-4 left-[55%] top-[50%] sm:text-[8px] absolute">
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
                    27
                  </p>
                </div>
              </div>

              <p className="text28 absolute border bg-[#E7644A] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[32%] sm:top-[30%] mx-3 p-1">
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
