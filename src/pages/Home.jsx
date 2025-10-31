import React from "react";
import Navbar from "../components/Navbar";
import Video from "../components/Video";


const Home = () => {
  return (
    <div className="h-full w-full pt-5 ">
      <h1 className="font-bold text-[10vw] text-center ">VERXENT STUDIO</h1>

      <div className="bottom flex w-full gap-10 ">
        <div className="left w-1/2 ">
          <Video />
        </div>

        <div className="right w-1/2 flex flex-col justify-between items-end text-left">
        <div >
          <h1 className="text-6xl font-medium">Building experiences that move brands forward.</h1>
        </div>
          <div >
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
