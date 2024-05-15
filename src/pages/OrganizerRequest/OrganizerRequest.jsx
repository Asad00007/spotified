import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import filterIcon from "../../assets/filterIcon.svg" 
import lineFilter from "../../assets/lineFilter.svg"
import downArrow from "../../assets/downArrow.svg"

import deleteIcon from "../../assets/deleteIcon.svg"
const OrganizerRequest = () => {
  const text = "Organizer Request";
  return (
    <div>
      <Sidebar active={5} />
      <Navbar text={text} />

      <div className="bg-[#FAFBFC] h-screen lg:w-[calc(100vw - 345px)] lg:ml-[345px]">
        <div className="h-6"></div>
        <div className=" ml-8 flex justify-center md:justify-start items-center flex-wrap mb-12 md:mb-24 lg:mb-0  w-[90%] md:w-[95%] h-[70px] bg-white rounded-[15px]">
          <div className=" flex">
            <div className="flex justify-center items-center px-2 md:px-12">
              <img className="h-[20px] md:h-auto w-[20px] md:w-auto" src={filterIcon} alt="" />
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
              <img className="h-[40px] md:h-[72px]" src={lineFilter} alt="" />
            </div>
          </div>
          <div className=" flex">
            <div className="flex justify-center items-center px-2 md:px-10">
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
                <td className="px-6 py-4">(319) 555-0115</td>
                <td className="px-6 py-4">6391 Elgin St. Celina, Delaware 10299</td>
                <td className="px-6 py-4 flex gap-4">
                  <div className="border border-primary h-[30px] text-primary rounded-[50px] text-sm font-semibold flex justify-center items-center w-[90px]">Confirm</div>
                  <div className="border border-[#EA4335] h-[30px] text-[#EA4335] rounded-[50px] text-sm font-semibold flex justify-center items-center w-[90px]">Deny</div>
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
                <td className="px-6 py-4">(219) 555-0114</td>
                <td className="px-6 py-4">6391 Elgin St. Celina, Delaware 10299</td>
                <td className="px-6 py-4 flex gap-4">
                  <div className="border border-primary h-[30px] text-primary rounded-[50px] text-sm font-semibold flex justify-center items-center w-[90px]">Confirm</div>
                  <div className="border border-[#EA4335] h-[30px] text-[#EA4335] rounded-[50px] text-sm font-semibold flex justify-center items-center w-[90px]">Deny</div>
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
                <td className="px-6 py-4">(302) 555-0107</td>
                
                <td className="px-6 py-4">6391 Elgin St. Celina, Delaware 10299</td>
                <td className="px-6 py-4 flex gap-4">
                  <div className="border border-primary h-[30px] text-primary rounded-[50px] text-sm font-semibold flex justify-center items-center w-[90px]">Confirm</div>
                  <div className="border border-[#EA4335] h-[30px] text-[#EA4335] rounded-[50px] text-sm font-semibold flex justify-center items-center w-[90px]">Deny</div>
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
                <td className="px-6 py-4">(205) 555-0100</td>
               
                <td className="px-6 py-4">6391 Elgin St. Celina, Delaware 10299</td>
                <td className="px-6 py-4 flex gap-4">
                  <div className="border border-primary h-[30px] text-primary rounded-[50px] text-sm font-semibold flex justify-center items-center w-[90px]">Confirm</div>
                  <div className="border border-[#EA4335] h-[30px] text-[#EA4335] rounded-[50px] text-sm font-semibold flex justify-center items-center w-[90px]">Deny</div>
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
                <td className="px-6 py-4">(303) 555-0105</td>
                <td className="px-6 py-4">6391 Elgin St. Celina, Delaware 10299</td>
                <td className="px-6 py-4 flex gap-4">
                  <div className="border border-primary h-[30px] text-primary rounded-[50px] text-sm font-semibold flex justify-center items-center w-[90px]">Confirm</div>
                  <div className="border border-[#EA4335] h-[30px] text-[#EA4335] rounded-[50px] text-sm font-semibold flex justify-center items-center w-[90px]">Deny</div>
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
                <td className="px-6 py-4">(405) 555-0128</td>
                <td className="px-6 py-4">6391 Elgin St. Celina, Delaware 10299</td>
                <td className="px-6 py-4 flex gap-4">
                  <div className="border border-primary h-[30px] text-primary rounded-[50px] text-sm font-semibold flex justify-center items-center w-[90px]">Confirm</div>
                  <div className="border border-[#EA4335] h-[30px] text-[#EA4335] rounded-[50px] text-sm font-semibold flex justify-center items-center w-[90px]">Deny</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrganizerRequest;
