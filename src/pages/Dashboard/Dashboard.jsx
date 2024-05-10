import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import sportsImg from "../../assets/sports.png";
import totalGames from "../../assets/totalGames.svg";
import organizer from "../../assets/organizer.svg";
import user from "../../assets/users.svg";
import weeklyOverview from "../../assets/weeklyOverwiewGraph.svg";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
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
            <div><span className=" text-[22px] font-semibold">Latest Games</span></div>
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
      </div>
    </div>
  );
};

export default Dashboard;
