"use client";

import React, { useRef } from 'react'
import Image from 'next/image'
import profile from '@/app/assets/images/blueprofile.png'
import TypewriterText from './TypewriterText'
import gsap from 'gsap'
const Home = () => {
    const imgRef = useRef();



    const handleMouseMove = (e) => {
        const el = imgRef.current;
        const rect = el.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        // حساب الميلان (rotation) بناء على مكان الماوس
        const rotateX = (y - 0.5) * 20; // ميلان عمودي (±10 درجات)
        const rotateY = (x - 0.5) * 20; // ميلان أفقي (±10 درجات)

        gsap.to(el, {
            rotationX: -rotateX,  // نغير الإشارة عشان الميلان يكون منطقي (للأعلى يميل للأسفل والعكس)
            rotationY: rotateY,
            scale: 1.05,          // تكبير بسيط
            boxShadow: "0 20px 30px rgba(0,0,0,0.3)", // ظل ناعم
            transformPerspective: 500,
            transformOrigin: "center",
            duration: 0.3,
            ease: "power3.out",
            overwrite: "auto",
            borderRadius : 300
        });
    };

    const handleMouseLeave = () => {
        const el = imgRef.current;
        gsap.to(el, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.5,
            ease: "power3.out",
            overwrite: "auto",
        });
    };


    const handleClick = () => {
        const audio = new Audio('/audios/swoosh.mp3')
        audio.play();
      }

    return (

        <section id='home' className='home'>
            <div className='home__container flex justify-center items-start flex-col gap-10' data-aos="fade-right" >
                <h1 className='home__title'>Welcome to My Portfolio 👋</h1>

                <p className="home__description" >
                    <span className="name text-[var(--text-body)]">
                        I'm <TypewriterText text="Khaled Hamdy" />
                    </span>
                    <br />
                    <span className="text-white desc">a Software Engineer</span>
                </p>


                <a href='#about' className='home__link btn' onClick={handleClick}>About Me</a>


            </div>
            <div className='home__background' data-aos="fade-left">
                <Image
                ref={imgRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    src={profile} alt='dev khaled hamdy' className='home__bg_image' />
            </div>
        </section>
    )
}

export default Home