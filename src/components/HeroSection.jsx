import React from "react";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../assets/hero.png";
import SearchForm from "./SerachForm";
import ButtonDesign from "../common/ButtonDesign";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/src/assets/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center h-full max-w-[1160px] mx-auto px-6 md:px-0">
        <div className="text-white flex flex-col gap-5 md:gap-7 md:w-2/5 pt-10">
          <h3 className="font-semibold text-3xl md:text-4xl text-[#05C3DD] tracking-widest">
            Welcome To Motex!
          </h3>
          <h2 className="font-bold text-4xl md:text-5xl leading-snug">
            Best Way To Find Your Dream Car
          </h2>
          <p className="text-base md:text-lg font-medium">
            There are many variations of passages orem ipsum available but the
            majority have suffered alteration in some form by injected humour.
          </p>
          <div className="flex gap-5">
            <ButtonDesign
              title="About More"
              bgColor="#05C3DD"
              textColor="#ffffff"
              rippleColor="#000000"
              icon={<FaArrowRight />}
            />
            <ButtonDesign
              title="Learn More"
              bgColor="#ffffff"
              textColor="#000000"
              rippleColor="#05C3DD"
              icon={<FaArrowRight />}
            />
          </div>
        </div>
        <div className="relative md:w-3/5">
          <div className="absolute -z-10 bg-gradient-to-r from-[#05C3DD] to-[#a2eef8] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[700px] md:h-[700px] rounded-full blur-[100px] sm:blur-[150px] -right-16 bottom-0"></div>
          <img
            src={heroImage}
            alt="car hero image"
            className="relative z-10 max-w-full"
          />
        </div>
      </div>

      <div className="relative z-20">
        <SearchForm />
      </div>
    </div>
  );
};

export default HeroSection;
