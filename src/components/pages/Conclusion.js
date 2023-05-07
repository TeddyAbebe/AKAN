import React from "react";
import { conclusion } from "../data/data";

const Conclusion = () => {
  return (
    <div className=" text-white w-full conclusion">
      <div className="flex flex-col min-h-screen lg:h-full bg-black bg-opacity-80 px-4 md:px-16 gap-2 ">
        {conclusion.map((val, i) => (
          <div key={i} className="flex top-0 xl:max-w-[90%]">
            {i === 0 && (
              <div className="flex flex-col mb-5 w-full md:w-[90%]">
                <div className=" font-serif font-semibold text-3xl text-center mb-4 lg:mb-10 xl:mb-24 lg:mt-14 lg:text-5xl">
                  <h1>{val.header}</h1>
                </div>
                <div className="flex gap-2 items-center mb-3">
                  <div className="font-serif font-semibold text-xl gap-3 lg:text-2xl 2xl:text-3xl lg:font-medium">
                    <h1>{val.header2}</h1>
                  </div>
                  <div className="w-5 h-5">
                    <img src={val.Key} alt="Key" />
                  </div>
                </div>

                <div className="text-sm font-medium flex flex-col gap-1">
                  <div className="flex flex-row gap-2">
                    <div>
                      <div className="w-1 h-1 rounded-full bg-white mt-2"></div>
                    </div>
                    <div className="2xl:text-lg">
                      <p>{val.note1}</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <div className="w-1 h-1 rounded-full bg-white mt-2"></div>
                    </div>
                    <div className="2xl:text-lg">
                      <p>{val.note2}</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <div className="w-1 h-1 rounded-full bg-white mt-2"></div>
                    </div>
                    <div className="2xl:text-lg">
                      <p>{val.note3}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {i > 0 && (
              <div className="flex flex-row gap-4 md:mb-5 w-full md:w-5/6">
                <div className="flex flex-row">
                  <div className="bg-white rounded-full flex items-center justify-center w-10 h-10">
                    <img
                      className="h-4 object-contain"
                      src={val.icon}
                      alt="Icon"
                    />
                  </div>
                </div>

                <div className="">
                  <div>
                    <h4 className="font-semibold 2xl:text-xl">{val.title}</h4>
                  </div>

                  <div className="font-medium text-sm 2xl:text-lg">
                    <p>{val.desc}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conclusion;
