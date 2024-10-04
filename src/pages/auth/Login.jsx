import React from "react";
import logo from "../../assets/logo.png";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" max-w-[600px] mx-auto shadow-lg my-[80px] py-10 px-5 rounded-xl ">
      <div className="flex flex-col justify-center items-center gap-5">
        <img src={logo} alt="logo" />
        <p className=" text-xl text-[#757F95]">Login with your motex account</p>
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
        <div className="mb-5">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className=" w-full border-2 border-solid rounded-[10px] py-3 px-[18px] mt-3"
            placeholder="Your Password"
          />
        </div>
        <Link
          to="/forget"
          className="text-center text-[#05C3DD] hover:text-black cursor-pointer"
        >
          Forgot Password?
        </Link>
        <button className=" flex gap-3 items-center bg-[#05C3DD] w-full justify-center text-white font-semibold py-3 px-5 rounded-xl mt-3">
          <MdLogin />
          Login
        </button>
        <p className="text-center mt-3 text-[#757F95] font-medium">
          Don't have an account?
          <Link to="/register" className="text-[#05C3DD]">
            &nbsp;Register.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
