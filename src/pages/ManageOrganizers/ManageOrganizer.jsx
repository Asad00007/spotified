import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const ManageOrganizer = () => {
    const text = "Manage organizer";
  return (
    <div>
      <Sidebar active={3} />
      <Navbar text={text} />

      <div className="bg-[#FAFBFC] h-screen lg:w-[calc(100vw - 345px)] lg:ml-[345px]">
        <div className="h-6"></div>
        <div className=" ml-8 flex justify-start items-center flex-wrap mb-24 lg:mb-0 w-[95%] h-[70px] bg-white rounded-[15px]">
          <div className=" flex">
            <div className="flex justify-center items-center px-12">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 3.54016C27 2.65107 26.9994 2.2062 26.8223 1.86662C26.6665 1.56791 26.4188 1.32523 26.1131 1.17303C25.7654 1 25.3094 1 24.3994 1H3.59937C2.68928 1 2.23469 1 1.88708 1.17303C1.58132 1.32523 1.33291 1.56791 1.17711 1.86662C1 2.2062 1 2.65107 1 3.54016V4.71056C1 5.09885 1 5.29314 1.0449 5.47584C1.08471 5.63782 1.15053 5.79255 1.23962 5.93459C1.34009 6.09475 1.48085 6.23226 1.76172 6.50665L9.98867 14.5438C10.2697 14.8183 10.4095 14.9548 10.51 15.115C10.599 15.2571 10.6658 15.4124 10.7056 15.5743C10.75 15.7552 10.75 15.9472 10.75 16.3276V23.8775C10.75 25.2383 10.75 25.9192 11.0434 26.329C11.2996 26.6868 11.6948 26.9255 12.137 26.9893C12.6434 27.0624 13.2667 26.7584 14.5126 26.1498L15.8126 25.5148C16.3343 25.26 16.5945 25.1321 16.7851 24.942C16.9537 24.7739 17.0826 24.572 17.1611 24.3496C17.2499 24.098 17.25 23.8124 17.25 23.2425V16.3394C17.25 15.9511 17.25 15.757 17.2949 15.5743C17.3347 15.4124 17.4005 15.2571 17.4896 15.115C17.5894 14.9559 17.7288 14.8197 18.0061 14.5488L18.0117 14.5438L26.2387 6.50665C26.5197 6.23209 26.6595 6.0948 26.7599 5.93459C26.849 5.79255 26.9158 5.63782 26.9556 5.47584C27 5.295 27 5.1028 27 4.72238V3.54016Z"
                  stroke="#2D8E00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <svg
                width="3"
                height="72"
                viewBox="0 0 3 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.686151"
                  d="M1.35586 71V1"
                  stroke="#979797"
                  strokeWidth="0.3"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
          <div className=" flex">
            <div className="flex justify-center items-center px-12">
              <div className="flex justify-between w-[108px] items-center">
                <span className="text-[14px]">User ID</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15"
                    stroke="#393939"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15L17 10"
                    stroke="#393939"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div>
              <svg
                width="3"
                height="72"
                viewBox="0 0 3 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.686151"
                  d="M1.35586 71V1"
                  stroke="#979797"
                  strokeWidth="0.3"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
          <div className=" flex">
            <div className="flex justify-center items-center px-10">
              <div className="flex justify-between w-[108px] items-center">
                <span className="text-[14px]">Status</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15"
                    stroke="#393939"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15L17 10"
                    stroke="#393939"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div>
              <svg
                width="3"
                height="72"
                viewBox="0 0 3 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.686151"
                  d="M1.35586 71V1"
                  stroke="#979797"
                  strokeWidth="0.3"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
          <div className=" flex">
            <div className="flex justify-center items-center px-10">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.49951 5.55663L6.49951 3.71799C6.49951 2.43672 6.49951 1.79608 6.88387 1.39804C7.26823 1 7.88684 1 9.12407 1L12.675 1C13.9122 1 14.5308 1 14.9152 1.39804C15.2995 1.79608 15.2995 2.43672 15.2995 3.71799V5.55663"
                  stroke="#393939"
                />
                <path
                  d="M5.16597 21.6632L4.844 22.0408L5.16597 21.6632C5.12278 21.6264 5.08049 21.5885 5.03914 21.5496C4.60104 21.1376 4.32067 20.5818 4.10806 19.6878C3.89237 18.7809 3.75998 17.5905 3.57791 15.942L2.3996 5.27349L19.4007 5.27349L18.2224 15.942C18.0403 17.5905 17.908 18.7809 17.6923 19.6878C17.4796 20.5818 17.1993 21.1376 16.7612 21.5496C16.7198 21.5885 16.6775 21.6264 16.6343 21.6632C16.1767 22.0535 15.5934 22.2711 14.6816 22.3843C13.7565 22.4991 12.5587 22.5 10.9002 22.5C9.24165 22.5 8.04385 22.4991 7.11873 22.3843C6.20688 22.2711 5.62359 22.0535 5.16597 21.6632Z"
                  stroke="#393939"
                />
                <path
                  d="M1 5.53424H20.8"
                  stroke="#393939"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-6"></div>

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
