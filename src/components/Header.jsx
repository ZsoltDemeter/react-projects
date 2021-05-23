import "./Header.css";
import { Link } from "react-scroll";
import { PagesData } from "./PagesData";
import React, { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="header">
      <h1>Zsolt Demeter</h1>
      <div className="hamburger">
        <div className="hamburger-icon" onClick={() => setShowNav(!showNav)}>
          <span className={showNav ? "line1-transform" : ""}></span>
          <span
            style={{ transition: "0.5s ease" }}
            className={showNav ? "line2-transform" : ""}
          ></span>
          <span className={showNav ? "line3-transform" : ""}></span>
        </div>
      </div>

      <ul className={showNav ? "nav-menu-items show" : "nav-menu-items"}>
        {PagesData.map((item, index) => {
          return (
            <li key={index} className={item.className}>
              <Link
                onClick={() => setShowNav(false)}
                className="nav-link"
                activeClass="active"
                to={item.path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={650}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
