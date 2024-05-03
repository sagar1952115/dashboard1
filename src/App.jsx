import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Loader from "./components/Loader";

export const DashboardContext = createContext({});
function App() {
  const [applications, setApplications] = useState([]);
  const [memoryUtilization, setMemoryUtilization] = useState([]);
  const [cpuUtilization, setCpuUtilization] = useState([]);
  const [eventHistory, setEventHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          applicationsResponse,
          memoryUtilizationResponse,
          cpuUtilizationResponse,
          eventHistoryResponse,
        ] = await Promise.all([
          fetch("https://retoolapi.dev/71NNjB/applications").then((response) =>
            response.json()
          ),
          fetch("https://retoolapi.dev/ybFVVH/memoryutilization").then(
            (response) => response.json()
          ),
          fetch("https://retoolapi.dev/Ymxfa2/cpuutilization").then(
            (response) => response.json()
          ),
          fetch("https://retoolapi.dev/TYjDIe/eventhistory").then((response) =>
            response.json()
          ),
        ]);
        console.log(applications);
        setApplications(applicationsResponse);
        setMemoryUtilization(memoryUtilizationResponse);
        setCpuUtilization(cpuUtilizationResponse);
        setEventHistory(eventHistoryResponse);
        setSelectedApp(applicationsResponse[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <DashboardContext.Provider
      value={{
        applications,
        setApplications,
        memoryUtilization,
        setMemoryUtilization,
        cpuUtilization,
        setCpuUtilization,
        eventHistory,
        setEventHistory,
        selectedApp,
        setSelectedApp,
      }}
    >
      <Dashboard />
    </DashboardContext.Provider>
  );
}

export default App;
