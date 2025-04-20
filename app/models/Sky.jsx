import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Sky = ({ isRotating }) => {
    const sky = useGLTF('/3d/sky.glb')
    const skyRef = useRef();

    useEffect(() => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
        }
        // Cleanup function to stop the rotation when the component unmounts or isRotating changes
    }, [isRotating]);

    useFrame(()=>{
        if (isRotating) {
            skyRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
        }
    })

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

useGLTF.preload('/3d/sky.glb')


export default Sky