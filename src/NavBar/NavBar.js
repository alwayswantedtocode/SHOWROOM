import { Link, NavLink } from "react-router-dom";
import Logo from "../NavBar/Logo";
import { FaSearch, FaBars } from "react-icons/fa";
import { useGlobalContext } from "../GlobalContext";

import React from "react";

const NavBar = () => {
  const { openMobileMenu, openSubMenu, closeSubMenu } = useGlobalContext();

  const displaySubMenu = (e) => {
    const brand = e.target.textContent;
    openSubMenu(brand);
  };

  const removeSubMenu = (e) => {
    if (!e.target.classList.contains("navLink")) {
      console.log(e.target);
      closeSubMenu();
    }
  };
  return (
    <nav className="Nav" onMouseOver={removeSubMenu}>
      <div className="NavContainer">
        <div className="navLogo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <button className="toggle-Menubar" onClick={openMobileMenu}>
          <FaBars />
        </button>

        <div className="navLinkContainer">
          <Link className="navLink BrandNav" onMouseOver={displaySubMenu}>
            Brands
          </Link>
          <Link className="navLink" to="/Dealers">
            Dealers
          </Link>
          <Link className="navLink" to="/Support">
            Support
          </Link>
          <button className="signIn-btn">
            <Link className="navLink">Sign in</Link>
          </button>
          <button className="search-btn">
            <Link className="navLink">
              <FaSearch />
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
