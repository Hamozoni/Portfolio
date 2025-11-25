import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const Shark = () => {
    const sharkGroupRef = useRef()
    const bodyRef = useRef()
    const tailRef = useRef()
    const { viewport } = useThree()
    const [targetPosition] = useState(() => new THREE.Vector3())

    useFrame((state) => {
        if (sharkGroupRef.current) {
            const time = state.clock.elapsedTime

            // Convert mouse coordinates to 3D world position
            const mouseX = (state.mouse.x * viewport.width) / 2
            const mouseY = (state.mouse.y * viewport.height) / 2

            // Update target position (slightly in front of water plane)
            targetPosition.set(mouseX, mouseY, -4)

            // Smoothly interpolate shark position toward mouse
            sharkGroupRef.current.position.lerp(targetPosition, 0.05)

            // Calculate direction to target for rotation
            const direction = new THREE.Vector3()
            direction.subVectors(targetPosition, sharkGroupRef.current.position)

            // Add vertical tilt based on movement
            const verticalTilt = direction.y * 0.1
            sharkGroupRef.current.rotation.x = THREE.MathUtils.lerp(
                sharkGroupRef.current.rotation.x,
                verticalTilt,
                0.1
            )

            if (direction.length() > 0.1) {
                const targetAngle = Math.atan2(direction.x, direction.z)
                let currentAngle = sharkGroupRef.current.rotation.y
                let angleDiff = targetAngle - currentAngle

                // Handle angle wrapping
                if (angleDiff > Math.PI) angleDiff -= Math.PI * 2
                if (angleDiff < -Math.PI) angleDiff += Math.PI * 2

                sharkGroupRef.current.rotation.y += angleDiff * 0.1
            }

            // Body undulation for swimming motion
            if (bodyRef.current) {
                bodyRef.current.rotation.y = Math.sin(time * 3) * 0.08
            }

            // Tail wagging - faster and more pronounced
            if (tailRef.current) {
                tailRef.current.rotation.y = Math.sin(time * 5) * 0.4
            }
        }
    })

    return (
        <group ref={sharkGroupRef} position={[0, 0, -4]} scale={1.2}>
            {/* Main body - more streamlined */}
            <mesh ref={bodyRef} castShadow receiveShadow>
                <capsuleGeometry args={[0.5, 3, 24, 48]} />
                <meshStandardMaterial
                    color="#36454f"
                    roughness={0.2}
                    metalness={0.7}
                    envMapIntensity={1.5}
                />
            </mesh>

            {/* Head/Snout - more pointed and realistic */}
            <mesh position={[0, 0, 1.8]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                <coneGeometry args={[0.45, 1.2, 24]} />
                <meshStandardMaterial
                    color="#36454f"
                    roughness={0.2}
                    metalness={0.7}
                    envMapIntensity={1.5}
                />
            </mesh>

            {/* White belly - extends along bottom */}
            <mesh position={[0, -0.35, 0.2]} scale={[0.85, 0.7, 1]} castShadow receiveShadow>
                <capsuleGeometry args={[0.4, 2.5, 24, 48]} />
                <meshStandardMaterial
                    color="#e8e8e8"
                    roughness={0.3}
                    metalness={0.5}
                />
            </mesh>

            {/* Dorsal fin - taller and more curved */}
            <mesh position={[0, 0.75, -0.2]} rotation={[0.1, 0, 0]} castShadow receiveShadow>
                <coneGeometry args={[0.6, 1.4, 16, 1, false, 0, Math.PI]} />
                <meshStandardMaterial
                    color="#2c3e50"
                    roughness={0.2}
                    metalness={0.8}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Left pectoral fin - larger and more angular */}
            <mesh position={[-0.6, -0.2, 0.5]} rotation={[0.3, 0, -Math.PI / 4]} castShadow receiveShadow>
                <boxGeometry args={[0.05, 1.2, 0.8]} />
                <meshStandardMaterial
                    color="#2c3e50"
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Right pectoral fin */}
            <mesh position={[0.6, -0.2, 0.5]} rotation={[0.3, 0, Math.PI / 4]} castShadow receiveShadow>
                <boxGeometry args={[0.05, 1.2, 0.8]} />
                <meshStandardMaterial
                    color="#2c3e50"
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Pelvic fins */}
            <mesh position={[-0.3, -0.4, -0.5]} rotation={[0.5, 0, -0.3]} castShadow receiveShadow>
                <boxGeometry args={[0.04, 0.5, 0.4]} />
                <meshStandardMaterial color="#2c3e50" roughness={0.2} metalness={0.8} />
            </mesh>
            <mesh position={[0.3, -0.4, -0.5]} rotation={[0.5, 0, 0.3]} castShadow receiveShadow>
                <boxGeometry args={[0.04, 0.5, 0.4]} />
                <meshStandardMaterial color="#2c3e50" roughness={0.2} metalness={0.8} />
            </mesh>

            {/* Tail section - animated group */}
            <group ref={tailRef} position={[0, 0, -1.8]}>
                {/* Tail peduncle */}
                <mesh position={[0, 0, -0.3]} castShadow receiveShadow>
                    <capsuleGeometry args={[0.25, 0.6, 16, 32]} />
                    <meshStandardMaterial color="#36454f" roughness={0.2} metalness={0.7} />
                </mesh>

                {/* Upper tail lobe - larger */}
                <mesh position={[0, 0.5, -0.8]} rotation={[0.3, 0, 0]} castShadow receiveShadow>
                    <boxGeometry args={[0.08, 1.8, 0.6]} />
                    <meshStandardMaterial
                        color="#2c3e50"
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>

                {/* Lower tail lobe */}
                <mesh position={[0, -0.3, -0.8]} rotation={[-0.3, 0, 0]} castShadow receiveShadow>
                    <boxGeometry args={[0.08, 1.2, 0.5]} />
                    <meshStandardMaterial
                        color="#2c3e50"
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>

                {/* Tail notch for realism */}
                <mesh position={[0, 0, -1.2]} castShadow receiveShadow>
                    <boxGeometry args={[0.06, 0.3, 0.3]} />
                    <meshStandardMaterial color="#2c3e50" roughness={0.2} metalness={0.8} />
                </mesh>
            </group>

            {/* Eyes - more realistic with shine */}
            <mesh position={[-0.2, 0.25, 2.0]} castShadow>
                <sphereGeometry args={[0.12, 24, 24]} />
                <meshStandardMaterial
                    color="#0a0a0a"
                    emissive="#0d0d0d"
                    roughness={0.1}
                    metalness={0.9}
                />
            </mesh>
            <mesh position={[0.2, 0.25, 2.0]} castShadow>
                <sphereGeometry args={[0.12, 24, 24]} />
                <meshStandardMaterial
                    color="#0a0a0a"
                    emissive="#0d0d0d"
                    roughness={0.1}
                    metalness={0.9}
                />
            </mesh>

            {/* Eye shine highlights */}
            <mesh position={[-0.15, 0.3, 2.08]} castShadow>
                <sphereGeometry args={[0.03, 16, 16]} />
                <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[0.25, 0.3, 2.08]} castShadow>
                <sphereGeometry args={[0.03, 16, 16]} />
                <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
            </mesh>

            {/* Gills - realistic detail */}
            {[0, 1, 2, 3, 4].map((i) => (
                <group key={i}>
                    <mesh position={[-0.48, 0, 0.8 - i * 0.15]} rotation={[0, 0, Math.PI / 2]} castShadow>
                        <boxGeometry args={[0.01, 0.3, 0.05]} />
                        <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
                    </mesh>
                    <mesh position={[0.48, 0, 0.8 - i * 0.15]} rotation={[0, 0, Math.PI / 2]} castShadow>
                        <boxGeometry args={[0.01, 0.3, 0.05]} />
                        <meshStandardMaterial color="#1a1a1a" roughness={0.4} />
                    </mesh>
                </group>
            ))}

            {/* Subtle point light for subsurface scattering effect */}
            <pointLight position={[0, 0, 0]} intensity={0.4} distance={4} color="#4a90e2" />
        </group>
    )
}

export default Shark
