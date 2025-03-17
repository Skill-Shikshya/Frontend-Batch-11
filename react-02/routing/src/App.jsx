import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className=" ">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
