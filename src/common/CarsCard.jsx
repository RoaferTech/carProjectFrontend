import React from "react";
import {
  FaCarAlt,
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaRoad,
  FaGasPump,
  FaRegEye,
} from "react-icons/fa";
import { RiSteering2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/products/CartSlice";

const CarsCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className="relative bg-white p-3 rounded-lg shadow-sm  transition-shadow duration-300 group">
      {item?.condition && (
        <div
          className={`absolute top-0 left-0 px-2 py-1 text-xs font-bold uppercase rounded-br-lg text-white z-30 ${
            item?.condition === "New" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {item?.condition}
        </div>
      )}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={`http://localhost:4000/${item?.image}`}
          alt={item?.title}
          className="w-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div className=" absolute top-1/2 right-0 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-3 transition-all duration-500 ease-out flex flex-col items-center gap-2">
          <div className="bg-[#05C3DD] p-2 rounded-full transition-transform duration-500 hover:scale-110 hover:bg-black">
            <FaShoppingCart
              className="text-white text-xl cursor-pointer"
              onClick={handleAddToCart}
            />
          </div>
          <div className="bg-[#05C3DD] p-2 rounded-full transition-transform duration-500 hover:scale-110 hover:bg-black">
            <FaHeart className="text-white text-xl " />
          </div>
        </div>
      </div>
      <div className="px-2">
        <h2 className="text-lg font-semibold mt-4">{item?.title}</h2>
        <div className="flex items-center gap-2 mt-2 text-[#757F95] text-sm">
          <div className="flex text-[#FBA707]">
            {Array.from({ length: item?.averageRating }, (_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p>{item?.averageRating}</p>
          <p className=" capitalize">({item?.reviews.length}&nbsp;reviews)</p>
        </div>
        <div className="flex gap-3 text-[#757F95] text-sm mt-5">
          <p className="flex gap-2 items-center">
            <RiSteering2Fill className="text-[#05C3DD] capitalize" />
            {item?.transmission}
          </p>
          <p className="flex gap-2 items-center">
            <FaRoad className="text-[#05C3DD]" />
            {item?.mileage}
          </p>
        </div>
        <div className="flex gap-3 text-[#757F95] text-sm my-3">
          <p className="flex gap-2 items-center">
            <FaCarAlt className="text-[#05C3DD]" />
            Model:&nbsp;{item?.model}
          </p>
          <p className="flex gap-2 items-center">
            <FaGasPump className="text-[#05C3DD] capitalize" />
            {item?.fuelType}
          </p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between px-2 py-5 items-center">
        <h3 className="text-lg font-semibold text-[#05C3DD]">${item?.price}</h3>
        <button className="bg-[#05C3DD] text-white font-bold hover:bg-black flex items-center gap-2 py-[5px] px-3 rounded-lg">
          <FaRegEye className="text-lg" />
          Details
        </button>
      </div>
    </div>
  );
};

export default CarsCard;
