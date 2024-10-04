import React from "react";
const ButtonDesign = ({ title, bgColor, textColor, rippleColor, icon }) => {
  return (
    <button
      className="relative py-3 md:py-4 px-6 md:px-8 font-semibold rounded-lg flex items-center gap-3 overflow-hidden group"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span className="relative z-10 flex items-center gap-3 transition-colors duration-300">
        {title} {icon}
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <span
          className="ripple absolute w-0 h-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-[400px] group-hover:h-[400px] transition-all duration-700 ease-out"
          style={{ backgroundColor: rippleColor }}
        ></span>
      </span>
    </button>
  );
};

export default ButtonDesign;
