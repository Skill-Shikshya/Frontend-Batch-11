// import { useState } from "react";

import "./App.css";
import FormComponent from "./components/FormComponent";

function App() {
  // const [count, setCount] = useState(0);

  const handleClick = () => alert("Clicked");

  const handleChange = (e) => {
    return console.log(e.target.value);
  };

  return (
    <>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

        <button onClick={handleClick}>Click me</button>
        <input
          type="text"
          onChange={handleChange}
          className="w-[500px] h-[30px] bg-sky-100 text-black"
        />
        <FormComponent />
      </div>
    </>
  );
}

export default App;
