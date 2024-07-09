import React from "react";
import ReactDOM from "react-dom/client";
import ".././index.css";
import { useState } from "react";

const Actionable = () => {
  const [Prompt, SetPrompt]: any = useState("");
  return (
    <div className="flex flex-col bg-slate-300 rounded-md p-3 w-1/3 h-32 text-wrap">
      <div className="<<Title>>">
        <h1 className="text-xl">Recommended Action</h1>
      </div>
      <div className="<<Prompt>> text-size-md text-wrap">
        <p className="text-md text-wrap">{Prompt}</p>
      </div>
    </div>
  );
};

export default Actionable;
