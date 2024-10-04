import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdLogin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/authSlice";
import logo from "../../assets/logo.png";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const dispatch = useDispatch();
  const { isLoading, isAuthenticated, error } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Login successful! ");
      navigate("/inventory");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className=" max-w-[600px] mx-auto shadow-lg my-[80px] py-10 px-5 rounded-xl ">
      <div className="flex flex-col justify-center items-center gap-5">
        <img src={logo} alt="logo" />
        <p className=" text-xl text-[#757F95]">Login with your motex account</p>
      </div>
      <form className=" mt-10 px-5" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            className="w-full border-2 border-solid rounded-[10px] py-3 px-[18px] mt-3"
            placeholder="Your Email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border-2 border-solid rounded-[10px] py-3 px-[18px] mt-3"
            placeholder="Your Password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <Link
          to="/forget"
          className="text-center text-[#05C3DD] hover:text-black cursor-pointer"
        >
          Forgot Password?
        </Link>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className=" flex gap-3 items-center bg-[#05C3DD] w-full justify-center text-white font-semibold py-3 px-5 rounded-xl mt-3"
          type="submit"
          disabled={isLoading}
        >
          <MdLogin />
          {isLoading ? "Logging in..." : "Login"}
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
