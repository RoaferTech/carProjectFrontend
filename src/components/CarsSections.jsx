import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { CarsData } from "../data/carsData";
import CarsCard from "../common/CarsCard";
import ButtonDesign from "../common/ButtonDesign";
import { IoMdRefresh } from "react-icons/io";

const CarsSections = () => {
  return (
    <div className="bg-[#F9F9F9] py-[80px]">
      <div className="max-w-[1160px] mx-auto">
        <h2 className="text-[#05C3DD] text-lg font-bold tracking-[0.2em] uppercase flex items-center gap-3 justify-center">
          <FaCarAlt /> New Arrivals
        </h2>
        <h3 className="text-5xl font-bold text-center py-3">
          Let's Check Latest<span className="text-[#05C3DD]">&nbsp;Cars</span>
        </h3>
        <div className=" py-10 px-4 xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CarsData.map((item, index) => (
            <CarsCard
              Transmission={item.Transmission}
              price={item.price}
              title={item.title}
              imgUrl={item.imgUrl}
              condition={item.condition}
              reviewCount={item.reviewCount}
              totalReivews={item.totalReivews}
              model={item.model}
              mileage={item.mileage}
              fuelType={item.fuelType}
              key={index}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <ButtonDesign
            title="Load More"
            bgColor="#05C3DD"
            textColor="#ffffff"
            rippleColor="#000000"
            icon={<IoMdRefresh />}
          />
        </div>
      </div>
    </div>
  );
};

export default CarsSections;
