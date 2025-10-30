import React from "react";
import CurvedLoop from "../components/reactBits/CurvedLoop";

const Services = () => {
  return (
    <div className="w-full mt-15">
      <CurvedLoop marqueeText=" Our Services  + " />

      <section className="w-full flex flex-col gap-20 justify-between px-60  ">
        <div className="text-center max-w-full mx-auto">
          {/* <h1 className="text-7xl font-bold mb-6">Our Services</h1> */}
          <p className="text-2xl opacity-80 leading-relaxed">
            We blend design, technology, and strategy to build digital
            experiences that make brands unforgettable. Every project is an
            opportunity to craft something meaningful — simple, bold, and
            timeless.
          </p>
        </div>
        <div className=" flex   gap-4  ">
          <h1 className="text-6xl font-bold w-1/2">Design</h1>
          <div className="w-1/2 ">
            <ul className="space-y-2 text-2xl opacity-80">
              <li>Web Design</li>
              <li>Brand Identity</li>
              <li>3D Design</li>
              <li>Motion Graphics</li>
            </ul>
          </div>
        </div>

        <div className=" flex   gap-4  ">
          <h1 className="text-6xl font-bold w-1/2">Development</h1>
          <div className="w-1/2 ">
            <ul className="space-y-2 text-2xl opacity-80">
              <li>Web Development</li>
              <li>E-Commerce Solutions</li>
              <li>Portfolio Websites</li>
            </ul>
          </div>
        </div>
        <div className=" flex gap-4  ">
          <h1 className="text-6xl font-bold w-1/2">Marketing</h1>
          <div className="w-1/2 ">
            <ul className="space-y-2 text-2xl opacity-80">
              <li>Digital Marketing</li>
              <li>Ad Campaigns</li>
              <li>Automation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
