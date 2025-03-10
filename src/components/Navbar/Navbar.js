import React from "react";
import { NavLink } from "react-router-dom";
// import "./Navbar.css"; // Import the CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="headLink">
          <img className="company-logo" src="images/company_logo.jpg" alt="Company Logo" />
        </NavLink>
      </div>
      <div className="nav-right">
        <ul>
          <div className="nav-links">
            <NavLink to="/home" className={({ isActive }) => (isActive ? "active-link" : "")}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/videos" className={({ isActive }) => (isActive ? "active-link" : "")}>
              <li>Videos</li>
            </NavLink>
            <NavLink to="/games" className={({ isActive }) => (isActive ? "active-link" : "")}>
              <li>Games</li>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
              <li>About Us</li>
            </NavLink>
          </div>
          <div className="profile-icon">
            <NavLink to="/profile">
              <img src="images/panda.png" alt="Profile" />
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
}
