import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import sportsImg from "../../assets/sports.png";
import totalGames from "../../assets/totalGames.svg";
import organizer from "../../assets/organizer.svg";
import user from "../../assets/users.svg";
import weeklyOverview from "../../assets/weeklyOverwiewGraph.svg";
import firstImg from "../../assets/first.png";
import secondImg from "../../assets/second.png";

const Dashboard = () => {
  const text = "Dashboard";
  return (
    <div>
      <Sidebar active={1} />
      <Navbar text={text} />
      <div className="bg-[#FAFBFC] h-screen lg:w-[calc(100vw - 345px)] lg:ml-[345px]">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-stretch p-8 gap-4">
          <div className="w-full md:w-1/2 max-w-[765px] rounded-[20px] border border-[#F8F9FA] bg-white md:min-h-[348px] lg:max-h-fit py-6 px-16">
            <span className="w-full text-xl font-semibold text-[#05004E]">
              Complete Overview
            </span>
            <div className="flex flex-col flex-wrap items-center md:flex-row gap-4 mt-0 md:mt-20">
              <img src={totalGames} alt="" />
              <img src={organizer} alt="" />
              <img src={user} alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-[645px] rounded-[20px] border border-[#F8F9FA] bg-white md:min-h-[348px] lg:max-h-fit py-6 px-16">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <span className="w-full text-xl font-semibold text-[#05004E]">
                Weekly Overview
              </span>
              <div className="border border-[#EFF1F3] rounded-lg">
                <form className="max-w-md mx-auto">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only "
                  >
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="search"
                      id="default-search"
                      className="block md:w-[119px] h-[45px] p-4 text-[13px] text-[#999a9b] rounded-lg bg-[#F9FAFB] focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Weekly"
                      required
                    />
                    <div className="absolute inset-y-0 end-0 flex items-center py-2 pr-2 pl-6 pointer-events-none">
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 3H4.2002C3.08009 3 2.51962 3 2.0918 3.21799C1.71547 3.40973 1.40973 3.71547 1.21799 4.0918C1 4.51962 1 5.08009 1 6.2002V7M5 3H13M5 3V1M13 3H13.8002C14.9203 3 15.4796 3 15.9074 3.21799C16.2837 3.40973 16.5905 3.71547 16.7822 4.0918C17 4.5192 17 5.07899 17 6.19691V7M13 3V1M1 7V15.8002C1 16.9203 1 17.4801 1.21799 17.9079C1.40973 18.2842 1.71547 18.5905 2.0918 18.7822C2.5192 19 3.07899 19 4.19691 19H13.8031C14.921 19 15.48 19 15.9074 18.7822C16.2837 18.5905 16.5905 18.2842 16.7822 17.9079C17 17.4805 17 16.9215 17 15.8036V7M1 7H17M13 15H13.002L13.002 15.002L13 15.002V15ZM9 15H9.002L9.00195 15.002L9 15.002V15ZM5 15H5.002L5.00195 15.002L5 15.002V15ZM13.002 11V11.002L13 11.002V11H13.002ZM9 11H9.002L9.00195 11.002L9 11.002V11ZM5 11H5.002L5.00195 11.002L5 11.002V11Z"
                          stroke="#393939"
                          stroke-opacity="0.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex mt-0 md:mt-10">
              <img src={weeklyOverview} alt="" />
            </div>

            <div className="flex justify-center items-center">
              <span className="mt-4 h-5 text-base font-medium text-[#393939]">
                No of games
              </span>
            </div>
          </div>
        </div>
        <div className="flex p-8 gap-8 items-center">
          <div>
            <span className=" text-[22px] font-semibold">Latest Games</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="bg-primary text-white w-[115px] h-[45px] rounded-lg flex justify-center items-center">
              Cricket
            </div>
            <div className="border border-secondaryFifty text-secondaryFifty w-[115px] h-[45px] rounded-lg flex justify-center items-center">
              Football
            </div>
            <div className="border border-secondaryFifty text-secondaryFifty w-[115px] h-[45px] rounded-lg flex justify-center items-center">
              Badminton
            </div>
            <div className="border border-secondaryFifty text-secondaryFifty w-[115px] h-[45px] rounded-lg flex justify-center items-center">
              Golf
            </div>
            <div className="border border-secondaryFifty text-secondaryFifty w-[115px] h-[45px] rounded-lg flex justify-center items-center">
              Tennis
            </div>
            <div className="border border-secondaryFifty text-secondaryFifty w-[115px] h-[45px] rounded-lg flex justify-center items-center">
              Basketball
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-wrap gap-14 ml-6 justify-center">
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-[30%] min-w-[300px] max-w-[460px]">
            <div className="px-6 py-4">
              <div className=" font-medium text-sm mb-2 w-[140px] h-[25px] bg-[#49D3FF] rounded-md px-8 py-1 flex justify-center text-center">
                Tournament
              </div>
              <div className="flex items-center gap-4">
                <div className="flex relative">
                  <img
                    className="w-[40px] h-[40px] rounded-[50%]"
                    src={firstImg}
                    alt=""
                  />
                  <img
                    className="w-[40px] h-[40px] rounded-[50%] absolute left-6"
                    src={secondImg}
                    alt=""
                  />
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" z-40 ml-2"
                  >
                    <circle
                      cx="20.1536"
                      cy="20"
                      r="19.5"
                      fill="white"
                      stroke="#E5E5E5"
                    />
                  </svg>
                  <p className="absolute z-50 ml-16 mt-2 text-black text-[15px]">
                    4
                  </p>
                </div>
                <div className="text-secondary text-base">
                  Players 6/<span className=" text-secondaryFifty">10</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="text-secondary text-base">
                Mon 11 Jun, 5:45 PM
              </div>
              <div className=" font-semibold text-xl mb-2">Golf Tournament</div>

              <div className="flex gap-2 text-secondaryFifty text-[13px] font-medium">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.96467 14.6679L5.55188 15.17L5.55189 15.17L5.96467 14.6679ZM2.76449 2.59976L2.30648 2.13853L2.76449 2.59976ZM10.5427 2.59967L11.0007 2.13844L10.5427 2.59967ZM7.34263 14.668L6.92985 14.1659H6.92985L7.34263 14.668ZM6.44044 14.974L6.61725 14.3485L6.61725 14.3485L6.44044 14.974ZM6.86652 14.974L6.68971 14.3485H6.6897L6.86652 14.974ZM6.37746 14.1658C5.66309 13.5787 4.50708 12.5248 3.53098 11.1664C2.55765 9.80348 1.80356 8.18722 1.80356 6.46144H0.503564C0.503564 8.56326 1.41696 10.4434 2.47715 11.9234C3.54056 13.4079 4.78981 14.5435 5.55188 15.17L6.37746 14.1658ZM1.80356 6.46144C1.80356 5.18683 2.31341 3.96372 3.22249 3.06098L2.30648 2.13853C1.15265 3.2843 0.503564 4.83903 0.503564 6.46144H1.80356ZM3.22249 3.06098C4.13172 2.15811 5.36591 1.65 6.65366 1.65V0.35C5.02402 0.35 3.46017 0.992902 2.30648 2.13853L3.22249 3.06098ZM6.65366 1.65C7.94142 1.65 9.17545 2.15803 10.0847 3.0609L11.0007 2.13844C9.84699 0.992811 8.2830 0.35 6.65366 0.35V1.65ZM10.0847 3.0609C10.9937 3.96359 11.5036 5.18712 11.5036 6.46179H12.8036C12.8036 4.83945 12.1546 3.28426 11.0007 2.13844L10.0847 3.0609ZM11.5036 6.46179C11.5036 8.18758 10.7495 9.80378 9.77324 11.1666C8.80018 12.525 7.64392 13.5788 6.92985 14.1659L7.75542 15.1701C8.51749 14.5436 9.7667 13.4081 10.8301 11.9237C11.8902 10.4437 12.8036 8.56361 12.8036 6.46179H11.5036ZM5.55189 15.17C5.7347 15.3203 5.94966 15.5107 6.26363 15.5995L6.61725 14.3485C6.61449 14.3477 6.61405 14.3475 6.61305 14.347C6.61119 14.3461 6.60346 14.3422 6.58677 14.3009C6.54473 14.3025 6.49146 14.2595 6.37745 14.1658L5.55189 15.17ZM6.92985 14.1659C6.81556 14.2598 6.76238 14.3027 6.72063 14.3009C6.7041 14.342 6.69647 14.3458 6.69465 14.3467C6.69367 14.3472 6.693 14.3476 6.68971 14.3485L7.04304 15.5995C7.35727 15.5107 7.57093 15.3218 7.75542 15.1701L6.92985 14.1659ZM6.26362 15.5995C6.50196 15.6668 6.805 15.6668 7.04304 15.5995L6.6897 14.3485C6.69764 14.3462 6.69738 14.347 6.68792 14.3481C6.67919 14.3492 6.66722 14.35 6.65348 14.35C6.63974 14.35 6.62777 14.3492 6.61904 14.3481C6.60958 14.347 6.60932 14.3462 6.61725 14.3485L6.26362 15.5995ZM6.6536 6.6612C6.14717 6.6612 5.73216 6.24829 5.73216 5.7304H4.43216C4.43216 6.9613 5.42426 7.9612 6.6536 7.9612V6.6612ZM5.73216 5.7304C5.73216 5.21851 6.14717 4.8056 6.6536 4.8056V3.5056C5.42426 3.5056 4.43216 4.5055 4.43216 5.7304H5.73216ZM6.6536 4.8056C7.16002 4.8056 7.57503 5.21851 7.57503 5.7304H8.87503C8.87503 4.5055 7.88294 3.5056 6.6536 3.5056V4.8056ZM7.57503 5.7304C7.57503 6.24829 7.16002 6.6612 6.6536 6.6612V7.9612C7.88294 7.9612 8.87503 6.9613 8.87503 5.7304H7.57503Z"
                    fill="#393939"
                    fill-opacity="0.5"
                  />
                </svg>
                Golf Sports Academy, Dubai, UAE-05.56 km
              </div>
              <div className="flex justify-between mt-4 border-t border-[#E5E5E5]">
                <div className=" text-secondary text-base mt-2 font-medium">
                  Entry Fee
                </div>
                <div className="text-primary font-medium text-base mt-2">
                  AED 50
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-[30%] min-w-[300px] max-w-[460px]">
            <div className="px-6 py-4">
              <div className=" font-medium text-sm mb-2 w-[140px] h-[25px] bg-[#49D3FF] rounded-md px-8 py-1 flex justify-center text-center">
                Tournament
              </div>
              <div className="flex items-center gap-4">
                <div className="flex relative">
                  <img
                    className="w-[40px] h-[40px] rounded-[50%]"
                    src={firstImg}
                    alt=""
                  />
                  <img
                    className="w-[40px] h-[40px] rounded-[50%] absolute left-6"
                    src={secondImg}
                    alt=""
                  />
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" z-40 ml-2"
                  >
                    <circle
                      cx="20.1536"
                      cy="20"
                      r="19.5"
                      fill="white"
                      stroke="#E5E5E5"
                    />
                  </svg>
                  <p className="absolute z-50 ml-16 mt-2 text-black text-[15px]">
                    4
                  </p>
                </div>
                <div className="text-secondary text-base">
                  Players 6/<span className=" text-secondaryFifty">10</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="text-secondary text-base">
                Mon 11 Jun, 5:45 PM
              </div>
              <div className=" font-semibold text-xl mb-2">Golf Tournament</div>

              <div className="flex gap-2 text-secondaryFifty text-[13px] font-medium">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.96467 14.6679L5.55188 15.17L5.55189 15.17L5.96467 14.6679ZM2.76449 2.59976L2.30648 2.13853L2.76449 2.59976ZM10.5427 2.59967L11.0007 2.13844L10.5427 2.59967ZM7.34263 14.668L6.92985 14.1659H6.92985L7.34263 14.668ZM6.44044 14.974L6.61725 14.3485L6.61725 14.3485L6.44044 14.974ZM6.86652 14.974L6.68971 14.3485H6.6897L6.86652 14.974ZM6.37746 14.1658C5.66309 13.5787 4.50708 12.5248 3.53098 11.1664C2.55765 9.80348 1.80356 8.18722 1.80356 6.46144H0.503564C0.503564 8.56326 1.41696 10.4434 2.47715 11.9234C3.54056 13.4079 4.78981 14.5435 5.55188 15.17L6.37746 14.1658ZM1.80356 6.46144C1.80356 5.18683 2.31341 3.96372 3.22249 3.06098L2.30648 2.13853C1.15265 3.2843 0.503564 4.83903 0.503564 6.46144H1.80356ZM3.22249 3.06098C4.13172 2.15811 5.36591 1.65 6.65366 1.65V0.35C5.02402 0.35 3.46017 0.992902 2.30648 2.13853L3.22249 3.06098ZM6.65366 1.65C7.94142 1.65 9.17545 2.15803 10.0847 3.0609L11.0007 2.13844C9.84699 0.992811 8.2830 0.35 6.65366 0.35V1.65ZM10.0847 3.0609C10.9937 3.96359 11.5036 5.18712 11.5036 6.46179H12.8036C12.8036 4.83945 12.1546 3.28426 11.0007 2.13844L10.0847 3.0609ZM11.5036 6.46179C11.5036 8.18758 10.7495 9.80378 9.77324 11.1666C8.80018 12.525 7.64392 13.5788 6.92985 14.1659L7.75542 15.1701C8.51749 14.5436 9.7667 13.4081 10.8301 11.9237C11.8902 10.4437 12.8036 8.56361 12.8036 6.46179H11.5036ZM5.55189 15.17C5.7347 15.3203 5.94966 15.5107 6.26363 15.5995L6.61725 14.3485C6.61449 14.3477 6.61405 14.3475 6.61305 14.347C6.61119 14.3461 6.60346 14.3422 6.58677 14.3009C6.54473 14.3025 6.49146 14.2595 6.37745 14.1658L5.55189 15.17ZM6.92985 14.1659C6.81556 14.2598 6.76238 14.3027 6.72063 14.3009C6.7041 14.342 6.69647 14.3458 6.69465 14.3467C6.69367 14.3472 6.693 14.3476 6.68971 14.3485L7.04304 15.5995C7.35727 15.5107 7.57093 15.3218 7.75542 15.1701L6.92985 14.1659ZM6.26362 15.5995C6.50196 15.6668 6.805 15.6668 7.04304 15.5995L6.6897 14.3485C6.69764 14.3462 6.69738 14.347 6.68792 14.3481C6.67919 14.3492 6.66722 14.35 6.65348 14.35C6.63974 14.35 6.62777 14.3492 6.61904 14.3481C6.60958 14.347 6.60932 14.3462 6.61725 14.3485L6.26362 15.5995ZM6.6536 6.6612C6.14717 6.6612 5.73216 6.24829 5.73216 5.7304H4.43216C4.43216 6.9613 5.42426 7.9612 6.6536 7.9612V6.6612ZM5.73216 5.7304C5.73216 5.21851 6.14717 4.8056 6.6536 4.8056V3.5056C5.42426 3.5056 4.43216 4.5055 4.43216 5.7304H5.73216ZM6.6536 4.8056C7.16002 4.8056 7.57503 5.21851 7.57503 5.7304H8.87503C8.87503 4.5055 7.88294 3.5056 6.6536 3.5056V4.8056ZM7.57503 5.7304C7.57503 6.24829 7.16002 6.6612 6.6536 6.6612V7.9612C7.88294 7.9612 8.87503 6.9613 8.87503 5.7304H7.57503Z"
                    fill="#393939"
                    fill-opacity="0.5"
                  />
                </svg>
                Golf Sports Academy, Dubai, UAE-05.56 km
              </div>
              <div className="flex justify-between mt-4 border-t border-[#E5E5E5]">
                <div className=" text-secondary text-base mt-2 font-medium">
                  Entry Fee
                </div>
                <div className="text-primary font-medium text-base mt-2">
                  AED 50
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-[30%] min-w-[300px] max-w-[460px]">
            <div className="px-6 py-4">
              <div className=" font-medium text-sm mb-2 w-[140px] h-[25px] bg-[#49D3FF] rounded-md px-8 py-1 flex justify-center text-center">
                Tournament
              </div>
              <div className="flex items-center gap-4">
                <div className="flex relative">
                  <img
                    className="w-[40px] h-[40px] rounded-[50%]"
                    src={firstImg}
                    alt=""
                  />
                  <img
                    className="w-[40px] h-[40px] rounded-[50%] absolute left-6"
                    src={secondImg}
                    alt=""
                  />
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" z-40 ml-2"
                  >
                    <circle
                      cx="20.1536"
                      cy="20"
                      r="19.5"
                      fill="white"
                      stroke="#E5E5E5"
                    />
                  </svg>
                  <p className="absolute z-50 ml-16 mt-2 text-black text-[15px]">
                    4
                  </p>
                </div>
                <div className="text-secondary text-base">
                  Players 6/<span className=" text-secondaryFifty">10</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="text-secondary text-base">
                Mon 11 Jun, 5:45 PM
              </div>
              <div className=" font-semibold text-xl mb-2">Golf Tournament</div>

              <div className="flex gap-2 text-secondaryFifty text-[13px] font-medium">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.96467 14.6679L5.55188 15.17L5.55189 15.17L5.96467 14.6679ZM2.76449 2.59976L2.30648 2.13853L2.76449 2.59976ZM10.5427 2.59967L11.0007 2.13844L10.5427 2.59967ZM7.34263 14.668L6.92985 14.1659H6.92985L7.34263 14.668ZM6.44044 14.974L6.61725 14.3485L6.61725 14.3485L6.44044 14.974ZM6.86652 14.974L6.68971 14.3485H6.6897L6.86652 14.974ZM6.37746 14.1658C5.66309 13.5787 4.50708 12.5248 3.53098 11.1664C2.55765 9.80348 1.80356 8.18722 1.80356 6.46144H0.503564C0.503564 8.56326 1.41696 10.4434 2.47715 11.9234C3.54056 13.4079 4.78981 14.5435 5.55188 15.17L6.37746 14.1658ZM1.80356 6.46144C1.80356 5.18683 2.31341 3.96372 3.22249 3.06098L2.30648 2.13853C1.15265 3.2843 0.503564 4.83903 0.503564 6.46144H1.80356ZM3.22249 3.06098C4.13172 2.15811 5.36591 1.65 6.65366 1.65V0.35C5.02402 0.35 3.46017 0.992902 2.30648 2.13853L3.22249 3.06098ZM6.65366 1.65C7.94142 1.65 9.17545 2.15803 10.0847 3.0609L11.0007 2.13844C9.84699 0.992811 8.2830 0.35 6.65366 0.35V1.65ZM10.0847 3.0609C10.9937 3.96359 11.5036 5.18712 11.5036 6.46179H12.8036C12.8036 4.83945 12.1546 3.28426 11.0007 2.13844L10.0847 3.0609ZM11.5036 6.46179C11.5036 8.18758 10.7495 9.80378 9.77324 11.1666C8.80018 12.525 7.64392 13.5788 6.92985 14.1659L7.75542 15.1701C8.51749 14.5436 9.7667 13.4081 10.8301 11.9237C11.8902 10.4437 12.8036 8.56361 12.8036 6.46179H11.5036ZM5.55189 15.17C5.7347 15.3203 5.94966 15.5107 6.26363 15.5995L6.61725 14.3485C6.61449 14.3477 6.61405 14.3475 6.61305 14.347C6.61119 14.3461 6.60346 14.3422 6.58677 14.3009C6.54473 14.3025 6.49146 14.2595 6.37745 14.1658L5.55189 15.17ZM6.92985 14.1659C6.81556 14.2598 6.76238 14.3027 6.72063 14.3009C6.7041 14.342 6.69647 14.3458 6.69465 14.3467C6.69367 14.3472 6.693 14.3476 6.68971 14.3485L7.04304 15.5995C7.35727 15.5107 7.57093 15.3218 7.75542 15.1701L6.92985 14.1659ZM6.26362 15.5995C6.50196 15.6668 6.805 15.6668 7.04304 15.5995L6.6897 14.3485C6.69764 14.3462 6.69738 14.347 6.68792 14.3481C6.67919 14.3492 6.66722 14.35 6.65348 14.35C6.63974 14.35 6.62777 14.3492 6.61904 14.3481C6.60958 14.347 6.60932 14.3462 6.61725 14.3485L6.26362 15.5995ZM6.6536 6.6612C6.14717 6.6612 5.73216 6.24829 5.73216 5.7304H4.43216C4.43216 6.9613 5.42426 7.9612 6.6536 7.9612V6.6612ZM5.73216 5.7304C5.73216 5.21851 6.14717 4.8056 6.6536 4.8056V3.5056C5.42426 3.5056 4.43216 4.5055 4.43216 5.7304H5.73216ZM6.6536 4.8056C7.16002 4.8056 7.57503 5.21851 7.57503 5.7304H8.87503C8.87503 4.5055 7.88294 3.5056 6.6536 3.5056V4.8056ZM7.57503 5.7304C7.57503 6.24829 7.16002 6.6612 6.6536 6.6612V7.9612C7.88294 7.9612 8.87503 6.9613 8.87503 5.7304H7.57503Z"
                    fill="#393939"
                    fill-opacity="0.5"
                  />
                </svg>
                Golf Sports Academy, Dubai, UAE-05.56 km
              </div>
              <div className="flex justify-between mt-4 border-t border-[#E5E5E5]">
                <div className=" text-secondary text-base mt-2 font-medium">
                  Entry Fee
                </div>
                <div className="text-primary font-medium text-base mt-2">
                  AED 50
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-[30%] min-w-[300px] max-w-[460px]">
            <div className="px-6 py-4">
              <div className=" font-medium text-sm mb-2 w-[140px] h-[25px] bg-[#49D3FF] rounded-md px-8 py-1 flex justify-center text-center">
                Tournament
              </div>
              <div className="flex items-center gap-4">
                <div className="flex relative">
                  <img
                    className="w-[40px] h-[40px] rounded-[50%]"
                    src={firstImg}
                    alt=""
                  />
                  <img
                    className="w-[40px] h-[40px] rounded-[50%] absolute left-6"
                    src={secondImg}
                    alt=""
                  />
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" z-40 ml-2"
                  >
                    <circle
                      cx="20.1536"
                      cy="20"
                      r="19.5"
                      fill="white"
                      stroke="#E5E5E5"
                    />
                  </svg>
                  <p className="absolute z-50 ml-16 mt-2 text-black text-[15px]">
                    4
                  </p>
                </div>
                <div className="text-secondary text-base">
                  Players 6/<span className=" text-secondaryFifty">10</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="text-secondary text-base">
                Mon 11 Jun, 5:45 PM
              </div>
              <div className=" font-semibold text-xl mb-2">Golf Tournament</div>

              <div className="flex gap-2 text-secondaryFifty text-[13px] font-medium">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.96467 14.6679L5.55188 15.17L5.55189 15.17L5.96467 14.6679ZM2.76449 2.59976L2.30648 2.13853L2.76449 2.59976ZM10.5427 2.59967L11.0007 2.13844L10.5427 2.59967ZM7.34263 14.668L6.92985 14.1659H6.92985L7.34263 14.668ZM6.44044 14.974L6.61725 14.3485L6.61725 14.3485L6.44044 14.974ZM6.86652 14.974L6.68971 14.3485H6.6897L6.86652 14.974ZM6.37746 14.1658C5.66309 13.5787 4.50708 12.5248 3.53098 11.1664C2.55765 9.80348 1.80356 8.18722 1.80356 6.46144H0.503564C0.503564 8.56326 1.41696 10.4434 2.47715 11.9234C3.54056 13.4079 4.78981 14.5435 5.55188 15.17L6.37746 14.1658ZM1.80356 6.46144C1.80356 5.18683 2.31341 3.96372 3.22249 3.06098L2.30648 2.13853C1.15265 3.2843 0.503564 4.83903 0.503564 6.46144H1.80356ZM3.22249 3.06098C4.13172 2.15811 5.36591 1.65 6.65366 1.65V0.35C5.02402 0.35 3.46017 0.992902 2.30648 2.13853L3.22249 3.06098ZM6.65366 1.65C7.94142 1.65 9.17545 2.15803 10.0847 3.0609L11.0007 2.13844C9.84699 0.992811 8.2830 0.35 6.65366 0.35V1.65ZM10.0847 3.0609C10.9937 3.96359 11.5036 5.18712 11.5036 6.46179H12.8036C12.8036 4.83945 12.1546 3.28426 11.0007 2.13844L10.0847 3.0609ZM11.5036 6.46179C11.5036 8.18758 10.7495 9.80378 9.77324 11.1666C8.80018 12.525 7.64392 13.5788 6.92985 14.1659L7.75542 15.1701C8.51749 14.5436 9.7667 13.4081 10.8301 11.9237C11.8902 10.4437 12.8036 8.56361 12.8036 6.46179H11.5036ZM5.55189 15.17C5.7347 15.3203 5.94966 15.5107 6.26363 15.5995L6.61725 14.3485C6.61449 14.3477 6.61405 14.3475 6.61305 14.347C6.61119 14.3461 6.60346 14.3422 6.58677 14.3009C6.54473 14.3025 6.49146 14.2595 6.37745 14.1658L5.55189 15.17ZM6.92985 14.1659C6.81556 14.2598 6.76238 14.3027 6.72063 14.3009C6.7041 14.342 6.69647 14.3458 6.69465 14.3467C6.69367 14.3472 6.693 14.3476 6.68971 14.3485L7.04304 15.5995C7.35727 15.5107 7.57093 15.3218 7.75542 15.1701L6.92985 14.1659ZM6.26362 15.5995C6.50196 15.6668 6.805 15.6668 7.04304 15.5995L6.6897 14.3485C6.69764 14.3462 6.69738 14.347 6.68792 14.3481C6.67919 14.3492 6.66722 14.35 6.65348 14.35C6.63974 14.35 6.62777 14.3492 6.61904 14.3481C6.60958 14.347 6.60932 14.3462 6.61725 14.3485L6.26362 15.5995ZM6.6536 6.6612C6.14717 6.6612 5.73216 6.24829 5.73216 5.7304H4.43216C4.43216 6.9613 5.42426 7.9612 6.6536 7.9612V6.6612ZM5.73216 5.7304C5.73216 5.21851 6.14717 4.8056 6.6536 4.8056V3.5056C5.42426 3.5056 4.43216 4.5055 4.43216 5.7304H5.73216ZM6.6536 4.8056C7.16002 4.8056 7.57503 5.21851 7.57503 5.7304H8.87503C8.87503 4.5055 7.88294 3.5056 6.6536 3.5056V4.8056ZM7.57503 5.7304C7.57503 6.24829 7.16002 6.6612 6.6536 6.6612V7.9612C7.88294 7.9612 8.87503 6.9613 8.87503 5.7304H7.57503Z"
                    fill="#393939"
                    fill-opacity="0.5"
                  />
                </svg>
                Golf Sports Academy, Dubai, UAE-05.56 km
              </div>
              <div className="flex justify-between mt-4 border-t border-[#E5E5E5]">
                <div className=" text-secondary text-base mt-2 font-medium">
                  Entry Fee
                </div>
                <div className="text-primary font-medium text-base mt-2">
                  AED 50
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-[30%] min-w-[300px] max-w-[460px]">
            <div className="px-6 py-4">
              <div className=" font-medium text-sm mb-2 w-[140px] h-[25px] bg-[#49D3FF] rounded-md px-8 py-1 flex justify-center text-center">
                Tournament
              </div>
              <div className="flex items-center gap-4">
                <div className="flex relative">
                  <img
                    className="w-[40px] h-[40px] rounded-[50%]"
                    src={firstImg}
                    alt=""
                  />
                  <img
                    className="w-[40px] h-[40px] rounded-[50%] absolute left-6"
                    src={secondImg}
                    alt=""
                  />
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" z-40 ml-2"
                  >
                    <circle
                      cx="20.1536"
                      cy="20"
                      r="19.5"
                      fill="white"
                      stroke="#E5E5E5"
                    />
                  </svg>
                  <p className="absolute z-50 ml-16 mt-2 text-black text-[15px]">
                    4
                  </p>
                </div>
                <div className="text-secondary text-base">
                  Players 6/<span className=" text-secondaryFifty">10</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="text-secondary text-base">
                Mon 11 Jun, 5:45 PM
              </div>
              <div className=" font-semibold text-xl mb-2">Golf Tournament</div>

              <div className="flex gap-2 text-secondaryFifty text-[13px] font-medium">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.96467 14.6679L5.55188 15.17L5.55189 15.17L5.96467 14.6679ZM2.76449 2.59976L2.30648 2.13853L2.76449 2.59976ZM10.5427 2.59967L11.0007 2.13844L10.5427 2.59967ZM7.34263 14.668L6.92985 14.1659H6.92985L7.34263 14.668ZM6.44044 14.974L6.61725 14.3485L6.61725 14.3485L6.44044 14.974ZM6.86652 14.974L6.68971 14.3485H6.6897L6.86652 14.974ZM6.37746 14.1658C5.66309 13.5787 4.50708 12.5248 3.53098 11.1664C2.55765 9.80348 1.80356 8.18722 1.80356 6.46144H0.503564C0.503564 8.56326 1.41696 10.4434 2.47715 11.9234C3.54056 13.4079 4.78981 14.5435 5.55188 15.17L6.37746 14.1658ZM1.80356 6.46144C1.80356 5.18683 2.31341 3.96372 3.22249 3.06098L2.30648 2.13853C1.15265 3.2843 0.503564 4.83903 0.503564 6.46144H1.80356ZM3.22249 3.06098C4.13172 2.15811 5.36591 1.65 6.65366 1.65V0.35C5.02402 0.35 3.46017 0.992902 2.30648 2.13853L3.22249 3.06098ZM6.65366 1.65C7.94142 1.65 9.17545 2.15803 10.0847 3.0609L11.0007 2.13844C9.84699 0.992811 8.2830 0.35 6.65366 0.35V1.65ZM10.0847 3.0609C10.9937 3.96359 11.5036 5.18712 11.5036 6.46179H12.8036C12.8036 4.83945 12.1546 3.28426 11.0007 2.13844L10.0847 3.0609ZM11.5036 6.46179C11.5036 8.18758 10.7495 9.80378 9.77324 11.1666C8.80018 12.525 7.64392 13.5788 6.92985 14.1659L7.75542 15.1701C8.51749 14.5436 9.7667 13.4081 10.8301 11.9237C11.8902 10.4437 12.8036 8.56361 12.8036 6.46179H11.5036ZM5.55189 15.17C5.7347 15.3203 5.94966 15.5107 6.26363 15.5995L6.61725 14.3485C6.61449 14.3477 6.61405 14.3475 6.61305 14.347C6.61119 14.3461 6.60346 14.3422 6.58677 14.3009C6.54473 14.3025 6.49146 14.2595 6.37745 14.1658L5.55189 15.17ZM6.92985 14.1659C6.81556 14.2598 6.76238 14.3027 6.72063 14.3009C6.7041 14.342 6.69647 14.3458 6.69465 14.3467C6.69367 14.3472 6.693 14.3476 6.68971 14.3485L7.04304 15.5995C7.35727 15.5107 7.57093 15.3218 7.75542 15.1701L6.92985 14.1659ZM6.26362 15.5995C6.50196 15.6668 6.805 15.6668 7.04304 15.5995L6.6897 14.3485C6.69764 14.3462 6.69738 14.347 6.68792 14.3481C6.67919 14.3492 6.66722 14.35 6.65348 14.35C6.63974 14.35 6.62777 14.3492 6.61904 14.3481C6.60958 14.347 6.60932 14.3462 6.61725 14.3485L6.26362 15.5995ZM6.6536 6.6612C6.14717 6.6612 5.73216 6.24829 5.73216 5.7304H4.43216C4.43216 6.9613 5.42426 7.9612 6.6536 7.9612V6.6612ZM5.73216 5.7304C5.73216 5.21851 6.14717 4.8056 6.6536 4.8056V3.5056C5.42426 3.5056 4.43216 4.5055 4.43216 5.7304H5.73216ZM6.6536 4.8056C7.16002 4.8056 7.57503 5.21851 7.57503 5.7304H8.87503C8.87503 4.5055 7.88294 3.5056 6.6536 3.5056V4.8056ZM7.57503 5.7304C7.57503 6.24829 7.16002 6.6612 6.6536 6.6612V7.9612C7.88294 7.9612 8.87503 6.9613 8.87503 5.7304H7.57503Z"
                    fill="#393939"
                    fill-opacity="0.5"
                  />
                </svg>
                Golf Sports Academy, Dubai, UAE-05.56 km
              </div>
              <div className="flex justify-between mt-4 border-t border-[#E5E5E5]">
                <div className=" text-secondary text-base mt-2 font-medium">
                  Entry Fee
                </div>
                <div className="text-primary font-medium text-base mt-2">
                  AED 50
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-[30%] min-w-[300px] max-w-[460px]">
            <div className="px-6 py-4">
              <div className=" font-medium text-sm mb-2 w-[140px] h-[25px] bg-[#49D3FF] rounded-md px-8 py-1 flex justify-center text-center">
                Tournament
              </div>
              <div className="flex items-center gap-4">
                <div className="flex relative">
                  <img
                    className="w-[40px] h-[40px] rounded-[50%]"
                    src={firstImg}
                    alt=""
                  />
                  <img
                    className="w-[40px] h-[40px] rounded-[50%] absolute left-6"
                    src={secondImg}
                    alt=""
                  />
                  <svg
                    width="41"
                    height="40"
                    viewBox="0 0 41 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" z-40 ml-2"
                  >
                    <circle
                      cx="20.1536"
                      cy="20"
                      r="19.5"
                      fill="white"
                      stroke="#E5E5E5"
                    />
                  </svg>
                  <p className="absolute z-50 ml-16 mt-2 text-black text-[15px]">
                    4
                  </p>
                </div>
                <div className="text-secondary text-base">
                  Players 6/<span className=" text-secondaryFifty">10</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="text-secondary text-base">
                Mon 11 Jun, 5:45 PM
              </div>
              <div className=" font-semibold text-xl mb-2">Golf Tournament</div>

              <div className="flex gap-2 text-secondaryFifty text-[13px] font-medium">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.96467 14.6679L5.55188 15.17L5.55189 15.17L5.96467 14.6679ZM2.76449 2.59976L2.30648 2.13853L2.76449 2.59976ZM10.5427 2.59967L11.0007 2.13844L10.5427 2.59967ZM7.34263 14.668L6.92985 14.1659H6.92985L7.34263 14.668ZM6.44044 14.974L6.61725 14.3485L6.61725 14.3485L6.44044 14.974ZM6.86652 14.974L6.68971 14.3485H6.6897L6.86652 14.974ZM6.37746 14.1658C5.66309 13.5787 4.50708 12.5248 3.53098 11.1664C2.55765 9.80348 1.80356 8.18722 1.80356 6.46144H0.503564C0.503564 8.56326 1.41696 10.4434 2.47715 11.9234C3.54056 13.4079 4.78981 14.5435 5.55188 15.17L6.37746 14.1658ZM1.80356 6.46144C1.80356 5.18683 2.31341 3.96372 3.22249 3.06098L2.30648 2.13853C1.15265 3.2843 0.503564 4.83903 0.503564 6.46144H1.80356ZM3.22249 3.06098C4.13172 2.15811 5.36591 1.65 6.65366 1.65V0.35C5.02402 0.35 3.46017 0.992902 2.30648 2.13853L3.22249 3.06098ZM6.65366 1.65C7.94142 1.65 9.17545 2.15803 10.0847 3.0609L11.0007 2.13844C9.84699 0.992811 8.2830 0.35 6.65366 0.35V1.65ZM10.0847 3.0609C10.9937 3.96359 11.5036 5.18712 11.5036 6.46179H12.8036C12.8036 4.83945 12.1546 3.28426 11.0007 2.13844L10.0847 3.0609ZM11.5036 6.46179C11.5036 8.18758 10.7495 9.80378 9.77324 11.1666C8.80018 12.525 7.64392 13.5788 6.92985 14.1659L7.75542 15.1701C8.51749 14.5436 9.7667 13.4081 10.8301 11.9237C11.8902 10.4437 12.8036 8.56361 12.8036 6.46179H11.5036ZM5.55189 15.17C5.7347 15.3203 5.94966 15.5107 6.26363 15.5995L6.61725 14.3485C6.61449 14.3477 6.61405 14.3475 6.61305 14.347C6.61119 14.3461 6.60346 14.3422 6.58677 14.3009C6.54473 14.3025 6.49146 14.2595 6.37745 14.1658L5.55189 15.17ZM6.92985 14.1659C6.81556 14.2598 6.76238 14.3027 6.72063 14.3009C6.7041 14.342 6.69647 14.3458 6.69465 14.3467C6.69367 14.3472 6.693 14.3476 6.68971 14.3485L7.04304 15.5995C7.35727 15.5107 7.57093 15.3218 7.75542 15.1701L6.92985 14.1659ZM6.26362 15.5995C6.50196 15.6668 6.805 15.6668 7.04304 15.5995L6.6897 14.3485C6.69764 14.3462 6.69738 14.347 6.68792 14.3481C6.67919 14.3492 6.66722 14.35 6.65348 14.35C6.63974 14.35 6.62777 14.3492 6.61904 14.3481C6.60958 14.347 6.60932 14.3462 6.61725 14.3485L6.26362 15.5995ZM6.6536 6.6612C6.14717 6.6612 5.73216 6.24829 5.73216 5.7304H4.43216C4.43216 6.9613 5.42426 7.9612 6.6536 7.9612V6.6612ZM5.73216 5.7304C5.73216 5.21851 6.14717 4.8056 6.6536 4.8056V3.5056C5.42426 3.5056 4.43216 4.5055 4.43216 5.7304H5.73216ZM6.6536 4.8056C7.16002 4.8056 7.57503 5.21851 7.57503 5.7304H8.87503C8.87503 4.5055 7.88294 3.5056 6.6536 3.5056V4.8056ZM7.57503 5.7304C7.57503 6.24829 7.16002 6.6612 6.6536 6.6612V7.9612C7.88294 7.9612 8.87503 6.9613 8.87503 5.7304H7.57503Z"
                    fill="#393939"
                    fill-opacity="0.5"
                  />
                </svg>
                Golf Sports Academy, Dubai, UAE-05.56 km
              </div>
              <div className="flex justify-between mt-4 border-t border-[#E5E5E5]">
                <div className=" text-secondary text-base mt-2 font-medium">
                  Entry Fee
                </div>
                <div className="text-primary font-medium text-base mt-2">
                  AED 50
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
