import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaPlus } from "react-icons/fa";
import "./Footer.scss";

const Footer = ({ userId }) => {
  return (
    <footer className="footer">
      <Link to="/" className="footer__icon">
        <FaHome />
      </Link>
      <Link to="/write" className="footer__icon">
        <FaPlus />
      </Link>
      <Link to={`/profile/${userId}`} className="footer__icon">
        <FaUser />
      </Link>
    </footer>
  );
};

export default Footer;
