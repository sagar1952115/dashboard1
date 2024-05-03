import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const Dashboard = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Dashboard;
