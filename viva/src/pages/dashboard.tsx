import React from "react";
import ReactDOM from "react-dom/client";
import "./pages.css";
import Actionable from "../components/actionable";
import SoilLevel from "../components/soillevel";
const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-700 p-3 base text-yellow-50">
        <h1 className="text-3xl">Hiya, Sanjeev</h1>
      </div>
      <div className="flex">
        <Actionable />
        <SoilLevel />
      </div>
    </>
  );
};

export default Dashboard;
