import React from "react";
import ReactDOM from "react-dom/client";
import ".././index.css";
import { useState } from "react";
import { VictoryBar, VictoryPie } from "victory";

const SoilLevel = () => {
  return (
    <div className="flex flex-col bg-slate-300 rounded-md p-3 w-1/3 h-32 text-wrap">
      <div className="<<Title>>">
        <h1 className="text-xl">Soil Level</h1>
      </div>
      <div className="<<Meter>> text-size-md text-wrap">
        <VictoryPie
          data={[
            { x: "Zone A", y: 35 },
            { x: "Zone B", y: 40 },
            { x: "Zone C", y: 55 },
          ]}
        />
      </div>
    </div>
  );
};

export default SoilLevel;
