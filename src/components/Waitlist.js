import React, { useState } from "react";
import "./Waitlist.css";

export default function Waitlist() {
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const randomPosition = Math.floor(Math.random() * 50) + 1;
      setPosition(randomPosition);
      setLoading(false);
    }, 1000);
  };

  return (
    <div id="waitlist-section" className="waitlist-wrapper">
      <div className="waitlist-heading">
        <h1 className="title">
          <span className="highlight">Ready to get started?</span>
        </h1>
        <p className="subtitle">
          Join the waitlist and be one of the first to access DriveMail.
        </p>
      </div>

      <div className="form-card">
        <div className="gradient-header">
          <h2>See it for yourself</h2>
        </div>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email address" required />
            <input type="text" placeholder="Company (optional)" />
            <button type="submit" disabled={loading}>
              {loading ? "Joining..." : "Request access"}
            </button>
          </form>

          {position && (
            <div className="queue-info">
              <p>✅ You’re number <strong>{position}</strong> in the official waitlist.</p>
              <p>
                There {position === 1 ? "are no people" : `are ${position - 1} people`} ahead of you overall.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
