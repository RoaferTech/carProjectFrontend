import React from "react";
import { FaArrowRight, FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import ButtonDesign from "../ButtonDesign";

const BlogCard = ({ imgUrl, title, auther, date }) => {
  return (
    <div className="relative bg-white p-3 rounded-lg shadow-sm  transition-shadow duration-300 group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={imgUrl}
          alt={title}
          className="w-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="px-2 mb-5">
        <div className="flex gap-3 text-base font-semibold mt-5">
          <p className="flex gap-2 items-center">
            <FaRegUserCircle className="text-[#05C3DD]" />
            {auther}
          </p>
          <p className="flex gap-2 items-center">
            <FaCalendarAlt className="text-[#05C3DD]" />
            {date}
          </p>
        </div>
        <hr className="mt-3" />
        <h2 className="text-[22px] hover:text-[#05C3DD] font-semibold mt-4">
          {title}
        </h2>
      </div>
      <ButtonDesign
        title="Read More"
        bgColor="#05C3DD"
        textColor="#ffffff"
        rippleColor="#000000"
        icon={<FaArrowRight />}
      />
    </div>
  );
};

export default BlogCard;
