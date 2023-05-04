import React from "react";
import { feedback } from "../data/data";
import feedbackBG from "../data/files/Images/feedback.png";

const UserFeedback = () => {
  return (
    <>
      <div className="w-screen min-h-screen">
        <div>
          <div>
            {feedback.map((val, i) => (
              <div key={i}>
                <div className="bg-black text-white p-4">
                  <h1 className="text-4xl mb-2 text-center font-semibold font-sans md:text-7xl">
                    {val.header}
                  </h1>
                  <h2 className="text-3xl mb-2 text-center font-semibold font-sans md:text-5xl">
                    {val.secHeader}
                  </h2>
                  <h3 className="text-2xl mb-2 font-semibold font-sans md:text-3xl">
                    {val.noteHeader}
                  </h3>
                  <p className="text-xl lg:text-left md:text-2xl">{val.note}</p>
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
                    <div className="text-3xl my-6 text-center font-semibold font-sans md:text-5xl">
                      {val.Header2}
                    </div>
                    <div className="bg-white text-black">
                      <div>
                        <div>
                          <img src={val.image} alt="Users" />
                          <h4>{val.feedbackTitle}</h4>
                        </div>
                        <p>{val.feedback}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
