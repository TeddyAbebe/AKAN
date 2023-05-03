import React from "react";
import { conclusion } from "../data/data";
// import key from "../data/files/Images/"

const Conclusion = () => {
  return (
    <>
      <div className="conclusion text-black w-screen h-screen">
        <div>
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
