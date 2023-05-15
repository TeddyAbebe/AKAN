import React from "react";
import { ConsiderationPageThree } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import Card5 from "../../../data/files/Images/Card5.png";
import Card6 from "../../../data/files/Images/Card6.png";
import Card7 from "../../../data/files/Images/Card7.png";
import Card8 from "../../../data/files/Images/Card8.png";

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
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[35%] left-[8%] sm:top-[40%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#50B068"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#50B069" />
                </svg>
                <p className="text-[8px] absolute top-[35.5%] left-[14%] sm:top-[40%] sm:left-[12.5%] ">
                  8
                </p>
              </div>
              <p className="text10 absolute border bg-[#50B069] font-fira font-normal rounded-lg text-[8px] sm:text-[10.5px] mx-2 p-0.5 left-[15%] sm:top-[10%]">
                Good use of chat box to help users find the right product for
                their need
              </p>
            </div>

            <div className="elevenText cursor-pointer">
              <div className="">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[45%] left-[73%] sm:top-[45%] sm:left-[75%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#E7644A"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#E7644A" />
                </svg>

                <p className="text-[8px] absolute top-[46%] left-[80%] sm:top-[45%] sm:left-[79%] ">
                  9
                </p>
              </div>
              <p className="text11 absolute border bg-[#E7644A] font-fira font-normal rounded-lg text-[6px] sm:text-[10.5px] mx-2 p-0.5 top-[50%] right-[8%] sm:top-[50%]">
                Use of Gifs, while fun could come across as unprofessional so
                ensure they align with your tone of voice
              </p>
            </div>

            <img className="lg:h-64" src={Card5} alt="" />
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="elevenText cursor-pointer">
              <div className="">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[3%] left-[18%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#E7644A"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#E7644A" />
                </svg>
                <p className="text-[6px] absolute top-[4%] left-[23%] sm:left-[20%] ">
                  10
                </p>
              </div>
              <p className="text11 absolute border bg-[#E7644A] font-fira font-normal rounded-lg text-[6px] sm:text-[10.5px] mx-2 p-0.5 top-[13%]">
                Mobile responsive landing page
              </p>
            </div>

            <img className="lg:h-64" src={Card6} alt="" />
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="elevenText cursor-pointer">
              <div className="">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[6%] left-[3%] sm:top-[10%] sm:left-[5%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#E7644A"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#E7644A" />
                </svg>
                <p className=" text-[8px] absolute top-[6%] left-[7%] sm:left-[7%] sm:top-[10%]">
                  11
                </p>
              </div>
              <p className="text11 absolute border bg-[#E7644A] font-fira font-normal rounded-lg text-[6px] sm:text-[10.5px] mx-2 p-0.5 top-[8%] left-[12%]">
                ‘Filter’ button is hidden and difficult to find
              </p>
            </div>

            <div className="twelveText cursor-pointer">
              <div className="">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[33%] left-[33%] sm:top-[40%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#50B068"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#50B069" />
                </svg>
                <p className="text-[8px] absolute top-[33%] left-[36%] sm:top-[40%] sm:left-[35%] ">
                  12
                </p>
              </div>
              <p className="text12 absolute border bg-[#50B069] font-fira font-normal rounded-lg text-[6px] sm:text-[10.5px] mx-2 p-0.5 top-[45%]">
                Great use of imagery to showcase products
              </p>
            </div>

            <div className="thirteenText cursor-pointer">
              <div className="">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[76%] left-[10%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#E7644A"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#E7644A" />
                </svg>
                <p className="text-[8px] absolute top-[76%] left-[13%] sm:left-[12%]">
                  13
                </p>
              </div>
              <p className="text13 absolute border bg-[#E7644A] font-fira font-normal rounded-lg text-[6px] sm:text-[10.5px] mx-2 p-0.5 top-[48%]">
                Missed opportunity to include short and enticing product
                description
              </p>
            </div>

            <div className="fourteenText cursor-pointer">
              <div className="">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[85%] left-[25%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#E7644A"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#E7644A" />
                </svg>
                <p className="text-[8px] absolute top-[86%] left-[28%] sm:top-[85%] sm:left-[27%]">
                  14
                </p>
              </div>
              <p className="text14 absolute border bg-[#E7644A] font-fira font-normal rounded-lg text-[6px] sm:text-[10.5px] mx-2 p-0.5 top-[57%] left-[15%]">
                Opportunity to use pop window provide more detailed product
                information
              </p>
            </div>

            <img className="lg:h-64" src={Card7} alt="" />
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="fifteenText cursor-pointer">
              <div className="">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[30%] left-[48%] sm:top-[33%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#E7644A"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#E7644A" />
                </svg>
                <p className=" text-[8px] absolute top-[30%] text-black left-[52%] sm:left-[50%] sm:top-[33%]">
                  15
                </p>
              </div>
              <p className="text15 absolute border bg-[#E7644A] font-fira font-normal rounded-lg text-[6px] sm:text-[10.5px] mx-2 p-0.5 top-[40%]">
                Limited filtering options; enable users to filter by benefit,
                taste, type (tea/blend) and subscription vs non-subscription
              </p>
            </div>

            <img className="lg:h-64" src={Card8} alt="" />
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
