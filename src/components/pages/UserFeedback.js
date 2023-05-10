import React from "react";
import { feedback, feedbackData } from "../data/data";
import messageIcon from "../data/files/Icons/messageIcon.png";

const UserFeedback = () => {
  return (
    <>
      <div className="w-screen min-h-screen">
        <div className="flex flex-col h-full">
          <div className="bg-black text-white p-3 flex flex-col items-center">
            <div className="w-full md:w-5/6">
              <h1 className="text-3xl md:text-5xl  text-center font-joane font-bold">
                {feedbackData.mainHeader.header}
              </h1>
              <h2 className="text-xl md:text-3xl mb-2 text-center font-fira font-normal">
                {feedbackData.mainHeader.secHeader}
              </h2>
              <h3 className="text-base md:text-lg font-fira font-semibold">
                {feedbackData.mainHeader.noteHeader}
              </h3>
              <p className="text-sm md:text-base lg:text-left mb-3.5 font-fira font-normal">
                {feedbackData.mainHeader.note}
              </p>
            </div>
          </div>

          <div className="text-white feedback flex flex-grow h-full">
            <div className="flex flex-col flex-grow h-full ">
              <div className="text-2xl md:text-4xl py-2 md:pt-5 text-center font-joane font-bold">
                {feedbackData.secondaryHeader.Header2}
              </div>

              <div className="flex flex-row flex-wrap flex-grow">
                {feedback.map((val, i) => (
                  <div key={i} className="sm:w-1/2 lg:w-1/3 p-2 sm:p-3">
                    <div className="bg-white text-black h-full rounded-xl p-4 duration-300 ease-in-out hover:scale-[1.05] cursor-pointer">
                      <div>
                        <div className="flex flex-row gap-4 items-center mb-2.5">
                          <img
                            src={val.image}
                            alt="Users"
                            className="w-9 h-9"
                          />
                          <h4 className="text-[#3D9BA2] font-semibold">
                            {val.feedbackTitle}
                          </h4>
                          <img
                            src={messageIcon}
                            alt="Message"
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                        <p className="text-sm lg:text-base font-semibold text-[#53686A]">
                          {val.feedback}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFeedback;
