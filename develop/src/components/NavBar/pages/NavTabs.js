import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/instructions"
          className={location.pathname === "/Instructions" ? "nav-link active" : "nav-link"}
        >
          Instructions
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Rules"
          className={location.pathname === "/Rules" ? "nav-link active" : "nav-link"}
        >
          Rules
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
