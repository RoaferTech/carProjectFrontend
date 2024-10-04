import React from "react";
import HeroSection from "../components/HeroSection";
import SearchForm from "../components/SerachForm";
import AboutSection from "../common/AboutSection";
import PartnerSection from "../common/PartnerSection";
import CountSection from "../common/CountSection";
import CarsSections from "../components/CarsSections";
import WhyChooseUS from "../common/whychooseus/WhyChooseUS";
import Review from "../common/Review";
import BlogsSection from "../common/blogsSection/BlogsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SearchForm />
      <AboutSection />
      <CountSection />
      <CarsSections />
      <WhyChooseUS />
      <PartnerSection />
      <Review />
      <BlogsSection />
    </>
  );
};

export default Home;
