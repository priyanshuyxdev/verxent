import React from "react";
import CurvedLoop from "../components/reactBits/CurvedLoop";

const Services = () => {
  return (
    <div className="w-full mt-15 h-full">
      <CurvedLoop marqueeText=" Our Services  + " />

      <div className="flex flex-col gap-10">
        {/* Intro Text */}
        <div id="services" className="text-center max-w-2/3 mx-auto">
          <p className="text-2xl opacity-80 leading-relaxed">
           From design to development to marketing, we turn ideas into digital realities. Our approach blends strategy, aesthetics, and technology to deliver lasting impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-7 grid-rows-7 gap-4 h-[80vh] w-2/3 mx-auto text-[#2F2F2D]">
          {/* Box 1 – Creative Intro */}
          <div className="col-span-2 row-span-6 rounded-2xl bg-[#F8F5EB] shadow-md flex flex-col justify-between p-6">
            <h2 className="text-3xl font-bold mb-4 text-center uppercase">Crafting the Digital Future</h2>
            <img src="/vx.png" alt="" />
            <p className="text-lg opacity-80 leading-relaxed">
              We design with purpose — blending aesthetics and strategy to shape digital experiences that connect and endure.
            </p>
          </div>

          {/* Box 2 – Design */}
          <div className="col-span-2 row-span-3 col-start-3 rounded-2xl bg-[#FAF7EF] shadow-md flex flex-col items-center  p-6 gap-5 justify-center">
            <h3 className="text-5xl font-bold mb-3 uppercase ">Design</h3>
            <ul className="  text-xl opacity-90 space-y-1">
              <li>UI/UX Design</li>
              <li>Brand Identity</li>
              <li>Motion & 3D Design</li>
            </ul>
          </div>

          {/* Box 3 – Video / Visual */}
          <div className="col-span-3 row-span-3 col-start-5 rounded-2xl shadow-md overflow-hidden flex">
            <video
              className="rounded-2xl h-full w-full object-cover"
              src="/showreeldemo.mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>

          {/* Box 4 – Marketing */}
          <div className="col-span-2 row-span-3 col-start-6 row-start-4 rounded-2xl bg-[#FAF7EF] shadow-md flex flex-col items-center  p-6 gap-5 justify-center">
            <h3 className="text-5xl font-bold mb-3 uppercase ">Marketing</h3>
            <ul className="text-xl opacity-90 space-y-1">
              <li>Campaign Strategy</li>
              <li>Content Marketing</li>
              <li>Automation & Analytics</li>
            </ul>
          </div>

          {/* Box 5 – Development */}
          <div className="col-span-3 row-span-3 col-start-3 row-start-4 rounded-2xl bg-[#F8F5EB] shadow-md flex flex-col items-center  p-6 gap-5 justify-center">
            <h3 className="text-5xl font-bold mb-3 uppercase">Development</h3>
            <ul className="text-xl opacity-90 space-y-1">
              <li>Web Development</li>
              <li>Search Engine Optimization (SEO)</li>
              {/* <li>CMS Integration</li> */}
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
