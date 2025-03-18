import React, { useContext } from "react";
import { CountContext } from "../context/countContext";

const GrandChild = () => {
  const { count, user } = useContext(CountContext);

  return (
    <div>
      Count Updated {count} inside Grandchild{" "}
      <span>grand Child name is {user}</span>
    </div>
  );
};

export default GrandChild;
