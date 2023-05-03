import React from "react";
import { about, socials } from "../data/data";
import American from "../data/files/Images/American.png";
import Regus from "../data/files/Images/Regus.png";
import Sky from "../data/files/Images/Sky.png";

const About = () => {
  return (
    <>
      <div className=" about text-white w-screen h-screen">
        <div>
          {about.map((val, i) => (
            <div>
              <div>{val.header2}</div>
              <div>{val.note}</div>
              <div className="flex flex-col">
                <p>{val.list1}</p>
                <p>{val.list2}</p>
                <p>{val.list3}</p>
                <p>{val.list4}</p>
              </div>

              <div className="">
                <div>
                  <h3>{val.header3}</h3>
                </div>
                <div>
                  <div>
                    {socials.map((social, i) => (
                      <div className="flex space-x-8" key={i}>
                        {social.icon1}
                        {social.icon2}
                        {social.icon3}
                        {social.icon4}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <h3>{val.header4}</h3>
                </div>
                <div className=" w-[30rem] flex space-x-3">
                  <div className="rounded-lg w-[10rem] bg-white">
                    <img src={American} alt="American Express" />
                  </div>
                  <div className="rounded-lg w-[10rem] bg-white">
                    <img src={Regus} alt="Regus" />
                  </div>
                  <div className="rounded-lg w-[10rem] bg-white">
                    <img src={Sky} alt="Sky" />
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

export default About;
