import React from "react";
import { consideration } from "../data/data";
import LeftArrow from "../data/files/Icons/LeftArrow.png";
import RightArrow from "../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const Consideration = () => {
  return (
    <>
      <div className="text-white w-screen min-h-screen consideration">
        <div className="flex flex-col bg-black bg-opacity-60 h-full">
          <div className="flex h-full flex-col inset-0 justify-center items-center">
            {consideration.map((val, i) => (
              <div key={i} className="flex flex-col lg:px-4">
                <div>
                  <h1 className="text-center font-joane font-bold text-3xl py-2 lg:text-5xl lg:text-start 2xl:text-7xl  lg:pb-6">
                    {val.header}
                  </h1>
                </div>

                <div>
                  <p className="text-center text-xl font-fira font-normal py-4 md:pl-3 lg:pb-16 lg:w-[75%] lg:text-start lg:text-2xl">
                    {val.note}
                  </p>
                </div>

                <div className=" flex flex-col pl-4 gap-3 text-2xl lg:text-3xl font-joane font-normal">
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
          <div className="flex-grow"></div>

          <div className="flex justify-center sm:justify-end gap-10 p-3">
            <Link>
              <div className="bg-[#8ca28f] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
                <img src={LeftArrow} alt="" />
              </div>
            </Link>

            <Link to="/consideration/page2">
              <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
                <img src={RightArrow} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consideration;
