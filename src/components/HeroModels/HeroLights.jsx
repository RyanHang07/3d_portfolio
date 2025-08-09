import React from 'react'
import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
        {/* {lamp light} */}
        <spotLight 
        position={[2, 5, 6]} 
        angle={0.15}
        penumbra={0.4}
        color="white"
        intensity={100}
        />
        {/* {room lights} */}
        <spotLight 
        position={[4, 5, 5]} 
        angle={0.3}
        penumbra={0.5}
        color="#4ba9f0"
        intensity={40}
        />
        <spotLight 
        position={[-3, 5, 5]} 
        angle={0.4}
        penumbra={1}
        color="#9d4edd"
        intensity={60}
        />
        {/* {room ambience lights} */}
        <primitive
            object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)}
            position={[1, 3, 4]}
            intensity={15}
            rotation={[-Math.PI/4, Math.PI/4, 0]}
        />
        <pointLight
            position={[0, 1, 0]}
            intensity={10}
            color="#7209b7"
        />
        <pointLight
            position={[1, -2, -2]}
            intensity={10}
            color="#0d00a4"
        />
    </>
  )
}

export default HeroLights