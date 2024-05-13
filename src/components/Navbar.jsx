import React from "react";
import img from "../assets/da.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import searchIcon from "../assets/searchIcon.svg";

const Navbar = ({ text }) => {
  const location = useLocation();
  return (
    <div className="lg:w-[cal(100vw- 345px)] ml-0 lg:ml-[345px] min-h-[120px] flex items-center">
      <nav className="bg-white border-gray-200 w-full">
        <div className=" flex flex-col md:flex-row justify-between items-center  p-4 gap-2">
          <a className="flex items-center space-x-3 rtl:space-x-reverse w-[200px] lg-1350:w-[350px]">
            <span className="self-center text-3xl md:text-4xl font-semibold ml-6">
              {text}
            </span>
          </a>

          {(location.pathname !== "/messages" ||
            location.pathname !== "manage-communities") && (
            <form className="lg-1350:-translate-x-16">
              <label
                htmlFor="default-search"
                className="mb-2 text-xs md:text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center py-2 pr-8 pl-6 pointer-events-none">
                  <img
                    className="w-[28px] h-[28px] md:w-auto md:h-auto"
                    src={searchIcon}
                    alt=""
                  />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-[300px] md-1200:w-[513px] ml-4 h-[60px] p-4 ps-10 text-md md:text-lg text-[#737791] rounded-lg bg-[#F9FAFB] focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search here..."
                  required
                />
              </div>
            </form>
          )}

          <div
            className="hidden md:flex items-center space-x-3"
            onClick={() => setName("Profile")}
          >
            <Link to="/profile">
              <img
                src={img}
                alt="Avatar icon"
                className=" w-[60px] h-[60px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-primary text-base font-medium">
                  Abdul Hadi
                </span>
                <span className="text-[#737791] text-sm font-normal">
                  Admin
                </span>
              </div>
            </Link>
          </div>
          {/* <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
          ></div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
