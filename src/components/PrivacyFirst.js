import React from "react";
import "./PrivacyFirst.css";

const privacyFeatures = [
  {
    icon: "🙂",
    title: "No Voice Data Storage",
    description: "We never save what you say. Your commands are processed instantly and securely—no recordings, no history."
  },
  {
    icon: "🔒",
    title: "End-to-End Encryption",
    description: "Every interaction is shielded with industry-grade encryption, from your voice to your inbox."
  },
  {
    icon: "🚫",
    title: "Zero Sharing, Ever",
    description: "No selling, no sharing. Your data fuels your productivity not someone else’s profits."
  },
  {
    icon: "✅",
    title: "Audited for Assurance",
    description: "Verified by independent security experts, so you can focus on the road not your privacy."
  },
  {
    icon: "🌐",
    title: "Global Accessibility",
    description: "Designed to work seamlessly across languages and regions, ensuring everyone can benefit from secure, hands-free email management."
  },
  {
    icon: "⚙️",
    title: "Customizable Commands",
    description: "Tailor voice commands to suit your workflow, making your email experience truly yours."
  }
];

const PrivacyFirst = () => {
  return (
    <section className="privacy-container">
      <h2 className="privacy-title">
       
        Privacy That Drives With You
      </h2>
      <p className="privacy-subtitle">
        Your words stay yours always. Our voice-powered assistant operates with unwavering respect for your privacy.
      </p>
      <div className="privacy-grid">
        {privacyFeatures.map((feature, index) => (
          <div className="privacy-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyFirst;
