import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

const UnderwaterPlants = () => {
    // Generate kelp/seaweed positions
    const plants = useMemo(() =>
        Array.from({ length: 20 }, (_, i) => ({
            position: [
                (Math.random() - 0.5) * 18,
                -5.5,
                (Math.random() - 0.5) * 18
            ],
            height: Math.random() * 2 + 1.5,
            swayOffset: Math.random() * Math.PI * 2,
            swaySpeed: Math.random() * 0.5 + 0.5,
            segments: Math.floor(Math.random() * 3) + 3
        })),
        []
    )

    return (
        <group>
            {plants.map((plant, i) => (
                <Kelp key={i} {...plant} />
            ))}
        </group>
    )
}

const Kelp = ({ position, height, swayOffset, swaySpeed, segments }) => {
    const groupRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            const time = state.clock.elapsedTime
            // Gentle swaying motion
            groupRef.current.rotation.x = Math.sin(time * swaySpeed + swayOffset) * 0.2
            groupRef.current.rotation.z = Math.cos(time * swaySpeed * 0.8 + swayOffset) * 0.15
        }
    })

    const segmentHeight = height / segments

    return (
        <group ref={groupRef} position={position}>
            {Array.from({ length: segments }).map((_, i) => (
                <mesh
                    key={i}
                    position={[0, segmentHeight * i + segmentHeight / 2, 0]}
                    castShadow
                >
                    <capsuleGeometry
                        args={[
                            0.08 - (i * 0.015),
                            segmentHeight,
                            8,
                            1
                        ]}
                    />
                    <meshStandardMaterial
                        color="#2d5016"
                        roughness={0.8}
                        metalness={0.1}
                        transparent
                        opacity={0.9}
                    />
                </mesh>
            ))}

            {/* Leaf at top */}
            <mesh position={[0, height + 0.3, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
                <boxGeometry args={[0.4, 0.6, 0.02]} />
                <meshStandardMaterial
                    color="#3d6b1f"
                    roughness={0.7}
                    metalness={0.2}
                    transparent
                    opacity={0.85}
                    side={2}
                />
            </mesh>
        </group>
    )
}

export default UnderwaterPlants
