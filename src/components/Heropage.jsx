import React, { useState } from "react";
import "./Heropage.css";

const Heropage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleJoinWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist-section");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWatchDemo = () => {
    const demoSection = document.getElementById("demo-section");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className="hero-container"
      style={{
        background: "url('/gradient-bg.png') no-repeat center center",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <nav className="navbar">
        <div className="logo">
          <span className="highlight">NEEJA</span>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#" onClick={closeMenu}>Home</a></li>
          <li><a href="#demo-section" onClick={closeMenu}>About</a></li>
          <li><a href="#waitlist-section" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      <div className="hero">
        <div className="hero-text">
          <h1>
            Talk through your inbox <br /> Let voice-to-voice AI handle your emails
          </h1>
          <p className="description">
            Hands-free voice assistant that reads, drafts, and sends emails while you drive safely. 
            Transform 30 minutes of driving into inbox productivity.
          </p>

          <div className="hero-buttons">
            <button className="cta-button" onClick={handleJoinWaitlist}>
              Join waitlist →
            </button>
            <button className="secondary-button" onClick={handleWatchDemo}>
              Watch Demo
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src="/driving.png" alt="Driving" />
        </div>
      </div>
    </div>
  );
};

export default Heropage;
