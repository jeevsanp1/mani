import "./pages.css";
import Actionable from "../components/actionable";
import SoilLevel from "../components/soillevel";
import Info from "../components/info";
import Form from "../components/form";
const Dashboard = () => {
  return (
    <>
      <div className="flex bg-slate-700 p-3 base text-white">
        <h1 className="text-3xl">Viva</h1>
        <h1 className="text-md text-slate-300">demo</h1>
      </div>
      <div className="flex flex-wrap space-x-4 space-y-4 margin-2">
        <Info />
        <Actionable />
        <SoilLevel />
        <Form />
      </div>
    </>
  );
};

export default Dashboard;
