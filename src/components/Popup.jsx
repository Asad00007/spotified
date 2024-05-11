import React from "react";

const Popup = ({ children, setTrigger }) => {
  return (
    <div className="w-full h-screen bg-black bg-opacity-30 fixed top-0 left-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-3 w-[300px] md:w-[500px] relative flex items-center justify-center flex-col gap-5">
        <div
          className="absolute top-2 right-3 text-3xl cursor-pointer"
          onClick={() => setTrigger(0)}
        >
          &times;
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
