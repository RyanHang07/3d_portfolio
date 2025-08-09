import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    return (
        <Canvas camera={{ position: [0, 0, 45], fov: 35}}>
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={18}
                minDistance={12}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 2}
                maxAzimuthAngle={Math.PI / 2}
            />

            <Suspense fallback={null}>
                <HeroLights />
                <Particles count={isMobile ? 50 : 100} />
                
                <group
                    scale={isMobile ? 0.7 : 1}
                    position={[0, -3.5, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                    >
                <Room />
                </group>
            </Suspense>
            
        </Canvas>
    )
}

export default HeroExperience