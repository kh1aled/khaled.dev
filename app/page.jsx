'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Island } from './models/Island'
import Loader from './components/Loader'
import Sky from './models/Sky'
import Bird from './models/Bird'
import Plane from './models/Plane'
import HomeInfo from './components/HomeInfo'
import { usePathname } from 'next/navigation'
import SplachScreen from "./components/SplachScreen";

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
    const [isLoading , setIsloading] = useState(true);


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

  useEffect(()=>{

  } , [isLoading])

  if (isLoading) {
    return <SplachScreen setIsloading={setIsloading} />
  }
  
  return (
    
    <section className='w-full h-screen relative night_sky'>


      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas shadows className='w-full h-screen bg-transparent' camera={{ near: 0.5, far: 10000 }}>
        <Suspense fallback={<Loader />}>

          <ambientLight intensity={0.6} color="#223344" />

          <directionalLight
            position={[4, 1, 1]}
            intensity={0.4}
            color="#88aaff"
          />

          <pointLight
            position={[10, 5, 10]}
            intensity={0.5}
            distance={20}
            color="#336699"
          />

          <spotLight
            position={[0, 20, 10]}
            angle={0.25}
            penumbra={0.8}
            intensity={0.6}
            color="#88aaff"
            castShadow
          />

          <hemisphereLight
            skyColor="#112233"
            groundColor="#000000"
            intensity={0.3}
          />

          <Island
            position={islandPostion}
            rotation={islandRotation}
            scale={islandScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          {/* <Sky isRotating={isRotating} /> */}
          <Bird />
          <Plane isRotating={isRotating} position={planePostion} rotation={[0, 20.1, 0]} scale={planeScale} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Page
