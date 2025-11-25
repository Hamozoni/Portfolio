import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const FloatingParticles = () => {
    const particlesRef = useRef()

    // Generate random particle positions
    const particleCount = 500
    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3)
        for (let i = 0; i < particleCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 25
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15
            pos[i * 3 + 2] = (Math.random() - 0.5) * 25
        }
        return pos
    }, [])

    // Generate random velocities
    const velocities = useMemo(() => {
        const vel = new Float32Array(particleCount * 3)
        for (let i = 0; i < particleCount; i++) {
            vel[i * 3] = (Math.random() - 0.5) * 0.01
            vel[i * 3 + 1] = Math.random() * 0.02 + 0.01 // Float upward
            vel[i * 3 + 2] = (Math.random() - 0.5) * 0.01
        }
        return vel
    }, [])

    useFrame(() => {
        if (particlesRef.current) {
            const positions = particlesRef.current.geometry.attributes.position.array

            for (let i = 0; i < particleCount; i++) {
                // Update positions based on velocities
                positions[i * 3] += velocities[i * 3]
                positions[i * 3 + 1] += velocities[i * 3 + 1]
                positions[i * 3 + 2] += velocities[i * 3 + 2]

                // Wrap around if particle goes too far
                if (positions[i * 3 + 1] > 8) positions[i * 3 + 1] = -8
                if (Math.abs(positions[i * 3]) > 15) positions[i * 3] *= -0.9
                if (Math.abs(positions[i * 3 + 2]) > 15) positions[i * 3 + 2] *= -0.9
            }

            particlesRef.current.geometry.attributes.position.needsUpdate = true
        }
    })

    return (
        <group>
            {/* Plankton/sediment particles */}
            <Points ref={particlesRef} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#c0e8f0"
                    size={0.015}
                    sizeAttenuation
                    depthWrite={false}
                    opacity={0.6}
                    blending={THREE.AdditiveBlending}
                />
            </Points>

            {/* Bubble particles */}
            {Array.from({ length: 15 }).map((_, i) => (
                <Bubble
                    key={i}
                    startPosition={[
                        (Math.random() - 0.5) * 10,
                        -5 + Math.random() * 2,
                        (Math.random() - 0.5) * 10
                    ]}
                    speed={Math.random() * 0.5 + 0.3}
                />
            ))}
        </group>
    )
}

const Bubble = ({ startPosition, speed }) => {
    const bubbleRef = useRef()
    const offset = useMemo(() => Math.random() * 100, [])

    useFrame((state) => {
        if (bubbleRef.current) {
            const time = state.clock.elapsedTime + offset
            // Float upward with slight wobble
            bubbleRef.current.position.y = (startPosition[1] + (time * speed) % 13)
            bubbleRef.current.position.x = startPosition[0] + Math.sin(time * 2) * 0.3
            bubbleRef.current.position.z = startPosition[2] + Math.cos(time * 1.5) * 0.3

            // Reset when reaching top
            if (bubbleRef.current.position.y > 6) {
                bubbleRef.current.position.y = startPosition[1]
            }
        }
    })

    return (
        <mesh ref={bubbleRef} position={startPosition}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
                color="#ffffff"
                transparent
                opacity={0.3}
                roughness={0.1}
                metalness={0.9}
                envMapIntensity={2}
            />
        </mesh>
    )
}

export default FloatingParticles
