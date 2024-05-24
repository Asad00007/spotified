import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import sidebarLogo from "../assets/sidebarLogo.svg";
import dashboard from "../assets/sidebar/dashboard.svg";
import dashwhite from "../assets/sidebar/dashwhite.svg";
import users from "../assets/sidebar/users.svg";
import userwhite from "../assets/sidebar/userwhite.svg";
import organizer from "../assets/sidebar/organizer.svg";
import organizerwhite from "../assets/sidebar/organizerwhite.svg";
import community from "../assets/sidebar/community.svg";
import communitywhite from "../assets/sidebar/communitywhite.svg";
import request from "../assets/sidebar/request.svg";
import requestwhite from "../assets/sidebar/requestwhite.svg";
import message from "../assets/sidebar/message.svg";
import messagewhite from "../assets/sidebar/messagewhite.svg";
import setting from "../assets/sidebar/setting.svg";
import settingwhite from "../assets/sidebar/settingwhite.svg";
import signoutwhite from "../assets/sidebar/signoutwhite.svg";
import { Link } from "react-router-dom";

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
    <div className="relative" ref={sidebarRef}>
      <button
        datadrawertarget="default-sidebar"
        datadrawertoggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={toggleSidebar}
        className=" absolute z-50 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
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
        className={`fixed top-[-40px] lg:top-0 left-0 z-40 w-[345px] h-screen transition-transform ${
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
              <Link
                to="/dashboard"
                className={`flex items-center py-4 px-6 gap-6 rounded-2xl group ${
                  active === 1 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                {active === 1 ? (
                  <img src={dashboard}></img>
                ) : (
                  <img src={dashwhite}></img>
                )}

                <span
                  className={` ${
                    active === 1 ? "font-semibold text-lg" : " font-normal"
                  }`}
                >
                  Dashboard
                </span>
              </ Link>
            </li>
            <li className="w-[252px]">
              <Link
                to="/manage-users"
                className={`flex items-center py-4 px-6 gap-6 rounded-2xl group ${
                  active === 2 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                {active === 2 ? (
                  <img src={users}></img>
                ) : (
                  <img src={userwhite}></img>
                )}

                <span
                  className={`flex-1 ${
                    active === 2 ? "font-semibold text-lg" : " font-normal"
                  }`}
                >
                  Manage Users
                </span>
              </ Link>
            </li>
            <li className="w-[252px]">
              <Link
                to="/manage-organizer"
                className={`flex items-center py-4 px-6 gap-6 rounded-2xl group ${
                  active === 3 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                {active === 3 ? (
                  <img src={organizer}></img>
                ) : (
                  <img src={organizerwhite}></img>
                )}

                <span
                  className={`flex-1 ${
                    active === 3 ? "font-semibold " : " font-normal"
                  }`}
                >
                  Manage Organizer
                </span>
              </ Link>
            </li>
            <li className="w-[252px]">
              <Link
                to="/manage-communities"
                className={`flex items-center py-4 px-6 gap-4 rounded-2xl group ${
                  active === 4 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                {active === 4 ? (
                  <img src={community}></img>
                ) : (
                  <img src={communitywhite}></img>
                )}

                <span
                  className={`flex-1 ${
                    active === 4 ? "font-semibold" : " font-normal"
                  }`}
                >
                  Manage Communities
                </span>
              </ Link>
            </li>
            <li className="w-[252px]">
              <Link
                to="/organizer-request"
                className={`flex items-center py-4 px-6 gap-6 rounded-2xl group ${
                  active === 5 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                {active === 5 ? (
                  <img src={request}></img>
                ) : (
                  <img src={requestwhite}></img>
                )}

                <span
                  className={`flex-1 ${
                    active === 5 ? "font-semibold text-lg" : " font-normal"
                  }`}
                >
                  Requests
                </span>
              </ Link>
            </li>
            <li className="w-[252px]">
              <Link
                to="/messages"
                className={`flex items-center py-4 px-6 gap-5 rounded-2xl group ${
                  active === 6 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                {active === 6 ? (
                  <img src={message}></img>
                ) : (
                  <img src={messagewhite}></img>
                )}

                <span
                  className={`flex-1 ${
                    active === 6 ? "font-semibold text-lg" : " font-normal"
                  }`}
                >
                  Messages
                </span>
              </ Link>
            </li>
            <li className="w-[252px]">
              <Link
                to="/settings"
                className={`flex items-center py-4 px-6 gap-4 rounded-2xl group ${
                  active === 7 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                {active === 7 ? (
                  <img src={setting}></img>
                ) : (
                  <img src={settingwhite}></img>
                )}

                <span
                  className={`flex-1 ${
                    active === 7 ? "font-semibold text-lg" : " font-normal"
                  }`}
                >
                  Settings
                </span>
              </ Link>
            </li>
            <li className="w-[252px]">
              <Link
                to="/"
                onClick={() => {
                  sessionStorage.removeItem("access_token");
                }}
                className={`flex items-center py-4 px-6 gap-1 rounded-2xl group ${
                  active === 8 ? "bg-primary text-white" : "text-secondary"
                }`}
              >
                <img src={signoutwhite} alt="" />
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
              </ Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
