import React from 'react'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='relative max-container'>
      <h1 className='head-text' data-aos='fade-up' data-aos-duration='1000'>
        Hello I&apos;m <span className='blue-gradient_text font-semibold drop-shadow'>Khaled</span>
      </h1>
      <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-500' data-aos='fade-up' data-aos-duration='1000'>
          A passionate Full-Stack Web Developer with over 2 years of experience in designing and developing dynamic,
          responsive, and user-friendly web applications. Skilled in both front-end and back-end technologies, with a
          strong focus on optimizing performance, enhancing UI/UX, and delivering high-quality, scalable solutions.
          Adept at collaborating with cross-functional teams and turning complex requirements into functional and
          elegant applications using modern frameworks and best practices.
        </p>
      </div>

      <Skills />

      <Experience />

      <Education />

      <section className='cta' data-aos='fade-up' data-aos-duration='1000'>
        <h3 className='cta-text'>
          Download my cv? <br />
        </h3>

        <Link
          href='https://drive.google.com/uc?export=download&id=17ZSgnOLOfFDhAZqUR6iG9rlgxF8rPUih'
          className='btn'
          download='frontend.pdf'
        >
          Download My CV
        </Link>
      </section>
    </div>
  )
}

export default About
