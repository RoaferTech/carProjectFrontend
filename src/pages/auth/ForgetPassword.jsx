import React from "react";
import { IoKeyOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
const ForgetPassword = () => {
  return (
    <div className=" max-w-[500px] mx-auto shadow-lg my-[80px] py-10 px-5 rounded-xl ">
      <div className="flex flex-col justify-center items-center gap-5">
        <img src={logo} alt="logo" />
        <p className=" text-xl text-[#757F95]">
          Reset your motex account password
        </p>
      </div>
      <form className=" mt-10 px-5">
        <div className="mb-5">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className=" w-full border-2 border-solid rounded-[10px] py-3 px-[18px] mt-3"
            placeholder="Your Email"
          />
        </div>
        <button className=" flex gap-3 items-center bg-[#05C3DD] w-full justify-center text-white font-semibold py-3 px-5 rounded-xl mt-3">
          <IoKeyOutline />
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
