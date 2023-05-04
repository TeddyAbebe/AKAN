import React from "react";
import { consideration } from "../data/data";
import considerationBG from "../data/files/Images/consideration.png";

const Consideration = () => {
  return (
    <>
      <div className="text-white w-screen min-h-screen relative">
        <div className="flex-1 h-screen top-0 left-0 overflow-hidden">
          <img
            src={considerationBG}
            className="flex-1 object-cover w-full min-h-screen"
            alt=""
          />
        </div>
        <div className="flex flex-row absolute inset-0 bg-black bg-opacity-60 justify-center items-center backdrop-blur-sm">
          {consideration.map((val, i) => (
            <div key={i} className="flex flex-col lg:px-4">
              <div>
                <h1 className="font-serif text-center font-semibold text-3xl py-2 lg:text-5xl lg:text-start 2xl:text-7xl  lg:pb-6">
                  {val.header}
                </h1>
              </div>

              <div>
                <p className="text-center text-xl font-medium font-sans py-4 md:pl-3 lg:pb-16 lg:w-[75%] lg:text-start lg:text-2xl">
                  {val.note}
                </p>
              </div>

              <div className="font-serif font-medium flex flex-col pl-4 gap-3 text-2xl lg:text-3xl lg:font-semibold">
                <div className="flex flex-row">
                  <img className="mr-3" src={val.icon1} alt="" />
                  <div>{val.list1}</div>
                </div>

                <div className="flex flex-row">
                  <img className="mr-3" src={val.icon2} alt="" />

                  <div>{val.list2}</div>
                </div>

                <div className="flex flex-row">
                  <img className="mr-3" src={val.icon3} alt="" />

                  <div>{val.list3}</div>
                </div>

                <div className="flex flex-row">
                  <img className="mr-3" src={val.icon4} alt="" />
                  <div>{val.list4}</div>
                </div>
              </div>

              <div></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Consideration;
