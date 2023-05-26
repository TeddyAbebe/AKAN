import React from "react";
import { loyalityPageFour } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import iPhone from "../../../data/files/Images/iPhoneScreenWhite.png";
import Card28 from "../../../data/files/Images/Card28.svg";
import Card29 from "../../../data/files/Images/Card29.png";
import Card30 from "../../../data/files/Images/Card30.svg";
import Card31 from "../../../data/files/Images/Card31.svg";
import { IoChatboxSharp } from "react-icons/io5";
import angle from "../../../data/files/Images/angle2.png";



const LoyalityPage4 = () => {
  return (
    <div className="flex flex-col dotmap bg-black text-white w-screen min-h-screen">
      <div>
        <h2 className="absolute top-[3%] right-[1%] z-[1] font-fira font-bold text-[17px]">
          JES:50%
        </h2>
      </div>
      <img src={angle} alt="" className="absolute top-0 right-0" />
      <div className="mt-16 lg:mt-24 flex flex-col justify-center items-center gap-6">
        <div>
          {loyalityPageFour.map((val, i) => (
            <div className="text-xl sm:text-2xl font-joane font-bold text-center md:text-3xl tracking-wide">
              <h1>{val.header}</h1>
            </div>
          ))}
        </div>

        <div className="w-full gap-6 flex justify-evenly lg:justify-center">
          <div className="relative duration-300 ease-in-out hover:scale-[1.15] cursor-pointer">
            <div className="cursor-pointer textFourtySix">
              <div>
                <IoChatboxSharp className="absolute left-[10%] top-[35%] fill-[#d08370] h-6 w-6" />

                <p className="text-black font-bold text-[8px] absolute top-[37%] left-[13%]">
                  46
                </p>
              </div>

              <p className="text46 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[5px] sm:text-[7px] top-[42%] sm:top-[30%] sm:left-[26%] mx-3 p-1">
                Not personalised and timing of the content relevant given the
                time of year but also really random - i’d expect something more
                personalised to my order. Yet this is recommended a product i’ve
                already ordered
              </p>
            </div>

            <img className="-mb-[180%] sm:h-[265px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="ml-1.5 sm:h-[250px] sm:w-[90%] rounded-xl sm:rounded-2xl"
                src={Card31}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.15] cursor-pointer">
            <div className="cursor-pointer textFourtyTwo">
              <div>
                <IoChatboxSharp className="absolute left-[50%] top-[20%] fill-[#d08370] h-3 w-3 sm:h-6 sm:w-6" />
                <p className="text-black font-bold text-[6px] sm:text-[8px] absolute top-[21.5%] left-[53%] sm:left-[55%]">
                  42
                </p>
              </div>

              <p className="text42 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[30%] mx-3 p-1">
                Subscription confirmation email is off-brand and looks like a
                phishing email.
              </p>
            </div>

            <div className="cursor-pointer textFourtyThree">
              <div>
                <IoChatboxSharp className="absolute left-[30%] top-[55%] fill-[#d08370] h-3 w-3 sm:h-6 sm:w-6" />

                <p className="text-black font-bold text-[6px] sm:text-[8px] absolute top-[56.5%] left-[33%] sm:left-[35%]">
                  43
                </p>
              </div>

              <p className="text43 absolute border bg-[#d08370] text-black font-fira font-normal rounded-lg text-[3px] sm:text-[7px] top-[65%] mx-3 p-1">
                The CTA for ‘Manage Subscription’ takes users to a standalone
                Card Info page. The Membership dashboard lacks interactivity and
                a sense of community
              </p>
            </div>
            <img className="-mb-[182%]  sm:h-[253px]" src={iPhone} alt="" />
            <div>
              <img
                className="w-[94%] ml-0.5 sm:h-[246px] sm:ml-1 rounded-xl sm:rounded-2xl"
                src={Card28}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.15] cursor-pointer">
            <div className="cursor-pointer textFourtyFour">
              <div>
                <IoChatboxSharp className="absolute left-[60%] top-[30%] fill-[#bcd6ac] h-3 w-3 sm:h-6 sm:w-6" />

                <p className="text-black font-bold text-[6px] sm:text-[8px] absolute top-[31%] sm:top-[32%] left-[63%] sm:left-[65%]">
                  44
                </p>
              </div>

              <p className="text44 absolute border bg-[#bcd6ac] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[10%] sm:top-[19%] right-[39.5%] ml-1  p-1">
                Great use of customer feedback to better understand your
                customer experience from their perspective
              </p>
            </div>

            <img className="-mb-[182%]  sm:h-[253px]" src={iPhone} alt="" />
            <div>
              <img
                className="w-[94%] ml-0.5 sm:h-[246px] sm:ml-1"
                src={Card29}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.15] cursor-pointer">
            <div className="cursor-pointer textFourtyFive">
              <div>
                <IoChatboxSharp className="absolute left-[40%] top-[28%] fill-[#bcd6ac] h-3 w-3 sm:h-6 sm:w-6" />

                <p className="text-black font-bold text-[6px] sm:text-[8px] absolute top-[28.5%] sm:top-[29.5%] left-[43%] sm::left-[45%]">
                  45
                </p>
              </div>

              <p className="text45 absolute border bg-[#bcd6ac] text-black font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[36%] sm:top-[37%] right-[38%] ml-1 p-1">
                Helpful and informative content delivered in an eye-catching
                template.
              </p>
            </div>
            <img className="-mb-[182%]  sm:h-[253px]" src={iPhone} alt="" />
            <div>
              <img
                className="w-[94%] ml-0.5 sm:h-[246px] sm:ml-1 rounded-xl sm:rounded-2xl"
                src={Card30}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/loyality/page3">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>

        <Link>
          <div className="bg-[#8ca28f] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={RightArrow} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LoyalityPage4;
