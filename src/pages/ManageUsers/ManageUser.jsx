import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import filterIcon from "../../assets/filterIcon.svg";
import lineFilter from "../../assets/lineFilter.svg";
import downArrow from "../../assets/downArrow.svg";
import Cancel from "../../assets/icons/Cancel.svg";
import { RotatingLines } from "react-loader-spinner";
import deleteIcon from "../../assets/deleteIcon.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Popup from "../../components/Popup";
import { baseAxios } from "../../utils/apiConfig";

const ManageUser = () => {
  const text = "Manage User";

  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  // const [blocked, setBlocked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isSportsDropdownOpen, setIsSportsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedSport, setSelectedSport] = useState("");

  const fetchUsers = async (offset = 0) => {
    const accessToken = sessionStorage.getItem("access_token");
    try {
      setLoading(true);
      const response = await baseAxios.get(
        `/admin_side/get_users/?role=user&limit=${perPage}&offset=${offset}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const data = response.data;
      setAllUsers(data.results);
      setTotalUsers(data.count);
      setUsers(data.results.slice(0, 10));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = (id) => {
    handleDelete(id);
    setCurrent(0);
  };

  const handleDelete = async (id) => {
    const accesstoken = sessionStorage.getItem("access_token");
    try {
      const response = await baseAxios.post(
        "/admin_side/delete_user/",
        {
          user_id: id,
        },
        { headers: { Authorization: `Bearer ${accesstoken}` } }
      );
      console.log("Delete successful");
      fetchUsers();
    } catch (error) {
      console.log("Error deleting user", error);
    }
  };

  const handleBlock = async (id) => {
    const accesstoken = sessionStorage.getItem("access_token");
    try {
      const response = await baseAxios.post(
        "/admin_side/block_user/",
        {
          user_id: id,
          block: true,
        },
        { headers: { Authorization: `Bearer ${accesstoken}` } }
      );
      console.log(`User ${id} blocked`);
      updateUserStatus(id, true);

      // setBlocked(true);
    } catch (error) {
      console.log("Error blocking User", error);
    }
  };

  const handleunBlock = async (id) => {
    const accesstoken = sessionStorage.getItem("access_token");
    try {
      const response = await baseAxios.post(
        "/admin_side/block_user/",
        {
          user_id: id,
          block: false,
        },
        { headers: { Authorization: `Bearer ${accesstoken}` } }
      );
      console.log(`User ${id} unblocked`);
      updateUserStatus(id, false);

      // setBlocked(false);
    } catch (error) {
      console.log("Error unblocking user", error);
    }
  };

  const updateUserStatus = (id, blocked) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, approved: !blocked } : user
      )
    );
  };
  const handlePerPageChange = (option) => {
    setPerPage(parseInt(option));
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
    setIsStatusDropdownOpen(false);
    applyFilters(status, selectedSport);
  };

  const handleSportSelect = (sport) => {
    setSelectedSport(sport);
    setIsSportsDropdownOpen(false);
    applyFilters(selectedStatus, sport);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleStatusDropdown = () => {
    setIsStatusDropdownOpen(!isStatusDropdownOpen);
  };

  const toggleSportsDropdown = () => {
    setIsSportsDropdownOpen(!isSportsDropdownOpen);
  };

  const applyFilters = (status, sport) => {
    let filteredUsers = allUsers;

    if (status) {
      filteredUsers = filteredUsers.filter((user) =>
        status === "Active" ? user.approved : !user.approved
      );
    }

    if (sport) {
      filteredUsers = filteredUsers.filter((user) =>
        user.sports.includes(sport)
      );
    }

    setTotalUsers(filteredUsers.length);
    setCurrentPage(1);

    if (filteredUsers.length === 0) {
      setUsers([]);
    } else {
      setUsers(filteredUsers.slice(0, 10));
    }
  };

  useEffect(() => {
    fetchUsers(0); // Initial fetch
  }, [perPage]);

  const handleNextPage = () => {
    const newPage = currentPage + 1;
    const newOffset = (newPage - 1) * 10;
    fetchUsers(newOffset);
    setCurrentPage(newPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      const newOffset = (newPage - 1) * 10;
      fetchUsers(newOffset);
      setCurrentPage(newPage);
    }
  };
  const clearFilters = () => {
    setSelectedStatus("");
    setSelectedSport("");
    setIsStatusDropdownOpen(false);
    setIsSportsDropdownOpen(false);
    fetchUsers(0);
    setPerPage(10);
    setCurrentPage(1);
  };

  function formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num;
  }

  const onCancel = () => {
    setCurrent(0);
  };
  return (
    <div>
      <Sidebar active={2} />
      <Navbar text={text} />

      <div className="bg-[#FAFBFC] h-screen lg:w-[calc(100vw - 345px)] lg:ml-[345px]">
        <div className="h-6"></div>
        <div className="mx-auto md:ml-8 flex justify-start items-center max-w-[834.58px] flex-wrap mb-12 md:mb-24 lg:mb-0 w-[90%] h-[40px] md:h-[70px] bg-white rounded-[15px]">
          <div className=" flex">
            <div className="flex justify-center items-center px-[4px] md:px-5 lg-1350:px-12">
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
            <div className="flex justify-center items-center px-[2px] md:px-5">
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
          <div className="relative flex">
            <div className="flex justify-center items-center px-[4px]  md:px-5">
              <div
                className="flex justify-between w-auto md:w-[108px] items-center"
                onClick={toggleStatusDropdown}
              >
                <span className="text-[14px]">
                  {selectedStatus || "Status"}
                </span>
                <img src={downArrow} alt="" />
              </div>
            </div>
            <div>
              <img className="h-[40px] md:h-[72px]" src={lineFilter} alt="" />
            </div>
            {isStatusDropdownOpen && (
              <div className="absolute w-full top-0 bg-white border rounded shadow-lg">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleStatusSelect("Active");
                      toggleStatusDropdown;
                    }}
                  >
                    Active
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleStatusSelect("Offline");
                      toggleStatusDropdown;
                    }}
                  >
                    Offline
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative flex">
            <div className="flex justify-center items-center px-[4px] md:px-5">
              <div
                className="flex justify-between w-auto md:w-[108px] items-center"
                onClick={toggleSportsDropdown}
              >
                <span className="text-[14px]">{selectedSport || "Sports"}</span>
                <img src={downArrow} alt="" />
              </div>
            </div>
            <div>
              <img className="h-[40px] md:h-[72px]" src={lineFilter} alt="" />
            </div>
            {isSportsDropdownOpen && (
              <div className="absolute top-0 w-full h-[90px] md:h-[120px] overflow-y-scroll bg-white border rounded shadow-lg z-50">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer shrink-0"
                    onClick={() => {
                      handleSportSelect("Cricket");
                      toggleSportsDropdown;
                    }}
                  >
                    Cricket
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleSportSelect("Football");
                      toggleSportsDropdown;
                    }}
                  >
                    Football
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleSportSelect("Golf");
                      toggleSportsDropdown;
                    }}
                  >
                    Golf
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleSportSelect("Badminton");
                      toggleSportsDropdown;
                    }}
                  >
                    Badminton
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleSportSelect("Tennis");
                      toggleSportsDropdown;
                    }}
                  >
                    Tennis
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      handleSportSelect("Basketball");
                      toggleSportsDropdown;
                    }}
                  >
                    Basketball
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className=" flex">
            <div
              className="flex justify-center items-center px-[4px] md:px-5 cursor-pointer"
              onClick={clearFilters}
            >
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
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Sports
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {users.map((user) => (
                  <tr
                    className="bg-white border-b text-[#202224]"
                    key={user.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap"
                    >
                      <input
                        className="mr-2 accent-[#E0E0E0]"
                        type="checkbox"
                      />
                      #{user.id}
                    </th>
                    <td className="px-6 py-4">{user.full_name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.phoneNo}</td>
                    <td className="px-6 py-4 gap-4 items-center whitespace-nowrap">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                          marginRight: "10px",
                        }}
                      >
                        <circle
                          cx="5"
                          cy="5"
                          r="5"
                          fill={user.approved ? "#04EB0D" : "#EA4335"}
                        />
                      </svg>
                      <span
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                      >
                        {user.approved ? "Active" : "Offline"}
                      </span>
                    </td>

                    <td className="px-6 py-4">Cricket</td>
                    <td className="px-6 py-4 flex gap-4">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setCurrent(1)}
                        className="cursor-pointer"
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
                      {current === 1 && (
                        <Popup setTrigger={setCurrent}>
                          <h1 className="text-xl font-bold mt-5 mb-3">
                            Are you sure you want to delete this user?
                          </h1>
                          <div className="flex gap-5 mb-5">
                            <button
                              className="border-2 border-primary p-[3px] text-[13px] md:text-base w-[90px] md:w-[100px] rounded-md"
                              onClick={onCancel}
                            >
                              No
                            </button>
                            <button
                              className="bg-primary p-[3px] text-[13px] md:text-base w-[90px] md:w-[100px] rounded-md text-white"
                              onClick={() => deleteUser(user.id)}
                            >
                              Yes
                            </button>
                          </div>
                        </Popup>
                      )}
                      {user.approved ? (
                        <button
                          className=" text-white px-[5px] py-[5px] rounded ml-2 border border-gray-400 "
                          onClick={() => handleBlock(user.id)}
                        >
                          <img src={Cancel} alt="" />
                        </button>
                      ) : (
                        <button
                          className=" text-white px-[5px] py-[5px] rounded ml-2 border border-gray-400 bg-gray-200"
                          onClick={() => handleunBlock(user.id)}
                        >
                          <img src={Cancel} alt="" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          {loading && (
            <div className="flex items-center justify-center mt-5">
              <RotatingLines color="#123abc" loading={loading} width="40" />
            </div>
          )}
          <div className="flex justify-between items-center flex-1">
            <span className="text-[#202224] text-[14px] font-normal">
              Showing {formatNumber(currentPage * 10 - 9)}-
              {formatNumber(Math.min(currentPage * 10, totalUsers))} of{" "}
              {formatNumber(totalUsers)}
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

export default ManageUser;
