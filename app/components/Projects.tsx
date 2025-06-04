'use client'
import { useState } from 'react'
import Image from 'next/image'
import yc from "@/app/assets/projects/ycdir.jpg";
import gamming from "@/app/assets/projects/gamming.jpg";
import brainwave from "@/app/assets/projects/brainwave.jpg";

import ycIcon from '@/app/assets/projects/ycdir.jpg'
import gammingIcon from '@/app/assets/projects/gamming.jpg'
import brainwaveIcon from '@/app/assets/projects/brainwave.jpg'

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Yc Directory',
      image : yc,
      icon: ycIcon, // يفضل مسار الصورة كـ string أو استيرادها صحيحاً
      link: 'https://yc-directory.vercel.app/',
      description:
        'This is a project that allows you to create your own directory of YC startups. You can add, edit, and delete startups, as well as search for them by name or category.',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'JavaScript' , "Sanity"],
    },
    {
      id: 2,
      name: 'Brainwave Landing Page',
      icon: brainwaveIcon,
      image: brainwave,
      link: 'https://brainwavekhaled.vercel.app/',
      description:
        'This is a landing page for a brainwave project. It includes a hero section, features section, and a contact form.',
      technologies: ['React', 'TailwindCSS', 'TypeScript'],
    },
    {
      id: 3,
      name: 'Gamming Website',
      icon: gammingIcon,
      image: gamming,
      link: 'https://gamming-web.vercel.app/',
      description:
        'This is a gaming website that allows you to create your own directory of games. You can add, edit, and delete games, as well as search for them by name or category.',
      technologies: ['React', 'Next.js', 'CSS Modules'],
    },
  ])

  return (
    <section id='projects' className='flex flex-col relative max-container !pt-4'>
      <h3 className='subhead-text' data-aos='fade-up' data-aos-duration='1000'>
        My Projects
      </h3>

      <div className='text-slate-500 mt-5 flex flex-col gap-5' data-aos='fade-up' data-aos-duration='1000'>
        <p>
          I've collaborated with diverse companies and teams, continuously sharpening my skills and gaining hands-on
          experience across various projects. Working alongside talented professionals has allowed me to grow both
          technically and creatively, contributing to high-quality solutions and impactful digital products.
        </p>
      </div>

      <div className='w-full p-3 mt-12 grid md:grid-cols-2 lg:grid-cols-1 gap-6'>
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            data-aos='fade-up'
            data-aos-duration='1000'
            className={`w-full rounded-[20px] cursor-pointer backdrop-blur bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] grid grid-cols-1 items-start lg:grid-cols-12 xl:flex xl:items-stretch gap-5 xl:gap-10 p-6 duration-700 opacity-100 translate-y-0 hover:scale-[1.02] transition-transform`}
          >
            <Image
              alt={project.name}
              loading='lazy'
              width={420}
              height={300}
              decoding='async'
              className='rounded-[10px] w-[420px] lg:col-span-5 flex-shrink-0 object-cover'
              src={project.image}
              style={{ color: 'transparent' }}
            />
            <div className='flex flex-col flex-1 gap-4 text-white lg:col-span-7'>
              <h2 className='text-3xl sm:text-4xl xl:text-5xl font-bold'>{project.name}</h2>
              <p className='text-base text-white/70'>{project.description}</p>
              <div className='flex gap-3 md:gap-4 flex-wrap'>
                {project.technologies.map((tech, i) => (
                  <p
                    key={i}
                    className='uppercase whitespace-nowrap bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] px-2 py-[6px] md:py-[6px] md:px-3 rounded-[4px] font-medium md:font-bold text-base lg:text-lg'
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
