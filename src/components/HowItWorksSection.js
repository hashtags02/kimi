import React from "react";
import "./HowItWorksSection.css";

const steps = [
  {
    title: "Start Your Journey",
    description: [
      "Activate Neeja when you enter your vehicle",
      "Voice command: ‘Hey Neeja’",
      "Auto-detects if you’re driving",
      "No hardware is required"
    ],
    gradient: "var(--gradient-left)"
  },
  {
    title: "Listen to Summaries",
    description: [
      "Reads your important emails aloud",
      "AI picks most important content",
      "Quick voice playback",
      "Summary mode for efficiency"
    ],
    gradient: "var(--gradient-right)"
  },
  {
    title: "Safety First",
    description: [
      "Designed to keep your hands & eyes on the road",
      "Voice commands",
      "No screen interaction needed",
      "Voice confirmation before sending"
    ],
    gradient: "var(--gradient-left)"
  },
  {
    title: "Voice Control",
    description: [
      "Reply, archive, or organize with simple commands",
      "Natural language processing",
      "Context-aware responses",
      "Safe driving focused"
    ],
    gradient: "var(--gradient-right)"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="how-it-works">
      <h2>
        How it <span className="highlight">works</span>
      </h2>
      <p>
        Four simple steps to <span className="highlight">transform</span> your commute into productive email time.
      </p>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div
            key={index}
            className="step-card"
            style={{ background: step.gradient }}
          >
            <h3>{step.title}</h3>
            <ul>
              {step.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
