// frontend/Waitlist.js
import React, { useState, useEffect } from "react";
import "./Waitlist.css";

export default function Waitlist() {
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState(null);
  const [total, setTotal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/waitlist/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to join waitlist");

      const data = await res.json();
      setPosition(data.position);
      setTotal(data.total);
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company (optional)"
              value={formData.company}
              onChange={handleChange}
            />
            <button type="submit" disabled={loading}>
              {loading ? "Joining..." : "Request access"}
            </button>
          </form>

          {position !== null && total !== null && (
            <div className="queue-info">
              <p>✅ There {total === 1 ? "is" : "are"} <strong>{total}</strong> {total === 1 ? "person" : "people"} on the waitlist.</p>
              <p>
                You’re number <strong>{position}</strong> in line.
              </p>
              <p>
                {total === 1
                  ? "You’re the only one here right now!"
                  : position === 1
                  ? "You're first in line!"
                  : `There ${position - 1 === 1 ? "is" : "are"} ${position - 1} ${position - 1 === 1 ? "person" : "people"} ahead of you.`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
