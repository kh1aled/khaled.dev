'use client'
import newGen from '../assets/experiences/NewGen.jpeg'
import Image from 'next/image'
import { useState } from 'react'

const Experience = () => {
  const [experience, setExperience] = useState([
    {
      id: 1,
      company: 'New Generation Publishing and Distribution House',
      jobRole: 'Frontend Developer',
      history: ' May 2024- June 2024',
      country: 'Cairo, Egypt',
      icon: newGen,
      roles: [
        'Developed interactive UI components for the company’s educational platform, improving user engagement',
        'Refactored and optimized existing codebase, enhancing performance and reducing load times by 20',
        'Collaborated with designers to implement responsive layouts, ensuring seamless experience across devices',
        'Integrated API endpoints to dynamically render course content, enhancing the platform’s interactivity',
      ],
    },
  ])

  return (
    <section className='py-10 flex flex-col'>
      <h3 className='subhead-text'>My Experience</h3>

      <div className='text-slate-500 mt-5 flex flex-col gap-5'>
        <p>
          I've collaborated with diverse companies and teams, continuously sharpening my skills and gaining hands-on
          experience across various projects. Working alongside talented professionals has allowed me to grow both
          technically and creatively, contributing to high-quality solutions and impactful digital products.
        </p>
      </div>

      <div className='mt-12 flex w-full gap-4 pl-3'>
        {/**Line */}
        <div className='w-2 h-80 bg-gradient-to-b from-white to-transparent rounded-full'></div>

        {experience.map((exper, index) => (
          <div key={exper.id} className='grid grid-cols-12 gap-4 w-full relative'>
            <div className='experience_circle'>
              <div className='experience_circle_inner'></div>
            </div>

            <Image
              src={exper.icon}
              alt={exper.company}
              loading='lazy'
              width='70'
              height='70'
              decoding='async'
              className='col-span-1 rounded-xl'
            />

            <div className='col-span-11 flex flex-col gap-2 relative'>
              <h3 className='text-3xl font-bold capitalize'>{exper.jobRole}</h3>
              <h5 className='text-lg font-semibold'>{exper.company}</h5>
              <p className='text-sm text-[var(--text-body)]'>{exper.history}</p>

              <ul className='flex flex-col gap-4 ps-[1rem] mt-3 '>
                {exper.roles.map((role, roleIndex) => (
                  <li key={roleIndex} className='experience-list-item'>
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
