"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Island } from "./models/Island";
import Loader from "./components/Loader";
import Sky from "./models/Sky";
import Bird from "./models/Bird";
import Plane from "./models/Plane";
import HomeInfo from "./components/HomeInfo";
import { useRouter } from "next/router";
import Loading from "./components/Loading";

const Page = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  // const router = useRouter();

  const setIslandSize = () => {
    let screenScale = null;
    let screenPostion = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPostion, rotation];
  };

  const setPlaneSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPostion, islandRotation] = setIslandSize();
  const [planeScale, planePostion] = setPlaneSize();

  // useEffect(() => {
  //   if (!router.isReady) return;

  //   const handleStart = () => setIsLoading(true);
  //   const handleComplete = () => setIsLoading(false);

  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);

  //   return () => {
  //     router.events.off("routeChangeStart", handleStart);
  //     router.events.off("routeChangeComplete", handleComplete);
  //     router.events.off("routeChangeError", handleComplete);
  //   };
  // }, [router.isReady]);

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      {/* {isLoading && <Loading />} */}
      <Canvas
        shadows
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.5, far: 10000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* إضاءة */}
          <directionalLight position={[4, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight groundColor="#0000000" intensity={1} />
          <Island
            position={islandPostion}
            rotation={islandRotation}
            scale={islandScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Sky isRotating={isRotating} />
          <Bird />
          <Plane
            isRotating={isRotating}
            position={planePostion}
            rotation={[0, 20.1, 0]}
            scale={planeScale}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Page;
