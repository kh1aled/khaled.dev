import React from 'react'
import Image from 'next/image'
import profile from '@/app/assets/images/blueprofile.png'
import TypewriterText from './TypewriterText'
const Home = () => {
    return (

        <section id='home' className='home'>
            <div className='home__container flex justify-center items-start flex-col gap-10'>
                <h1 className='home__title'>Welcome to My Portfolio 👋</h1>
                {/* <p className='home__description'><span className='text-[var(--text-body)]'>I'm</span> <span className='blue-gradient_text'>Khaled Hamdy</span> <br/>
                    a Software Engineer</p> */}

                <p className="home__description">
                    <span className="text-[var(--text-body)]">
                        I'm <TypewriterText text="Khaled Hamdy" />
                    </span>
                    <br />
                    <span className="text-white">a Software Engineer</span>
                </p>


                <a href='#about' className='home__link btn'>About Me</a>


            </div>
            <div className='home__background'>
                <Image src={profile} alt='dev khaled hamdy' className='home__bg_image' />
            </div>
        </section>
    )
}

export default Home