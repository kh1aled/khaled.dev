import React, { useState } from "react";
import html from "../assets/skills/html.png";
import Image from "next/image";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Link from "next/link";
import CTA from "../components/CTA";
const page = () => {
  return (
    <div className="relative max-container">
      <h1 className="head-text">
        Hello I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Khaled
        </span>
      </h1>
      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          A passionate Full-Stack Web Developer with over 2 years of experience
          in designing and developing dynamic, responsive, and user-friendly web
          applications. Skilled in both front-end and back-end technologies,
          with a strong focus on optimizing performance, enhancing UI/UX, and
          delivering high-quality, scalable solutions. Adept at collaborating
          with cross-functional teams and turning complex requirements into
          functional and elegant applications using modern frameworks and best
          practices.
        </p>
      </div>

      <Skills />

      <Experience />

      <CTA />
    </div>
  );
};

export default page;
