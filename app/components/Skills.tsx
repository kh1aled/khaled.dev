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
import typescript from "../assets/icons/typescript.svg";
import gsap from "../assets/icons/gsap.png";
import framer_motion from "../assets/icons/framer-motion.webp";
import mongodb from '../assets/icons/mongodb.svg'

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

      const [frontend, setFrontend] = useState([
        { id: 1, name: 'HTML', icon: html },
        { id: 2, name: 'CSS', icon: css },
        { id: 5, name: 'JavaScript', icon: js },
        { id: 5, name: 'TypeScript', icon: typescript },
        { id: 3, name: 'Sass', icon: sass },
        { id: 4, name: 'tailwind', icon: tailwind },
        { id: 6, name: 'React', icon: react },
        { id: 8, name: 'Next.js', icon: next },
        { id: 7, name: 'Redux', icon: redux },
        { id: 8, name: 'GSAP', icon: gsap },
        { id: 9, name: 'Framer Motion', icon: framer_motion },
        { id: 10, name: 'Bootstrap', icon: next },
      ])

      const [backend, setBackend] = useState([
        { id: 1, name: 'Php', icon: php },
        { id: 3, name: 'Laravel', icon: laravel },
      ])

      const [database, setDatabase] = useState([
        { id: 1, name: 'MySQL', icon: mySql },
        { id: 3, name: 'MongoDB', icon: mongodb },
      ])
  return (
    <section className='py-10 flex flex-col'>
      <h3 className='subhead-text'>My Stack</h3>

      <div className='text-slate-500  mt-12'>


        {/** Frontend */}
        <div className='w-full grid sm:grid-cols-12 mt-12'>
          <div className='text-start sm:col-span-5'>
            <h3 className='text-[var(--text-body)] text-4xl uppercase'>Frontend</h3>
          </div>
          <div className='sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap'>
            {frontend.map((skill) => (
              <div key={skill?.id} className='flex gap-4 items-center leading-none'>
                <div>
                  <Image width={40} height={40} src={skill?.icon} alt={skill?.name} className='object-contain' />
                </div>
                <span className='text-2xl capitalize text-white'>{skill.name}</span>
                {/* <div className='btn-back rounded-xl'></div>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <Image src={skill?.icon} alt={skill?.name} className='w-1/2 h-1/2 object-contain' />
                </div> */}
              </div>
            ))}
          </div>
        </div>

        {/** Backend */}
        <div className='w-full grid sm:grid-cols-12 mt-16'>
          <div className='text-start sm:col-span-5'>
            <h3 className='text-[var(--text-body)] text-4xl uppercase'>backend</h3>
          </div>
          <div className='sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap'>
            {backend.map((skill) => (
              <div key={skill?.id} className='flex gap-4 items-center leading-none'>
                <div>
                  <Image width={40} height={40} src={skill?.icon} alt={skill?.name} className='object-contain' />
                </div>
                <span className='text-2xl capitalize text-white'>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/** Database */}
        <div className='w-full grid sm:grid-cols-12 mt-16'>
          <div className='text-start sm:col-span-5'>
            <h3 className='text-[var(--text-body)] text-4xl uppercase'>database</h3>
          </div>
          <div className='sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap'>
            {database.map((skill) => (
              <div key={skill?.id} className='flex gap-4 items-center leading-none'>
                <div>
                  <Image width={40} height={40} src={skill?.icon} alt={skill?.name} className='object-contain' />
                </div>
                <span className='text-2xl capitalize text-white'>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills


{/* <div class="slide-up flex gap-3.5 items-center leading-none" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">
  <div>
  <img alt="GSAP" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="max-h-10" style="color:transparent" srcset="/_next/image?url=%2Flogo%2Fgsap.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Flogo%2Fgsap.png&amp;w=96&amp;q=75 2x" src="/_next/image?url=%2Flogo%2Fgsap.png&amp;w=96&amp;q=75">
  </div>
  <span class="text-2xl capitalize">GSAP</span>
</div> */}

//                className='block-container w-20 h-20 rounded-xl flex items-center justify-center text-white font-semibold flex-col'
