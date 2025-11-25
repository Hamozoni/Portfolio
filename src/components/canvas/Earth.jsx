import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { useTheme } from "../../context/ThemeContext";

const Earth = () => {
    const { activeTheme } = useTheme();
    const accent = activeTheme.meta.accent;
    const meshRef = useRef();
    const innerRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.003;
        }
        if (innerRef.current) {
            innerRef.current.rotation.y -= 0.002;
            innerRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <group>
            <mesh ref={meshRef}>
                <sphereGeometry args={[2.5, 32, 32]} />
                <meshStandardMaterial 
                    color={accent} 
                    wireframe 
                    opacity={0.9}
                    transparent
                />
            </mesh>
            <mesh ref={innerRef}>
                <sphereGeometry args={[2.2, 16, 16]} />
                <meshStandardMaterial 
                    color={accent} 
                    wireframe 
                    opacity={0.4}
                    transparent
                />
            </mesh>
        </group>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default EarthCanvas;
