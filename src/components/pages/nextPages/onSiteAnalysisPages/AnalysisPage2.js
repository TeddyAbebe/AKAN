import React from "react";
import {
  analysisPageSec,
  analysisPageSecCards,
  analysisPageSecNotes,
} from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";

const AnalysisPage2 = () => {
  return (
    <div className="flex flex-col text-white w-screen min-h-screen analysisPageSec ">
      <div className="flex flex-col items-center">
        <div className="flex text-center items-center justify-center mt-10 mb-4 lg:mb-10  lg:mt-5 lg:w-[50%]">
          {analysisPageSec.map((val, i) => (
            <div className="">
              <h1 className="font-joane font-bold text-4xl sm:text-5xl">
                {val.header}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center lg:flex-row justify-center gap-5 lg:gap-10  w-full">
          <div className="w-[80%] lg:w-[30%]  flex flex-col justify-center items-center rounded-lg duration-1000 ease-in-out hover:scale-[1.2] cursor-pointer bg-black bg-opacity-40 px-4 py-2">
            <h2 className="font-fira font-semibold text-xl py-2">
              Device Type
            </h2>
            <div className="flex gap-2 justify-center items-center text-xs">
              <div className="bg-[#eacb83] w-1.5 h-1.5 rounded-full"></div>
              <div className="flex gap-1">
                Tables
                <p className="text-[#eacb83]">1.6%</p>
              </div>
              <div className="bg-[#9da6c6] w-1.5 h-1.5 rounded-full"></div>
              <div className="flex gap-1">
                Web
                <p className="text-[#9da6c6]">32.6%</p>
              </div>

              <div className="bg-[#e1929e] w-1.5 h-1.5 rounded-full"></div>
              <div className="flex gap-1">
                Mobile
                <p className="text-[#e1929e]">65.8%</p>
              </div>
            </div>
            <img
              src={analysisPageSecCards.card1.chart1}
              alt=""
              className=" hover:animate-spin"
            />
          </div>

          <div className="w-[80%] lg:w-[30%]  flex flex-col justify-center items-center rounded-lg duration-1000 ease-in-out hover:scale-[1.2] cursor-pointer bg-black bg-opacity-40 px-4 py-2">
            <h2 className="font-fira font-semibold text-xl py-2">Visitors</h2>
            <div className="flex">
              <div className="flex gap-2 justify-center items-center text-xs">
                <div className="bg-[#eacb83] w-1.5 h-1.5 rounded-full"></div>
                <div className="flex gap-1">
                  New User
                  <p className="text-[#eacb83]">87.6%</p>
                </div>
                <div className="bg-[#e1929e] w-1.5 h-1.5 rounded-full"></div>
                <div className="flex gap-1">
                  Returned Use
                  <p className="text-[#e1929e]">12.4%</p>
                </div>
              </div>
            </div>
            <img
              src={analysisPageSecCards.card2.chart2}
              alt=""
              className=" hover:animate-spin"
            />
          </div>
        </div>

        <div className="flex justify-evenly lg:gap-10 ">
          {analysisPageSecNotes.map((val, i) => (
            <div className="duration-1000 ease-in-out hover:scale-[1.2] cursor-pointer">
              <img className="sm:h-34 lg:h-40 xl:h-60" src={val.note} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/analysis">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>
        <Link to="/analysis/page3">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={RightArrow} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AnalysisPage2;
