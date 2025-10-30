import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 px-2 mt-2 md:text-2xl bg-[#BBB4A4] rounded-2xl">
      <Link to="/" className="logo">
        <img className="h-10 w-15 rounded-full" src="./vx.png" alt="" />
      </Link>
      <div className="menu flex list-none gap-5 text-xl ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </div>
      <Link to="contact">
        <Button
          label="Contact us"
          classname="bg-[#E3E65A] text-black text-xl rounded-xl px-3 py-1 hover:bg-blue-600 hover:text-white transition-colors ease-in-out duration-300"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
