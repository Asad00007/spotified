import React, { useRef, useState } from "react";
import Image from "../../assets/Image.svg";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { FaChevronDown } from "react-icons/fa";
import Calender from "../../assets/Calender.svg";

const Settings = () => {
  const [dropDown, setDropDown] = useState(false);
  const [startDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Sidebar active={7} />
      <Navbar text={"Settings"} />
      <div className="bg-[#FAFBFC] lg:w-[calc(100vw - 345px)] lg:ml-[345px] flex items-center justify-center font-sans">
        <div className="flex flex-col bg-white w-[95%] min-h-[882px] mx-auto max-w-full px-7 my-10 rounded-2xl">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <div className="flex flex-col gap-1 min-w-[300px] md-1000:min-w-[250px] md:border-r md-800:pr-12 md-1200:pr-5 w-[300px] md-1000:w-auto ">
              <div className="py-3 md:py-7">
                <h1 className="font-semibold text-2xl text-[#393939] md:min-w-[230px] ">
                  Create Promo Code
                </h1>
                <p className="font-medium text-[14px] text-[#393939] opacity-50">
                  Create promotional campaigns
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md-1100:px-3 lg-1350:px-28 py-3 md:py-7 ">
              <h1 className="text-2xl font-semibold text-[#393939] self-start mb-2">
                Banner Information
              </h1>
              <p className="font-medium text-[#393939] self-start mb-2">
                Banner Image
              </p>
              <div
                className="flex flex-col items-center cursor-pointer justify-center border border-dashed border-[#393939] w-[100%] h-[160px] rounded-[10px] overflow-hidden"
                onClick={handleDivClick}
              >
                {!selectedImage && (
                  <img src={Image} alt="Placeholder" className="self-center" />
                )}
                {!selectedImage && (
                  <div className="font-light text-[#393939] opacity-50">
                    Drop your image here, or{" "}
                    <span className="text-[#2D8E00]">click to browse</span>
                  </div>
                )}
                <input
                  id="file-input"
                  type="file"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    setSelectedImage(
                      file ? URL.createObjectURL(file) : undefined
                    );
                  }}
                />
                {!selectedImage && (
                  <div className="font-light text-[#393939] opacity-50">
                    1600 x 1200 (4:3) recommended, up to 10MB each
                  </div>
                )}
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Preview"
                    className="object-cover overflow-hidden w-full h-full"
                  />
                )}
              </div>
              <div className="flex flex-wrap w-full gap-4 mt-3">
                <div className="flex flex-col flex-1">
                  <label className="font-medium text-[#393939] mb-2">
                    Start Date
                  </label>
                  <div className="flex items-center justify-between bg-[#F9FAFB] h-[46px] px-2 rounded-[10px] min-w-[290px]">
                    <input
                      type={startDate ? "date" : "text"}
                      className="bg-[#F9FAFB] outline-none"
                      onFocus={() => setStartDate(true)}
                      onBlur={() => setStartDate(false)}
                    />
                    <img src={Calender} alt="Calendar" />
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <label className="font-medium text-[#393939] mb-2">
                    Expiration Date
                  </label>
                  <div className="flex items-center justify-between bg-[#F9FAFB] h-[46px] px-2 rounded-[10px] min-w-[290px]">
                    <input
                      type={endDate ? "date" : "text"}
                      className="bg-[#F9FAFB] outline-none"
                      onFocus={() => setEndDate(true)}
                      onBlur={() => setEndDate(false)}
                    />
                    <img src={Calender} alt="Calendar" />
                  </div>
                </div>
              </div>
              <button className="bg-[#2D8E00] text-white w-[300px] md-1100:w-[390px] h-[60px] rounded-[50px] text-xl font-semibold shadow-sm mt-7">
                Create
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <div className="flex flex-col gap-1 min-w-[300px] md-1000:min-w-[250px] md:border-r md-1200:pr-5 w-[300px] md-1000:w-auto ">
              <div className="py-3 md:py-7">
                <h1 className="font-semibold text-2xl text-[#393939]">
                  Create Notifications
                </h1>
                <p className="font-medium text-[14px] text-[#393939] opacity-50">
                  You can create notifications here{" "}
                  <br className="hidden md-1100:flex" /> and will send it to
                  users
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md-1100:px-3 lg-1350:px-28 w-full py-3 md:py-7">
              <h1 className="text-2xl font-semibold text-[#393939] self-start mb-2">
                Create Notification
              </h1>
              <div className="flex flex-col flex-wrap w-full gap-4 mt-3">
                <label htmlFor="title" className="self-start font-medium">
                  Title
                </label>
                <input
                  type="text"
                  className="bg-[#F9FAFB] rounded-[10px] px-2 md:w-auto md-1350:w-[605px] h-[46px] py-4"
                />
                <label htmlFor="description" className="self-start font-medium">
                  Description
                </label>
                <input
                  type="text"
                  className="bg-[#F9FAFB] rounded-[10px] px-2 md:w-auto md-1350:w-[605px] h-[161px] py-4"
                />
                <label
                  htmlFor="targetAudience"
                  className="self-start font-medium"
                >
                  Target Audience
                </label>
                <div className="flex h-[46px] w-[290px] justify-between px-5 items-center bg-[#F9FAFB] rounded-[10px] relative">
                  <h1 className="font-normal text-[13px] text-[#393939] opacity-50">
                    Organizers
                  </h1>
                  <FaChevronDown
                    className={`transition opacity-50 cursor-pointer ${
                      dropDown ? "rotate-180" : "rotate-0"
                    }`}
                    onClick={() => setDropDown(!dropDown)}
                  />
                  {dropDown && (
                    <div className="absolute top-10 left-0 bg-white rounded-md border w-full">
                      <div className="p-2">Organizers</div>
                      <div className="p-2">Organizers</div>
                      <div className="p-2">Organizers</div>
                    </div>
                  )}
                </div>
              </div>
              <button className="bg-[#2D8E00] text-white w-[300px] md-1100:w-[390px] h-[60px] rounded-[50px] text-xl font-semibold shadow-sm mt-7">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
