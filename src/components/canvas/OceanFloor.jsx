import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const OceanFloor = () => {
    const floorRef = useRef()

    useFrame((state) => {
        if (floorRef.current) {
            // Subtle wave movement on sand
            const time = state.clock.elapsedTime
            floorRef.current.material.displacementScale = Math.sin(time * 0.2) * 0.1 + 0.15
        }
    })

    // Create rocks scattered on ocean floor
    const rocks = Array.from({ length: 15 }, (_, i) => ({
        position: [
            (Math.random() - 0.5) * 20,
            -6 + Math.random() * 0.5,
            (Math.random() - 0.5) * 20
        ],
        scale: Math.random() * 0.5 + 0.3,
        rotation: [
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        ]
    }))

    return (
        <group>
            {/* Sandy ocean floor */}
            <mesh
                ref={floorRef}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -6, 0]}
                receiveShadow
            >
                <planeGeometry args={[50, 50, 64, 64]} />
                <meshStandardMaterial
                    color="#8b7355"
                    roughness={0.9}
                    metalness={0.1}
                    displacementScale={0.2}
                />
            </mesh>

            {/* Rocks */}
            {rocks.map((rock, i) => (
                <mesh
                    key={i}
                    position={rock.position}
                    rotation={rock.rotation}
                    scale={rock.scale}
                    castShadow
                    receiveShadow
                >
                    <dodecahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial
                        color="#4a4a4a"
                        roughness={0.95}
                        metalness={0.05}
                    />
                </mesh>
            ))}

            {/* Coral-like formations */}
            {Array.from({ length: 8 }).map((_, i) => (
                <group
                    key={`coral-${i}`}
                    position={[
                        (Math.random() - 0.5) * 15,
                        -5.5,
                        (Math.random() - 0.5) * 15
                    ]}
                    rotation={[0, Math.random() * Math.PI * 2, 0]}
                >
                    <mesh castShadow>
                        <coneGeometry args={[0.3, 1, 6]} />
                        <meshStandardMaterial
                            color={i % 2 === 0 ? '#ff6b6b' : '#ffa94d'}
                            roughness={0.7}
                            metalness={0.2}
                        />
                    </mesh>
                    <mesh position={[0.2, 0, 0]} castShadow>
                        <coneGeometry args={[0.2, 0.7, 6]} />
                        <meshStandardMaterial
                            color={i % 2 === 0 ? '#ffa94d' : '#ff6b6b'}
                            roughness={0.7}
                            metalness={0.2}
                        />
                    </mesh>
                </group>
            ))}
        </group>
    )
}

export default OceanFloor
