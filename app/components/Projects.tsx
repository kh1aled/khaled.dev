"use client";
import { useState } from "react";
import arrow from "../assets/icons/arrow.svg";
import Image from "next/image";
import Link from "next/link";
import brainwave from "../assets/projects/brainwave-symbol.svg";
import ycDirectory from "../assets/projects/favicon.ico";
import gamming from "../assets/projects/gamming.svg";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Yc Directory",
      icon: ycDirectory,
      link: "https://yc-direcotry.vercel.app/",
      theme: "bg-yellow-800",
      description : "this is a project that allows you to create your own directory of YC startups. You can add, edit, and delete startups, as well as search for them by name or category.",
    },
    {
      id: 3,
      name: "Gamming Website",
      icon: gamming,
      link: "https://gamming-web.vercel.app/",
      theme: "bg-yellow-800",
      description : "this is a gamming website that allows you to create your own directory of games. You can add, edit, and delete games, as well as search for them by name or category.",
    },
    {
      id: 2,
      name: "Brainwave Landing Page",
      icon: brainwave,
      link: "https://brainwavekhaled.vercel.app/",
      theme: "bg-indigo-700",
      description : "this is a landing page for a brainwave project. It includes a hero section, features section, and a contact form.",
    },
  ]);
  return (
    <section>
      <div className="text-slate-500 grid grid-cols-1 md:grid-cols-2 gap-2 mt-12">
        {projects.map((project) => (
          <div key={project?.id} className="w-full lg:w-[400px] p-3">
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project?.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={project?.icon}
                  alt={project?.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-white font-bold">{project?.name}</h4>
              <p className="text-slate-500 text-sm mt-2">
                {project?.description}
              </p>
            </div>
            <div className="mt-5 flex items-center gap-2 font-poppins">
              <Link
                href={project?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600"
              >
                View Project
              </Link>
              <Image
                src={arrow}
                alt="arrow"
                width={12}
                height={12}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
