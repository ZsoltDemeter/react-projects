import React from "react";
import { Link } from "react-scroll";
import { PagesData } from "./PagesData";

const Header = () => {
  return (
    <div className="header">
      <h1>Zsolt Demeter</h1>
      <nav className="nav-menu">
        <ul className="nav-menu-items">
          {PagesData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link
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
      </nav>
    </div>
  );
};

export default Header;
