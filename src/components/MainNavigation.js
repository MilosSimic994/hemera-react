import React from "react";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <li>Hemera</li>
        <li>
          <NavLink to="/" activeClassName="active-link">
            Naslovna
          </NavLink>
        </li>
        <li>
          <NavLink to="/das" activeClassName="active-link">
            O nama
          </NavLink>
        </li>
        <li>
          <NavLink to="/das" activeClassName="active-link">
            Proizvodi
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            Kontact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
