import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBookOpen,
  FaGraduationCap,
  FaTools,
  FaScroll,
  FaHandshake,
  FaBriefcase,
  FaEnvelope,
  FaUserLock,
} from "react-icons/fa"; // Import icons

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="headLink">
          <img
            className="company-logo"
            src="images/company_logo.jpg"
            alt="Company Logo"
          />
        </NavLink>
      </div>

      <div className="nav-right">
        <ul className="nav-links">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li>
              <FaHome /> Home
            </li>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li>
              <FaBookOpen /> About Us
            </li>
          </NavLink>

          {/* Learning Programs Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">
              <FaGraduationCap /> Learning Programs 
            </button>
            <div className="dropdown-content">
              <NavLink to="/programs/little-defenders">
                Little Defenders (6–10)
              </NavLink>
              <NavLink to="/programs/young-advocates">
                Young Advocates (11–15)
              </NavLink>
              <NavLink to="/programs/legal-pioneers">
                Legal Pioneers (16–18)
              </NavLink>
              <NavLink to="/programs/future-lawmakers">
                Future Lawmakers (19–21)
              </NavLink>
            </div>
          </div>

          {/* Features & Tools Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">
              <FaTools /> Features & Tools
            </button>
            <div className="dropdown-content">
              <NavLink to="/features/ai-chatbot">AI Chatbot</NavLink>
              <NavLink to="/features/gamified-quizzes">
                Gamified Quizzes
              </NavLink>
              <NavLink to="/features/mock-legal-simulations">
                Mock Legal Simulations
              </NavLink>
              <NavLink to="/features/case-studies">Legal Case Studies</NavLink>
              <NavLink to="/features/live-workshops">
                Live Workshops & Webinars
              </NavLink>
            </div>
          </div>

          {/* Legal Awareness Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">
              <FaScroll /> Legal Awareness
            </button>
            <div className="dropdown-content">
              <NavLink to="/legal/know-your-rights">Know Your Rights</NavLink>
              <NavLink to="/legal/scenarios">Real-Life Legal Scenarios</NavLink>
              <NavLink to="/legal/resources">Resources & Articles</NavLink>
            </div>
          </div>

          <NavLink
            to="/partnerships"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li>
              <FaHandshake /> Partnerships
            </li>
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <li>
              <FaUserLock /> Login
            </li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}
