import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import filterIcon from "../../assets/filterIcon.svg";
import lineFilter from "../../assets/lineFilter.svg";
import downArrow from "../../assets/downArrow.svg";
import deleteIcon from "../../assets/deleteIcon.svg";
import { baseAxios } from "../../utils/apiConfig";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ManageOrganizer = () => {
  const text = "Manage Organizer";

  const [organizers, setOrganizers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const handlePerPageChange = (option) => {
    setPerPage(parseInt(option));
  };
  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const fetchOrganizers = async (offset = 0) => {
    const accesstoken = sessionStorage.getItem("access_token");
    try {
      const response = await baseAxios.get(
        `/admin_side/get_users/?role=organiser&limit=${perPage}&offset=${offset}`,
        {
          headers: { Authorization: `Bearer ${accesstoken}` },
        }
      );
      const data = response.data;
      setOrganizers(data.results);
      setTotalUsers(data.count);
    } catch (error) {
      console.log("Error Fetching Organizers", error);
    }
  };
  useEffect(() => {
    fetchOrganizers(0); // Initial fetch
  }, [perPage]);

  const clearFilters = () => {
    setPerPage(10);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    const newPage = currentPage + 1;
    const newOffset = (newPage - 1) * 10;
    fetchOrganizers(newOffset);
    setCurrentPage(newPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      const newOffset = (newPage - 1) * 10;
      fetchOrganizers(newOffset);
      setCurrentPage(newPage);
    }
  };
  return (
    <div>
      <Sidebar active={3} />
      <Navbar text={text} />

      <div className="bg-[#FAFBFC] h-screen lg:w-[calc(100vw - 345px)] lg:ml-[345px]">
        <div className="h-6"></div>
        <div className="mx-auto mb:ml-8 flex justify-center md:justify-start items-center flex-wrap mb-12 md:mb-24 lg:mb-0 md:w-[95%] w-[90%] h-[70px] bg-white rounded-[15px]">
          <div className=" flex">
            <div className="flex justify-start md:justify-center items-center px-2 mr-2 md:px-12">
              <img
                className="h-[20px] md:h-auto w-[20px] md:w-auto"
                src={filterIcon}
                alt=""
              />
            </div>
            <div>
              <img className="h-[40px] md:h-[72px] mr-2 mb:mr-0" src={lineFilter} alt="" />
            </div>
          </div>
          <div className="relative flex">
            <div className="flex justify-center items-center px-2 md:px-5">
              <div
                className="flex justify-between w-auto md:w-[108px] items-center"
                onClick={toggleUserDropdown}
              >
                <span className="text-[14px]">User ID</span>
                <img src={downArrow} alt="" />
              </div>
            </div>
            <div>
              <img className="h-[40px] md:h-[72px]" src={lineFilter} alt="" />
            </div>
            {isUserDropdownOpen && (
              <div className="absolute z-50 top-0 w-10 flex justify-center bg-white border rounded shadow-lg">
                <ul>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
                    <li
                      key={option}
                      value={option}
                      onClick={() => {
                        handlePerPageChange(option);
                        toggleUserDropdown();
                      }}
                      className="cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className=" flex">
            <div className="flex justify-center items-center px-2 md:px-10">
              <div className="flex justify-between w-auto md:w-[108px] items-center">
                <span className="text-[14px]">Status</span>
                <img src={downArrow} alt="" />
              </div>
            </div>
            <div>
              <img className="h-[40px] md:h-[72px]" src={lineFilter} alt="" />
            </div>
          </div>
          <div className=" flex">
            <div className="flex justify-center items-center px-2 md:px-10 cursor-pointer" onClick={clearFilters}>
              <img src={deleteIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="h-0 md:h-6"></div>

        <div className="relative overflow-x-auto rounded-[15px] m-6">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-collapse ">
            <thead className="text-lg bg-[#2D8E0080] h-[65px] text-white rounded-t-lg">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {organizers.map((org) => (
                <tr className="bg-white border-b text-[#202224]">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                    key={org.id}
                  >
                    <input className="mr-2 accent-[#E0E0E0]" type="checkbox" />#
                    {org.id}
                  </th>
                  <td className="px-6 py-4">{org.full_name}</td>
                  <td className="px-6 py-4">{org.email}</td>
                  <td className="px-6 py-4">{org.phoneNo}</td>
                  <td className="px-6 py-4">{org.address}</td>
                  <td className="px-6 py-4 flex gap-4">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="29"
                        height="29"
                        rx="4.5"
                        stroke="#393939"
                        strokeOpacity="0.5"
                      />
                      <path
                        d="M11.8887 10.2219L11.8887 8.92181C11.8887 8.01586 11.8887 7.56289 12.1604 7.28144C12.4322 7 12.8696 7 13.7444 7L16.2551 7C17.13 7 17.5674 7 17.8391 7.28144C18.1109 7.56289 18.1109 8.01586 18.1109 8.92181V10.2219"
                        stroke="#393939"
                        strokeOpacity="0.5"
                      />
                      <path
                        d="M20.0318 17.549C19.8836 18.8906 19.8162 19.4559 19.6295 19.9033C19.2228 20.878 18.3978 21.6169 17.3844 21.9141C16.9191 22.0506 16.3499 22.0556 15 22.0556C13.6502 22.0556 13.081 22.0506 12.6157 21.9141C11.6023 21.6169 10.7773 20.878 10.3706 19.9033C10.1839 19.4559 10.1165 18.8906 9.96827 17.5489L9.15308 10.1681L20.847 10.1681L20.0318 17.549Z"
                        stroke="#393939"
                        strokeOpacity="0.5"
                      />
                      <path
                        d="M8 10.206H22"
                        stroke="#393939"
                        strokeOpacity="0.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="29"
                        height="29"
                        rx="4.5"
                        stroke="#393939"
                        strokeOpacity="0.5"
                      />
                      <path
                        d="M9.34315 9.34315C7.89543 10.7909 7 12.7909 7 15C7 19.4183 10.5817 23 15 23C17.2091 23 19.2091 22.1046 20.6569 20.6569M9.34315 9.34315C10.7909 7.89543 12.7909 7 15 7C19.4183 7 23 10.5817 23 15C23 17.2091 22.1046 19.2091 20.6569 20.6569M9.34315 9.34315L20.6569 20.6569"
                        stroke="#393939"
                        strokeOpacity="0.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center flex-1">
            <span className="text-[#202224] text-[14px] font-normal">
              Showing {currentPage * 10 - 9}-
              {Math.min(currentPage * 10, totalUsers)} of {totalUsers}
            </span>
            <span className="text-[#202224] text-[14px] font-normal">
              Page {currentPage}
            </span>
            <div className="flex p-2">
              <div
                className={`bg-white px-2 py-1 border border-gray-200 ${
                  currentPage < 2 ? "cursor-not-allowed" : ""
                }`}
                onClick={handlePrevPage}
              >
                <FaChevronLeft
                  className={`${
                    currentPage < 2 ? "text-gray-300" : "text-black"
                  } text-xs`}
                />
              </div>
              <div
                className={`bg-white px-2 py-1 border border-gray-200 ${
                  currentPage * 10 >= totalUsers ? "cursor-not-allowed" : ""
                }`}
                onClick={handleNextPage}
              >
                <FaChevronRight
                  className={`${
                    currentPage * 10 >= totalUsers
                      ? "text-gray-300"
                      : "text-black"
                  } text-xs`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrganizer;
