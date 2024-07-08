import React from "react";
import ReactDOM from "react-dom/client";
import "./pages.css";
import { FiHome, FiBookOpen, FiBookmark } from "react-icons/fi";

const Nav = () => {
  return (
    <>
      <div className="w-24 bg-slate-700 flex flex-col">
        <SideIcon icon={<FiHome size="32" />} />
      </div>
    </>
  );
};
const SideIcon = ([icon]: any) => {
  return (
    <>
      <div className="iconSide">{icon}</div>
    </>
  );
};
export default Nav;
