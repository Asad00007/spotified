import React from "react";
import img from "../assets/da.png"

const Navbar = ({text}) => {
  return (
    <div className="lg:w-[cal(100vw- 345px)] ml-0 lg:ml-[345px] min-h-[120px] flex items-center">
      <nav className="bg-white border-gray-200 w-full">
        <div className=" flex flex-col md:flex-row items-center justify-between p-4 ">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-4xl font-semibold ml-6">
              {text}
            </span>
          </a>
          <div>
            <form className="max-w-md mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center py-2 pr-8 pl-6 pointer-events-none">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14Z"
                      fill="#2D8E00"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block lg:w-[513px] ml-4 h-[60px] p-4 ps-10 text-lg text-[#737791] rounded-lg bg-[#F9FAFB] focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search here..."
                  required
                />
              </div>
            </form>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <img
              src={img}
              alt="Avatar icon"
              className=" w-[60px] h-[60px] rounded-full"
            />
            <div className="flex flex-col">
                <span className="text-primary text-base font-medium">Abdul Hadi</span>
                <span className="text-[#737791] text-sm font-normal">Admin</span>
            </div>
            
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
