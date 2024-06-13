import React, { useEffect } from "react";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import filterIcon from "../../assets/filterIcon.svg";
import lineFilter from "../../assets/lineFilter.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import downArrow from "../../assets/downArrow.svg";

import deleteIcon from "../../assets/deleteIcon.svg";
import { baseAxios } from "../../utils/apiConfig";
const OrganizerRequest = () => {
  const text = "Organizers Requests";
  const [getRequests, setGetRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [perPage, setPerPage] = useState(10);

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handlePerPageChange = (option) => {
    setPerPage(parseInt(option));
  };

  const fetchData = async (offset = 0) => {
    const accesstoken = sessionStorage.getItem("access_token");
    try {
      const response = await baseAxios.get(
        `/admin_side/get_approval_users/?offset=${offset}&limit=10`,
        {
          headers: { Authorization: `Bearer ${accesstoken}` },
        }
      );
      const data = response.data;
      setGetRequests(data.results);
      setTotalUsers(data.count);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };
  const handleConfirm = async (id) => {
    const accesstoken = sessionStorage.getItem("access_token");
    try {
      const response = await baseAxios.post(
        "/admin_side/approve/",
        { user_id: id, accept: true },
        { headers: { Authorization: `Bearer ${accesstoken}` } }
      );
      fetchData();
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handleReject = async (id) => {
    const accesstoken = sessionStorage.getItem("access_token");
    try {
      const response = await baseAxios.post(
        "/admin_side/approve/",
        {
          user_id: id,
          accept: false,
        },
        { headers: { Authorization: `Bearer ${accesstoken}` } }
      );
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    fetchData(0); // Initial fetch
  }, [perPage]);

  const handleNextPage = () => {
    const newPage = currentPage + 1;
    const newOffset = (newPage - 1) * 10;
    fetchData(newOffset);
    setCurrentPage(newPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      const newOffset = (newPage - 1) * 10;
      fetchData(newOffset);
      setCurrentPage(newPage);
    }
  };
  const clearFilters = () => {
    setPerPage(10);
    setCurrentPage(1);
  };
  return (
    <div>
      <Sidebar active={5} />
      <Navbar text={text} />

      <div className="bg-[#FAFBFC] h-screen lg:w-[calc(100vw - 345px)] lg:ml-[345px]">
        <div className="h-6"></div>
        {/* <div className="mx-auto md:ml-8 flex justify-center md:justify-start items-center flex-wrap mb-12 md:mb-24 lg:mb-0  w-[90%] md:w-[95%] h-[70px] bg-white rounded-[15px]">
          <div className=" flex">
            <div className="flex justify-center items-center px-2 md:px-12">
              <img
                className="h-[20px] md:h-auto w-[20px] md:w-auto"
                src={filterIcon}
                alt=""
              />
            </div>
            <div>
              <img className="h-[40px] md:h-[72px]" src={lineFilter} alt="" />
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
              <div className="absolute z-50 top-0 w-full h-[90px] md:h-[120px] overflow-y-scroll flex justify-center bg-white border rounded shadow-lg">
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
            <div
              className="flex justify-center items-center px-2 md:px-10 cursor-pointer"
              onClick={clearFilters}
            >
              <img src={deleteIcon} alt="" />
            </div>
          </div>
        </div> */}
        <div className="h-0 md:h-6"></div>

        <div className="relative overflow-x-auto rounded-[15px] m-6">
          {getRequests.length > 0 ? (
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
                {getRequests.map((requests) => (
                  <tr
                    className="bg-white border-b text-[#202224]"
                    key={requests.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap"
                    >
                      <input
                        className="mr-2 accent-[#E0E0E0]"
                        type="checkbox"
                      />
                      #{requests.id}
                    </th>
                    <td className="px-6 py-4">{requests.full_name}</td>
                    <td className="px-6 py-4">{requests.email}</td>
                    <td className="px-6 py-4">{requests.phoneNo}</td>
                    <td className="px-6 py-4">{requests.address}</td>
                    <td className="px-6 py-4 flex gap-4">
                      <div
                        className="border border-primary h-[30px] text-primary rounded-[50px] text-sm font-semibold flex justify-center items-center w-[90px] cursor-pointer"
                        onClick={() => handleConfirm(requests.id)}
                      >
                        Confirm
                      </div>
                      <div
                        className="border border-[#EA4335] h-[30px] text-[#EA4335] rounded-[50px] text-sm font-semibold flex justify-center items-center w-[90px] cursor-pointer"
                        onClick={() => handleReject(requests.id)}
                      >
                        Deny
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex justify-center">
              <span className="text-2xl">No Record Found</span>
            </div>
          )}
          {getRequests.length > 0 && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default OrganizerRequest;
