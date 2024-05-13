import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import sidebarLogo from "../assets/sidebarLogo.svg"

const Sidebar = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div ref={sidebarRef}>
      <button
        datadrawertarget="default-sidebar"
        datadrawertoggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={toggleSidebar}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-[345px] h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <button
          datadrawertarget="default-sidebar"
          datadrawertoggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          onClick={toggleSidebar}
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          {/* Top Logo */}
          <div className="flex justify-center items-center mt-2 mb-6">
            <img src={sidebarLogo} alt="" />
          </div>

          <ul className="space-y-2 font-medium flex justify-center items-center flex-col gap-3">
            <li className="w-[252px]">
              <a
                href="/dashboard"
                className={`flex items-center py-4 px-6 gap-6 rounded-2xl group ${
                  active === 1 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                {active === 1 ? (
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_311_86"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="32"
                      height="33"
                    >
                      <rect y="0.72998" width="32" height="32" fill="white" />
                    </mask>
                    <g mask="url(#mask0_311_86)">
                      <path
                        d="M13.6704 8.57577L14.0416 14.0957L14.2259 16.8701C14.2279 17.1555 14.2726 17.4389 14.3588 17.7113C14.5814 18.2401 15.1168 18.5761 15.6994 18.5527L24.5756 17.972C24.96 17.9657 25.3312 18.1095 25.6075 18.3717C25.8378 18.5903 25.9864 18.8761 26.0334 19.1836L26.0491 19.3703C25.6818 24.4565 21.9462 28.6989 16.8704 29.794C11.7946 30.8891 6.58971 28.5757 4.08151 24.1099C3.35842 22.8124 2.90677 21.3864 2.75307 19.9153C2.68887 19.4799 2.66061 19.04 2.66854 18.6C2.66061 13.147 6.54386 8.4326 11.9797 7.29608C12.6339 7.1942 13.2753 7.54055 13.5376 8.13736C13.6055 8.27557 13.6503 8.4236 13.6704 8.57577Z"
                        fill="white"
                      />
                      <path
                        opacity="0.4"
                        d="M29.3335 13.813L29.3241 13.8564L29.2972 13.9196L29.3009 14.0931C29.2871 14.3228 29.1983 14.5439 29.0455 14.7226C28.8861 14.9086 28.6685 15.0352 28.4289 15.0844L28.2828 15.1044L18.0417 15.768C17.7011 15.8016 17.3619 15.6918 17.1087 15.4659C16.8975 15.2775 16.7625 15.0234 16.7244 14.7495L16.0371 4.52332C16.0251 4.48875 16.0251 4.45127 16.0371 4.41668C16.0464 4.1348 16.1705 3.86836 16.3816 3.67688C16.5925 3.4854 16.8731 3.38484 17.1601 3.39767C23.24 3.55235 28.3499 7.9243 29.3335 13.813Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                ) : (
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_463_703"
                      style={{maskType:"luminance"}}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="32"
                      height="32"
                    >
                      <rect width="32" height="32" fill="white" />
                    </mask>
                    <g mask="url(#mask0_463_703)">
                      <path
                        d="M13.6702 7.84579L14.0414 13.3657L14.2257 16.1401C14.2277 16.4255 14.2723 16.7089 14.3586 16.9813C14.5811 17.5101 15.1166 17.8461 15.6991 17.8227L24.5754 17.242C24.9598 17.2357 25.331 17.3795 25.6073 17.6417C25.8375 17.8603 25.9862 18.1461 26.0331 18.4536L26.0489 18.6403C25.6815 23.7265 21.9459 27.9689 16.8702 29.064C11.7944 30.1591 6.58947 27.8457 4.08127 23.3799C3.35818 22.0824 2.90652 20.6564 2.75283 19.1853C2.68863 18.7499 2.66036 18.31 2.6683 17.87C2.66036 12.417 6.54362 7.70262 11.9794 6.5661C12.6337 6.46422 13.275 6.81057 13.5374 7.40738C13.6053 7.54559 13.6501 7.69362 13.6702 7.84579Z"
                        fill="#393939"
                        fillOpacity="0.5"
                      />
                      <path
                        opacity="0.4"
                        d="M29.3337 13.083L29.3244 13.1264L29.2975 13.1896L29.3012 13.3631C29.2873 13.5929 29.1985 13.8139 29.0457 13.9926C28.8864 14.1786 28.6688 14.3053 28.4292 14.3545L28.2831 14.3745L18.042 15.0381C17.7013 15.0717 17.3621 14.9618 17.1089 14.7359C16.8977 14.5475 16.7628 14.2934 16.7247 14.0195L16.0373 3.79334C16.0253 3.75877 16.0253 3.72129 16.0373 3.6867C16.0467 3.40482 16.1708 3.13838 16.3819 2.9469C16.5928 2.75542 16.8733 2.65486 17.1604 2.66769C23.2403 2.82237 28.3501 7.19431 29.3337 13.083Z"
                        fill="#393939"
                        fillOpacity="0.5"
                      />
                    </g>
                  </svg>
                )}

                <span className={` ${
                  active === 1 ? "font-semibold text-lg" : " font-normal"
                }`}>Dashboard</span>
              </a>
            </li>
            <li className="w-[252px]">
              <a
                href="/manage-users"
                className={`flex items-center py-4 px-6 gap-6 rounded-2xl group ${
                  active === 2 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                <svg
                  width="32"
                  height="27"
                  viewBox="0 0 32 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.3333 26C24.3333 23.2386 20.6024 21 16 21C11.3976 21 7.66667 23.2386 7.66667 26M31 21.0006C31 18.9503 28.9432 17.1882 26 16.4167M1 21.0006C1 18.9503 3.05683 17.1882 6 16.4167M26 9.72684C27.0229 8.81131 27.6667 7.48083 27.6667 6C27.6667 3.23858 25.4281 1 22.6667 1C21.3861 1 20.2179 1.48142 19.3333 2.27316M6 9.72684C4.97708 8.81131 4.33333 7.48083 4.33333 6C4.33333 3.23858 6.57191 1 9.33333 1C10.6139 1 11.7821 1.48142 12.6667 2.27316M16 16C13.2386 16 11 13.7614 11 11C11 8.23858 13.2386 6 16 6C18.7614 6 21 8.23858 21 11C21 13.7614 18.7614 16 16 16Z"
                    stroke={ active === 2 ? "#fff" : "#393939" }
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className={`flex-1 ${
                  active === 2 ? "font-semibold text-lg" : " font-normal"
                }`}>
                  Manage Users
                </span>
              </a>
            </li>
            <li className="w-[252px]">
              <a
                href="/manage-organizer"
                className={`flex items-center py-4 px-6 gap-6 rounded-2xl group ${
                  active === 3 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                <svg
                  width="32"
                  height="27"
                  viewBox="0 0 32 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31 25.9999C31 23.0972 28.2173 20.6278 24.3333 19.7126M21 26C21 22.3181 16.5228 19.3333 11 19.3333C5.47715 19.3333 1 22.3181 1 26M21 14.3333C24.6819 14.3333 27.6667 11.3486 27.6667 7.66667C27.6667 3.98477 24.6819 1 21 1M11 14.3333C7.3181 14.3333 4.33333 11.3486 4.33333 7.66667C4.33333 3.98477 7.3181 1 11 1C14.6819 1 17.6667 3.98477 17.6667 7.66667C17.6667 11.3486 14.6819 14.3333 11 14.3333Z"
                    stroke={ active === 3 ? "#fff" : "#393939" }
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className={`flex-1 ${
                  active === 3 ? "font-semibold " : " font-normal"
                }`}>
                  Manage Oraganizer
                </span>
              </a>
            </li>
            <li className="w-[252px]">
              <a
                href="/manage-communities"
                className={`flex items-center py-4 px-6 gap-4 rounded-2xl group ${
                  active === 4 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                <svg
                  width="32"
                  height="27"
                  style={{ minWidth: "32", minHeight: "27" }}
                  viewBox="0 0 32 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.3333 26C24.3333 23.2386 20.6024 21 16 21C11.3976 21 7.66667 23.2386 7.66667 26M31 21.0006C31 18.9503 28.9432 17.1882 26 16.4167M1 21.0006C1 18.9503 3.05683 17.1882 6 16.4167M26 9.72684C27.0229 8.81131 27.6667 7.48083 27.6667 6C27.6667 3.23858 25.4281 1 22.6667 1C21.3861 1 20.2179 1.48142 19.3333 2.27316M6 9.72684C4.97708 8.81131 4.33333 7.48083 4.33333 6C4.33333 3.23858 6.57191 1 9.33333 1C10.6139 1 11.7821 1.48142 12.6667 2.27316M16 16C13.2386 16 11 13.7614 11 11C11 8.23858 13.2386 6 16 6C18.7614 6 21 8.23858 21 11C21 13.7614 18.7614 16 16 16Z"
                    stroke={ active === 4 ? "#fff" : "#393939" }
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className={`flex-1 ${
                  active === 4 ? "font-semibold" : " font-normal"
                }`}>
                  Manage Communities
                </span>
              </a>
            </li>
            <li className="w-[252px]">
              <a
                href="/organizer-request"
                className={`flex items-center py-4 px-6 gap-6 rounded-2xl group ${
                  active === 5 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                <svg
                  width="22"
                  height="27"
                  viewBox="0 0 22 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 1H3.5C2.83696 1 2.20107 1.26339 1.73223 1.73223C1.26339 2.20107 1 2.83696 1 3.5V23.5C1 24.163 1.26339 24.7989 1.73223 25.2678C2.20107 25.7366 2.83696 26 3.5 26H18.5C19.163 26 19.7989 25.7366 20.2678 25.2678C20.7366 24.7989 21 24.163 21 23.5V8.5L13.5 1Z"
                    stroke={ active === 5 ? "#fff" : "#393939" }
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 1V8.5H21"
                    stroke={ active === 5 ? "#fff" : "#393939" }
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 14.75H6"
                    stroke={ active === 5 ? "#fff" : "#393939" }
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 19.75H6"
                    stroke={ active === 5 ? "#fff" : "#393939" }
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 9.75H7.25H6"
                    stroke={ active === 5 ? "#fff" : "#393939" }
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className={`flex-1 ${
                  active === 5 ? "font-semibold text-lg" : " font-normal"
                }`}>Requests</span>
              </a>
            </li>
            <li className="w-[252px]">
              <a
                href="/messages"
                className={`flex items-center py-4 px-6 gap-5 rounded-2xl group ${
                  active === 6 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 15.5662 1.50129 17.5152 2.38889 19.2322L1 26L7.76777 24.6111C9.48477 25.4987 11.4338 26 13.5 26Z"
                    stroke={ active === 6 ? "#fff" : "#393939" }
                    strokeOpacity="0.5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="7.25"
                    y="13.5"
                    width="0.0133333"
                    height="0.0133333"
                    stroke={ active === 6 ? "#fff" : "#393939" }
                    strokeOpacity="0.5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="13.5"
                    y="13.5"
                    width="0.0133333"
                    height="0.0133333"
                    stroke={ active === 6 ? "#fff" : "#393939" }
                    strokeOpacity="0.5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="19.75"
                    y="13.5"
                    width="0.0133333"
                    height="0.0133333"
                    stroke={ active === 6 ? "#fff" : "#393939" }
                    strokeOpacity="0.5"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className={`flex-1 ${
                  active === 6 ? "font-semibold text-lg" : " font-normal"
                }`}>Messages</span>
              </a>
            </li>
            <li className="w-[252px]">
              <a
                href="/settings"
                className={`flex items-center py-4 px-6 gap-4 rounded-2xl group ${
                  active === 7 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                <svg
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 10.0809C17.4145 10.0809 18.7711 10.6119 19.7713 11.5572C20.7714 12.5024 21.3334 13.7845 21.3334 15.1213C21.3334 16.4581 20.7714 17.7401 19.7713 18.6854C18.7711 19.6307 17.4145 20.1617 16 20.1617C14.5855 20.1617 13.229 19.6307 12.2288 18.6854C11.2286 17.7401 10.6667 16.4581 10.6667 15.1213C10.6667 13.7845 11.2286 12.5024 12.2288 11.5572C13.229 10.6119 14.5855 10.0809 16 10.0809ZM16 12.6011C15.2928 12.6011 14.6145 12.8666 14.1144 13.3392C13.6143 13.8119 13.3334 14.4529 13.3334 15.1213C13.3334 15.7897 13.6143 16.4307 14.1144 16.9033C14.6145 17.376 15.2928 17.6415 16 17.6415C16.7073 17.6415 17.3855 17.376 17.8856 16.9033C18.3857 16.4307 18.6667 15.7897 18.6667 15.1213C18.6667 14.4529 18.3857 13.8119 17.8856 13.3392C17.3855 12.8666 16.7073 12.6011 16 12.6011ZM13.3334 27.7224C13 27.7224 12.72 27.4955 12.6667 27.1931L12.1734 23.8538C11.3334 23.5388 10.6134 23.1104 9.92002 22.6063L6.60002 23.879C6.30669 23.9798 5.94669 23.879 5.78669 23.6018L3.12002 19.2418C3.03841 19.112 3.00964 18.9585 3.03909 18.8101C3.06854 18.6617 3.15419 18.5284 3.28002 18.4354L6.09335 16.3436L6.00002 15.1213L6.09335 13.8612L3.28002 11.8072C3.15419 11.7141 3.06854 11.5809 3.03909 11.4325C3.00964 11.2841 3.03841 11.1306 3.12002 11.0007L5.78669 6.64077C5.94669 6.36354 6.30669 6.25013 6.60002 6.36354L9.92002 7.62365C10.6134 7.13221 11.3334 6.70377 12.1734 6.38875L12.6667 3.04946C12.72 2.74704 13 2.52022 13.3334 2.52022H18.6667C19 2.52022 19.28 2.74704 19.3334 3.04946L19.8267 6.38875C20.6667 6.70377 21.3867 7.13221 22.08 7.62365L25.4 6.36354C25.6934 6.25013 26.0534 6.36354 26.2134 6.64077L28.88 11.0007C29.0534 11.278 28.9734 11.6182 28.72 11.8072L25.9067 13.8612L26 15.1213L25.9067 16.3814L28.72 18.4354C28.9734 18.6244 29.0534 18.9646 28.88 19.2418L26.2134 23.6018C26.0534 23.879 25.6934 23.9924 25.4 23.879L22.08 22.6189C21.3867 23.1104 20.6667 23.5388 19.8267 23.8538L19.3334 27.1931C19.28 27.4955 19 27.7224 18.6667 27.7224H13.3334ZM15 5.04043L14.5067 8.32931C12.9067 8.64434 11.4934 9.45081 10.4667 10.5723L7.25335 9.26179L6.25335 10.8999L9.06669 12.8531C8.53335 14.3232 8.53335 15.9194 9.06669 17.3895L6.24002 19.3552L7.24002 20.9934L10.48 19.6829C11.5067 20.7918 12.9067 21.5982 14.4934 21.9007L14.9867 25.2021H17.0134L17.5067 21.9133C19.0934 21.5982 20.4934 20.7918 21.52 19.6829L24.76 20.9934L25.76 19.3552L22.9334 17.4021C23.4667 15.9278 23.4667 14.3274 22.9334 12.8531L25.7467 10.8999L24.7467 9.26179L21.5333 10.5723C20.4856 9.42601 19.0645 8.64141 17.4934 8.34191L17 5.04043H15Z"
                    fill={active === 7 ? "#fff" : "#393939" }
                    fillOpacity="0.5"
                  />
                </svg>

                <span className={`flex-1 ${
                  active === 7 ? "font-semibold text-lg" : " font-normal"
                }`}>Settings</span>
              </a>
            </li>
            <li className="w-[252px]">
              <a
                href="/signout"
                className={`flex items-center py-4 px-6 gap-1 rounded-2xl group ${
                  active === 8 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                <svg
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.7746 20.9818L26.337 15.9508C26.5549 15.7159 26.6663 15.4194 26.6665 15.1213C26.6666 14.9173 26.6146 14.7126 26.5089 14.5265C26.462 14.4435 26.4046 14.3647 26.337 14.2918L21.7746 9.26077C21.2954 8.73234 20.4537 8.67111 19.8946 9.12399C19.3354 9.57687 19.2706 10.3724 19.7498 10.9008L22.4344 13.8611L12.1082 13.8611C11.3718 13.8611 10.7749 14.4253 10.7749 15.1212C10.7749 15.8171 11.3718 16.3813 12.1082 16.3813L22.4345 16.3813L19.7498 19.3418C19.2706 19.8702 19.3354 20.6657 19.8946 21.1186C20.4537 21.5715 21.2954 21.5102 21.7746 20.9818ZM13.3332 7.56054C14.0695 7.56054 14.6665 8.12471 14.6665 8.82065L14.6665 10.7108C14.6665 11.4067 15.2635 11.9709 15.9998 11.9709C16.7362 11.9709 17.3332 11.4067 17.3332 10.7108L17.3332 8.82065C17.3332 6.73284 15.5423 5.04033 13.3332 5.04033L9.33317 5.04033C7.12403 5.04033 5.33317 6.73284 5.33317 8.82065L5.33317 21.4217C5.33317 23.5095 7.12403 25.202 9.33317 25.202L13.3332 25.202C15.5423 25.202 17.3332 23.5095 17.3332 21.4217L17.3332 19.5316C17.3332 18.8356 16.7362 18.2714 15.9998 18.2714C15.2635 18.2714 14.6665 18.8356 14.6665 19.5316L14.6665 21.4217C14.6665 22.1177 14.0695 22.6818 13.3332 22.6818L9.33317 22.6818C8.59679 22.6818 7.99984 22.1177 7.99984 21.4217L7.99984 8.82065C7.99984 8.12471 8.59679 7.56054 9.33317 7.56054L13.3332 7.56054Z"
                    fill={active === 8 ? "#fff" : "#393939" }
                    fillOpacity="0.5"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
