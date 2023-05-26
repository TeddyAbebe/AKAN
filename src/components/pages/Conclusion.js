import React from "react";
import { conclusion } from "../data/data";

const Conclusion = () => {
  return (
    <div className=" text-white w-full conclusion">
      <div className="flex flex-col min-h-screen lg:h-full bg-black bg-opacity-80 px-4 md:px-16 gap-2 ">
        <div>
          <div className="flex flex-col top-0 xl:max-w-[90%]">
            <div className="flex flex-col mb-5 w-full md:w-[90%]">
              <div className="font-joane font-bold text-3xl text-center mb-4 lg:mb-10 xl:mb-24 lg:mt-14 lg:text-5xl">
                <h1>{conclusion.main.header}</h1>
              </div>

              <div className="flex gap-2 items-center mb-3">
                <div className="font-fira font-normal text-xl gap-3 lg:text-2xl 2xl:text-3xl">
                  <h1>{conclusion.main.header2}</h1>
                </div>
                <div className="w-5 h-5">
                  <img src={conclusion.main.Key} alt="Key" />
                </div>
              </div>

              <div className="text-sm font-fira font-normal flex flex-col gap-4">
                <div className="flex flex-row gap-2">
                  <div>
                    <div className="w-1 h-1 rounded-full bg-white mt-2"></div>
                  </div>
                  <div className="2xl:text-lg">
                    <p>{conclusion.main.note1}</p>
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <div>
                    <div className="w-1 h-1 rounded-full bg-white mt-2"></div>
                  </div>
                  <div className="2xl:text-lg">
                    <p>{conclusion.main.note3}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pl-6 flex flex-col">
              <div className="flex gap-4 md:mb-5 w-full md:w-5/6">
                <div className="flex flex-row">
                  <div className="bg-white rounded-full flex items-center justify-center w-10 h-10 duration-300 ease-in-out hover:scale-[1.4] cursor-pointer">
                    <img
                      className="h-4 object-contain"
                      src={conclusion.desc1.icon}
                      alt="Icon"
                    />
                  </div>
                </div>

                <div className="">
                  <div>
                    <h4 className="font-semibold font-fira 2xl:text-xl">
                      {conclusion.desc1.title}
                    </h4>
                  </div>

                  <div className="font-fira font-normal text-sm 2xl:text-lg">
                    <p>{conclusion.desc1.desc}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 md:mb-5 w-full md:w-5/6">
                <div className="flex flex-row">
                  <div className="bg-white rounded-full flex items-center justify-center w-10 h-10 duration-300 ease-in-out hover:scale-[1.4] cursor-pointer">
                    <img
                      className="h-4 object-contain"
                      src={conclusion.desc2.icon}
                      alt="Icon"
                    />
                  </div>
                </div>

                <div className="">
                  <div>
                    <h4 className="font-semibold font-fira 2xl:text-xl">
                      {conclusion.desc2.title}
                    </h4>
                  </div>

                  <div className="font-fira font-normal text-sm 2xl:text-lg">
                    <p>{conclusion.desc2.desc}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 md:mt-5  w-full md:w-5/6">
                <div className="flex flex-row">
                  <div className="bg-white rounded-full flex items-center justify-center w-10 h-10 duration-300 ease-in-out hover:scale-[1.4] cursor-pointer">
                    <img
                      className="h-4 object-contain"
                      src={conclusion.desc3.icon}
                      alt="Icon"
                    />
                  </div>
                </div>

                <div className="">
                  <div>
                    <h4 className="font-semibold font-fira 2xl:text-xl">
                      {conclusion.desc3.title}
                    </h4>
                  </div>

                  <div className="font-fira font-normal text-sm 2xl:text-lg">
                    <p>{conclusion.desc3.desc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-lg font-fira font-normal 2xl:text-xl pt-5">
              <p>{conclusion.main.note2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
