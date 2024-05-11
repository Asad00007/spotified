import React from "react";

const Settings = () => {
  return (
    <div className="bg-[#FAFBFC] lg:w-[calc(100vw - 345px)] lg:ml-[345px] flex items-center justify-center font-sans">
      <div className="flex flex-col bg-white w-[95%] min-h-[882px] mx-auto max-w-full px-7 my-10 rounded-2xl">
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 basis-1/3 border-r">
            <h1 className="font-semibold text-2xl text-[#393939]">
              Create Promo Code
            </h1>
            <p className="font-medium text-[14px] text-[#393939] opacity-50">
              Create promotional campaigns
            </p>
          </div>
          <div className="flex flex-col items-center justify-center basis-2/3">
            <h1 className="text-2xl font-semibold text-[#393939]">
              Banner Information
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
