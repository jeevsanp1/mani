import ".././index.css";

const Form = () => {
  return (
    <div className="flex flex-col bg-slate-300 rounded-md p-3 w-96 h-80 drop-shadow-md text-wrap">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeWyjT6tHpowOQ47d3CStcMfryIfTI8lKBfPaoG0iUIQCBlbg/viewform?embedded=true"
        width="350"
        height="431"
      >
        Loading…
      </iframe>
    </div>
  );
};
export default Form;
