"use client";
import { useState } from "react";
import html from "../assets/skills/html.png";
import arrow from "../assets/icons/arrow.svg";
import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: "project 1", icon: html, link : "/projects/1" , theme: "bg-red-800" },
    { id: 2, name: "project 1", icon: html, link : "/projects/2" , theme: "bg-yellow-800" },
    { id: 3, name: "project 1", icon: html, link : "/projects/3" , theme: "bg-green-800" },
  ]);
  return (
    <section>
      <div className="text-slate-500 grid grid-cols-1 md:grid-cols-2 gap-2 mt-12">
        {projects.map((project) => (
          <div
            key={project?.id}
            className="w-full lg:w-[400px] p-3"
          >
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
              <h4 className="text-white font-bold">Yc Directory</h4>
              <p className="text-slate-500 text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, cumque.
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
              <Image src={arrow} alt="arrow" width={12} height={12} className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
