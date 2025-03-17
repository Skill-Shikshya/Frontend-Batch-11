import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-[90vw] mx-4 h-[80px] border rounded-2xl border-slate-700 bg-slate-300 z-50 ">
      <div className="flex items-center justify-around">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact Us</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
