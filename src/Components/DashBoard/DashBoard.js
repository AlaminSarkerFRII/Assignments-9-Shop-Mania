import React, { useState } from "react";
import BarCharts from "./BarCharts/BarCharts";
import LineCharts from "./LineCharts/LineCharts";

const DashBoard = () => {
  return (
    <div className="grid md:grid-cols-6 lg:grid-cols-2 grid-cols-1">
      <div>
        <h2 className="text-5xl p-6">Line Chart</h2>
        <LineCharts></LineCharts>
      </div>
      <div className="">
        <h2 className="text-5xl p-6">Bar Chart</h2>
        <BarCharts></BarCharts>
      </div>
    </div>
  );
};

export default DashBoard;
