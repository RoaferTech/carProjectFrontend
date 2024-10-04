import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdMail } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";

const contactInfoData = [
  {
    title: "Office Address",
    detail: "25/B Milford, New York, USA",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Call Us",
    detail: "+2 123 4565 789",
    icon: <FiPhoneCall />,
  },
  {
    title: "Email Us",
    detail: "info@example.com",
    icon: <MdMail />,
  },
  {
    title: "Open Time",
    detail: "Mon - Sat (10.00AM - 05.30PM)",
    icon: <LuAlarmClock />,
  },
];
const ContactCard = () => {
  return (
    <div className="py-[80px] max-w-[1160px] mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {contactInfoData.map((item, index) => (
          <div
            className="bg-white shadow-lg p-5 flex flex-col justify-center items-center gap-5 rounded-xl transition-transform ease-in-out duration-500 hover:translate-y-[-10px]"
            key={index}
          >
            <p className=" text-center text-[35px] p-3 rounded-full bg-[#05C3DD] text-white">
              {item.icon}
            </p>
            <h2 className=" text-xl font-bold">{item.title}</h2>
            <p className=" text-base font-medium">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
