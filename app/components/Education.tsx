'use client'
import { useState } from 'react'
import teba from '../assets/icons/teba.png'
import Image from 'next/image'

const Education = () => {


  return (
    <section className='py-10 flex flex-col'>
      <h3 className='subhead-text'>Education</h3>

      <div className='text-slate-500 mt-5 flex flex-col gap-5'>
        <p>
          I hold a Bachelor’s degree in Computer Science from Cairo University, where I built a strong foundation in
          both theoretical and practical areas of software development.
        </p>
      </div>

      <div className='mt-12 flex w-full gap-4 pl-3'>
        {/* Line */}
        <div className='w-2 h-80 bg-gradient-to-b from-white to-transparent rounded-full'></div>

        {/* Education Block */}
        <div className='grid grid-cols-12 gap-4 w-full relative'>
          {/* Dot (optional if you want to match experience_circle style) */}
          <div className='experience_circle'>
            <div className='experience_circle_inner'></div>
          </div>

          {/*  Image or Icon */}
          <div className='col-span-1 rounded-xl h-16 w-16 flex items-center justify-center bg-white'>
            <Image
              src={teba}
              alt={'Teba University'}
              loading='lazy'
              width='40'
              height='40'
              decoding='async'
              className='rounded-xl'
            />
          </div>

          {/* Content */}
          <div className='col-span-11 flex flex-col gap-2 relative'>
            <h3 className='text-2xl font-bold'>B.Sc. in Computer Science</h3>
            <h5 className='text-lg font-semibold'>Cairo University</h5>
            <p className='text-sm text-[var(--text-body)]'>2019 – 2023</p>

            <ul className='flex flex-col gap-2 ps-[1rem] mt-3 list-disc'>
              <li>Web Development</li>
              <li>Data Structures</li>
              <li>Algorithms</li>
              <li>Database Systems</li>
              <li>OOP</li>
              <li>System Analysis</li>
              <li>assembly language</li>
              <li>file organisation</li>
            </ul>
          </div>

          {/**Cv */}
          
        </div>
      </div>
    </section>
  )
}

export default Education
