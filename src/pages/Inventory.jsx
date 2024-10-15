import React, { useState, useEffect } from "react";
import { CarsData } from "../data/carsData";
import CarsCard from "../common/CarsCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../redux/products/CarSlice";
const Inventory = () => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector((state) => state.cars);
  const [sortedCardsData, setSortedCardsData] = useState([...cars]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  useEffect(() => {
    let sortedData = [...cars];
    if (sortOption === "low-to-high") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-to-low") {
      sortedData.sort((a, b) => b.price - a.price);
    }
    setSortedCardsData(sortedData);
  }, [sortOption]);

  const totalPages = Math.ceil(sortedCardsData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedCardsData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-[#F9F9F9] py-[80px]">
      <div className="max-w-[1160px] mx-auto">
        <div></div>
        <div>
          <div className="bg-white py-5 rounded-xl px-5 flex justify-between items-center">
            <p className=" font-bold">
              Showing {indexOfFirstItem + 1} -
              {Math.min(indexOfLastItem, sortedCardsData.length)} of
              {sortedCardsData.length}
              &nbsp;Results
            </p>
            <div>
              <label htmlFor="sort" className="mr-3 font-semibold">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-4 py-2 border text-black rounded bg-white focus:outline-none focus:border-black transition-colors duration-200"
              >
                <option value="default">By Default</option>
                <option value="low-to-high">Price:Low to High</option>
                <option value="high-to-low">Price:High to Low</option>
              </select>
            </div>
          </div>
          <div className=" py-10 px-4 xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {currentItems &&
              currentItems?.map((item, index) => (
                <CarsCard item={item} key={index} />
              ))}
          </div>
          <div className=" flex justify-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#05C3DD] text-white hover:bg-black"
              }`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 rounded ${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "bg-[#05C3DD] text-white hover:bg-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-[#05C3DD] text-white hover:bg-black"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
