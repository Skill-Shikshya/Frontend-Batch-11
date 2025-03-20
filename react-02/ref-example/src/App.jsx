import { useEffect, useRef, useState } from "react";

export default function App() {
  const countRef = useRef(0);
  const inputRef = useRef(null);
  const colorRef = useRef(null);
  const [count, setCount] = useState(null);

  function Increment() {
    setCount(countRef.current++);
    // console.log("Count ref:", countRef.current);
  }
  const handleColorChange = () => {
    colorRef.current.style.backgroundColor = "red";
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <p>CountRef is: {count}</p>
      <button onClick={Increment}>Increment value</button>
      <button onClick={handleColorChange}>color changer</button>
      <button ref={colorRef}>Triggered button</button>
    </div>
  );
}

// import { useState, useEffect, useRef } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   const refValue = useRef(0);

//   const handleCount = () => {
//     setCount(count + 1);
//     refValue.current = refValue.current + 1;
//     console.log(refValue.current);
//   };

//   useEffect(() => {
//     console.log(`ma feri render hudai  xu`);
//   });

//   return (
//     <>
//       <div className="">
//         <button onClick={handleCount}>Increment count</button>
//         <p>{count}</p>
//       </div>
//     </>
//   );
// }

// export default App;
