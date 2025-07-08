import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo/logo (1).png"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Landguru" />
        </div>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <div className="dropdown">
            <a href="#">Advertise ▾</a>
            {/* Add dropdown items if needed */}
          </div>
          <div className="dropdown">
            <a href="#">Supports ▾</a>
            {/* Add dropdown items if needed */}
          </div>
          <a href="#">Contact</a>
        </nav>

        <button className="try-btn">Try for Free</button>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
