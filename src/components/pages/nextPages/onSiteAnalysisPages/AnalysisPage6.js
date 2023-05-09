import React from "react";
import { Link } from "react-router-dom";
import { analysisPageSix, analysisPageSixDiagram } from "../../../data/data";
import headPic0 from "../../../data/files/Images/analysisPageSixDiagram/headPic0.png";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";

const AnalysisPage6 = () => {
  return (
    <div className="bg-black flex flex-col pt-16 2xl:pt-20 sm:pt-2 text-white w-screen min-h-screen analysisPageFour">
      <div>
        <div className="px-4">
          {analysisPageSix.map((val, i) => (
            <div className="flex flex-col justify-center items-center">
              <div className="sm:mb-6">
                <h1 className="text-center font-joane font-bold text-2xl sm:text-3xl lg:text-4xl max-w-[35rem] ">
                  {val.header}
                </h1>
              </div>
              <div className="text-center font-fira font-normal sm:text-base lg:text-lg xl:text-xl xl:max-w-[51rem] 2xl:max-w-[70rem] pb-2">
                <p>{val.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="h-10 sm:pl-20 -mb-10">
            <img src={headPic0} alt="" />
          </div>

          <div className="flex flex-wrap lg:flex-row gap-2 lg:gap-4 justify-center border-[#497E4F] border-8 pr-6 pl-6 pb-4 pt-10 mt-12 mx-10">
            {analysisPageSixDiagram.map((item) => (
              <div className="flex sm:w-[30%]; 2xl:w-[20%] duration-300 ease-in-out hover:scale-[1.11] cursor-pointer">
                <div className="flex flex-col bg-white rounded-xl overflow-hidden">
                  <div className="h-[30%] w-full bg-white flex justify-center items-center">
                    <img src={item.head} alt="" className="object-contain" />
                  </div>
                  <div className="h-[205px] flex flex-row justify-evenly bg-[#497E4F] text-white">
                    <div className="flex flex-col justify-evenly">
                      <div className="text-base font-medium">Consideration</div>
                      <div className="text-base font-medium">Decision</div>
                      <div className="text-base font-medium">Loyality</div>
                    </div>
                    <div className="flex flex-row py-4">
                      <div className="flex flex-col h-full px-1 justify-center">
                        <div className="text-xl font-bold">{item.number}</div>
                      </div>
                      <div className="flex flex-col my-[24px] border-[3px] border-r-0 border-white w-6"></div>
                      <div className="flex flex-col justify-between">
                        <div className="w-[35px] h-[35px] rounded-full border-[3px] border-white bg-[#497E4F] flex justify-center items-center">
                          <div className="text-base font-medium">
                            <img src={item.percentage1} alt="" />
                          </div>
                        </div>
                        <div className="w-[35px] h-[35px] rounded-full border-[3px] border-white bg-[#497E4F] flex justify-center items-center">
                          <div className="text-base font-medium">
                            <img src={item.percentage2} alt="" />
                          </div>
                        </div>
                        <div className="w-[35px] h-[35px] rounded-full border-[3px] border-white bg-[#497E4F] flex justify-center items-center">
                          <div className="text-base font-medium">
                            <img src={item.percentage3} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/analysis/page5">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>
        <div className="bg-[#8ca28f] rounded-lg p-3 w-8 h-8 flex justify-center items-center">
          <img src={RightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage6;
