import React from "react";
// import { executiveSummary } from "../data/data";
import man from "../data/files/Images/man.png";
import SmileMan from "../data/files/Images/SmileMan.png";

const ExecutiveSummary = () => {
  return (
    <>
      <div className="lines bg-black text-white w-screen min-h-screen lg:w-screen">
        <div className="">
          <div className="flex flex-col justify-center items-center pt-14 gap-6 px-3 sm:pt-0 sm:gap-1 sm:px-0">
            <div>
              <h1 className="text-2xl pt-5 lg:text-5xl 2xl:text-7xl font-joane font-bold">
                Executive Summery
              </h1>
            </div>

            <div className="w-full py-1 sm:py-3 lg:w-[72%]">
              <div className="pb-3">
                <p className="text-sm md:text-lg font-fira">
                  Journey Mapping Exercise presents an opportunity to transform
                  an unmanaged Customer Experience by building on the solid
                  foundation laid by it’s founders.
                </p>
              </div>

              <div className="flex flex-col gap-2 mx-5">
                <div className="flex gap-2 flex-row">
                  <div className="">
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  </div>

                  <div className="text-sm md:text-lg font-fira">
                    At the halfway point of 2022 the Partner’s [TP] JeS* score
                    and Onsite Conversion Rate (CvR) highlights a need to
                    optimise all phases of the customer journey:
                    <div className="mx-4">
                      <p>
                        - Onsite visits are volatile and only 13% of visitors
                        return to the site
                      </p>
                      <p>
                        - users are leaving the Partner’s [TP] website at almost
                        twice the rate of the industry average after landing on
                        the homepage
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 flex-row">
                  <div>
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  </div>

                  <div>
                    <p className="text-sm md:text-lg font-fira">
                      A CvR increase to industry average is estimated to
                      generate incremental ~£53k p.a for the business.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 flex-row">
                  <div>
                    <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  </div>

                  <div>
                    <p className="text-sm md:text-lg font-fira">
                      The Consideration Phase of the journey identified as the
                      highest friction point in the journey and therefore
                      requires urgent attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-evenly px-2 xl:w-full lg:justify-center lg:gap-7 ">
              <img
                className="w-1/2 sm:w-[27%] duration-500 ease-in-out hover:scale-[1.05] cursor-pointer"
                src={man}
                alt=""
              />
              <img
                className="w-1/2 sm:w-[27%] duration-500 ease-in-out hover:scale-[1.05] cursor-pointer"
                src={SmileMan}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExecutiveSummary;
