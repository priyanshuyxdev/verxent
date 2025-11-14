import React, { useState } from "react";
import CurvedLoop from "../components/reactBits/CurvedLoop";
import CircularText from "../components/reactBits/CircularText";
import { Clipboard, Check } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("verxentstudio@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div id="contact" className="min-h-screen relative flex flex-col">
      <CurvedLoop marqueeText="Let's Connect +  " />

      {/* MAIN CONTENT */}
      <div className="flex flex-col items-center  flex-1 pt-16 px-6 text-center gap-10">
        
        {/* EMAIL SECTION */}
        <h1 className="text-3xl md:text-7xl font-bold flex items-center gap-3 break-all">
          verxentstudio@gmail.com

          {/* ONLY CLICKING THIS SPAN COPIES */}
          <span
            onClick={copyEmail}
            className="cursor-pointer hover:scale-110 transition-transform"
          >
            {copied ? <Check size={32} /> : <Clipboard size={32} />}
          </span>
        </h1>

        {/* SOCIAL LINKS */}
        <div className="flex gap-8 text-xl md:text-2xl opacity-80">
          <a href="https://www.instagram.com/verxentstudio/" target="_blank" className="hover:opacity-100 transition-opacity border rounded-2xl py-2 px-4">
            Instagram
          </a>

          <a href="https://www.linkedin.com/in/verxent-studio/" target="_blank" className="hover:opacity-100 transition-opacity border rounded-2xl py-2 px-4">
            LinkedIn
          </a>
        </div>
      </div>

      {/* CIRCULAR BADGE */}
      <div className="absolute bottom-6 left-6 md:left-10">
        <CircularText
          text="GET*IN*TOUCH*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </div>
    </div>
  );
};

export default Contact;
