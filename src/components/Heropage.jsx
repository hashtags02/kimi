import React from "react";
import "./Heropage.css";

const Heropage = () => {
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
        <div className="logo">NEEJA</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#demo-section">About</a></li>         {/* ✅ Scrolls to DriveMailOverview */}
          <li><a href="#waitlist-section">Contact</a></li>   {/* ✅ Scrolls to Waitlist */}
        </ul>
      </nav>

      <div className="hero">
        <div className="hero-text">
          <h1>
            Talk through your inbox <br /> Let voice-to-voice AI handle your emails
          </h1>
          <p className="description">
            Hands-free voice assistant that reads, drafts, and sends emails while you drive safely. <br />
            Transform 30 minutes of driving into inbox productivity.
            100% Hands-Free <br /> Works Offline Voice-Only Interface
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
