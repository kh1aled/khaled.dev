'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Island } from './models/Island'
import Loader from './components/Loader'
import Bird from './models/Bird'
import Plane from './models/Plane'
import HomeInfo from './components/HomeInfo'
import { usePathname } from 'next/navigation'
import SplachScreen from "./components/SplachScreen";
import About from './components/About'
import Projects from './components/Projects'
import Sky from './models/Sky'
import Contact from './components/Contact'
import Fotter from './components/Fotter'
import Home from './components/Home'


const Page = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)


  const [islandScale, setIslandScale] = useState([1, 1, 1])
  const [islandPostion, setIslandPostion] = useState([0, -6.5, -43])
  const [islandRotation, setIslandRotation] = useState([0.1, 4.7, 0])

  const [planeScale, setPlaneScale] = useState([3, 3, 3])
  const [planePostion, setPlanePostion] = useState([0, -4, -4])

  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsloading] = useState(true);


  useEffect(() => {
    // تشغيل فقط في المتصفح
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        setIslandScale([0.9, 0.9, 0.9])
        setPlaneScale([1.5, 1.5, 1.5])
        setPlanePostion([0, -1.5, 0])
      } else {
        setIslandScale([1, 1, 1])
        setPlaneScale([3, 3, 3])
        setPlanePostion([0, -4, -4])
      }
    }
  }, [])



  // if (isLoading) {
  //   return <SplachScreen setIsloading={setIsloading} />
  // }

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
