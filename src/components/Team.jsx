import React from "react";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const TeamData = [
  {
    imgUrl: team1,
    name: "Chad Smith",
    jobTitle: "HR Manager",
  },
  {
    imgUrl: team2,
    name: "Malissa Fie",
    jobTitle: "Technician",
  },
  {
    imgUrl: team3,
    name: "Arron Rodri",
    jobTitle: "CEO & Founder",
  },
  {
    imgUrl: team4,
    name: "Tony Pinto",
    jobTitle: "Mechanical Engineer",
  },
];
const Team = () => {
  return (
    <div className=" py-[80px]">
      <div className="max-w-[1160px] mx-auto">
        <h2 className="text-[#05C3DD] text-lg font-bold tracking-[0.2em] uppercase flex items-center gap-3 justify-center">
          Team
        </h2>
        <h3 className="text-5xl font-bold text-center py-3">
          Meet With Our<span className="text-[#05C3DD]">&nbsp;Team</span>
        </h3>
        <div className=" py-10 px-4 xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {TeamData.map((team, index) => (
            <div
              key={index}
              className="relative bg-white p-3 rounded-lg shadow-sm transition-transform duration-500 group hover:translate-y-[-10px]"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={team.imgUrl}
                  alt={team.name}
                  className="w-full object-cover"
                />
                <div className=" absolute top-1/2 right-0 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-3 transition-all duration-500 ease-out flex flex-col items-center gap-2">
                  <div className="bg-[#05C3DD] p-2 rounded-full transition-transform duration-500 hover:scale-110 hover:bg-black">
                    <FaFacebookF className="text-white text-xl " />
                  </div>
                  <div className="bg-[#05C3DD] p-2 rounded-full transition-transform duration-500 hover:scale-110 hover:bg-black">
                    <FaTwitter className="text-white text-xl " />
                  </div>
                  <div className="bg-[#05C3DD] p-2 rounded-full transition-transform duration-500 hover:scale-110 hover:bg-black">
                    <FaLinkedinIn className="text-white text-xl " />
                  </div>
                  <div className="bg-[#05C3DD] p-2 rounded-full transition-transform duration-500 hover:scale-110 hover:bg-black">
                    <FaYoutube className="text-white text-xl " />
                  </div>
                </div>
              </div>
              <div className="px-2 text-center">
                <h2 className=" text-xl font-semibold mt-4 hover:text-[#05C3DD]">
                  {team.name}
                </h2>
                <h2 className="text-base font-semibold mb-4 text-[#05C3DD]">
                  {team.jobTitle}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
