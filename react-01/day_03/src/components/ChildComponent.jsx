import React from "react";

const ChildComponent = ({ name, age, isMarried }) => {
  return (
    <>
      {isMarried ? (
        <>
          <div>
            <h2>Name is {name}</h2>
            <h2>Age is {age}</h2>
            <h2>He is married</h2>
          </div>
        </>
      ) : (
        "He is single"
      )}
    </>
  );
};

export default ChildComponent;
