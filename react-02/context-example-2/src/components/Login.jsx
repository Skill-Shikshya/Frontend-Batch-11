import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
const Login = () => {
  const { setUser } = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, email });
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="flex gap-5 ">
        <h2>Login Form</h2>
        <input
          required
          type="text"
          value={userName}
          name="Name"
          onChange={(e) => setUserName(e.target.value)}
          className="border h-[40px] w-[300px] rounded border-red-500"
        />
        <input
          required
          type="email"
          value={email}
          name="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border h-[40px] w-[300px] rounded border-red-500"
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
