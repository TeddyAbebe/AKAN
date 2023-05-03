import React from "react";
import { consideration } from "../data/data";
import considerationBG from "../data/files/Images/consideration.png";

const Consideration = () => {
  return (
    <>
      <div className="text-white w-screen min-h-screen relative">
        <div className="flex-1 h-screen top-0 left-0 overflow-hidden">
          <img src={considerationBG} className="flex-1 object-contain min-h-screen" alt="" />
        </div>
        <div className="flex flex-row absolute inset-0 bg-black bg-opacity-60 justify-center items-center backdrop-blur-sm">
          {consideration.map((val, i) => (
            <div className="flex lg:py-40 lg:px-28 justify-center" key={i}>
              <div>
                <h1 className="font-serif font-semibold text-3xl  lg:text-5xl lg:my-10 2xl:text-7xl">
                  {val.header}
                </h1>

                <div>
                  <p className="lg:text-2xl lg:w-[80%] lg:mx-4 2xl:text-4xl ">
                    {val.note}
                  </p>
                </div>
                
                <div className="space-y-2 font-serif font-semibold lg:w-[42rem] lg:text-2xl lg:mx-4 mt-5 2xl:mt-10 2xl:text-4xl 2xl:w-[82rem]">
                  <div className="flex flex-row">
                    <div className="mr-2">{val.icon1}</div>
                    <div>{val.list1}</div>
                  </div>

                  <div className="flex flex-row">
                    <div className="mr-2">{val.icon2}</div>
                    <div>{val.list2}</div>
                  </div>

                  <div className="flex flex-row">
                    <div className="mr-2">{val.icon3}</div>
                    <div>{val.list3}</div>
                  </div>

                  <div className="flex flex-row">
                    <div className="mr-2">{val.icon4}</div>
                    <div>{val.list4}</div>
                  </div>
                </div>

                <div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Consideration;
