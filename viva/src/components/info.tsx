import ".././index.css";

const Info = () => {
  return (
    <div className="flex flex-col bg-slate-300 rounded-md p-3 w-3/5 h-128 drop-shadow-md text-wrap">
      <div className="text-md text-wrap lowercase ">
        <p>
          Hi, welcome to the extremely barebones demo of Viva. This demo has 2
          key features: ai-suggest & custom dashboards. Like many other
          agricultural dashboards, Viva will provide you with all the
          information of your system. However, what we're really excited about
          is AI-suggest. This will take all of the agricultural info and create
          1-2 lines of actionable information. If you're here, please fill out
          this form to suggest features for the dashboard, we want to learn from
          YOU!
        </p>
      </div>
    </div>
  );
};

export default Info;
