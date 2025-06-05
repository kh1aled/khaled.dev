'use client'
import React, { useEffect, useState } from 'react'
import SplachScreen from "./components/SplachScreen";
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Fotter from './components/Fotter'
import Home from './components/Home'
import 'aos/dist/aos.css';
import Aos from 'aos';
import Bird from './models/Bird';
import { Canvas } from '@react-three/fiber';


const Page = () => {

  const [isLoading, setIsloading] = useState(true);


  useEffect(() => {

    Aos.init({
      duration: 1000, // مدة الحركة بالميلي ثانية
      once: true,     // اجعل الحركة تظهر مرة واحدة فقط
    });

  }, [])


  useEffect(() => {
    let timer = setTimeout(() => {
      setIsloading(false);
    }, 1000); // 2000 milliseconds = 2 seconds
    return () => clearTimeout(timer);
  }, []);



  if (isLoading) {
    return <SplachScreen setIsloading={setIsloading} />
  }

  return (

    <section className='w-full h-screen relative mt-4'>

      <div className="fixed top-0 right-0 w-full h-full pointer-events-none -z-50">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight />
          <Bird />
        </Canvas>
      </div>

      <Home />

      <About />

      <Projects />


      <Contact />

      <Fotter />

    </section>
  )
}

export default Page
