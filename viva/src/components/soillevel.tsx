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
          standalone={false}
          animate={{ duration: 1000 }}
          width={400}
          height={400}
          data={}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: {
              fill: ({ datum }) => {
                const color = datum.y > 30 ? "green" : "red";
                return datum.x === 1 ? color : "transparent";
              },
            },
          }}
        />
      </div>
    </div>
  );
};
