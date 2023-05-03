import React from "react";
import { conclusion } from "../data/data";
import conclusionBG from "../data/files/Images/conclusion.png";

const Conclusion = () => {
  return (
    <>
      <div className=" text-white w-screen min-h-screen relative">
        <div className="flex-1 h-screen absolute top-0 left-0 overflow-hidden">
          <img
            src={conclusionBG}
            className="flex-1 object-contain min-h-screen"
            alt=""
          />
        </div>
        <div className="flex flex-row absolute inset-0 bg-black bg-opacity-60 justify-center items-center backdrop-blur-sm">
          {conclusion.map((val, i) => (
            <div key={i}>
              <div className="font-serif font-semibold lg:text-5xl lg:my-10 2xl:text-8xl">
                <h1>{val.header}</h1>
              </div>
              <div className="flex space-x-4">
                <div className="font-serif font-semibold lg:text-2xl 2xl:text-8xl">
                  <h1>{val.header2}</h1>
                </div>
                {val.icon}
              </div>

              <div>
                <p>{val.note1}</p>
                <p>{val.note2}</p>
                <p>{val.note3}</p>
              </div>

              <div className="flex flex-col">
                <div className="flex">
                  <div>{val.icon1}</div>
                  <div>
                    <h4>{val.head1}</h4>
                    <p>{val.headNote1}</p>
                  </div>
                </div>

                <div className="flex">
                  <div>{val.icon2}</div>
                  <div>
                    <h4>{val.head2}</h4>
                    <p>{val.headNote2}</p>
                  </div>
                </div>

                <div className="flex">
                  <div>{val.icon3}</div>
                  <div>
                    <h4>{val.head3}</h4>
                    <p>{val.headNote3}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Conclusion;
