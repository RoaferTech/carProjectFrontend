import React, { useState, useEffect } from "react";
import TopNav from "./TopNav";
import logo from "../../assets/logo.png";
import { FaSearch, FaCartArrowDown, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Inventory", path: "/inventory" },
  { name: "Blog", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const location = useLocation();

  const totalItems = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );
  const ite = useSelector((state) => state.cart);
  console.log("hiiii", ite);

  useEffect(() => {
    const currentItem = NAV_ITEMS.find(
      (item) => item.path === location.pathname
    );
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, [location.pathname]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const getActiveClass = (item) => {
    return item === activeItem
      ? "text-[#05C3DD] border-b-2 border-solid border-[#05C3DD]"
      : "text-black";
  };

  return (
    <>
      <TopNav />
      <div className="sticky top-0 z-50 bg-white">
        <div className="max-w-[1060px] mx-auto py-8 px-5 lg:px-0 flex items-center justify-between ">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-9" />
          </Link>
          <nav className="hidden md:flex gap-7 font-semibold">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`cursor-pointer font-bold ${getActiveClass(
                  item.name
                )}`}
                onClick={() => handleMenuItemClick(item.name)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex gap-5 relative">
            <FaSearch className="text-2xl text-[#05C3DD] cursor-pointer" />
            <div className=" relative">
              <Link to="/cart">
                <FaCartArrowDown className="text-2xl text-[#05C3DD] cursor-pointer" />
              </Link>
              {totalItems >= 0 && (
                <span className="absolute top-[-15px] right-[-10px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-[#05C3DD] rounded-full">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={handleMobileMenuToggle}>
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl text-[#05C3DD]" />
              ) : (
                <FaBars className="text-2xl text-[#05C3DD]" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-md py-4">
            <ul className="flex flex-col gap-4 items-center">
              {NAV_ITEMS.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`cursor-pointer font-bold ${getActiveClass(
                      item.name
                    )}`}
                    onClick={() => handleMenuItemClick(item.name)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default Navbar;
