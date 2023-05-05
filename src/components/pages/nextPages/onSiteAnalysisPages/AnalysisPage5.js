import React from 'react'
import { analysisPageFive } from '../../../data/data';

const AnalysisPage5 = () => {
  return (
    <div className="bg-black flex flex-col pt-24 sm:pt-10 items-center text-white w-screen min-h-screen analysisPageFour">
      <div>
        {analysisPageFive.map((val, i) => (
          <div className="flex flex-col justify-center items-center">
            <div className="sm:mb-10">
              <h1 className="text-center font-sans font-bold text-3xl sm:text-5xl lg:text-6xl">
                {val.header}
              </h1>
            </div>
            <div className="">
              <img className="h-36 md:h-52 my-10" src={val.graph} alt="" />
            </div>
            <div className="">
              <img className="h-48 sm:h-64" src={val.note} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnalysisPage5
