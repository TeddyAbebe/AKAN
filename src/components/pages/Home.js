import React from "react";
import { home } from "../data/data";
import woman from "../data/files/Images/woman.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import lines from "../data/files/Images/lines.png";

const Home = () => {
  return (
    <>
      <div className="bg-black text-white  w-screen h-screen">
        <div className="p-14">
          {home.map((val, i) => (
            <div className="flex w-[60rem] h-[24rem]">
              <div>
                <h1 className="text-6xl font-serif mb-14 w-[35rem]">
                  {val.header}
                </h1>

                <div>
                  <p className="font-medium w-[25rem] mb-5">{val.note}</p>
                </div>

                <div>
                  <button className="bg-[#497E4F] h-12 w-48 text-white font-bold font-sans rounded-md ">
                    Start <TelegramIcon />
                  </button>
                </div>
              </div>

              <div className="w-64">
                <img src={woman} alt="Smile Woman" />
              </div>
            </div>
          ))}
        </div>

        <div>
          <img className="h-44 w-full" src={lines} alt="lines" />
        </div>
      </div>
    </>
  );
};

export default Home;
