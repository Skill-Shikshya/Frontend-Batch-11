import React from "react";
import Home from "../../components/home/Home";
// parent component
const LandingPage = () => {
  let name = "john";
  return (
    <div className="text-3xl text-red-500 ">
      <Home myName={name} />
    </div>
  );
};

export default LandingPage;
