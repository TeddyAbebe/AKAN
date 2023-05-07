import React from "react";
import { navlink, socials } from "../data/data";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import logo from "../data/files/Images/logo.png";

const Nav = ({ open }) => {
  const location = useLocation();
  return (
    <>
      <div
        className={
          `sm:w-[30%] nav min-h-screen  flex-col flex fixed md:static md:flex ` +
          (open === true ? "" : "hidden")
        }
      >
        <div className="flex flex-row mt-8 justify-center w-full">
          <img src={logo} alt="Logo" className="h-14 object-contain" />
        </div>

        <div>
          <div className="flex flex-col gap-y-2 2xl:gap-y mx-1 xl:mx-6 mt-8">
            {navlink.map((links, i) => (
              <Link to={links.url} key={i}>
                <div className="">
                  <div
                    className={
                      `click justify-center ` +
                      (location.pathname === links.url ? "selected" : "")
                    }
                  >
                    <div className="flex items-center py-2 px-2 lg:px-5">
                      <div className="mr-3">
                        <img
                          className="w-5 h-5 2xl:w-6 2xl:h-6"
                          src={links.icon}
                          alt=""
                        />
                      </div>

                      <div className="font-sans text-white font-normal text-sm md:text-sm lg:text-lg 2xl:text-xl">
                        {links.text}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div>
            {socials.map((social, i) => (
              <div className="" key={i}>
                <div className="flex flex-row justify-center gap-8">
                  <img className="" src={social.icon1} alt="" />
                  <img className="" src={social.icon2} alt="" />
                  <img className="" src={social.icon3} alt="" />
                  <img className="" src={social.icon4} alt="" />
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
