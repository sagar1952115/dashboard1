import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { DashboardContext } from "../App";

const CpuGraph = ({ data }) => {
  const formatTimestamp = (timestamp) => {
    const date = new Date(parseInt(timestamp) * 1000);
    return date.toLocaleTimeString();
  };

  const { applications } = useContext(DashboardContext);

  const getApplicationName = (id) => {
    const app = applications.filter((app) => app.id == id);
    return app[0].name;
  };

  const applicationData = {};
  data.forEach((item) => {
    if (!applicationData[item.applicationId]) {
      applicationData[item.applicationId] = [];
    }
    applicationData[item.applicationId].push(item);
  });

  const lines = Object.keys(applicationData).map((applicationId, index) => (
    <Line
      key={index}
      type="monotone"
      data={applicationData[applicationId]}
      dataKey="cpuUtilization"
      name={getApplicationName(applicationId)}
      stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
    />
  ));

  return (
    <LineChart
      width={800}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" tickFormatter={formatTimestamp} />
      <YAxis domain={[0, 100]} />
      <Tooltip />
      <Legend />
      {lines}
    </LineChart>
  );
};

export default CpuGraph;
