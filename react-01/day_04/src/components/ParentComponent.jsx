import React from "react";
import ChildComponent from "./ChildComponent";
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
      <ChildComponent user={user} />
    </div>
  );
};

export default ParentComponent;
