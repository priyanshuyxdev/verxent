import React from "react";
import Navbar from "../components/Navbar";
import Video from "../components/Video";

const Home = () => {
  return (
    <div id="home" className="h-full w-full pt-5">
      
      {/* MAIN HEADING */}
      <h1 className="font-bold text-[12vw] md:text-[10vw] text-center leading-none mt-20 md:mt-10">
        VERXENT STUDIO
      </h1>

      {/* MAIN FLEX AREA */}
      <div className="bottom flex flex-col lg:flex-row w-full gap-10 mt-10 px-6 md:px-12">
        
        {/* LEFT SIDE */}
        <div className="left w-full lg:w-1/2">
          <Video />
        </div>

        {/* RIGHT SIDE */}
        <div className="right w-full lg:w-1/2 flex flex-col justify-between items-start lg:items-end text-left gap-6">

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              Building experiences that move brands forward.
            </h1>
          </div>

          <div className="space-y-2 text-base sm:text-lg opacity-80">
            <p>Building bold brands through purposeful, timeless design.</p>
            <p>Every pixel crafted with intention and meaning.</p>
            <p>Your vision, transformed into a beautiful digital reality.</p>
          </div>
          
        </div>
      </div>

    </div>
  );
};

export default Home;
