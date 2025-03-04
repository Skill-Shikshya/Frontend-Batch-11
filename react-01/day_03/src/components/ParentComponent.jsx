import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const name = "Raju";
  const age = 20;

  return (
    <div>
      <ChildComponent name={name} age={age} isMarried={false} />
    </div>
  );
};

export default ParentComponent;
