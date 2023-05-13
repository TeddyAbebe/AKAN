import React, { useEffect, useState } from "react";
import { navlink, socials } from "../data/data";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import logo from "../data/files/Images/logo.png";

const Nav = ({ open, close }) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let stopAnimation, startAnimation;

    if (isAnimating) {
      // Stop the animation after 3 seconds
      stopAnimation = setTimeout(() => {
        setIsAnimating(false);
      }, 3000);
    } else {
      // Start the animation again after 2 seconds
      startAnimation = setTimeout(() => {
        setIsAnimating(true);
      }, 2000);
    }

    return () => {
      clearTimeout(stopAnimation);
      clearTimeout(startAnimation);
    };
  }, [isAnimating]);

  return (
    <>
      <div
        className={
          `sm:w-[30%] nav min-h-screen  flex-col flex fixed md:static md:flex ` +
          (open === true ? "" : "hidden")
        }
      >
        <div className="flex flex-row mt-8 justify-center w-full">
          <img
            src={logo}
            alt="Logo"
            className={`h-14 object-contain ${
              isAnimating ? "animate-pulse" : ""
            }`}
          />
        </div>

        <div>
          <div className="flex flex-col gap-y-2 2xl:gap-y mx-1 xl:mx-6 mt-8">
            {navlink.map((links, i) => (
              <Link to={links.url} onClick={close} key={i}>
                <div className="duration-300 ease-in-out hover:scale-[1.1]">
                  <div
                    className={
                      `click justify-center ` +
                      (`/${location.pathname.split("/")[1]}` === links.url
                        ? "selected"
                        : "")
                    }
                  >
                    <div className="flex items-center py-2 px-2 lg:px-5">
                      <div
                        className={
                          `mr-3 ` +
                          (`/${location.pathname.split("/")[1]}` === links.url
                            ? "animate-bounce"
                            : "")
                        }
                      >
                        {links.icon}
                      </div>

                      <div className="text-white font-fira font-normal text-sm md:text-sm lg:text-lg 2xl:text-xl">
                        {links.text}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-grow"></div>

        <div className="mt-8">
          <div>
            {socials.map((social, i) => (
              <div className="" key={i}>
                <div className="flex flex-row justify-evenly">
                  {social.icon1}
                  {social.icon2}
                  {social.icon3}
                  {social.icon4}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
