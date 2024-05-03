import React, { useContext, useState } from "react";
import arrow from "../assets/down-arrow.svg";
import tick from "../assets/tick.svg";
import greendot from "../assets/greendot.svg";
import reddot from "../assets/reddot.svg";
import yellowdot from "../assets/yellowdot.svg";
import { DashboardContext } from "../App";
import LineGraph from "./LineGraph";
import Graph from "./LineGraph";
import CpuGraph from "./CpuGraph";
import { formatDate } from "../date";

const Overview = () => {
  const [selectedGraph, setSelectedGraph] = useState("cpu");
  const {
    selectedApp: { version, desiredVersion, id, updatedAt },
    eventHistory,
    memoryUtilization,
    cpuUtilization,
  } = useContext(DashboardContext);

  const data = eventHistory.filter((event) => event.applicationId == id);

  return (
    <div className="p-4 px-10 ">
      <div className="flex flex-col gap-4 p-4 bg-white rounded-md shadow ">
        <div className="flex justify-between bg-white">
          <div className="text-lg font-bold text-gray">Service info</div>
          <img src={arrow} className="transform rotate-180 " alt="" />
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-2">
            <div className=" text-gray">Current Version</div>
            {version === desiredVersion ? (
              <div className="flex items-center gap-2">
                <img src={tick} alt="A success tick" />
                <div>In Sync</div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                {version === "null" ? "NA" : version}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-gray">Desired Version</div>
            <div>{desiredVersion}</div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="p-2 px-6 font-bold text-white bg-[#6e27d5] rounded">
            Deploy
          </div>
          <div className="text-sm text-gray">
            Last updated {formatDate(updatedAt)}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 my-6 ">
        <div className="p-3 bg-white rounded-md shadow">
          <div className="font-bold p-1text-lg text-gray">System Metrices</div>
          <div className="grid grid-cols-2 border-b border-slate-300 text-gray">
            <div
              className={`text-center cursor-pointer p-2  ${
                selectedGraph === "cpu"
                  ? "font-bold text-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => setSelectedGraph("cpu")}
            >
              CPU
            </div>
            <div
              className={`text-center cursor-pointer p-2  ${
                selectedGraph === "memory"
                  ? "font-bold text-primary border-b-2 border-primary"
                  : ""
              }`}
              onClick={() => setSelectedGraph("memory")}
            >
              Memory
            </div>
          </div>
          <div className="overflow-auto ">
            {selectedGraph === "memory" && <Graph data={memoryUtilization} />}
            {selectedGraph === "cpu" && <CpuGraph data={cpuUtilization} />}
          </div>
        </div>
        <div className="p-4 bg-white rounded-md shadow">
          <div className="p-1 text-lg font-bold text-gray">Event History</div>
          <div className="flex justify-center p-1">
            <table className="min-w-full divide-y divide-slate-200">
              <thead>
                <tr className="text-[#333333] font-bold  ">
                  <th className="px-16 py-5 leading-4 tracking-wider text-left">
                    Event
                  </th>
                  <th className="px-16 py-5 leading-4 tracking-wider text-left ">
                    Version
                  </th>
                  <th className="px-16 py-5 leading-4 tracking-wider text-left ">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {data.slice(0, 4).map((row, index) => (
                  <tr key={index} className="px-16">
                    <td className="flex-col gap-3 px-16 py-4 text-left whitespace-no-wrap">
                      <div>{row.event}</div>
                      <div className="text-sm text-gray">
                        {formatDate(row.timestamp)}
                      </div>
                    </td>
                    <td className="px-16 py-4 text-left whitespace-no-wrap">
                      {row.version}
                    </td>
                    <td className="px-16 py-4 text-left whitespace-no-wrap">
                      {row.status === "successful" ? (
                        <div className="flex text-[#00B88C] border-[#00B88C] gap-1 px-2 border rounded-md w-max">
                          <img src={greendot} alt="A green indicator circle" />
                          Successful
                        </div>
                      ) : row.status === "in_progress" ? (
                        <div className="flex text-[#F39C12] border-[#F39C12] gap-1 px-2 border rounded-md w-max">
                          <img
                            src={yellowdot}
                            alt="A yellow indicator circle"
                          />
                          In progress
                        </div>
                      ) : (
                        <div className="flex text-[#E91F04] border-[#E91F04] gap-1 px-2 border rounded-md w-max">
                          <img src={reddot} alt="A red indicator circle" />
                          Failed
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-16 text-sm underline text-gray">Show more</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
