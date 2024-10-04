import React from "react";
import AboutSection from "../common/AboutSection";
import CountSection from "../common/CountSection";
import Review from "../common/Review";
import PartnerSection from "../common/PartnerSection";
import Team from "../components/Team";

const About = () => {
  return (
    <div>
      <AboutSection />
      <CountSection />
      <Review />
      <Team />
      <PartnerSection />
    </div>
  );
};

export default About;
