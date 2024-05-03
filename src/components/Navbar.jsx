import React from "react";
import arrow from "../assets/down-arrow.svg";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <div className="flex justify-between h-20 p-2 px-8 overflow-hidden text-black border-b border-slate-200">
      <div className="flex flex-col justify-between p-2 ">
        <div className="text-sm text-gray">Applications</div>
        <div>
          <Dropdown />
        </div>
      </div>
      <div className="flex items-center gap-3 ">
        <div className="flex items-center font-bold justify-center w-[40px] h-[40px] rounded-full text-white uppercase bg-yellow-500/50 ">
          JD
        </div>
        <div className="w-max">John Doe</div>

        <img
          src={arrow}
          className="px-2"
          alt="This is an down arrow svg image."
        />
      </div>
    </div>
  );
};

export default Navbar;
