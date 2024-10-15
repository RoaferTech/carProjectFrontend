import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { GrSend } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formData;
  const dispatch = useDispatch();
  const { isLoading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ username, email, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Registration successful!");
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div className="max-w-[600px] mx-auto shadow-lg my-[80px] py-10 px-5 rounded-xl">
      <div className="flex flex-col justify-center items-center gap-5">
        <img src={logo} alt="logo" />
        <p className="text-xl text-[#757F95]">Create your motex account</p>
      </div>
      <form className="mt-10 px-5" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            name="username"
            className="w-full border-2 border-solid rounded-[10px] py-3 px-[18px] mt-3"
            placeholder="Your Full Name"
            value={username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            className="w-full border-2 border-solid rounded-[10px] py-3 px-[18px] mt-3"
            placeholder="Your Email"
            value={email}
            onChange={handleChange}
            required
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
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="flex gap-3 items-center bg-[#05C3DD] w-full justify-center text-white font-semibold py-3 px-5 rounded-xl mt-3"
          type="submit"
          disabled={isLoading}
        >
          <GrSend />
          {isLoading ? "Creating account..." : "Register"}
        </button>
        <p className="text-center mt-3 text-[#757F95] font-medium">
          Already have an account?
          <Link to="/login" className="text-[#05C3DD]">
            &nbsp;Login.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
