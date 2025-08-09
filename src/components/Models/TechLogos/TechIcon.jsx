import { Environment, Float, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { useEffect, useRef } from 'react'
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

const TechIcon = ({icon}) => {
    const scene = useGLTF(icon.modelPath);

    // setting color of 3js logo to 3d
    useEffect(() => {
        if(icon.name === "Interactive Developer") {
            scene.scene.traverse((child) => {
                if(child.isMesh && child.name === "Object_5") {
                    child.material = new THREE.MeshStandardMaterial({color: 'white'})
                }
            })
        }
    }, [scene]);

    const controls = useRef(null);

    return (
        <Canvas ref={controls} camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}>
            <ambientLight  intensity={0.2} />
            <directionalLight position={[5,5,5]} intensity={1}  />
            <Environment preset="city" />
            <OrbitControls ref={controls} enableZoom={false} />
            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={1}>
                <group scale={icon.scale} rotation={icon.rotation}>
                    <primitive object={scene.scene} />
                </group>
            </Float>
        </Canvas>
    )
}

export default TechIcon