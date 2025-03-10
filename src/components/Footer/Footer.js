import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-title">Chotta Vakil</h2>
          <p className="footer-slogan">
            Providing reliable legal services since 2020.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-nav">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>1234567890</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span>company@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Hyderabad</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Instagram">
              <img src="images/instagram.png" alt="Instagram" />
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <img src="images/facebook.png" alt="Facebook" />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <img src="images/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>© {currentYear} Chota Vakil. All rights reserved.</p>
      </div>
    </footer>
  );
}
