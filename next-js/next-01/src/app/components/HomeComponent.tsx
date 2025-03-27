"use client";
import React from "react";
import { useState } from "react";

const HomeComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
    </div>
  );
};

export default HomeComponent;
