import React from "react";
import logo from "../assets/flogo.png";
import ButtonDesign from "./ButtonDesign";
import { GrSend } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { BiSolidRightArrow } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="bg-[#111111] pt-[100px] pb-[70px] text-white">
        <div className="max-w-[1160px] mx-auto flex gap-6 justify-center flex-wrap px-5 xl:px-0">
          <div className=" flex flex-col gap-5 w-[356px] ">
            <img src={logo} alt="logo" width={250} />
            <p>
              We are many variations of passages available but the majority have
              suffered alteration in some form by injected humour words
              believable.
            </p>
            <p className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-[#05C3DD]">
                <FiPhone />
              </span>
              +2 123 654 7898
            </p>
            <p className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-[#05C3DD]">
                <IoLocationOutline />
              </span>
              25/B Milford Road, New York
            </p>
            <p className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-[#05C3DD]">
                <CgMail />
              </span>
              info@example.com
            </p>
          </div>
          <div className="w-[270px] md:w-[190px]">
            <h2 className="text-[21px] font-bold mb-3">Quick Links</h2>
            <div className="max-w-[80px] bg-[#05C3DD] h-[2px] mb-5"></div>
            <p className=" mb-3 flex items-center  gap-3 transition-transform transform hover:translate-x-[10px] ease-in-out duration-300 cursor-pointer">
              <BiSolidRightArrow className="text-[12px] text-[#05C3DD]" />
              About Us
            </p>
            <p className=" mb-3 flex items-center  gap-3 transition-transform transform hover:translate-x-[10px] ease-in-out duration-300 cursor-pointer">
              <BiSolidRightArrow className="text-[12px] text-[#05C3DD]" />
              Update News
            </p>
            <p className=" mb-3 flex items-center  gap-3 transition-transform transform hover:translate-x-[10px] ease-in-out duration-300 cursor-pointer">
              <BiSolidRightArrow className="text-[12px] text-[#05C3DD]" />
              Testimonials
            </p>
            <p className=" mb-3 flex items-center  gap-3 transition-transform transform hover:translate-x-[10px] ease-in-out duration-300 cursor-pointer">
              <BiSolidRightArrow className="text-[12px] text-[#05C3DD]" />
              Terms Of Service
            </p>
            <p className=" mb-3 flex items-center  gap-3 transition-transform transform hover:translate-x-[10px] ease-in-out duration-300 cursor-pointer">
              <BiSolidRightArrow className="text-[12px] text-[#05C3DD]" />
              Privacy policy
            </p>
            <p className=" mb-3 flex items-center  gap-3 transition-transform transform hover:translate-x-[10px] ease-in-out duration-300 cursor-pointer">
              <BiSolidRightArrow className="text-[12px] text-[#05C3DD]" />
              Our Dealers
            </p>
          </div>
          <div className="w-[270px]">
            <h2 className="text-[21px] font-bold mb-3">Support Center</h2>
            <div className="max-w-[80px] bg-[#05C3DD] h-[2px] mb-5"></div>
            <p className=" mb-3 flex items-center  gap-3 transition-transform transform hover:translate-x-[10px] ease-in-out duration-300 cursor-pointer">
              <BiSolidRightArrow className="text-[12px] text-[#05C3DD]" />
              FAQ's
            </p>
            <p className=" mb-3 flex items-center  gap-3 transition-transform transform hover:translate-x-[10px] ease-in-out duration-300 cursor-pointer">
              <BiSolidRightArrow className="text-[12px] text-[#05C3DD]" />
              Affiliates
            </p>
            <p className=" mb-3 flex items-center  gap-3 transition-transform transform hover:translate-x-[10px] ease-in-out duration-300 cursor-pointer">
              <BiSolidRightArrow className="text-[12px] text-[#05C3DD]" />
              Booking Tips
            </p>
            <p className=" mb-3 flex items-center  gap-3 transition-transform transform hover:translate-x-[10px] ease-in-out duration-300 cursor-pointer">
              <BiSolidRightArrow className="text-[12px] text-[#05C3DD]" />
              Sell Vehicles
            </p>
            <p className=" mb-3 flex items-center  gap-3 transition-transform transform hover:translate-x-[10px] ease-in-out duration-300 cursor-pointer">
              <BiSolidRightArrow className="text-[12px] text-[#05C3DD]" />
              Contact Us
            </p>
            <p className=" mb-3 flex items-center  gap-3 transition-transform transform hover:translate-x-[10px] ease-in-out duration-300 cursor-pointer">
              <BiSolidRightArrow className="text-[12px] text-[#05C3DD]" />
              Sitemap
            </p>
          </div>
          <div className="w-[270px]">
            <h2 className="text-[21px] font-bold mb-3">Newsletter</h2>
            <div className="max-w-[80px] bg-[#05C3DD] h-[2px] mb-5"></div>
            <p className=" mb-5">
              Subscribe Our Newsletter To Get Latest Update And News
            </p>
            <input
              type="text"
              placeholder="Your Email"
              className=" py-4 px-5 rounded-xl w-full  mb-5"
            />

            <ButtonDesign
              title="Subscribe Now"
              bgColor="#05C3DD"
              textColor="#ffffff"
              rippleColor="#000000"
              icon={<GrSend />}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#05C3DD] py-6 text-white">
        <p className=" text-center">
          © Copyright 2024 MOTEX All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
