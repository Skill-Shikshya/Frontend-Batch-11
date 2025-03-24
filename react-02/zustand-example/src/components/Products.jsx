import React from "react";
import ProductList from "./ProductList";
import { useCountStore } from "../store/store";
const Products = ({ Products }) => {
  const { count, inc, dec } = useCountStore();
  return (
    <div>
      <p>{count}</p>
      <button onClick={inc}>Increment Count</button>
      <button onClick={dec}>Decrement Count</button>
      <ProductList listData={Products} />
    </div>
  );
};

export default Products;
