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

            // Make shark look at the target position
            // We use a dummy object or matrix to calculate the rotation smoothly
            const lookTarget = new THREE.Vector3().copy(targetPosition)

            // Create a temporary object to calculate the target rotation
            const dummy = new THREE.Object3D()
            dummy.position.copy(sharkGroupRef.current.position)
            dummy.lookAt(lookTarget)

            // Smoothly interpolate current rotation to target rotation
            sharkGroupRef.current.quaternion.slerp(dummy.quaternion, 0.1)

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
            {/* Main body - Taller and bulkier (Great White / Bull Shark shape) */}
            <mesh ref={bodyRef} castShadow receiveShadow>
                {/* Increased radius from 0.5 to 0.75, decreased length slightly */}
                <capsuleGeometry args={[0.75, 2.5, 24, 48]} />
                <meshStandardMaterial
                    color="#36454f"
                    roughness={0.2}
                    metalness={0.7}
                    envMapIntensity={1.5}
                />
            </mesh>

            {/* Head/Snout - blunter and taller */}
            <mesh position={[0, 0, 1.6]} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                <coneGeometry args={[0.7, 1.0, 24]} />
                <meshStandardMaterial
                    color="#36454f"
                    roughness={0.2}
                    metalness={0.7}
                    envMapIntensity={1.5}
                />
            </mesh>

            {/* White belly - wider */}
            <mesh position={[0, -0.4, 0.2]} scale={[0.9, 0.8, 1]} castShadow receiveShadow>
                <capsuleGeometry args={[0.65, 2.0, 24, 48]} />
                <meshStandardMaterial
                    color="#e8e8e8"
                    roughness={0.3}
                    metalness={0.5}
                />
            </mesh>

            {/* Dorsal fin - taller and more prominent */}
            <mesh position={[0, 0.9, -0.2]} rotation={[0.1, 0, 0]} castShadow receiveShadow>
                <coneGeometry args={[0.8, 1.8, 16, 1, false, 0, Math.PI]} />
                <meshStandardMaterial
                    color="#2c3e50"
                    roughness={0.2}
                    metalness={0.8}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Left pectoral fin - larger */}
            <mesh position={[-0.8, -0.3, 0.5]} rotation={[0.3, 0, -Math.PI / 4]} castShadow receiveShadow>
                <boxGeometry args={[0.08, 1.5, 1.0]} />
                <meshStandardMaterial
                    color="#2c3e50"
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Right pectoral fin */}
            <mesh position={[0.8, -0.3, 0.5]} rotation={[0.3, 0, Math.PI / 4]} castShadow receiveShadow>
                <boxGeometry args={[0.08, 1.5, 1.0]} />
                <meshStandardMaterial
                    color="#2c3e50"
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Pelvic fins */}
            <mesh position={[-0.4, -0.6, -0.5]} rotation={[0.5, 0, -0.3]} castShadow receiveShadow>
                <boxGeometry args={[0.06, 0.6, 0.5]} />
                <meshStandardMaterial color="#2c3e50" roughness={0.2} metalness={0.8} />
            </mesh>
            <mesh position={[0.4, -0.6, -0.5]} rotation={[0.5, 0, 0.3]} castShadow receiveShadow>
                <boxGeometry args={[0.06, 0.6, 0.5]} />
                <meshStandardMaterial color="#2c3e50" roughness={0.2} metalness={0.8} />
            </mesh>

            {/* Tail section - animated group */}
            <group ref={tailRef} position={[0, 0, -1.5]}>
                {/* Tail peduncle - thicker */}
                <mesh position={[0, 0, -0.3]} castShadow receiveShadow>
                    <capsuleGeometry args={[0.4, 0.6, 16, 32]} />
                    <meshStandardMaterial color="#36454f" roughness={0.2} metalness={0.7} />
                </mesh>

                {/* Upper tail lobe - taller */}
                <mesh position={[0, 0.6, -0.8]} rotation={[0.3, 0, 0]} castShadow receiveShadow>
                    <boxGeometry args={[0.1, 2.2, 0.8]} />
                    <meshStandardMaterial
                        color="#2c3e50"
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>

                {/* Lower tail lobe */}
                <mesh position={[0, -0.4, -0.8]} rotation={[-0.3, 0, 0]} castShadow receiveShadow>
                    <boxGeometry args={[0.1, 1.5, 0.6]} />
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
