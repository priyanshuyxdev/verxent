import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full px-6 z-100">
      <nav className="flex justify-between items-center py-2 px-2 mt-2 md:text-2xl bg-[#BBB4A4] rounded-2xl">
      <a href="#home" className="logo">
        <img className="h-10 w-15 rounded-full" src="./vx.png" alt="" />
      </a>
      
  <div className="menu flex list-none gap-5 text-xl">
    <li><a href="#home">Home</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#work">Work</a></li>
    <li><a href="#about">About</a></li>
  </div>
      <a href="#contact">
        <Button
          label="Contact us"
          classname="bg-[#E3E65A] text-black text-xl rounded-xl px-3 py-1 hover:bg-blue-600 hover:text-white transition-colors ease-in-out duration-300"
        />
      </a>
    </nav>
    </div>
  );
};

export default Navbar;
