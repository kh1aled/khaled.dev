'use client'
import React, { useState } from 'react'
import html from "../assets/skills/html.png";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import redux from "../assets/icons/redux.svg";
import php from "../assets/icons/PHP.svg";
import next from "../assets/icons/nextjs.svg";
import mySql from "../assets/icons/MySQL.svg";
import tailwind from "../assets/icons/tailwindcss.svg";
import sass from "../assets/icons/sass.svg";
import laravel from "../assets/icons/Laravel.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import Image from 'next/image'
const Skills = () => {  
    const [skills, setSkills] = useState([
        { id: 1, name: "HTML", icon: html },
        { id: 2, name: "CSS", icon: css },
        { id: 3, name: "Sass", icon: sass },
        { id: 4, name: "tailwind", icon: tailwind },
        { id: 5, name: "JavaScript", icon: js },
        { id: 6, name: "React", icon: react },
        { id: 7, name: "Redux", icon: redux },
        { id: 8, name: "Next.js", icon: next },
        { id: 9, name: "Php", icon: php },
        { id: 10, name: "MySql", icon: mySql },
        { id: 11, name: "Laravel", icon: laravel },
        { id: 12, name: "GitHub", icon: github },
      ]);
  return (
    <section className='py-10 flex flex-col'>
      <h3 className='subhead-text'>My Skills</h3>

      <div className='text-slate-500 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1 sm:gap-2 md:gap-5 gap-y-4 mt-12'>
        {skills.map((skill) => (
          <div
            key={skill?.id}
            className='block-container w-20 h-20 rounded-xl flex items-center justify-center text-white font-semibold flex-col'
          >
            <div className='btn-back rounded-xl'></div>
            <div className='btn-front !bg-[var(--color-blue-900)] rounded-xl flex justify-center items-center'>
              <Image src={skill?.icon} alt={skill?.name} className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills