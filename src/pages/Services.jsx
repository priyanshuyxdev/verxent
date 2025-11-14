import React from "react";
import CurvedLoop from "../components/reactBits/CurvedLoop";

const Services = () => {
  return (
    <div id="services" className="w-full mt-15 h-full">
      <CurvedLoop marqueeText=" Our Services  + " />

      <div className="flex flex-col gap-10">
        {/* Intro Text */}
        <div className="text-center w-11/12 md:w-2/3 mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl opacity-80 leading-relaxed">
            From design to development to marketing, we turn ideas into digital
            realities. Our approach blends strategy, aesthetics, and technology
            to deliver lasting impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-7 grid-rows-auto gap-4 md:h-[80vh] w-11/12 md:w-2/3 mx-auto text-[#2F2F2D]">
          
          {/* Box 1 – Creative Intro */}
          <div className="col-span-1 md:col-span-2 md:row-span-6 rounded-2xl bg-[#F8F5EB] shadow-md flex flex-col justify-between p-6 gap-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center uppercase">
              Crafting the Digital Future
            </h2>
            <img className="w-28 md:w-32 lg:w-40 mx-auto" src="/vx.png" alt="" />
            <p className="text-sm md:text-base lg:text-lg opacity-80 leading-relaxed text-center md:text-left">
              We design with purpose — blending aesthetics and strategy to shape
              digital experiences that connect and endure.
            </p>
          </div>

          {/* Box 2 – Design */}
          <div className="col-span-1 md:col-span-2 md:row-span-3 md:col-start-3 rounded-2xl bg-[#FAF7EF] shadow-md flex flex-col items-center p-6 gap-5 justify-center">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase">
              Design
            </h3>
            <ul className="text-base md:text-lg lg:text-xl opacity-90 space-y-1 text-center">
              <li>UI/UX Design</li>
              <li>Brand Identity</li>
              <li>Motion & 3D Design</li>
            </ul>
          </div>

          {/* Box 3 – Video / Visual */}
          <div className="col-span-1 md:col-span-3 md:row-span-3 md:col-start-5 rounded-2xl shadow-md overflow-hidden flex h-48 md:h-auto">
            <video
              className="rounded-2xl h-full w-full object-cover"
              src="/showreel1cut.mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>

          {/* Box 4 – Marketing */}
          <div className="col-span-1 md:col-span-2 md:row-span-3 md:col-start-6 md:row-start-4 rounded-2xl bg-[#FAF7EF] shadow-md flex flex-col items-center p-6 gap-5 justify-center">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase">
              Marketing
            </h3>
            <ul className="text-base md:text-lg lg:text-xl opacity-90 space-y-1 text-center">
              <li>Campaign Strategy</li>
              <li>Content Marketing</li>
              <li>Automation & Analytics</li>
            </ul>
          </div>

          {/* Box 5 – Development */}
          <div className="col-span-1 md:col-span-3 md:row-span-3 md:col-start-3 md:row-start-4 rounded-2xl bg-[#F8F5EB] shadow-md flex flex-col items-center p-6 gap-5 justify-center">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase">
              Development
            </h3>
            <ul className="text-base md:text-lg lg:text-xl opacity-90 space-y-1 text-center">
              <li>Web Development</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
