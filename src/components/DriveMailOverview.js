import React, { useEffect, useRef, useState } from "react";
import "./DriveMailOverview.css";

export default function NeejaOverview() {
  const sectionRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    const handleScroll = () => {
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const triggerPoint = window.innerHeight * 0.8;

      if (sectionTop < triggerPoint && sectionBottom > 0) {
        section.classList.add("animate");
        setPlayVideo(true);
      } else {
        section.classList.remove("animate");
        setPlayVideo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="demo-section" ref={sectionRef} className="drive-overview">
      <div className="text-content">
        <h2>
          Stay Connected, <span>Hands-Free</span>
        </h2>
        <p>
          Turn your commute into productive time. <br />
          <span className="orange">Activate</span> with a simple voice command: "
          <span className="orange">Hey Neeja</span>." <br />
          Reads, writes, and sends emails{" "}
          <span className="orange">hands-free</span>. <br />
          Seamlessly connects to your inbox as you drive. <br />
          <span className="orange">Stay focused</span> on the road while Neeja
          handles the rest.
        </p>
      </div>

      <div className="image-content">
        {playVideo && (
          <iframe
            className="drive-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vx-yn2NDJ7c?autoplay=1&mute=1&loop=1&playlist=vx-yn2NDJ7c"
            title="Neeja Demo"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
}
