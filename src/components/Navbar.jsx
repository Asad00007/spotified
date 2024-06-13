import React, { useEffect, useState } from "react";
import img from "../assets/da.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import searchIcon from "../assets/searchIcon.svg";
import { FaChevronDown } from "react-icons/fa";
import { baseAxios } from "../utils/apiConfig";

const Navbar = ({ text }) => {
  const [profileImage, setProfileImage] = useState();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const accessToken = sessionStorage.getItem("access_token");
    try {
      const response = await baseAxios.get("/auth/get_profile/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = response.data;

      if (data.data.img) {
        setProfileImage(`https://gosportified.com${data.data.img}`);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
  const location = useLocation();
  return (
    <div className="lg:w-[cal(100vw- 345px)] ml-0 lg:ml-[345px] h-auto md:max-h-[120px] flex items-center">
      <nav className="bg-white border-gray-200 w-full">
        <div className=" flex flex-col md:flex-row justify-between items-center p-4 gap-2">
          <a className="flex items-center justify-center md:justify-start space-x-3 rtl:space-x-reverse w-[200px] lg-1350:w-[350px]">
            <span className=" text-center text-xl md:text-[32px] font-semibold ml-0 ">
              {text}
            </span>
          </a>

          {location.pathname !== "/messages" &&
            location.pathname !== "/manage-communities" && (
              <form className="lg-1350:-translate-x-16">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-xs md:text-sm font-medium text-gray-900 sr-only "
                >
                  Search
                </label>
                <div className="relative flex w-[300px] md:[400px] lg-1300:w-[513px] md:ml-4 h-[60px] p-4 text-md md:text-lg text-[#737791] rounded-lg bg-[#F9FAFB] focus:ring-blue-500 focus:border-blue-500 gap-2">
                  {/* <div className="absolute inset-x-10 inset-y-0 start-0 flex items-center py-2 ml-2 pointer-events-none"> */}
                  <img
                    className="w-[28px] h-[28px] md:w-auto md:h-auto"
                    src={searchIcon}
                    alt=""
                  />
                  {/* </div> */}
                  <input
                    type="search"
                    id="default-search"
                    className="flex flex-1 bg-transparent outline-none placeholder-[#737791]"
                    placeholder="Search here..."
                    required
                  />
                </div>
              </form>
            )}

          <div
            className="hidden md:flex space-x-3"
            onClick={() => setName("Profile")}
          >
            <Link to="/profile" className="flex gap-3">
              <img
                src={profileImage || img}
                alt="Avatar icon"
                className=" w-[60px] h-[60px] rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-primary text-base font-medium md-1200:w-[90px]">
                  Abdul Hadi
                </span>
                <span className="text-[#737791] text-sm font-normal">
                  Admin
                </span>
              </div>
            </Link>
            <FaChevronDown className="translate-y-2" />
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
