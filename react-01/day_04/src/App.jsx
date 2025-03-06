import React from "react";

import "./App.css";
import ParentComponent from "./components/ParentComponent";
import Product from "./pages/Product";
// import Children from "./components/Children";

function App() {
  return (
    <>
      <Product />
      <ParentComponent />
    </>
  );
}

export default App;
