import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { FaArrowLeft, FaChevronDown, FaSmile } from "react-icons/fa";
import MessageProfile from "../../assets/img/MessageProfile.svg";
import ProfileRounded from "../../assets/img/ProfileRounded.svg";
import ProfileRounded2 from "../../assets/img/ProfileRounded2.svg";
import ProfileRounded3 from "../../assets/img/ProfileRounded3.svg";
import MessageImage from "../../assets/img/MessageImage.svg";
import Mic from "../../assets/img/Mic.svg";
import Smile from "../../assets/img/Smile.svg";
import PaperClip from "../../assets/img/paperclip.svg";
import PaperPlane from "../../assets/img/paper-plane.svg";

const Messages = () => {
  const [current, setCurrent] = useState(1);
  const data = [
    {
      img: ProfileRounded,
      name: "Ope",
      time: "4:27pm",
      status: "active",
      message:
        "Gee, its been good news all day. i met someone special today. she's really pretty.",
      open: true,
    },
    {
      img: ProfileRounded2,
      name: "Bambam",
      time: "4:12pm",
      status: "active",
      message: "Are you coming to class tomorrow? we have test.",
      open: false,
    },
    {
      img: ProfileRounded3,
      name: "Lucia",
      time: "3:27pm",
      status: "away",
      message: "I miss you dear, when are you coming to see me.",
      open: false,
    },
    {
      img: ProfileRounded,
      name: "Mijan",
      time: "3:27pm",
      status: "away",
      message: "Baba what sup na, you still de Lagos?",
      open: false,
    },
    {
      img: ProfileRounded3,
      name: "Chi",
      time: "3:00pm",
      status: "offline",
      message: "Have you called them?",
      open: false,
    },
    {
      img: ProfileRounded3,
      name: "Chi",
      time: "3:00pm",
      status: "offline",
      message: "Have you called them?",
      open: false,
    },
    {
      img: ProfileRounded3,
      name: "Chi",
      time: "3:00pm",
      status: "offline",
      message: "Have you called them?",
      open: false,
    },
    {
      img: ProfileRounded3,
      name: "Chi",
      time: "3:00pm",
      status: "offline",
      message: "Have you called them?",
      open: false,
    },
    {
      img: ProfileRounded3,
      name: "Chi",
      time: "3:00pm",
      status: "offline",
      message: "Have you called them?",
      open: false,
    },
    {
      img: ProfileRounded3,
      name: "Chi",
      time: "3:00pm",
      status: "offline",
      message: "Have you called them?",
      open: false,
    },
  ];
  const [flag, setFlag] = useState(true);
  const handleClick = () => {
    setFlag((prev) => !prev);
  };
  return (
    <>
      <Sidebar active={6} />
      <Navbar text={"Messages"} />
      <div className=" hidden md:block">
        <div className="bg-[#FAFBFC] lg:w-[calc(100vw - 345px)] lg:ml-[345px] flex items-center justify-center font-sans">
          <div className="flex bg-white w-[95%] h-[882px] mx-auto max-w-full my-10 rounded-2xl overflow-hidden shadow-md">
            <div className="flex flex-col w-[306px] border-r border-white bg-[#F9FAFB]">
              <div className="flex justify-center items-center min-h-[80px] bg-[#2D8E00] bg-opacity-50 gap-4">
                <span className="text-white font-medium ">Recent Messages</span>
                <FaChevronDown className="text-white" />
              </div>
              <div className="flex bg-[#F0F0F0] w-[274px] h-[39px] mx-auto my-2 rounded-lg items-center justify-between px-3 py-2">
                <button
                  onClick={() => setCurrent(1)}
                  className={`${
                    current === 1 ? "bg-[#2D8E00] text-white" : "text-black"
                  } w-[134px] h-[27px]  px-2 rounded-md text-[12px] font-[400]`}
                >
                  Users
                </button>
                <button
                  onClick={() => setCurrent(2)}
                  className={`${
                    current === 2 ? "bg-[#2D8E00] text-white" : "text-black"
                  } w-[134px] h-[27px]  px-2 rounded-md text-[12px] font-[400]`}
                >
                  Organizers
                </button>
              </div>
              <div className="flex flex-col overflow-auto">
                {data.map((item, index) => {
                  return (
                    <div
                      className={`flex ${
                        item.open ? "bg-[#F0F0F0]" : "bg-[#F9FAFB]"
                      } h-[107px] gap-3 px-5 py-3`}
                      key={index}
                    >
                      <div className="self-start py-3 min-w-[49px] min-h-[49px] relative">
                        <img
                          src={item.img}
                          alt=""
                          className="w-[49px] h-[49px] object-contain"
                        />
                        <div
                          className={`absolute w-[12px] h-[12px]  ${
                            item.status === "active" && "bg-[#53E04E]"
                          } ${item.status === "away" && "bg-[#F0971D]"} ${
                            item.status === "offline" && "bg-[#F0F0F0]"
                          } border-2 border-black rounded-full top-12 right-0`}
                        ></div>
                      </div>
                      <div className="flex flex-col py-2">
                        <div className="flex gap-2 items-center">
                          <span className="font-semibold text-[13px]">
                            {item.name}
                          </span>
                          <span className="font-extralight text-[#393939] text-[8px]">
                            {item.time}
                          </span>
                        </div>
                        <div className="text-[#393939] font-extralight text-[12px] leading-none">
                          {item.message}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col flex-1 relative ">
              <div className="flex gap-3 items-center px-4 min-h-[80px] bg-[#2D8E00] bg-opacity-50">
                <div className="w-[38px] h-[38px] relative">
                  <img src={MessageProfile} alt="" />
                  <div className="absolute w-[12px] h-[12px] bg-[#53E04E] border-2 border-black rounded-full bottom-0 right-0"></div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-medium text-white">Ope</h1>
                  <p className="text-[12px] font-[400] text-white">Active</p>
                </div>
              </div>
              <div className="flex flex-col overflow-auto  p-5 gap-5 h-[700px]">
                <div className="flex gap-3">
                  <img src={ProfileRounded} alt="" className="self-start" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[#393939] text-[13px] font-semibold">
                        Ope
                      </span>
                      <span className="font-extralight text-[8px]">4:27pm</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[12px] font-normal text-[#393939]">
                        Gee, its been good news all day. i met someone special
                        today. she's really pretty. i’ll like to talk more about
                        it but it has to be tomorrow. she should grab a drink
                        later.
                      </span>
                      <span className="text-[12px] font-normal text-[#393939]">
                        Call me if you get this okay.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img src={ProfileRounded2} alt="" className="self-start" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[#393939] text-[13px] font-semibold">
                        Me
                      </span>
                      <span className="font-extralight text-[8px]">4:27pm</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[12px] font-normal text-[#393939]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Officia maiores laborum deleniti veniam
                        praesentium illo pariatur, ducimus accusamus, dolorem
                        architecto nesciunt, optio alias et recusandae sequi?
                        Mollitia dolorum sapiente quasi.
                      </span>
                      <span className="text-[12px] font-normal text-[#393939]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quibusdam temporibus sequi quae incidunt quod,
                        perferendis neque similique non quisquam iusto?
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img src={ProfileRounded} alt="" className="self-start" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[#393939] text-[13px] font-semibold">
                        Ope
                      </span>
                      <span className="font-extralight text-[8px]">4:27pm</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[12px] font-normal text-[#393939]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Officia maiores laborum deleniti veniam
                        praesentium illo pariatur, ducimus accusamus, dolorem
                        architecto nesciunt, optio alias et recusandae sequi?
                        Mollitia dolorum sapiente quasi.
                      </span>
                      <span className="text-[12px] font-normal text-[#393939]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quibusdam temporibus sequi quae incidunt quod,
                        perferendis neque similique non quisquam iusto?
                      </span>
                      <div>
                        <img src={MessageImage} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img src={ProfileRounded2} alt="" className="self-start" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[#393939] text-[13px] font-semibold">
                        Me
                      </span>
                      <span className="font-extralight text-[8px]">4:27pm</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[12px] font-normal text-[#393939]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Officia maiores laborum deleniti veniam
                        praesentium illo pariatur, ducimus accusamus, dolorem
                        architecto nesciunt, optio alias et recusandae sequi?
                        Mollitia dolorum sapiente quasi.
                      </span>
                      <span className="text-[12px] font-normal text-[#393939]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quibusdam temporibus sequi quae incidunt quod,
                        perferendis neque similique non quisquam iusto?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 min-h-[90px] bg-[#F9FAFB] left-0 w-full flex items-center">
                <div className="flex mx-4 justify-between w-full bg-[#F0F0F0] h-[52px] items-center px-3 rounded-lg">
                  <input
                    type="text"
                    placeholder="Type Something..."
                    className="text-base font-[400] text-[#393939] bg-transparent flex-1 mr-3 outline-none"
                  />
                  <div className="flex gap-2 items-center">
                    <img src={Smile} alt="" className="w-[16px] h-[16px]" />
                    <img src={Mic} alt="" className="w-[16px] h-[16px]" />
                    <img src={PaperClip} alt="" className="w-[16px] h-[16px]" />
                    <div className="w-[23px] h-[23px] bg-[#2D8E00] flex items-center justify-center rounded-full border-l border-gray-300 ml-2">
                      <img src={PaperPlane} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        {flag ? (
          <div className="bg-[#FAFBFC] lg:w-[calc(100vw - 345px)] lg:ml-[345px] flex items-center justify-center font-sans">
            <div className="flex bg-white  h-[882px] mx-auto max-w-full my-10 rounded-2xl overflow-hidden shadow-md">
              <div className="flex flex-col bg-[#F9FAFB]">
                <div className="flex justify-center items-center min-h-[80px] bg-[#2D8E00] bg-opacity-50 gap-4">
                  <span className="text-white font-medium ">
                    Recent Messages
                  </span>
                  <FaChevronDown className="text-white" />
                </div>
                <div className="flex bg-[#F0F0F0] w-[274px] h-[39px] mx-auto my-2 rounded-lg items-center justify-between px-3 py-2">
                  <button
                    onClick={() => setCurrent(1)}
                    className={`${
                      current === 1 ? "bg-[#2D8E00] text-white" : "text-black"
                    } w-[134px] h-[27px]  px-2 rounded-md text-[12px] font-[400]`}
                  >
                    Users
                  </button>
                  <button
                    onClick={() => setCurrent(2)}
                    className={`${
                      current === 2 ? "bg-[#2D8E00] text-white" : "text-black"
                    } w-[134px] h-[27px]  px-2 rounded-md text-[12px] font-[400]`}
                  >
                    Organizers
                  </button>
                </div>
                <div className="flex flex-col overflow-auto">
                  {data.map((item, index) => {
                    return (
                      <div
                        className={`flex ${
                          item.open ? "bg-[#F0F0F0]" : "bg-[#F9FAFB]"
                        } h-[107px] gap-3 px-5 py-3`}
                        key={index}
                        onClick={handleClick}
                      >
                        <div className="self-start py-3 min-w-[49px] min-h-[49px] relative">
                          <img
                            src={item.img}
                            alt=""
                            className="w-[49px] h-[49px] object-contain"
                          />
                          <div
                            className={`absolute w-[12px] h-[12px]  ${
                              item.status === "active" && "bg-[#53E04E]"
                            } ${item.status === "away" && "bg-[#F0971D]"} ${
                              item.status === "offline" && "bg-[#F0F0F0]"
                            } border-2 border-black rounded-full top-12 right-0`}
                          ></div>
                        </div>
                        <div className="flex flex-col py-2">
                          <div className="flex gap-2 items-center">
                            <span className="font-semibold text-[13px]">
                              {item.name}
                            </span>
                            <span className="font-extralight text-[#393939] text-[8px]">
                              {item.time}
                            </span>
                          </div>
                          <div className="text-[#393939] font-extralight text-[12px] leading-none">
                            {item.message}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col flex-1 relative ">
              <div className="flex gap-3 items-center px-4 min-h-[80px] bg-[#2D8E00] bg-opacity-50">
                <div className="w-[38px] h-[38px] relative">
                  <img src={MessageProfile} alt="" />
                  <div className="absolute w-[12px] h-[12px] bg-[#53E04E] border-2 border-black rounded-full bottom-0 right-0"></div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-xl font-medium text-white">Ope</h1>
                  <p className="text-[12px] font-[400] text-white">Active</p>
                </div>
              </div>
              <div className="flex flex-col overflow-auto  p-5 gap-5 h-[720px] pb-8">
                <div
                  className="bg-gray-200 text-black rounded-full w-fit p-2"
                  onClick={handleClick}
                >
                  <FaArrowLeft />
                </div>
                <div className="flex gap-3">
                  <img src={ProfileRounded} alt="" className="self-start" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[#393939] text-[13px] font-semibold">
                        Ope
                      </span>
                      <span className="font-extralight text-[8px]">4:27pm</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[12px] font-normal text-[#393939]">
                        Gee, its been good news all day. i met someone special
                        today. she's really pretty. i’ll like to talk more about
                        it but it has to be tomorrow. she should grab a drink
                        later.
                      </span>
                      <span className="text-[12px] font-normal text-[#393939]">
                        Call me if you get this okay.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img src={ProfileRounded2} alt="" className="self-start" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[#393939] text-[13px] font-semibold">
                        Me
                      </span>
                      <span className="font-extralight text-[8px]">4:27pm</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[12px] font-normal text-[#393939]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Officia maiores laborum deleniti veniam
                        praesentium illo pariatur, ducimus accusamus, dolorem
                        architecto nesciunt, optio alias et recusandae sequi?
                        Mollitia dolorum sapiente quasi.
                      </span>
                      <span className="text-[12px] font-normal text-[#393939]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quibusdam temporibus sequi quae incidunt quod,
                        perferendis neque similique non quisquam iusto?
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img src={ProfileRounded} alt="" className="self-start" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[#393939] text-[13px] font-semibold">
                        Ope
                      </span>
                      <span className="font-extralight text-[8px]">4:27pm</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[12px] font-normal text-[#393939]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Officia maiores laborum deleniti veniam
                        praesentium illo pariatur, ducimus accusamus, dolorem
                        architecto nesciunt, optio alias et recusandae sequi?
                        Mollitia dolorum sapiente quasi.
                      </span>
                      <span className="text-[12px] font-normal text-[#393939]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quibusdam temporibus sequi quae incidunt quod,
                        perferendis neque similique non quisquam iusto?
                      </span>
                      <div>
                        <img src={MessageImage} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img src={ProfileRounded2} alt="" className="self-start" />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-[#393939] text-[13px] font-semibold">
                        Me
                      </span>
                      <span className="font-extralight text-[8px]">4:27pm</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[12px] font-normal text-[#393939]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Officia maiores laborum deleniti veniam
                        praesentium illo pariatur, ducimus accusamus, dolorem
                        architecto nesciunt, optio alias et recusandae sequi?
                        Mollitia dolorum sapiente quasi.
                      </span>
                      <span className="text-[12px] font-normal text-[#393939]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quibusdam temporibus sequi quae incidunt quod,
                        perferendis neque similique non quisquam iusto?
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 min-h-[90px] bg-[#F9FAFB] left-0 w-full flex items-center">
                <div className="flex mx-4 justify-between w-full bg-[#F0F0F0] h-[52px] items-center px-3 rounded-lg">
                  <input
                    type="text"
                    placeholder="Type Something..."
                    className="text-base font-[400] text-[#393939] bg-transparent flex-1 mr-3 outline-none"
                  />
                  <div className="flex gap-2 items-center">
                    <img src={Smile} alt="" className="w-[16px] h-[16px]" />
                    <img src={Mic} alt="" className="w-[16px] h-[16px]" />
                    <img src={PaperClip} alt="" className="w-[16px] h-[16px]" />
                    <div className="w-[23px] h-[23px] bg-[#2D8E00] flex items-center justify-center rounded-full border-l border-gray-300 ml-2">
                      <img src={PaperPlane} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Messages;
