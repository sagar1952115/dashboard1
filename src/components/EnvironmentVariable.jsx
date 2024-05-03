import React, { useContext, useEffect, useState } from "react";
import plus from "../assets/plus.svg";
import cross from "../assets/cross.svg";
import download from "../assets/download.svg";
import deleteIcon from "../assets/delete.svg";
import EnvironmentVariableDrawer from "./EnvironmentVariableDrawer";
import EnvironmentVariableDragAndDrop from "./EnvironmentVariableDragAndDrop";
import Dashboard from "../pages/Dashboard";
import { DashboardContext } from "../App";

const EnvironmentVariable = () => {
  const [open, setOpen] = useState("");

  const [variables, setVariables] = useState([]);

  const { selectedApp } = useContext(DashboardContext);
  useEffect(() => {
    const storedVariables = JSON.parse(localStorage.getItem("variables"));
    if (storedVariables) {
      const filteredVariables = storedVariables.filter(
        (variables) => variables.id === selectedApp.id
      );
      setVariables(filteredVariables);
    }
  }, [selectedApp]);

  const handleAddVariable = () => {
    setVariables([...variables, { key: "", value: "", id: selectedApp.id }]);
  };

  const handleDeleteVariable = (index) => {
    const updatedVariables = [...variables];
    updatedVariables.splice(index, 1);
    setVariables(updatedVariables);
    localStorage.setItem("variables", JSON.stringify(updatedVariables));
  };

  const handleChangeKey = (index, value) => {
    const updatedVariables = [...variables];
    updatedVariables[index].key = value;
    setVariables(updatedVariables);
  };

  const handleChangeValue = (index, value) => {
    const updatedVariables = [...variables];
    updatedVariables[index].value = value;
    setVariables(updatedVariables);
  };
  return (
    <div className="p-4 px-10">
      <div className="bg-white p-2 px-4 rounded-md shadow min-h-[440px]">
        <div className="flex justify-between">
          <div className="p-1 text-lg font-bold text-gray">
            Environment variable
          </div>
          <div className="flex gap-1">
            <img onClick={() => setOpen("input")} src={plus} alt="" />
            <img src={download} onClick={() => setOpen("drag")} alt="" />
          </div>
        </div>
        {variables.length > 0 ? (
          <div className="flex flex-col w-1/2 gap-3 py-3">
            {variables.map((variable, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 text-sm text-black border rounded border-slate-200 "
              >
                <div className="font-bold ">{variable.key}</div>
                <div>{variable.value}</div>
                <img
                  className="cursor-pointer"
                  onClick={() => handleDeleteVariable(index)}
                  src={deleteIcon}
                  alt="A black delete icon"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="p-1 text-sm text-gray">
            No environment variable created
          </div>
        )}
      </div>

      <div
        className={`absolute top-0 bottom-0 overflow-hidden right-0 ${
          open !== ""
            ? "w-1/2 shadow-[0_35px_80px_-15px_rgba(0,0,0,0.5)]"
            : "w-0"
        } h-screen bg-white transform duration-300`}
      >
        {open === "input" && (
          <EnvironmentVariableDrawer
            closeDrawer={() => setOpen("")}
            handleDeleteVariable={handleDeleteVariable}
            handleChangeKey={handleChangeKey}
            handleChangeValue={handleChangeValue}
            handleAddVariable={handleAddVariable}
            variables={variables}
            setVariables={setVariables}
          />
        )}
        {open === "drag" && (
          <EnvironmentVariableDragAndDrop closeDrawer={() => setOpen("")} />
        )}

        <img
          onClick={() => setOpen("")}
          src={cross}
          className="fixed top-4 right-4"
          alt="A cross icon"
        />
      </div>
    </div>
  );
};

export default EnvironmentVariable;
