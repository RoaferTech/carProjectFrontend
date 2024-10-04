import React from "react";

const WhyChooseCard = ({ item }) => {
  return (
    <div className="bg-white text-black p-4 rounded-lg flex flex-col gap-3">
      <div className="flex justify-between items-center text-[45px] text-white">
        <p className="bg-[#05C3DD] p-3 rounded-full">{item.icon}</p>
        <h2
          className="text-black font-bold"
          style={{
            WebkitTextStroke: "1px #05C3DD",
            WebkitTextFillColor: "transparent",
          }}
        >
          0{item.num}
        </h2>
      </div>
      <p className=" text-2xl font-semibold ">{item.title}</p>
      <p className="text-[#757F95]">{item.desc}</p>
    </div>
  );
};

export default WhyChooseCard;
