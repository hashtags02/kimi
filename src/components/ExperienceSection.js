import React from "react";
import "./ExperienceSection.css";

export default function ExperienceSection() {
  return (
    <section className="experience">
      <h2>
        <span className="gradient-text">Experience the Future Today</span>
      </h2>
      <h3>Stay Productive on the Road</h3>
      <p>
        DriveMail transforms your daily drive into a hands-free productivity zone.
        Using smart voice commands, it reads, drafts, and sends emails—
        so you never miss a message while keeping your hands on the wheel and eyes on the road.
      </p>

      <div className="image-card">
        <img src="/images.webp" alt="Productive driving with DriveMail" />
        <div className="image-caption">
          🚗 Built for commuters. Powered by AI.
        </div>
      </div>

      <button className="gradient-cta">Early Access Available</button>
    </section>
  );
}
