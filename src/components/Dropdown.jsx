import React, { useContext, useState } from "react";
import arrow from "../assets/down-arrow.svg";
import { DashboardContext } from "../App";

const Dropdown = () => {
  const { applications, selectedApp, setSelectedApp } =
    useContext(DashboardContext);

  const handleChange = (event) => {
    setSelectedApp(JSON.parse(event.target.value));
  };
  return (
    <div className="relative">
      <select
        id="custom-dropdown"
        onChange={handleChange}
        className="block w-full py-2 pr-8 leading-tight bg-transparent border-gray-400 rounded appearance-none hover:border-gray-500 focus:outline-none focus:shadow-outline"
      >
        {applications.map((curr) => {
          return (
            <option key={curr.id} value={JSON.stringify(curr)}>
              {curr.name}
            </option>
          );
        })}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
        <img src={arrow} alt="down-arrow" />
      </div>
    </div>
  );
};

export default Dropdown;
