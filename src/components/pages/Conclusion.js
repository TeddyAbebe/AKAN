import React from "react";
import { conclusion } from "../data/data";
import conclusionBG from "../data/files/Images/conclusion.png";

const Conclusion = () => {
  return (
    <div className=" text-white w-full relative">
      <div className="min-h-screen absolute top-0 left-0 ">
        <img
          src={conclusionBG}
          className="object-cover h-screen w-full"
          alt=""
        />
      </div>
      <div className=" flex flex-col absolute min-h-screen bg-black bg-opacity-60 backdrop-blur-sm px-4 md:px-16 gap-2 ">
        {conclusion.map((val, i) => (
          <div key={i} className="flex top-0">
            {i === 0 && (
              <div className="flex flex-col mb-5 w-full md:w-[90%]">
                <div className=" font-serif font-semibold text-3xl text-center mb-4">
                  <h1>{val.header}</h1>
                </div>
                <div className="flex gap-2 items-center mb-3">
                  <div className="font-serif font-semibold text-xl gap-3 ">
                    <h1>{val.header2}</h1>
                  </div>
                  <div className="w-5 h-5">
                    <img src={val.Key} alt="Key" />
                  </div>
                </div>

                <div className="text-sm flex flex-col gap-1">
                  <div className="flex flex-row gap-2">
                    <div>
                      <div className="w-1 h-1 rounded-full bg-white mt-2"></div>
                    </div>
                    <div>
                      <p>{val.note1}</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <div className="w-1 h-1 rounded-full bg-white mt-2"></div>
                    </div>
                    <div>
                      <p>{val.note2}</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <div className="w-1 h-1 rounded-full bg-white mt-2"></div>
                    </div>
                    <div>
                      <p>{val.note3}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {i > 0 && (
              <div className="flex flex-row gap-4 mb-3 w-full md:w-5/6">
                <div className="flex flex-row">
                  <div className="bg-white rounded-full flex items-center justify-center w-10 h-10">
                    <img className="h-4 object-contain" src={val.icon} alt="" />
                  </div>
                </div>

                <div className="">
                  <div>
                    <h4 className="font-semibold">{val.title}</h4>
                  </div>

                  <div className=" text-sm">
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
