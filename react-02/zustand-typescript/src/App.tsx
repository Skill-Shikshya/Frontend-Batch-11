import { useEffect } from "react";
import "./App.css";
// import axios from "axios";
import { useProductStore } from "./store/store";
function App() {
  const { fetchProducts, products } = useProductStore();

  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {products.length > 0 &&
            products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 shadow-lg">
                <img
                  src={product?.image}
                  alt={product?.title}
                  className="h-40 w-full object-contain"
                />
                <h3 className="text-lg font-semibold mt-2">{product?.title}</h3>
                <p className="text-gray-500">{product?.category}</p>
                <p className="text-blue-600 font-bold">${product?.price}</p>
                <p>{product?.rating?.rate}</p>
                <p>Rating Count {product?.rating?.count}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
