import React from "react";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav className="main__navigation">
      <ul>
        <li>
          <NavLink to="/">
            hemera
          </NavLink>
          </li>
        <li>
          <NavLink to="/">
            Naslovna
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            O nama
          </NavLink>
        </li>
        <li>
          <NavLink to="/products">
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
