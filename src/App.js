import React from "react";
import { Routes, Route } from "react-router-dom";

import Heropage from "./components/Heropage";
import HowItWorksSection from "./components/HowItWorksSection";
import DriveMailOverview from "./components/DriveMailOverview";
import WhyChooseDriveMail from "./components/WhyChooseDriveMail";
import ExperienceSection from "./components/ExperienceSection";
import PrivacyFirst from "./components/PrivacyFirst";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Heropage />
      <HowItWorksSection />
      <DriveMailOverview />
      <WhyChooseDriveMail />
      <ExperienceSection />
      <PrivacyFirst />
      <Waitlist />
      <Footer />
    </>
  );
}

export default App;
