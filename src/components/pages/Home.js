import React from "react";
import { home } from "../data/data";
import woman from "../data/files/Images/woman.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import lines from "../data/files/Images/lines.png";

const Home = () => {
  return (
    <>
      <div className="bg-black text-white  w-screen min-h-screen lg:-py-24">
        <div className="p-8">
          {home.map((val, i) => (
            <div className=" flex w-auto h-auto justify-center " key={i}>
              <div>
                <h1 className="text-6xl font-serif mb-14 w-[35rem] 2xl:w-[44rem] 2xl:text-7xl">
                  {val.header}
                </h1>

                <div>
                  <p className="font-medium w-[25rem] 2xl:w-[40rem] 2xl:text-3xl mb-5">{val.note}</p>
                </div>

                <div>
                  <button className="bg-[#497E4F] h-12 w-48 text-white font-bold font-sans rounded-md 2xl:w-[15rem] 2xl:text-2xl ">
                    Start <TelegramIcon />
                  </button>
                </div>
              </div>

              <div className="w-64 2xl:w-[26rem]">
                <img src={woman} alt="Smile Woman" />
              </div>
            </div>
          ))}
        </div>

        <div>
          <img className="lg:h-44 2xl:h-fit w-full" src={lines} alt="lines" />
        </div>
      </div>
    </>
  );
};

export default Home;
