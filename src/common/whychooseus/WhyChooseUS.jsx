import React from "react";
import imgUrl from "../../assets/why.png";
import { FaCarAlt } from "react-icons/fa";

import WhyChooseCard from "./WhyChooseCard";
import { whyChoosUs } from "../../data/whyChoose";

const WhyChooseUS = () => {
  return (
    <div className="bg-[#111111] py-[120px]">
      <div className="max-w-[1160px] mx-auto text-white flex gap-8 flex-col md:flex-row px-5 lg:px-2">
        <div className="flex flex-col gap-6">
          <h2 className=" text-lg font-bold tracking-[0.2em] uppercase flex items-center gap-3">
            <FaCarAlt />
            WHy Choose US
          </h2>
          <h3 className="text-3xl lg:text-[45px] font-bold capitalize lg:leading-[60px]">
            We are dedicated
            <span className="text-[#05C3DD] ">&nbsp;to provide&nbsp;</span>
            quality service
          </h3>
          <p>
            There are many variations of passages available but the majority
            have suffered alteration in some form going to use a passage by
            injected humour randomised words which don't look even slightly
            believable.
          </p>
          <img src={imgUrl} alt="Car" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whyChoosUs.map((item, index) => (
            <WhyChooseCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUS;
