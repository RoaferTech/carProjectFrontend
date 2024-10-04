import React from "react";
import image from "../assets/contactimg.jpg";
import ButtonDesign from "../common/ButtonDesign";
import { GrSend } from "react-icons/gr";
const ContactForm = () => {
  return (
    <div className="max-w-[1160px] mx-auto shadow-lg py-[80px] mb-10 rounded-xl">
      <div>{/* <img src={image} alt="image" /> */}</div>
      <div className=" px-10">
        <h2 className=" font-bold text-3xl text-center">Get In Touch</h2>
        <p className=" text-center px-10 my-5 ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page randomised words which don't look even
          slightly when looking at its layout.
        </p>
        <form action="">
          <div className=" flex w-full gap-5 mt-5">
            <div className=" w-1/2">
              <input
                type="text"
                className="border-2 border-solid py-4 px-5 rounded-xl w-full"
                placeholder="Your Name"
              />
            </div>
            <div className=" w-1/2">
              <input
                type="email"
                className="border-2 border-solid py-4 px-5 rounded-xl w-full"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className=" mt-5">
            <input
              type="text"
              className="border-2 border-solid py-4 px-5 rounded-xl w-full"
              placeholder="Your Message"
            />
          </div>
          <textarea
            className=" w-full mt-5 border-2 border-solid rounded-xl p-5"
            rows={10}
            placeholder="Write Your Message"
          ></textarea>
          <ButtonDesign
            title="Send Message"
            bgColor="#05C3DD"
            textColor="#ffffff"
            rippleColor="#000000"
            icon={<GrSend />}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
