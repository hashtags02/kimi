import React from "react";
import "./WhyChooseDriveMail.css";

const features = [
  {
    title: "Voice-Only Control",
    description: "Never touch your phone. Complete email management through natural voice commands while keeping your hands on the wheel.",
    icon: "🎤"
  },
  {
    title: "Smart Drafting",
    description: "AI crafts polished emails friendly or professional, based on your conversation's tone.",
    icon: "✍️"
  },
  {
    title: "Time Efficient",
    description: "Process 15+ emails in a typical 30-minute commute. Turn dead time into your most productive hour.",
    icon: "⏱️"
  },
  {
    title: "Full Email Suite",
    description: "Read, reply, draft, schedule, and organize. Everything you need to manage your inbox completely hands-free.",
    icon: "📧"
  }
];

export default function WhyChooseDriveMail() {
  return (
    <section className="why-choose">
      <h2>Why Commuters Choose <span>VoiceMail</span></h2>
      <p className="subtitle">
        The only email assistant designed specifically for safe, productive driving. No screens, no distractions, just pure voice intelligence.
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card light">
            <div className="icon">{feature.icon}</div>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
