import { useEffect } from "react";
import "./App.css";
// import axios from "axios";
import { useProductStore } from "./store/store";
function App() {
  const { fetchProducts, products } = useProductStore();

  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, []);

  // const { count, inc, dec } = useCountStore();

  // const rollNumber: number[] = [1, 2, 4];
  // const users: string[] = ["a", "b", "c"];
  // console.log({ users, rollNumber });

  // const age: number = 20;
  // console.log(age);

  // const isLoggedIn: boolean = true;

  // console.log(isLoggedIn);
  // interface Person {
  //   name: string;
  //   age: number;
  // }

  // type fruits = {
  //   name: "Apple" | "Orange" | 1;
  //   age: number;
  // };

  // const person: fruits = {
  //   name: 1,
  //   age: 78,
  // };
  // console.log(person);

  return (
    <>
      <div className="">
        {/* <p>{count}</p>
        <button
          onClick={inc}
          className="cursor-pointer border rounded bg-sky-400 text-white p-1"
        >
          Add Count
        </button>
        <button
          onClick={dec}
          className="cursor-pointer border rounded bg-sky-400 text-white p-1"
        >
          Decrement Count
        </button> */}
      </div>
    </>
  );
}

export default App;
