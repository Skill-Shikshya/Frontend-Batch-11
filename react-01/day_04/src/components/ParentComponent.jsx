import React from "react";
// import ChildComponent from "./ChildComponent";
import Children from "./Children";

const ParentComponent = () => {
  //   const name = "Rahul";
  //   const RollNo = 45;

  const user = {
    name: "Roshan",
    age: 79,
    email: "roshan@gmail.com",
    college: "Orchid",
  };
  // console.log(user.name);

  const { college, name, ...rest } = user;
  console.log(college);
  console.log(name);
  console.log(rest);

  return (
    <div>
      {/* <ChildComponent user={user} /> */}
      <Children>
        <h2>Hello world</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </Children>
    </div>
  );
};

export default ParentComponent;
