import React from "react";
import { DecisionPageThree } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import iPhone from "../../../data/files/Images/iphone-12-Screen.png";
import Card13 from "../../../data/files/Images/Card13.png";
import Card14 from "../../../data/files/Images/Card14.png";
import Card15 from "../../../data/files/Images/Card15.png";
import Card16 from "../../../data/files/Images/Card16.png";

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
                    20
                  </p>
                </div>
              </div>

              <p className="text20 absolute border bg-[#E7644A] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[40%] sm:top-[60%] right-[3%] left-[3%] p-1">
                Currently the page feels very dense and clunky - which can be
                overwhelming. You can simplify this section with collapsible
                containers so users don’t need keep scrolling down the length of
                the page for the information they want
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5"
                src={Card13}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textTwentOne">
              <div className="w-3 h-2 sm:w-5 sm:h-4 left-[70%] top-[20%] sm:left-[80%] sm:text-[8px] absolute">
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
                    21
                  </p>
                </div>
              </div>

              <p className="text21 absolute border bg-[#E7644A] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[35%] sm:top-[30%] right-[3%] left-[3%] p-1">
                Once an item is added to the cart a back end code is displayed
                in error - this can be confusing for users and presents the
                brand as unprofessional
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5"
                src={Card14}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textTwentyTwo">
              <div className="w-3 h-2 sm:w-5 sm:h-4 left-[70%] top-[23%] sm:top-[26%] sm:left-[80%] sm:text-[8px] absolute">
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
                      fill="#50B068"
                      stroke="white"
                    />
                    <path d="M2 4H17V13H2V4Z" fill="#50B069" />
                  </svg>
                  <p className="text-black font-bold text-[8px] absolute top-[37%] left-[45%] sm:left-[35%]">
                    22
                  </p>
                </div>
              </div>

              <p className="text22 absolute border bg-[#50B069] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[9%] sm:top-[15%] right-[3%] left-[3%] p-1">
                Good use of ‘strikethrough pricing’ to reinforce value for the
                user
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5"
                src={Card15}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textTwentyThree">
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
                      fill="#50B068"
                      stroke="white"
                    />
                    <path d="M2 4H17V13H2V4Z" fill="#50B069" />
                  </svg>
                  <p className="text-black font-bold text-[8px] absolute top-[37%] left-[35%]">
                    23
                  </p>
                </div>
              </div>

              <p className="text23 absolute border bg-[#50B069] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[53%] sm:top-[25%] right-[3%] left-[3%] p-1">
                Good use of cross-sell in the Cart to provide additional value
                to users and increase average basket value
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="w-[92%] ml-1 sm:h-[246px] sm:ml-1.5"
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
