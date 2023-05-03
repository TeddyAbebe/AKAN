import React from "react";
import { navlink, socials } from "../data/data";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import logo from "../data/files/Images/logo.png";

const Nav = () => {
  const location = useLocation();
  return (
    <>
      <div className="nav min-h-screen flex flex-col hidden md:block">
        <div className="logo border-none ">
          <img src={logo} alt="Logo" />
        </div>

        <div>
          <div className="my-12 mx-4">
            {navlink.map((links, i) => (
              <Link to={links.url} key={i}>
                <div
                  className={
                    `click flex my-2 py-1.5 px-2 ` +
                    (location.pathname === links.url ? "selected" : "")
                  }
                >
                  <div className="mr-4">{links.icon}</div>
                  <div className="font-sans text-white font-normal ">
                    {links.text}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-grow"></div>

        <div className="pb-4">
          <div>
            {socials.map((social, i) => (
              <div className="flex flex-row justify-evenly" key={i}>
                {social.icon1}
                {social.icon2}
                {social.icon3}
                {social.icon4}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
