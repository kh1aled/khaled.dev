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

      <Home />

      <About />

      <Projects />


      <Contact />

      <Fotter />

    </section>
  )
}

export default Page
