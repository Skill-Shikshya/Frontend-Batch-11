import React, { useEffect, useState } from "react";

const App = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Name:${name} \n Email:${email}`);
  // };

  // console.log({ name, email });
  const [isInside, setIsInside] = useState(false);
  useEffect(() => {
    if (isInside) {
      alert("you are in");
    } else {
      alert("you are out");
    }
  }, [isInside]);
  return (
    <div className="flex items-center justify-center mt-[150px]">
      <div className="">
        <p>{isInside ? "you are inside room" : "you are outside"}</p>
        <button
          onClick={() => setIsInside(!isInside)}
          className="text-black rounded border p-2 bg-red-400"
        >
          Enter/Exit
        </button>
      </div>

      {/* <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
        <div className="">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-red-300 rounded h-[50px] w-[300px] "
          />
        </div>
        <div className="">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-red-300 rounded h-[50px] w-[300px]"
          />
        </div>
        <button type="submit" className="rounded border cursor-pointer ">
          Submit
        </button>
      </form> */}
    </div>
  );
};

export default App;

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleDecrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };
//   const handleIncrement = () => {
//     setCount(count + 1);
//     if (count === 5) {
//       setCount(count + 2);
//     }
//   };

//   return (
//     <>
//       <div className="">
//         <p>{count}</p>
//         <button onClick={handleIncrement}>Increment</button>
//         <button onClick={handleDecrement}>decrement</button>
//       </div>
//     </>
//   );
// }

// export default App;
