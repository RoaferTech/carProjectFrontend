import React, { useState } from "react";
import { FaCarAlt } from "react-icons/fa";
import BlogCard from "../common/blogsSection/BlogCard";
import { BlogsData } from "../data/blogsData";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  const totalPage = Math.ceil(BlogsData.length / itemPerPage);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = BlogsData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className=" max-w-[1160px] mx-auto py-10">
      <h2 className="text-[#05C3DD] text-lg font-bold tracking-[0.2em] uppercase flex items-center gap-3 justify-center">
        <FaCarAlt /> Our Blog
      </h2>
      <h3 className="text-5xl font-bold text-center py-3">
        Latest News &<span className="text-[#05C3DD]">&nbsp;Blog</span>
      </h3>
      <div className=" py-10 px-4 xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {currentItem.map((item, index) => (
          <BlogCard
            key={index}
            title={item.title}
            imgUrl={item.imgUrl}
            auther={item.auther}
            date={item.date}
          />
        ))}
      </div>
      <div className="flex justify-center">
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
        {Array.from({ length: totalPage }, (_, index) => (
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
          disabled={currentPage === totalPage}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === totalPage
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#05C3DD] text-white hover:bg-black"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
