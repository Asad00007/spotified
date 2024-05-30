import React, { useRef, useState } from "react";
import Image from "../../assets/Image.svg";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { FaChevronDown } from "react-icons/fa";
import Calender from "../../assets/Calender.svg";
import { baseAxios } from "../../utils/apiConfig";
import Snackbar from "@mui/material/Snackbar";
import { RotatingLines } from "react-loader-spinner";

const Settings = () => {
  const [dropDown, setDropDown] = useState(false);
  const [startDate, setStartDate] = useState(false);
  const [startDate2, setStartDate2] = useState("");
  const [endDate, setEndDate] = useState(false);
  const [endDate2, setEndDate2] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [notificationError, setNotificationError] = useState(false);
  const [bannerError, setBannerError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notificationLoading, setNotificationLoading] = useState(false);
  const [targetaudience, setTargetaudience] = useState("");
  const [desc, setDesc] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [bannerSnackbarOpen, setBannerSnackbarOpen] = useState(false);
  const [title, setTitle] = useState("");
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const handleBannerSnackbarClose = () => {
    setBannerSnackbarOpen(false);
  };

  const handleNotification = async () => {
    const accesstoken = sessionStorage.getItem("access_token");

    if (!desc || !title || !targetaudience) {
      console.log("All fields must be filled");
      alert("All fields must be filled");
      return;
    }

    const formData = new FormData();
    formData.append("target_audience", targetaudience);
    formData.append("description", desc);
    formData.append("title", title);

    try {
      setNotificationLoading(true);
      const response = await baseAxios.post(
        "/admin_side/create_notification/",
        formData,
        {
          headers: { Authorization: `Bearer ${accesstoken}` },
          "Content-Type": "multipart/form-data",
        }
      );
      setNotificationLoading(false);

      console.log("Success");
      // alert("Notification sent");
      setTitle("");
      setDesc("");
      setTargetaudience("");
      setSnackbarOpen(true);
    } catch (error) {
      setNotificationLoading(false);
      console.log("Unsuccessful");
      setSnackbarOpen(true);
      setNotificationError(true);
      // alert("Error sending notification");
      console.log("Error submitting notification", error);
    }
  };
  const handleBanner = async () => {
    const accesstoken = sessionStorage.getItem("access_token");

    if (!startDate2 || !endDate2 || !selectedImage) {
      console.log("All fields are required");
      alert("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("date_to", endDate2);
    formData.append("date_from", startDate2);
    formData.append("img", fileInputRef.current.files[0]);
    try {
      setLoading(true);
      const response = await baseAxios.post(
        "/admin_side/create_banner/",
        formData,
        {
          headers: { Authorization: `Bearer ${accesstoken}` },
          "Content-Type": "multipart/form-data",
        }
      );
      setLoading(false);
      setBannerSnackbarOpen(true);
      // alert("Banner creation successful");
      setStartDate2("");
      setEndDate2("");
      setSelectedImage();
    } catch (error) {
      // alert("Error creating banner");
      setBannerSnackbarOpen(true);
      setBannerError(true);
      console.log("Error creating Banner", error);
    }
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
                Banner Images
              </p>
              <div
                className="flex flex-col items-center cursor-pointer justify-center border border-dashed text-center border-[#393939] w-[100%] h-[160px] rounded-[10px] overflow-hidden"
                onClick={handleDivClick}
              >
                {!selectedImage && (
                  <img src={Image} alt="Placeholder" className="self-center" />
                )}
                {!selectedImage && (
                  <div className="font-light text-[#393939] opacity-50 px-2">
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
                  <div className="font-light text-[#393939] opacity-50 px-2">
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
              <div className="flex flex-wrap lg-1300:flex-nowarp w-full gap-4 mt-3">
                <div className="flex flex-col flex-1">
                  <label className="font-medium text-[#393939] mb-2">
                    Start Date
                  </label>
                  <div className="relative max-w-[290px] bg-[#F9FAFB] rounded-md">
                    <input
                      type={startDate ? "date" : "text"}
                      onFocus={() => setStartDate(true)}
                      onBlur={() => setStartDate(false)}
                      value={startDate2}
                      onChange={(e) => setStartDate2(e.target.value)}
                      className="px-4 py-2 w-full bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none cursor-pointer">
                      <img src={Calender} alt="Calendar" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <label className="font-medium text-[#393939] mb-2">
                    Expiration Date
                  </label>

                  <div className="relative max-w-[290px] bg-[#F9FAFB] rounded-md">
                    <input
                      type={endDate ? "date" : "text"}
                      onFocus={() => setEndDate(true)}
                      onBlur={() => setEndDate(false)}
                      value={endDate2}
                      onChange={(e) => setEndDate2(e.target.value)}
                      className="px-4 py-2 w-full bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none cursor-pointer">
                      <img src={Calender} alt="Calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleBanner}
                className="bg-[#2D8E00] text-white w-[300px] md-1100:w-[390px] h-[60px] rounded-[50px] text-xl font-semibold shadow-sm mt-7 flex items-center justify-center"
              >
                {loading ? (
                  <RotatingLines color="#123abc" loading={loading} width="30" />
                ) : (
                  "Create"
                )}
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-[#F9FAFB] rounded-[10px] px-2 md:w-auto md-1350:w-[605px] h-[46px] py-4"
                />
                <label htmlFor="description" className="self-start font-medium">
                  Description
                </label>
                <textarea
                  type="text"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="bg-[#F9FAFB] rounded-[10px] px-2 md:w-auto md-1350:w-[605px] h-[161px] py-2"
                />
                <label
                  htmlFor="targetAudience"
                  className="self-start font-medium"
                >
                  Target Audience
                </label>
                <div className="flex h-[46px] w-[290px] justify-between px-5 items-center bg-[#F9FAFB] rounded-[10px] relative">
                  <h1 className="font-normal text-[13px] text-[#393939] opacity-50">
                    {!targetaudience ? "Select audience" : targetaudience}
                  </h1>
                  <FaChevronDown
                    className={`transition opacity-50 cursor-pointer ${
                      dropDown ? "rotate-180" : "rotate-0"
                    }`}
                    onClick={() => setDropDown(!dropDown)}
                  />
                  {dropDown && (
                    <div className="absolute top-10 left-0 bg-white rounded-md border w-full">
                      <div
                        className="p-2 cursor-pointer"
                        onClick={() => setTargetaudience("organiser")}
                      >
                        Organisers
                      </div>
                      <div
                        className="p-2 cursor-pointer"
                        onClick={() => setTargetaudience("user")}
                      >
                        Users
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button
                onClick={handleNotification}
                className="bg-[#2D8E00] text-white w-[300px] md-1100:w-[390px] h-[60px] rounded-[50px] text-xl font-semibold shadow-sm mt-7 flex items-center justify-center"
              >
                {notificationLoading ? (
                  <RotatingLines color="#123abc" loading={loading} width="30" />
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={
          notificationError
            ? "Error sending notification"
            : "Notification sent successfully"
        }
        key={"top" + "right"}
      />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={bannerSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleBannerSnackbarClose}
        message={
          bannerError ? "Error creating Banner" : "Banner creation successful"
        }
        key={"top" + "right"}
      />
    </>
  );
};

export default Settings;
