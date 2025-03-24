import React, { useState, useCallback } from "react";
import Layout from "./components/Layout";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    return setCount(count + 1);
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>update Count</button>
      <Layout onClick={handleClick} />
    </div>
  );
};

export default App;

// usememo example

// import React, { useMemo, useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(1);

//   const expensiveCalculation = (num) => {
//     console.log("Running slow function...");
//     for (let i = 0; i < 2000000000; i++) return num ** 6;
//   };

//   const computedValue = useMemo(() => expensiveCalculation(count), [count]);

//   return (
//     <div className="p-4">
//       <p>Computed Value: {computedValue}</p>
//       <button
//         onClick={() => setCount(count + 1)}
//         className="px-4 py-2 bg-red-500 text-white rounded-md mt-2"
//       >
//         Increment Count ({count})
//       </button>
//     </div>
//   );
// };

// export default App;
