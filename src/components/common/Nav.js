import React from "react";
import { navlink, socials } from "../data/data";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../data/files/Images/logo.png";

const Nav = () => {
  return (
    <>
      <div className="nav h-screen">
        <div className="logo border-none ">
          <img src={logo} alt="Logo" />
        </div>

        <div>
          <div className="my-12 mx-8">
            {navlink.map((links, i) => (
              <Link to={links.url} key={i}>
                <div className="click flex my-2 p-1">
                  <div className="mr-4">{links.icon}</div>
                  <div className="font-sans text-white font-normal ">
                    {links.text}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div>
            {socials.map((social, i) => (
              <div className="flex m-8 space-x-8 absolute" key={i}>
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
