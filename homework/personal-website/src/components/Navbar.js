// components/Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="nav justify-content-center bg-light p-3 mb-4">
      <Link
        to="/"
        className={`nav-link ${
          location.pathname === "/" ? "active-link" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`nav-link ${
          location.pathname === "/about" ? "active-link" : ""
        }`}
      >
        About
      </Link>
      <Link
        to="/contact"
        className={`nav-link ${
          location.pathname === "/contact" ? "active-link" : ""
        }`}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
