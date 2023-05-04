import React from "react";
import { navlink, socials } from "../data/data";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import logo from "../data/files/Images/logo.png";

const Nav = () => {
  const location = useLocation();
  return (
    <>
      <div className="nav min-h-screen flex flex-col hidden lg:block">
        <div className="logo border-none ">
          <img src={logo} alt="Logo" />
        </div>

        <div>
          <div className="flex flex-col gap-y-3 2xl:gap-y-10 mx-6 mt-8">
            {navlink.map((links, i) => (
              <Link to={links.url} key={i}>
                <div className="">
                  <div
                    className={
                      `click justify-center ` +
                      (location.pathname === links.url ? "selected" : "")
                    }
                  >
                    <div className="flex items-center py-2 px-5 lg:px-1">
                      <div className="mr-3">
                        <img
                          className="w-5 h-5 2xl:w-10 2xl:h-10"
                          src={links.icon}
                          alt=""
                        />
                      </div>

                      <div className="font-sans text-white font-normal font-normal text-sm md:text-base lg:text-lg 2xl:text-2xl">
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
                <div className="flex flex-row justify-evenly">
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
