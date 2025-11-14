import React from "react";
import CurvedLoop from "../components/reactBits/CurvedLoop";
import { Card } from "@mui/material";

const Work = () => {

   const projects = [
  {
    id: 1,
    name: "SplyteChug",
    desc: "A modern landing page concept built with smooth animations and bold visuals, designed for an AI productivity brand.",
    img: "/splytebg.png",
    link: "https://projectsplyte.vercel.app/",
  },
  {
    id: 2,
    name: "Pixology",
    desc: "A creative agency website with elegant layouts and motion effects, showcasing digital design and branding services.",
    img: "/pixologybg.png",
    link: "https://codewithsadee.github.io/pixology/#home",
  },
  {
    id: 3,
    name: "Zentry Gaming",
    desc: "A futuristic gaming portal concept featuring immersive visuals, 3D-inspired animations, and next-gen UI transitions.",
    img: "/zentrybg.png",
    link: "https://zentry-animated.vercel.app/",
  },
  {
    id: 4,
    name: "TechX ",
    desc: "Planning, tracking and delivering your team’s best work has never been easier. We make it easiest for you through the software.",
    img: "/techxbg.png",
    link: "https://codewithsadee.github.io/techx/",
  },
  {
    id: 5,
    name: "Gym Website Design",
    desc: "A bold and energetic fitness website template built with Tailwind, featuring hero animations and responsive sections.",
    img: "/gymbg.png",
    link: "https://v0-gym-website-design-sigma.vercel.app/",
  },
  {
    id: 6,
    name: "Layers Studio",
    desc: "A stylish web agency portfolio that blends minimalism and motion to showcase projects, services, and team profiles.",
    img: "/layersbg.png",
    link: "https://layersprojectpage.vercel.app/",
  },
];

  return (
    <div id="work" className=" h-full">
      <CurvedLoop marqueeText="Our Work + " />

      <section>
        <p className="text-2xl opacity-80 leading-relaxed text-center mx-auto max-w-full">
          We create digital experiences that blend design, technology, and
          storytelling. Here’s a look at some of the projects we’ve brought to
          life.
        </p>



       <section className="w-full px-6 py-6" id="projects">
      {/* <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2> */}

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col"
          >
            <img
              src={p.img}
              alt={p.name}
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
            <p className="text-gray-600 grow">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-center bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
            >
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>

      </section>
    </div>
  );
};

export default Work;
