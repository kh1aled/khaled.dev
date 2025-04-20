import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'

const Bird = () => {
  const { scene, animations } = useGLTF("/3d/bird.glb");
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    const action = actions["Take 001"];
    if (action) {
      action.play();
    }
    return () => {
      if (action) {
        action.stop(); // Cleanup animation on unmount
      }
    };
  }, [actions]);

  useFrame(({ clock, camera }) => {
    const bird = birdRef.current;
    if (!bird) return; // Null check already present

    const elapsedTime = clock.elapsedTime;

    // Update the Y position to simulate bird-like motion using a sine wave
    bird.position.y = Math.sin(elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    const cameraX = camera.position.x;
    if (bird.position.x > cameraX + 10) {
      bird.rotation.y = Math.PI; // Change direction to backward
    } else if (bird.position.x < cameraX - 10) {
      bird.rotation.y = 0; // Change direction to forward
    }

    // Update the X and Z positions based on the direction
    const direction = bird.rotation.y === 0 ? 1 : -1;
    bird.position.x += 0.01 * direction;
    bird.position.z -= 0.01 * direction;
  });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird;