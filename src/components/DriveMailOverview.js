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
          <span className="orange">Activate</span> with a simple voice command: “
          <span className="orange">Hey DriveMail</span>.”<br />
          Reads, writes, and sends emails — <span className="orange">hands-free</span>.<br />
          Works even with <span className="blue">low or no internet</span>.<br />
          Seamlessly connects to your inbox as you drive.<br />
          <span className="orange">Stay focused</span> on the road while DriveMail handles the rest.
        </p>
      </div>
      <div className="image-content">
        <video 
          src="/video.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="drive-video" //video here
        />
      </div>
    </section>
  );
}
