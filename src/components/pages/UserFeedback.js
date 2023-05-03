import React from "react";
import { feedback } from "../data/data";
import user1 from "../data/files/Images/user1.png";
import user2 from "../data/files/Images/user2.png";
import user3 from "../data/files/Images/user3.png";
import user4 from "../data/files/Images/user4.png";
import user5 from "../data/files/Images/user5.png";
import user6 from "../data/files/Images/user6.png";
import feedbackBG from "../data/files/Images/feedback.png";

const UserFeedback = () => {
  return (
    <>
      <div className="w-screen min-h-screen">
        <div>
          <div>
            {feedback.map((val, i) => (
              <div key={i}>
                <div className="bg-black text-white">
                  <h1 className="text-3xl mb-2 text-center font-semibold font-sans md:text-5xl">
                    {val.header}
                  </h1>
                  <h2 className="text-2xl mb-2 text-center font-semibold font-sans md:text-3xl">
                    {val.secHeader}
                  </h2>
                  <h3 className="text-xl mb-2 font-semibold font-sans md:text-2xl">
                    {val.noteHeader}
                  </h3>
                  <p className="text-center lg:text-left">{val.note}</p>
                </div>

                <div className="min-h-screen text-white relative ">
                  <div className="absolute overflow-hidden">
                    <img src={feedbackBG} className="flex-1 object-contain" alt="" />
                  </div>

                  <div className="absolute">
                    <div className="text-2xl text-center font-semibold font-sans md:text-4xl md:py-4">
                      {val.Header2}
                    </div>

                    <div className="flex flex-wrap ">
                      <div className="w-full md:w-1/2 lg:w-1/3 px-6 py-4">
                        <div className="bg-white text-black w-full p-4 rounded-xl h-full">
                          <div className="flex gap-8 items-center text-[#3D9BA2]">
                            <img src={user1} alt="User" />
                            {val.feedback1Header}
                            {val.icon}
                          </div>
                          {val.feedback1}
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 lg:w-1/3 px-6 py-4">
                        <div className="bg-white text-black w-full p-4 rounded-xl h-full">
                          <div className="flex gap-8 items-center text-[#3D9BA2]">
                            <img src={user2} alt="User" />
                            {val.feedback2Header}
                            {val.icon}
                          </div>
                          {val.feedback2}
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 lg:w-1/3 px-6 py-4">
                        <div className="bg-white text-black w-full p-4 rounded-xl h-full">
                          <div className="flex gap-8 items-center text-[#3D9BA2]">
                            <img src={user3} alt="User" />
                            {val.feedback3Header}
                            {val.icon}
                          </div>
                          {val.feedback3}
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 lg:w-1/3 px-6 py-4">
                        <div className="bg-white text-black w-full p-4 rounded-xl h-full">
                          <div className="flex gap-8 items-center text-[#3D9BA2]">
                            <img src={user4} alt="User" />
                            {val.feedback4Header}
                            {val.icon}
                          </div>
                          {val.feedback4}
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 lg:w-1/3 px-6 py-4">
                        <div className="bg-white text-black w-full p-4 rounded-xl h-full">
                          <div className="flex gap-8 items-center text-[#3D9BA2]">
                            <img src={user5} alt="User" />
                            {val.feedback5Header}
                            {val.icon}
                          </div>
                          {val.feedback5}
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 lg:w-1/3 px-6 py-4">
                        <div className="bg-white text-black w-full p-4 rounded-xl h-full">
                          <div className="flex gap-8 items-center text-[#3D9BA2]">
                            <img src={user6} alt="User" />
                            {val.feedback6Header}
                            {val.icon}
                          </div>
                          {val.feedback6}
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
    </>
  );
};

export default UserFeedback;
