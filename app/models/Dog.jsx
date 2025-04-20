import React, { useEffect, useRef } from 'react'
import { a } from '@react-spring/three';
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
const Dog = ({ currentAnimation, ...props }) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF('/3d/fox.glb')
    const { actions } = useAnimations(animations, group)
    useEffect(() => {
        if (actions) {
            console.log(actions);

            actions[currentAnimation].play();

            {/**hit
: 
AnimationAction
idle
: 
AnimationAction
walk
: 
(...)
walk.left
: 
(...) */}
        }
    }, [])

    useFrame(() => {
        actions[currentAnimation].play();
    })

    return (
        <a.group ref={group} {...props} >
            <group name="Sketchfab_Scene">
                <primitive object={nodes.GLTF_created_0_rootJoint} />
                <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_7.skeleton}
                />
                <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_8.skeleton}
                />
                <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_9.skeleton}
                />
                <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_10.skeleton}
                />
                <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_11.skeleton}
                />
            </group>
        </a.group>
    )
}

useGLTF.preload('/3d/fox.glb')


export default Dog