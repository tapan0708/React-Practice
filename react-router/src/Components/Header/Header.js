import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./../../Css/Style.css";

function Header() {
  return (
    <div className="nav-container nav-flex nav-bg-color">
      <h1>Header</h1>
      {/* <h3 className="nav-content">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/contact"}>Contact Us</Link>
      </h3> */}
      <h3 className="nav-content">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blueViolet" : "text-black"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${isActive ? "text-blueViolet" : "text-black"}
            `
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blueViolet" : "text-black"
          }
          to={"/services"}
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blueViolet" : "text-black"
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
        <Link to={"/user/15"}>User</Link>
      </h3>
      <div>=</div>
    </div>
  );
}

export default Header;
