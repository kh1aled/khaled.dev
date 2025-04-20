import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect, useRef } from 'react'

const Plane = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF('/3d/plane.glb');
  const planeRef = useRef();
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    if (isRotating) {
      
      actions['Take 001'].play();
      const action = actions['Take 001'];

      if(action){
        action.play();
      }

    } else {
      actions['Take 001']?.stop();
    }
    // Set the animation speed based on the isRotating state   
  }, [isRotating, actions])

  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  )
}



export default Plane