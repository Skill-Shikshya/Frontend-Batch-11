import React from "react";
import GrandChild from "./GrandChild";
import { useContext } from "react";
import { CountContext } from "../context/countContext";

const Home = () => {
  const { username } = useContext(CountContext);

  return (
    <>
      <p>Home User is {username} </p>
      <GrandChild />
    </>
  );
};

export default Home;
