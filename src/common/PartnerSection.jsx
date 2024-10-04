import React from "react";
import { Companies } from "../data/partner";

const PartnerSection = () => {
  return (
    <div className="max-w-[1160px] mx-auto py-[50px]">
      <h2 className=" text-4xl font-bold text-center pb-10">
        Our Top Quality
        <span className="text-[#05C3DD]">&nbsp;Brands</span>
      </h2>
      <div className="flex gap-5 justify-center flex-wrap">
        {Companies.map((item, index) => (
          <div
            className="bg-[#F9F9F9] rounded-lg cursor-pointer py-5 px-2 transition-transform transform hover:translate-y-[-10px] ease-in-out duration-300"
            key={index}
          >
            <img src={item.imgUrl} alt={item.name} height={156} width={156} />
            <p className="text-center hover:text-[#05C3DD] text-lg font-semibold">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
