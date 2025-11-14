import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full px-6 z-50">
      <nav className="flex justify-between items-center py-2 px-2 mt-2 md:text-2xl bg-[#BBB4A4] rounded-2xl">

        {/* Logo */}
        <a href="#home" className="logo">
          <img className="h-10 w-15 rounded-full" src="./vx.png" alt="" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex list-none gap-5 text-xl">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
        </div>

        {/* Desktop Button */}
        <a href="#contact" className="hidden md:block">
          <Button
            label="Contact us"
            classname="bg-[#E3E65A] text-black text-xl rounded-xl px-3 py-1 hover:bg-blue-600 hover:text-white transition-colors ease-in-out duration-300"
          />
        </a>

        {/* Hamburger */}
        <button 
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className="w-7 h-[3px] bg-black rounded"></span>
          <span className="w-7 h-[3px] bg-black rounded"></span>
          <span className="w-7 h-[3px] bg-black rounded"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#BBB4A4] rounded-xl mt-2 px-6 py-4 flex flex-col gap-4 text-lg">

          {/* These MUST NOT be inside a button or they won’t work */}
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#work" onClick={() => setOpen(false)}>Work</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          
          <a href="#contact" onClick={() => setOpen(false)}>
            <Button
              label="Contact us"
              classname="bg-[#E3E65A] text-black text-lg rounded-xl px-3 py-2 mt-2"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
