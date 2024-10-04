import React from "react";
import { FaCarAlt, FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { reviewData } from "../data/reviewData";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Review = () => {
  return (
    <div className=" bg-[#F9F9F9] py-[120px]">
      <div className="max-w-[1160px] mx-auto">
        <h3 className=" flex items-center justify-center gap-3 text-[17px] text-[#05C3DD] font-bold tracking-[0.2em] uppercase">
          <FaCarAlt /> Testimonials
        </h3>
        <h2 className=" text-center font-bold text-3xl mt-3 md:text-[45px]">
          What Our Client<span className=" text-[#05C3DD]">&nbsp;Say's</span>
        </h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          arrows={false}
          showDots={false}
        >
          {reviewData.map((review, index) => (
            <div key={index} className="py-10 px-3 relative mt-5">
              <div className="bg-white py-10 px-[30px] shadow-lg rounded-lg relative">
                <img
                  src={review.imgUrl}
                  alt={review.name}
                  height={70}
                  width={70}
                  className="mx-auto rounded-full mb-4 absolute top-[-40px] border-4 border-solid border-[#05C3DD] p-1"
                />
                <h3 className="text-xl mb-2 font-bold">{review.name}</h3>
                <p className="text-base font-semibold text-[#05C3DD] mb-3">
                  {review.type}
                </p>
                <p className="text-base mb-4">{review.desc}</p>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-[#05C3DD]">
                      <FaStar />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <p className=" text-[#757F95] font-semibold">
          There are many variations of passages available but the majority have
          suffered to the alteration in some injected.
        </p>
      </div>
    </div>
  );
};

export default Review;
