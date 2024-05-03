import React, { useState } from "react";
import upload from "../assets/upload.svg";

const EnvironmentVariableDragAndDrop = ({ closeDrawer }) => {
  return (
    <div className="p-10 ">
      <div className="flex flex-col gap-8 p-4 border rounded border-slate-300">
        <div>
          <div className="flex flex-col items-center justify-center h-32 gap-2 text-black rounded bg-[#F8F8F8]">
            <img src={upload} alt="" />
            <div className="font-bold">
              Click or drag files(s) here to upload
            </div>
          </div>
          <p className="py-1 text-sm text-gray">
            Upload a .env file. It should not be greater than 5KB.
          </p>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={closeDrawer}
            className="p-1 px-4 py-1 ml-2 font-bold bg-white border rounded text-gray border-gray"
          >
            Cancel
          </button>
          <button className="  font-bold rounded px-4 p-1 text-white bg-[#6E27D5]">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentVariableDragAndDrop;
