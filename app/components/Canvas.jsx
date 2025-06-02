      {/* <Canvas shadows className='w-full h-screen bg-transparent' camera={{ near: 0.5, far: 10000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
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
          {/* <Bird />
          <Plane isRotating={isRotating} position={planePostion} rotation={[0, 20.1, 0]} scale={planeScale} />
        </Suspense> */}
      {/* </Canvas> */}
