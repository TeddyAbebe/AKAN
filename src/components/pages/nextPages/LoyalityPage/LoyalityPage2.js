import React from "react";
import { loyalityPageTwo } from "../../../data/data";
import LeftArrow from "../../../data/files/Icons/LeftArrow.png";
import RightArrow from "../../../data/files/Icons/RightArrow.png";
import { Link } from "react-router-dom";
import iPhone from "../../../data/files/Images/iPhoneScreenWhite.png";
import Card23 from "../../../data/files/Images/Card23.png";
import Card24 from "../../../data/files/Images/Card24.png";
import Card25 from "../../../data/files/Images/Card25.png";
import Card26 from "../../../data/files/Images/Card26.png";

const LoyalityPage2 = () => {
  return (
    <div className="flex flex-col dotmap bg-black text-white w-screen min-h-screen">
      <div className="mt-32 lg:mt-20 flex flex-col justify-center items-center gap-6">
        <div>
          {loyalityPageTwo.map((val, i) => (
            <div className="text-xl sm:text-2xl font-joane font-bold text-center md:text-3xl">
              <h1>{val.header}</h1>
            </div>
          ))}
        </div>

        <div className="w-full gap-6 flex justify-between lg:justify-center">
          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textThirtyTwo">
              <div className="w-3 h-2 sm:w-5 sm:h-3 left-[7%] top-[27.5%] sm:text-[8px] absolute sm:left-[8.5%] sm:top-[29%]"></div>

              <p className="text32 absolute border text-black bg-[#bcd6ac] font-fira font-normal rounded-lg text-[5px] sm:text-[8px] sm:top-[22%] left-[25%] right-[3%] p-1">
                Order arrived on time in neatly packaged brown box
              </p>
            </div>

            <div className="cursor-pointer textThirtyThree">
              <div className="w-3 h-2 sm:w-5 sm:h-3 left-[7%] top-[37%] absolute sm:left-[8.5%] sm:top-[39%]"></div>

              <p className="text33 absolute border bg-[#d08370] font-fira font-normal rounded-lg text-[5px] sm:text-[8px] sm:top-[42%] left-[25%] right-[3%] p-1">
                The synthetic loose fill chips in the box disaffirm brand ethos
                of ‘natural/ethical’. No smell from the box to excite and
                reaffirm quality / freshness
              </p>
            </div>

            <div className="cursor-pointer textThirtyFour">
              <div className="w-3 h-2 sm:w-5 sm:h-3 left-[27%] top-[47%] absolute sm:left-[28%] sm:top-[50%]"></div>

              <p className="text34 text-black absolute border bg-[#bcd6ac] font-fira font-normal rounded-lg text-[5px] sm:text-[8px] sm:top-[57%] top-[53%] left-[25%] right-[3%] p-1">
                Velvet finish on sleeve feels and looks slick..
              </p>
            </div>

            <div className="cursor-pointer textThirtyFive">
              <div className="w-3 h-2 sm:w-5 sm:h-3 left-[68%] top-[40%] absolute sm:left-[68.5%] sm:top-[42%]"></div>

              <p className="text35 absolute border bg-[#d08370] font-fira font-normal rounded-lg text-[3.5px] sm:text-[7px] sm:top-[48%] top-[47%] left-[3%] right-[3%] p-0.5">
                ..however design is off brand; feels more corporate/medicinal,
                not herbal. No visual clues/designs on the sleeve or box to
                indicate this is a product for the brain or a herbal tea. The
                copy is very formal and confusing; sometimes the tea containers
                are referred to as jars, in places it’s referred to as vails.
                Tone of voice also lacks personality.
              </p>
            </div>

            <img className="-mb-[150%] sm:h-[253px]" src={iPhone} alt="" />
            <img
              className="ml-0.5 w-[94%] sm:ml-1.5 sm:h-[155px] sm:w-[92%]"
              src={Card23}
              alt=""
            />
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textThirtySix">
              <div className="w-3 h-2 sm:w-5 sm:h-3 left-[7%] top-[65%] sm:text-[8px] absolute sm:left-[8.5%] sm:top-[67%]"></div>

              <p className="text36 absolute border text-black bg-[#bcd6ac] font-fira font-normal rounded-lg text-[5px] sm:text-[8px] top-[72%] sm:top-[75%] left-[3%] right-[3%] p-1">
                The box looks sleek & feels sturdy
              </p>
            </div>

            <div className="cursor-pointer textThirtySeven">
              <div className="w-3 h-2 sm:w-5 sm:h-3 left-[45%] top-[56%] absolute sm:left-[46%] sm:top-[59%]"></div>

              <p className="text37 absolute border bg-[#d08370] font-fira font-normal rounded-lg text-[5px] sm:text-[8px] top-[29%] sm:top-[35%] left-[3%] right-[3%] p-1">
                Glossy finish on the box feels unnatural and clashes with the
                sleeve.
              </p>
            </div>

            <img className="-mb-[150%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="ml-0.5 w-[94%] sm:ml-1.5 sm:h-[155px] sm:w-[92%]"
                src={Card24}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textThirtyEight">
              <div className=" w-3 h-2 sm:w-5 sm:h-3 left-[30%] top-[48.5%] sm:text-[8px] absolute sm:left-[32%] sm:top-[50%]"></div>

              <p className="text38 absolute border text-black bg-[#bcd6ac] font-fira font-normal rounded-lg text-[5px] sm:text-[8px] top-[56%] sm:top-[57%] left-[3%] right-[3%] p-1">
                Products neatly organised in the box; the jars look great and
                are easy to open.
              </p>
            </div>
            <img className="-mb-[150%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="ml-0.5 w-[94%] sm:ml-1.5 sm:h-[155px] sm:w-[92%]"
                src={Card25}
                alt=""
              />
            </div>
          </div>

          <div className="relative duration-300 ease-in-out hover:scale-[1.2] cursor-pointer">
            <div className="cursor-pointer textThirtyNine">
              <div className="w-3 h-2 sm:w-5 sm:h-3 left-[5%] top-[71%] sm:text-[8px] absolute sm:left-[5.5%] sm:top-[72%]"></div>

              <p className="text39 absolute border text-black bg-[#bcd6ac] font-fira font-normal rounded-lg text-[5px] sm:text-[8px] top-[56%] sm:top-[57%] left-[20%] right-[3%] p-1">
                Great addition for user onboarding with informative content..
              </p>
            </div>

            <div className="cursor-pointer textFourty">
              <div className="w-3 h-2 sm:w-5 sm:h-3 left-[63%] top-[63%] sm:text-[8px] absolute"></div>

              <p className="text40 absolute border bg-[#d08370] font-fira font-normal rounded-lg text-[4px] sm:text-[7px] top-[40%] sm:top-[31%] right-[3%] left-[3%] p-1">
                ..however it’s Very copy-heavy; less text and more
                images/diagrams. Moreover there’s no information on what to do
                with the jars once empty; either recycle or return.
              </p>
            </div>
            
            <img className="-mb-[150%] sm:h-[253px]" src={iPhone} alt="" />
            <div className="">
              <img
                className="ml-0.5 w-[94%] sm:ml-1.5 sm:h-[155px] sm:w-[92%]"
                src={Card26}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-center sm:justify-end gap-10 p-3">
        <Link to="/loyality">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={LeftArrow} alt="" />
          </div>
        </Link>

        <Link to="/loyality/page3">
          <div className="bg-[#3f6d44] rounded-lg p-3 w-8 h-8 flex justify-center items-center duration-300 ease-in-out hover:scale-[1.2]">
            <img src={RightArrow} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LoyalityPage2;
