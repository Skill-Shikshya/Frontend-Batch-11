import React from "react";

const Layout = ({ onClick }) => {
  console.log("child rendered");
  return (
    <div>
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default Layout;
