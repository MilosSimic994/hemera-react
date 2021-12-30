import React from "react";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav className="main__navigation">
      <ul>
        <li className="main__navigation-logo">Hemera</li>
        <li>
          <NavLink to="/">
            Naslovna
          </NavLink>
        </li>
        <li>
          <NavLink to="/das">
            O nama
          </NavLink>
        </li>
        <li>
          <NavLink to="/das">
            Proizvodi
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Kontact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
