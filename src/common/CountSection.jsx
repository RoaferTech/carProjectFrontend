import React from "react";
import { MdCarRental } from "react-icons/md";
import { GiCarKey } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";

const items = [
  {
    icon: <MdCarRental className="text-7xl" />,
    count: 500,
    description: "+ Available Cars",
  },
  {
    icon: <GiCarKey className="text-7xl" />,
    count: 900,
    description: "+ Happy Clients",
  },
  {
    icon: <AiOutlineTeam className="text-7xl" />,
    count: 1500,
    description: "+ Team Workers",
  },
  {
    icon: <GrUserExpert className="text-7xl" />,
    count: 30,
    description: "+ Years Of Experience",
  },
];

const CountSection = () => {
  return (
    <div className="relative bg-cover bg-center overflow-hidden bg-[#05C3DD]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/bgclient.png')",
          opacity: 0.2,
        }}
      ></div>
      <div className="relative z-10 p-8 text-white flex max-w-[1160px] mx-auto justify-between flex-wrap">
        {items.map((item, index) => (
          <div className="flex flex-col gap-5 items-center" key={index}>
            <div className="p-5 bg-black rounded-full border-4 border-white border-solid">
              {item.icon}
            </div>
            <p className="text-5xl font-bold">{item.count}</p>
            <p className="text-xl font-bold">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountSection;
