import React from "react";
import ReactDOM from "react-dom/client";
import "./pages.css";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-700 p-3 base">
        <h1 className="text-white text-5xl pb-5">Welcome to the Dashboard</h1>
        <div className="flex flex-row text-center text-xl font-mono rounded-sm w-1/4 p-3">
          <p className="bg-slate-400"></p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
