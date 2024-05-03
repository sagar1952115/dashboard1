import React, { useState } from "react";
import logo from "../assets/logo.svg";
import application from "../assets/application.svg";
import save from "../assets/save.svg";
import arrow from "../assets/back-arrow.svg";
import security from "../assets/security.svg";
import link from "../assets/link.svg";
import cost from "../assets/cost.svg";
import user from "../assets/user.svg";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={` ${
        !open ? "w-[76px]" : "w-1/6"
      } h-screen flex flex-col justify-between text-white transform duration-300   bg-primary`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`flex ${
          open ? "justify-start" : "justify-center"
        } items-center w-full  h-20 p-4 px-5 gap-4 border-b cursor-pointer border-gray`}
      >
        <img src={logo} alt="Logo of Kapstan" />
        {open ? (
          <span className="text-2xl font-semibold text-white duration-500 transform">
            Kapstan
          </span>
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-col flex-1 gap-6 p-4">
        <div className="flex items-center  relative  rounded  bg-[#4D1B95]">
          <div className="w-[46px] h-[46px] p-1 flex items-center justify-center">
            <img src={application} alt="Logo of appliation" />
          </div>
          {open && (
            <span className="absolute text-lg text-white duration-500 transform left-12">
              Application
            </span>
          )}
        </div>
        <div className="flex items-center  relative  rounded  hover:bg-[#4D1B95]">
          <div className="w-[46px] h-[46px] p-1 flex items-center justify-center">
            <img src={link} alt="A link icon" />
          </div>
          {open && (
            <span className="absolute text-lg text-white duration-500 transform left-12">
              Connections
            </span>
          )}
        </div>
        <div className="flex items-center  relative  rounded  hover:bg-[#4D1B95]">
          <div className="w-[46px] h-[46px] p-1 flex items-center justify-center">
            <img src={cost} alt="A doller icon" />
          </div>
          {open && (
            <span className="absolute text-lg text-white duration-500 transform left-12">
              Cost
            </span>
          )}
        </div>
        <div className="flex items-center  relative  rounded  hover:bg-[#4D1B95]">
          <div className="w-[46px] h-[46px] p-1 flex items-center justify-center">
            <img src={security} alt="A sheild icon" />
          </div>
          {open && (
            <span className="absolute text-lg text-white duration-500 transform left-12">
              Security{" "}
              <span className="bg-[#6E27D5]  rounded-sm ml-4 p-1 px-2">
                Beta
              </span>
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6 p-4 ">
        <div className="flex items-center  relative  rounded  hover:bg-[#4D1B95]">
          <div className="w-[46px] h-[46px] p-1 flex items-center justify-center">
            <img src={user} alt="A user icon" />
          </div>
          {open && (
            <span className="absolute text-lg text-white duration-500 transform left-12">
              Admin
            </span>
          )}
        </div>
        <div className="flex items-center  relative  rounded  hover:bg-[#4D1B95]">
          <div className="w-[46px] h-[46px] p-1 flex items-center justify-center">
            <img src={save} alt="A docs icon" />
          </div>
          {open && (
            <span className="absolute text-lg text-white duration-500 transform left-12">
              Docs
            </span>
          )}
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-center rounded w-[46px] h-[46px] hover:bg-[#4D1B95]`}
        >
          <img src={arrow} alt="A double left facing icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
