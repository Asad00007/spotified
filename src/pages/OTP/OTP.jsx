import React from "react";
import Logo from "../../assets/logo.svg";
import { useState } from "react";

const OTP = () => {
  return (
    <div className="flex flex-col md-1200:flex-row">
      <div className="flex items-center justify-center bg-primary md-1200:w-[48%]  md-1200:h-screen h-28 w-full">
        <img src={Logo} alt="" className="h-24" />
      </div>
      <div className="flex items-center justify-center mt-16 md-1200:mt-0 md-1200:h-screen w-full md-1200:w-[52%]">
        <form
          className="flex flex-col justify-center items-center min-w-[390px] md-1200:min-w-[600px]"
          action=""
        >
          <h2 className=" font-semibold text-[40px]">Verify Code</h2>
          <p className="text-secondary mt-10 text-xl font-medium">
            Please enter the code we just sent to email
          </p>{" "}
          <span className="text-xl font-medium text-primary">
            +971 303 ********
          </span>
          <div className="flex flex-row items-center justify-between mt-8 mx-auto w-full max-w-xs">
            <div className="w-16 h-16 ">
              <input
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-[#F3F3F3] focus:bg-gray-50 focus:ring-1 ring-blue-700"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="w-16 h-16 ">
              <input
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-[#F3F3F3] focus:bg-gray-50 focus:ring-1 ring-blue-700"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="w-16 h-16 ">
              <input
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-[#F3F3F3] focus:bg-gray-50 focus:ring-1 ring-blue-700"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="w-16 h-16 ">
              <input
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-[#F3F3F3] focus:bg-gray-50 focus:ring-1 ring-blue-700"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <div className=" mt-8 flex flex-col justify-between items-center">
            <span className=" font-medium text-secondary text-[15px]">
              Didn't receive OTP?
            </span>
            <span className=" font-medium text-primary text-[15px]">
              Resend Code
            </span>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <button className="w-[390px] p-4 text-xl font-semibold text-white bg-primary rounded-[50px]">
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTP;
