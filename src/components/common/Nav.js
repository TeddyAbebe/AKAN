import React from "react";
import { navlink } from "../data/data";
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
          <div className="m-12 ">
            {navlink.map((links, i) => (
              <Link to={links.url} key={i}>
                <div className="click flex my-4 p-1">
                  <div className="mr-4">{links.icon}</div>
                  <div className="font-sans text-white font-normal ">
                    {links.text}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
