import React from "react";
import CurvedLoop from "../components/reactBits/CurvedLoop";

const About = () => {
  const team = [
    {
      name: "Priyanshu Y",
      role: "Web Developer",
      image: "/priyanshu.png",
    },
    {
      name: "Ayushmaan S",
      role: "Graphic Designer",
      image: "/ayush.jpg",
    },
    {
      name: "Mayank K",
      role: "3D Artist",
      image: "/mayank_cleanup.jpg",
    },
    {
      name: "Ritik R",
      role: "Marketing Strategist",
      image: "/ritik.jpg",
    },
  ];

  return (
    <div id="about" className="w-full mt-15 h-full text-[#2F2F2D]">
      <CurvedLoop marqueeText=" About Us + " />

      {/* Section 1 – Agency Description */}
      <section className="w-2/3 mx-auto text-center flex flex-col items-center gap-6 py-20">
        <h1 className="text-6xl font-bold uppercase tracking-tight">
          We Create, Design & Innovate
        </h1>
        <p className="text-2xl opacity-80 leading-relaxed max-w-3xl">
          Vercent Studio is a creative digital agency that turns ideas into meaningful digital
          experiences. We bring together design, technology, and strategy to help brands connect
          deeply and grow confidently in the digital era.
        </p>
      </section>

      {/* Section 2 – Our Goal */}
      <section className="w-2/3 mx-auto flex flex-col items-center text-center py-10">
        <h2 className="text-5xl font-bold uppercase mb-6">Our Goal</h2>
        <p className="text-xl opacity-80 leading-relaxed max-w-2xl">
          Our goal is to create timeless digital experiences that blend purpose and creativity.
          We focus on building brands that not only look great — but feel meaningful and work
          flawlessly across every platform.
        </p>
      </section>

      {/* Section 3 – Team Grid */}
      <section className="w-2/3 mx-auto py-20">
        <h2 className="text-5xl font-bold uppercase text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-64 h-64 overflow-hidden rounded-2xl shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-lg opacity-70">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
