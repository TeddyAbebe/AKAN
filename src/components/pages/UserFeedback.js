import React from "react";
import { feedback, feedbackData } from "../data/data";
import feedbackBG from "../data/files/Images/feedback.png";
import messageIcon from "../data/files/Icons/messageIcon.png"

const UserFeedback = () => {
  return (
    <>
      <div className="w-screen min-h-screen">
        <div>
          <div className="flex flex-col">
            <div className="bg-black text-white p-4 flex flex-col items-center">
              <div className="w-full md:w-5/6">
                <h1 className="text-3xl md:text-6xl  text-center font-semibold font-sans">
                  {feedbackData.mainHeader.header}
                </h1>
                <h2 className="text-xl md:text-4xl mb-2 text-center font-semibold font-sans">
                  {feedbackData.mainHeader.secHeader}
                </h2>
                <h3 className="text-base md:text-lg  font-semibold font-sans">
                  {feedbackData.mainHeader.noteHeader}
                </h3>
                <p className="text-sm md:text-base lg:text-left mb-3">
                  {feedbackData.mainHeader.note}
                </p>
              </div>
            </div>

            <div className="min-h-screen text-white relative ">
              <div className="absolute overflow-hidden">
                <img
                  src={feedbackBG}
                  className="flex-1 object-cover min-h-screen"
                  alt=""
                />
              </div>

              <div className="absolute">
                <div className="text-2xl md:text-4xl my-2 md:my-6 text-center font-semibold font-sans">
                  {feedbackData.secondaryHeader.Header2}
                </div>

                <div className="flex flex-row flex-wrap">
                  {feedback.map((val, i) => (
                    <div key={i} className="sm:w-1/2 lg:w-1/3 p-2 sm:p-4 ">
                      <div className="bg-white text-black h-full rounded-xl p-4">
                        <div>
                          <div className="flex flex-row gap-4 items-center mb-2">
                            <img src={val.image} alt="Users" className="w-9 h-9" />
                            <h4 className="text-[#3D9BA2] font-medium">
                              {val.feedbackTitle}
                            </h4>
                            <img src={messageIcon} alt="Message" className="w-5 h-5 object-contain"/>
                          </div>
                          <p className="text-sm">{val.feedback}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFeedback;

{
  /* <div className="flex flex-wrap gap-2 md:gap- md:justify-center lg:max-w-[90%] ">
                      <div className=" w-[48.93%]  lg:w-[25%]">
                        <div className="bg-white text-black w-full p-1 rounded-xl h-full">
                          <div className="flex gap-1.5 text-base md:text-2xl md:gap-10  items-center text-[#3D9BA2]">
                            <img src={user1} alt="User" />
                            {val.feedback1Header}
                            {val.icon}
                          </div>
                          <div className="text-xl md:text-2xl lg:text-xl">
                            {val.feedback1}
                          </div>
                        </div>
                      </div>

                      <div className=" w-[48.93%]  lg:w-[25%]">
                        <div className="bg-white text-black w-full p-1 rounded-xl h-full">
                          <div className="flex gap-1.5 text-base md:text-2xl md:gap-10 items-center text-[#3D9BA2]">
                            <img src={user2} alt="User" />
                            {val.feedback2Header}
                            {val.icon}
                          </div>
                          <div className="text-xl md:text-2xl lg:text-xl">
                            {val.feedback2}
                          </div>
                        </div>
                      </div>

                      <div className=" w-[48.93%]  lg:w-[25%]">
                        <div className="bg-white text-black w-full p-1 rounded-xl h-full">
                          <div className="flex gap-1.5 text-base md:text-2xl md:gap-10 items-center text-[#3D9BA2]">
                            <img src={user3} alt="User" />
                            {val.feedback3Header}
                            {val.icon}
                          </div>
                          <div className="text-xl md:text-2xl">
                            {val.feedback3}
                          </div>
                        </div>
                      </div>

                      <div className=" w-[48.93%]  lg:w-[25%]">
                        <div className="bg-white text-black w-full p-1 rounded-xl h-full">
                          <div className="flex gap-1.5 text-base md:text-2xl md:gap-10 items-center text-[#3D9BA2]">
                            <img src={user4} alt="User" />
                            {val.feedback4Header}
                            {val.icon}
                          </div>
                          <div className="text-xl md:text-2xl">
                            {val.feedback4}
                          </div>
                        </div>
                      </div>

                      <div className=" w-[48.93%]  lg:w-[25%]">
                        <div className="bg-white text-black w-full p-1 rounded-xl h-full">
                          <div className="flex gap-1.5 text-base md:text-2xl md:gap-10 items-center text-[#3D9BA2]">
                            <img src={user5} alt="User" />
                            {val.feedback5Header}
                            {val.icon}
                          </div>
                          <div className="text-xl md:text-2xl">
                            {val.feedback5}
                          </div>
                        </div>
                      </div>

                      <div className=" w-[48.93%]  lg:w-[25%]">
                        <div className="bg-white text-black w-full p-1 rounded-xl h-full">
                          <div className="flex gap-1.5 text-base md:text-2xl md:gap-10 items-center text-[#3D9BA2]">
                            <img src={user6} alt="User" />
                            {val.feedback6Header}
                            {val.icon}
                          </div>
                          <div className="text-xl md:text-2xl">
                            {val.feedback6}
                          </div>
                        </div>
                      </div>
                    </div> */
}
