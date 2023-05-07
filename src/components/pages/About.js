import React from "react";
import { about, company, socials, workExperince } from "../data/data";
import logo from "../data/files/Images/logo.png";
import American from "../data/files/Images/American.png";

const About = () => {
  return (
    <>
      <div className="bg-black text-white w-screen min-h-screen analysisPageFour">
        <div className="flex flex-col justify-center items-center sm:px-10 md:px-18">
          <div className="flex justify-center ">
            <img className="lg:mt-10 w-1/2 lg:w-[75%]" src={logo} alt="" />
          </div>

          <div className="mb-8">
            {about.map((val, i) => (
              <div className="flex flex-col justify-center items-center md:items-start">
                <div className="font-bold text-xl mb-4 md:mb-8 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">
                  <h1>{val.header}</h1>
                </div>

                <div className="mb-8 font-medium">
                  <div className="">
                    <p>{val.note}</p>
                  </div>

                  <div className="flex flex-col">
                    <p>{val.list1}</p>
                    <p>{val.list2}</p>
                    <p>{val.list3}</p>
                    <p>{val.list4}</p>
                  </div>
                </div>

                <div className="flex flex-col w-full gap-4">
                  <div className="">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl">
                      {val.header3}
                    </h3>
                  </div>
                  <div>
                    <div>
                      {socials.map((social, i) => (
                        <div
                          className="flex justify-start gap-4 sm:gap-6 md:gap-10"
                          key={i}
                        >
                          <img src={social.icon1} alt="" />
                          <img src={social.icon2} alt="" />
                          <img src={social.icon3} alt="" />
                          <img src={social.icon4} alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-full gap-4">
            <div>
              {workExperince.map((val, i) => (
                <div>
                  <h1 className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl">
                    {val.header}
                  </h1>
                </div>
              ))}
            </div>
            <div className="flex justify-start gap-4 sm:gap-6 md:gap-10">
              <div>
                <img src={American} alt="" />
              </div>
              {company.map((val, i) => (
                <div>
                  <div
                    className="flex justify-center items-center h-[79px] lg:w-[221.44px] rounded-lg bg-white"
                  >
                    <img className="" src={val.image} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
