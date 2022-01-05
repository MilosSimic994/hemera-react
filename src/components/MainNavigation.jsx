import { React, useState, useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll'
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  const [scrollNav, setScrollNav] = useState(false)

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	}, [])
  
  return (
    <nav className="main__navigation" data-scroll={scrollNav}>
      <ul>
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
