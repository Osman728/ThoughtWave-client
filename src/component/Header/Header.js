import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/Logo/Thought Wave-logos_white.png";

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <img className="header__logo" src={logo} alt="Thought wave logo" />
      </NavLink>
      <nav className="header__nav">
        <NavLink to="/login" className="header__nav-link">
          Login
        </NavLink>
        <NavLink to="/signup" className="header__nav-link">
          Signup
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
