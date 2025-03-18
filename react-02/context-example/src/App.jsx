import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { CountContext } from "./context/countContext";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("roshan");
  const [username, setUserName] = useState("roshani");

  const handleIncrement = () => {
    return setCount(count + 1);
  };
  const handleDecrement = () => {
    return setCount(count - 1);
  };

  const contextValue = {
    count,
    user,
    username,
    handleIncrement,
    handleDecrement,
  };

  return (
    <>
      <CountContext.Provider value={contextValue}>
        <div className="">
          {/* <p>updated inside app{count}</p> */}
          <Home />
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </CountContext.Provider>
    </>
  );
}

export default App;
