import React from "react";
import ButtonDesign from "../common/ButtonDesign";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-blue-300 -mt-14 relative z-20">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Let's Find Your Perfect Car
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <label className="font-medium mb-2">Car Condition</label>
          <select className="p-2 border rounded-md">
            <option>All Status</option>
            <option>New</option>
            <option>Used</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-2">Brand Name</label>
          <select className="p-2 border rounded-md">
            <option>All Brand</option>
            <option>Toyota</option>
            <option>Honda</option>
            <option>Ford</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-2">Car Model</label>
          <select className="p-2 border rounded-md">
            <option>All Brand</option>
            <option>Corolla</option>
            <option>Civic</option>
            <option>Mustang</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-2">Choose Mileage</label>
          <select className="p-2 border rounded-md">
            <option>All Status</option>
            <option>0-20,000 km</option>
            <option>20,000-50,000 km</option>
            <option>50,000+ km</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-2">Price Range</label>
          <select className="p-2 border rounded-md">
            <option>All Brand</option>
            <option>$0-$20,000</option>
            <option>$20,000-$50,000</option>
            <option>$50,000+</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-2">Body Type</label>
          <select className="p-2 border rounded-md">
            <option>All Brand</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Truck</option>
          </select>
        </div>
        <ButtonDesign
          title="Find Your Car"
          bgColor="#05C3DD"
          textColor="#ffffff"
          rippleColor="#000000"
          icon={<FaSearch />}
        />
      </form>
    </div>
  );
};

export default SearchForm;
