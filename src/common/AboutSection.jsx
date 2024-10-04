import React from "react";
import aboutImage from "../assets/about.png";
import { FaArrowRight, FaCarAlt, FaCheck } from "react-icons/fa";
import ButtonDesign from "./ButtonDesign";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-[1160px] mx-auto py-[120px] gap-4 lg:gap-10">
      <div className="md:w-1/2 relative px-5 lg:px-0">
        <img src={aboutImage} alt="about image" />
        <div className="flex gap-4 bg-black text-white items-center p-6 w-[250px] absolute top-[-30px] rounded-lg">
          <div className="bg-[#05C3DD] p-3 rounded-lg">
            <FaCarAlt className="text-3xl" />
          </div>
          <p>30 Years Of Quality Service</p>
        </div>
      </div>
      <div className="md:w-1/2 px-10 flex flex-col gap-8 md:gap-4 lg:gap-8">
        <h2 className="text-2xl tracking-widest text-[#05C3DD] flex gap-3 items-center">
          <FaCarAlt />
          ABOUT US
        </h2>
        <h3 className=" text-3xl lg:text-5xl font-bold">
          World Largest <span className="text-[#05C3DD]">Car Dealer </span>
          Marketplace.
        </h3>
        <p className=" text-base text-[#757F95]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour.
        </p>
        <div className="flex flex-col gap-5">
          <p className="text-base font-medium flex items-center gap-3 text-[#757F95]">
            <span className="border-2 border-[#05C3DD] border-solid p-1  rounded-full">
              <FaCheck className="text-[#05C3DD] text-[10px]" />
            </span>
            At vero eos et accusamus et iusto odio.
          </p>
          <p className="text-basw font-medium flex items-center gap-3 text-[#757F95]">
            <span className="border-2 border-[#05C3DD] border-solid p-1  rounded-full">
              <FaCheck className="text-[#05C3DD] text-[10px]" />
            </span>
            Established fact that a reader will be distracted.
          </p>
          <p className="text-base font-medium flex items-center gap-3 text-[#757F95]">
            <span className="border-2 border-[#05C3DD] border-solid p-1  rounded-full">
              <FaCheck className="text-[#05C3DD] text-[10px]" />
            </span>
            Sed ut perspiciatis unde omnis iste natus sit.
          </p>
        </div>
        <div>
          <ButtonDesign
            title="Discover More"
            bgColor="#05C3DD"
            textColor="#ffffff"
            rippleColor="#000000"
            icon={<FaArrowRight />}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
