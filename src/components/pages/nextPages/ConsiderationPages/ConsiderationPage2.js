import React from "react";
import {
  ConsiderationPageTwo,
} from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import Card1 from "../../../data/files/Images/Card1.png";
import Card2 from "../../../data/files/Images/Card2.png";
import Card3 from "../../../data/files/Images/Card3.png";
import Card4 from "../../../data/files/Images/Card4.png";
// import angle from "../../../data/files/Images/angle.png";

const ConsiderationPage2 = () => {
  return (
    <div className="lines flex flex-col bg-black text-white w-screen min-h-screen lg:w-screen">
      {/* <div className="absolute top-0 right-0">
        <img src={angle} />
      </div> */}

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
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[15%] left-[20%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#50B068"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#50B069" />
                </svg>
                <p className=" text-[8px] absolute top-[15%] left-[27%] sm:left-[24%]">
                  1
                </p>
              </div>
              <p className="text1 absolute border bg-[#50B069] font-fira font-normal rounded-lg text-[8px] sm:text-[10.5px] mx-2 p-0.5 top-[20%]">
                Mobile responsive landing page
              </p>
            </div>

            <div className="secondText cursor-pointer">
              <svg
                width="15"
                height="15"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[40%] left-[30%]"
              >
                <path
                  d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                  fill="#50B068"
                  stroke="white"
                />
                <path d="M2 4H17V13H2V4Z" fill="#50B069" />
              </svg>
              <p className="absolute text-[8px] top-[40%] left-[37%] sm:left-[34%]">
                2
              </p>
              <p className="text2 absolute border bg-[#50B069] font-fira font-normal rounded-lg text-[8px] sm:text-[10.5px] mx-2 p-0.5 top-[46%]">
                Good use of imagery colours to grab attention
              </p>
            </div>

            <div className="thirdText cursor-pointer">
              <div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[82%] left-[48%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#50B068"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#50B069" />
                </svg>
                <p className="absolute text-[8px] top-[82%] left-[55%] sm:left-[52%]">
                  3
                </p>
              </div>
              <p className="text3 absolute border bg-[#50B069] font-fira font-normal rounded-lg text-[8px] sm:text-[10.5px] p-0.5 mx-2 top-[30%] sm:top-[54.5%]">
                CTA covering logo and product & links to catalogue without
                proper onboarding
              </p>
            </div>
            <img className="lg:h-64" src={Card1} alt="" />
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="fourthText cursor-pointer">
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
                <p className=" text-[8px] absolute top-[37%] left-[27%] sm:left-[25.5%]">
                  4a
                </p>
              </div>

              <p className="text4 absolute border bg-[#E7644A] font-fira font-normal rounded-lg text-[8px] sm:text-[10.5px] p-0.5 top-[5%] sm:top-[10%] mx-2">
                Discount on product so early in the interaction can devalue the
                brand and it’s products
              </p>
            </div>

            <div className="fifthText cursor-pointer">
              <div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[76%] left-[12%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#E7644A"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#E7644A" />
                </svg>
                <p className=" text-[8px] absolute top-[76%] left-[15%] sm:left-[14%]">
                  4b
                </p>
              </div>
              <p className="text5 absolute border bg-[#E7644A] font-fira font-normal rounded-lg mx-3 text-[8px] sm:text-[10.5px] p-0.5 top-[55%] sm:top-[55%]">
                So many pop ups not staggered is disruptive
              </p>
            </div>

            <div className="sixthText cursor-pointer">
              <div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[75%] sm:top-[80%] left-[65%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#E7644A"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#E7644A" />
                </svg>
                <p className=" text-[8px] absolute top-[75%] sm:top-[80%] left-[68%] sm:left-[67%]">
                  4c
                </p>
              </div>
              <p className="text6 absolute border bg-[#E7644A] font-fira font-normal rounded-lg text-[8px] sm:text-[10.5px] mx-3 p-0.5 top-[55%] sm:top-[60%]">
                So many pop ups not staggered is disruptive
              </p>
            </div>

            <img className="lg:h-64" src={Card2} alt="" />
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="seventhText cursor-pointer">
              <div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[45%] left-[70%] sm:top-[50%] sm:left-[75%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#E7644A"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#E7644A" />
                </svg>
                <p className="text-[8px] absolute top-[45%] left-[75%] sm:top-[50%] sm:left-[79%]">
                  5
                </p>
              </div>
              <p className="text7 absolute border bg-[#E7644A] font-fira font-normal rounded-lg text-[4px] sm:text-[10.5px] p-0.5 top-[20%] sm:top-[10%] mx-3">
                Good use of imagery to grab attention, however it’s a missed
                opportunity to show the product vs the packaging
              </p>
            </div>

            <div className="eighthText cursor-pointer">
              <div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[78%] left-[50%] sm:top-[82%] sm:left-[55%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#E7644A"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#E7644A" />
                </svg>
                <p className="text-[8px] absolute top-[78%] left-[57%] sm:top-[82%] sm:left-[59%]">
                  6
                </p>
              </div>
              <p className="text8 absolute border bg-[#E7644A] font-fira font-normal rounded-lg text-[4px] sm:text-[10.5px] mx-3 p-0.5 top-[57%] sm:top-[35%]">
                ‘Take Quiz’ can make the process seem daunting & tedious - ‘Tea
                Finder’ could be more fit for purpose and helpful for the user
              </p>
            </div>
            <img className="lg:h-64" src={Card3} alt="" />
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="ninthText cursor-pointer">
              <div>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-[65%] left-[70%] sm:top-[70%]"
                >
                  <path
                    d="M7.69928 17.039L7.69931 17.039L7.69564 17.0343C7.55281 16.8494 7.35354 16.7065 7.16111 16.6103C6.96956 16.5145 6.73469 16.44 6.5 16.44H5C2.51418 16.44 0.5 14.4319 0.5 11.96V4.98C0.5 2.5081 2.51418 0.5 5 0.5H15C17.4858 0.5 19.5 2.5081 19.5 4.98V11.96C19.5 14.4319 17.4858 16.44 15 16.44H13.5C13.0314 16.44 12.585 16.6649 12.3019 17.0375L12.3007 17.039L10.8007 19.029L10.8 19.03C10.5506 19.3626 10.2559 19.49 10 19.49C9.74414 19.49 9.44944 19.3626 9.2 19.03L9.19928 19.029L7.69928 17.039ZM5 12.25H11C11.6861 12.25 12.25 11.6861 12.25 11C12.25 10.3139 11.6861 9.75 11 9.75H5C4.31386 9.75 3.75 10.3139 3.75 11C3.75 11.6861 4.31386 12.25 5 12.25ZM5 7.25H15C15.6861 7.25 16.25 6.68614 16.25 6C16.25 5.31386 15.6861 4.75 15 4.75H5C4.31386 4.75 3.75 5.31386 3.75 6C3.75 6.68614 4.31386 7.25 5 7.25Z"
                    fill="#E7644A"
                    stroke="white"
                  />
                  <path d="M2 4H17V13H2V4Z" fill="#E7644A" />
                </svg>
                <p className="text-[8px] absolute top-[65%] left-[75%] sm:top-[70%] sm:left-[74%]">
                  7
                </p>
              </div>
              <p className="text9 absolute border bg-[#E7644A] font-fira font-normal rounded-lg text-[4px] sm:text-[10.5px] mx-2 p-0.5 top-[48%] sm:top-[43%]">
                Good use of ‘Social Proof’ but could be moved above the fold and
                made prominent
              </p>
            </div>

            <img className="lg:h-64" src={Card4} alt="" />
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
