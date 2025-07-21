import React, { useEffect } from "react";
import "./DriveMailOverview.css";

export default function DriveMailOverview() {
  useEffect(() => {
    const section = document.querySelector(".drive-overview");

    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;

      if (sectionTop < triggerPoint) {
        section.classList.add("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="demo-section" className="drive-overview">
      <div className="text-content">
        <h2>
          Stay Connected, <span>Hands-Free</span>
        </h2>
        <p>
          Turn your commute into productive time. <br />
          <span className="orange">Activate</span> with a simple voice command: "
          <span className="orange">Hey DriveMail</span>." <br />
          Reads, writes, and sends emails <span className="orange">hands-free</span>. <br />
          Seamlessly connects to your inbox as you drive. <br />
          <span className="orange">Stay focused</span> on the road while DriveMail handles the rest.
        </p>
      </div>
      <div className="image-content">
        <iframe
          className="drive-video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vx-yn2NDJ7c?autoplay=1&mute=1&loop=1&playlist=vx-yn2NDJ7c"
          title="DriveMail Demo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
