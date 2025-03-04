import React from "react";

const ChildComponent = ({ user }) => {
  return (
    <>
      {/* <h2> Name is : {name} </h2>
      <h2>Roll Number is : {roll}</h2> */}
      <div className="">{JSON.stringify(user)}</div>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      <p>{user?.age}</p>
    </>
  );
};

export default ChildComponent;
