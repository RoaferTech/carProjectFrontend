import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaUserAlt,
  FaSignInAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-black text-white py-5 px-4 relative overflow-hidden">
        <div className="max-w-[1060px] mx-auto flex flex-col md:flex-row items-center justify-between px-5 lg:px-10 space-y-3 md:space-y-0">
          <div className="hidden md:flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-white" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-white" />
              <span>+2 123 654 7898</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="text-white" />
              <span>Sun - Fri (08AM - 10PM)</span>
            </div>
          </div>

          <div className="flex items-center gap-10 md:space-x-4">
            <Link
              to="/login"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <FaSignInAlt />
              <span>Login</span>
            </Link>
            <Link
              to="register"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <FaUserAlt />
              <span>Registration</span>
            </Link>
          </div>
        </div>
        <div className="absolute left-[-40px] top-0 h-full w-0 lg:w-[200px] bg-[#05C3DD] skew-x-[45deg]"></div>
        <div className="absolute right-[-40px] top-0 h-full w-0 lg:w-[200px] bg-[#05C3DD] skew-x-[-45deg]"></div>
      </div>
    </div>
  );
};

export default TopNav;
