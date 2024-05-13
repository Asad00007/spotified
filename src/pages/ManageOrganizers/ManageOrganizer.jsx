import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import filterIcon from "../../assets/filterIcon.svg" 
import lineFilter from "../../assets/lineFilter.svg"
import downArrow from "../../assets/downArrow.svg"
import deleteIcon from "../../assets/deleteIcon.svg"

const ManageOrganizer = () => {
    const text = "Manage organizer";
  return (
    <div>
      <Sidebar active={3} />
      <Navbar text={text} />

      <div className="bg-[#FAFBFC] h-screen lg:w-[calc(100vw - 345px)] lg:ml-[345px]">
        <div className="h-6"></div>
        <div className=" ml-8 flex justify-center md:justify-start items-center flex-wrap mb-12 md:mb-24 lg:mb-0 md:w-[95%] w-[90%] h-[70px] bg-white rounded-[15px]">
          <div className=" flex">
            <div className="flex justify-center items-center px-2 md:px-12">
              <img src={filterIcon} alt="" />
            </div>
            <div>
              <img className="h-[40px] md:h-[72px]" src={lineFilter} alt="" />
            </div>
          </div>
          <div className=" flex">
            <div className="flex justify-center items-center px-2 md:px-12">
              <div className="flex justify-between w-auto md:w-[108px] items-center">
                <span className="text-[14px]">User ID</span>
                <img src={downArrow} alt="" />
              </div>
            </div>
            <div>
              <img className="h-[40px] md:h-[72px]" src={lineFilter} alt="" />
            </div>
          </div>
          <div className=" flex">
            <div className="flex justify-center items-center px-2 md:px-10">
              <div className="flex justify-between w-auto md:w-[108px] items-center">
                <span className="text-[14px]">Status</span>
                <img src={downArrow} alt="" />
              </div>
            </div>
            <div>
              <img className="h-[40px] md:h-[72px] bg-[#979797]" src={lineFilter} alt="" />
            </div>
          </div>
          <div className=" flex">
            <div className="flex justify-center items-center px-2 md:px-10">
              <img src={deleteIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="h-0 md:h-6"></div>

        <div className="relative overflow-x-auto rounded-[15px]">
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
              <tr className="bg-white border-b text-[#202224]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  <input className="mr-2 accent-[#E0E0E0]" type="checkbox" />
                  #1231
                </th>
                <td className="px-6 py-4">Savannah Nguyen</td>
                <td className="px-6 py-4">maka@gmail.com</td>
                <td className="px-6 py-4">+92 xxx xxxxx21</td>
                <td className="px-6 py-4">6391 Elgin St. Celina, Delaware 10299</td>
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
              <tr className="bg-[#F9FAFB] border-b text-[#202224]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  <input className="mr-2 accent-[#E0E0E0]" type="checkbox" />
                  #1232
                </th>
                <td className="px-6 py-4">Albert Flores</td>
                <td className="px-6 py-4">ustil@gmail.com</td>
                <td className="px-6 py-4">+92 xxx xxxxx21</td>
                <td className="px-6 py-4">6391 Elgin St. Celina, Delaware 10299</td>
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
              <tr className="bg-white border-b text-[#202224]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  <input className="mr-2 accent-[#E0E0E0]" type="checkbox" />
                  #1233
                </th>
                <td className="px-6 py-4">Brooklyn Simmons</td>
                <td className="px-6 py-4">quasiah@gmail.com</td>
                <td className="px-6 py-4">+92 xxx xxxxx21</td>
                
                <td className="px-6 py-4">6391 Elgin St. Celina, Delaware 10299</td>
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
              <tr className="bg-[#F9FAFB] border-b text-[#202224]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  <input className="mr-2 accent-[#E0E0E0]" type="checkbox" />
                  #1234
                </th>
                <td className="px-6 py-4">Kathryn Murphy</td>
                <td className="px-6 py-4">osgoodwy@gmail.com</td>
                <td className="px-6 py-4">+92 xxx xxxxx21</td>
               
                <td className="px-6 py-4">6391 Elgin St. Celina, Delaware 10299</td>
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
              <tr className="bg-white border-b text-[#202224]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  <input className="mr-2 accent-[#E0E0E0]" type="checkbox" />
                  #1235
                </th>
                <td className="px-6 py-4">Jerome Bell</td>
                <td className="px-6 py-4">zitka@gmail.com</td>
                <td className="px-6 py-4">+92 xxx xxxxx21</td>
                <td className="px-6 py-4">6391 Elgin St. Celina, Delaware 10299</td>
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
              <tr className="bg-[#F9FAFB] border-b text-[#202224]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  <input className="mr-2 accent-[#E0E0E0]" type="checkbox" />
                  #1236
                </th>
                <td className="px-6 py-4">Arlene McCoy</td>
                <td className="px-6 py-4">igerrin@gmail.com</td>
                <td className="px-6 py-4">+92 xxx xxxxx21</td>
                <td className="px-6 py-4">6391 Elgin St. Celina, Delaware 10299</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrganizer;
