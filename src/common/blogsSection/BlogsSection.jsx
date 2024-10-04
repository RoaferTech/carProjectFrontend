import React, { useState } from "react";
import { BlogsData } from "../../data/blogsData";
import BlogCard from "./BlogCard";
import { FaCarAlt } from "react-icons/fa";

const BlogsSection = () => {
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
    <div className=" max-w-[1160px] mx-auto py-[120px]">
      <h2 className="text-[#05C3DD] text-lg font-bold tracking-[0.2em] uppercase flex items-center gap-3 justify-center">
        <FaCarAlt /> Our Blog
      </h2>
      <h3 className="text-5xl font-bold text-center py-3">
        Latest News &<span className="text-[#05C3DD]">&nbsp;Blog</span>
      </h3>
      <div className=" py-10 px-4 xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {BlogsData.slice(0, 3).map((item, index) => (
          <BlogCard
            key={index}
            title={item.title}
            imgUrl={item.imgUrl}
            auther={item.auther}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
