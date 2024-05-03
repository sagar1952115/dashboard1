import React, { useContext, useEffect, useState } from "react";
import deleteIcon from "../assets/delete.svg";
import { DashboardContext } from "../App";

const EnvironmentVariableDrawer = ({
  closeDrawer,
  handleAddVariable,
  handleDeleteVariable,
  handleChangeKey,
  variables,
  setVariables,
  handleChangeValue,
}) => {
  const [error, setError] = useState("");

  const { selectedApp } = useContext(DashboardContext);

  useEffect(() => {
    const storedVariables = JSON.parse(localStorage.getItem("variables"));
    console.log(storedVariables);
    if (storedVariables && storedVariables.length > 0) {
      const filteredVariables = storedVariables.filter(
        (variables) => variables.id === selectedApp.id
      );
      setVariables(filteredVariables);
    } else {
      setVariables([{ key: "", value: "", id: selectedApp.id }]);
    }

    console.log(variables);
  }, []);

  useEffect(() => {
    localStorage.setItem("variables", JSON.stringify(variables));
  }, [variables]);

  const handleSave = () => {
    // Check if any input field is empty
    const isEmpty = variables.some(
      (variable) => !variable.key || !variable.value
    );
    if (isEmpty) {
      setError("All fields are required.");
    } else {
      setError("");
      // Do something with the variables, like sending them to a server
      console.log("Variables:", variables);
    }
  };

  return (
    <div className="p-10 ">
      <div className="flex flex-col gap-8 p-4 border rounded border-slate-300">
        {variables.map((variable, index) => (
          <div key={index} className="flex items-center gap-6">
            <div className="w-full">
              <label className="flex items-center gap-2 text-gray">
                Name
                <input
                  type="text"
                  placeholder="Name"
                  value={variable.key}
                  onChange={(e) => handleChangeKey(index, e.target.value)}
                  className="w-full px-2 py-1 border rounded border-slate-500 "
                />
              </label>
            </div>
            <div className="w-full">
              <label className="flex items-center gap-2 text-gray">
                Value
                <input
                  type="text"
                  placeholder="Value"
                  value={variable.value}
                  onChange={(e) => handleChangeValue(index, e.target.value)}
                  className="w-full px-2 py-1 border rounded border-slate-500 "
                />
              </label>
            </div>

            <img
              className="cursor-pointer"
              onClick={() => handleDeleteVariable(index)}
              src={deleteIcon}
              alt=""
            />
          </div>
        ))}

        <div className="flex justify-end gap-4">
          <button
            // onClick={handleSave}
            onClick={closeDrawer}
            className="p-1 px-4 py-1 ml-2 font-bold bg-white border rounded text-gray border-gray"
          >
            Cancel
          </button>
          <button
            onClick={handleAddVariable}
            className="  font-bold rounded px-4 p-1 text-white bg-[#6E27D5]"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentVariableDrawer;
