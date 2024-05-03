import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import dots from "../assets/threedots.svg";
import overview from "../assets/overview.svg";
import timer from "../assets/timer.svg";
import alert from "../assets/alert.svg";
import env from "../assets/env.svg";
import greendot from "../assets/greendot.svg";
import reddot from "../assets/reddot.svg";
import Overview from "./Overview";
import EnvironmentVariable from "./EnvironmentVariable";
import { DashboardContext } from "../App";

const Content = () => {
  const {
    selectedApp: { status },
    selectedApp,
  } = useContext(DashboardContext);
  console.log(selectedApp);
  const [selectedMenu, setSelectedMenu] = useState("overview");
  return (
    <div className="w-full h-screen overflow-auto text-white bg-secondary ">
      <Navbar />
      <div className="flex justify-between p-2 px-8 overflow-hidden text-black ">
        <div className="flex flex-col justify-between p-2 ">
          <div className="text-xl font-bold text-black ">
            {selectedApp?.name}
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          {status === "deployed" ? (
            <div className="flex text-[#00B88C] border-[#00B88C] gap-1 px-2 border rounded-md w-max">
              <img src={greendot} alt="" />
              Deployed
            </div>
          ) : (
            <div className="flex gap-1 px-2 text-red-500 border border-red-500 rounded-md w-max">
              <img src={reddot} alt="" />
              Uninstalled
            </div>
          )}

          <img src={dots} alt="This is an down arrow svg image." />
        </div>
      </div>

      <div className="flex gap-8 px-10 text-gray">
        <div
          onClick={() => setSelectedMenu("overview")}
          className={`flex gap-2 cursor-pointer ${
            selectedMenu === "overview"
              ? "text-black pointer-event-none font-bold"
              : ""
          }`}
        >
          <img src={overview} alt="" />
          <div>Overview</div>
        </div>
        <div
          onClick={() => setSelectedMenu("env")}
          className={`flex gap-2 cursor-pointer ${
            selectedMenu === "env"
              ? "text-black pointer-event-none font-bold"
              : ""
          }`}
        >
          <img src={env} alt="" />
          <div>Environment Variables</div>
        </div>
        <div
          onClick={() => setSelectedMenu("alert")}
          className={`flex gap-2 cursor-pointer ${
            selectedMenu === "alert" ? "text-black font-bold" : ""
          }`}
        >
          <img src={alert} className="" alt="" />
          <div className="relative">
            Alerts
            <img className="absolute top-0 -right-3" src={reddot} alt="" />
          </div>
        </div>
        <div
          onClick={() => setSelectedMenu("history")}
          className={`flex gap-2 cursor-pointer ${
            selectedMenu === "history" ? "text-black font-bold" : ""
          }`}
        >
          <img src={timer} alt="" />
          <div>Event history</div>
        </div>
      </div>
      <div className="text-black">
        {selectedMenu === "overview" ? <Overview /> : ""}
        {selectedMenu === "env" ? <EnvironmentVariable /> : ""}
      </div>
    </div>
  );
};

export default Content;
