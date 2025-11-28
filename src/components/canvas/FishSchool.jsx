import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Individual Fish Component
const Fish = ({ position, index, sharkPosition }) => {
    const fishRef = useRef()
    const tailRef = useRef()
    const velocity = useRef(new THREE.Vector3())
    const targetPos = useRef(new THREE.Vector3(...position))

    useFrame((state) => {
        if (!fishRef.current) return

        const time = state.clock.elapsedTime
        const fish = fishRef.current

        // Avoid shark - flee if too close
        const distanceToShark = fish.position.distanceTo(sharkPosition)
        if (distanceToShark < 4) {
            const fleeDirection = new THREE.Vector3()
            fleeDirection.subVectors(fish.position, sharkPosition)
            fleeDirection.normalize()
            targetPos.current.add(fleeDirection.multiplyScalar(0.2))
        } else {
            // Normal schooling behavior - vertical circular motion
            const radius = 3 + index * 0.3
            const speed = 0.5 + index * 0.05
            // Swim in a vertical circle (Y/Z plane) with some X variation
            targetPos.current.x = Math.sin(time * speed * 0.5 + index) * 2
            targetPos.current.y = Math.sin(time * speed + index) * radius
            targetPos.current.z = Math.cos(time * speed + index) * radius - 5
        }

        // Smooth movement toward target
        velocity.current.lerp(
            new THREE.Vector3().subVectors(targetPos.current, fish.position),
            0.05
        )
        fish.position.add(velocity.current.multiplyScalar(0.1))

        // Keep fish in bounds
        fish.position.x = THREE.MathUtils.clamp(fish.position.x, -10, 10)
        fish.position.y = THREE.MathUtils.clamp(fish.position.y, -5, 5)
        fish.position.z = THREE.MathUtils.clamp(fish.position.z, -8, -2)

        // Rotate to face movement direction (3D rotation including pitch)
        if (velocity.current.length() > 0.001) {
            const dummy = new THREE.Object3D()
            dummy.position.copy(fish.position)
            // Look at where we are going (position + velocity)
            dummy.lookAt(fish.position.clone().add(velocity.current))
            fish.quaternion.slerp(dummy.quaternion, 0.1)
        }

        // Tail wagging
        if (tailRef.current) {
            tailRef.current.rotation.y = Math.sin(time * 8 + index) * 0.3
        }

        // Vertical bobbing
        fish.position.y += Math.sin(time * 2 + index) * 0.01
    })

    return (
        <group ref={fishRef} position={position}>
            {/* Fish body - Angelfish shape (flattened vertical disk) */}
            <mesh castShadow receiveShadow>
                <cylinderGeometry args={[0.4, 0.2, 0.05, 16]} />
                <meshStandardMaterial
                    color="#ff9500"
                    roughness={0.3}
                    metalness={0.6}
                    emissive="#ff6b00"
                    emissiveIntensity={0.1}
                />
            </mesh>

            {/* Fish head - merged into body shape */}
            <mesh position={[0, 0, 0.25]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                <coneGeometry args={[0.2, 0.15, 12]} />
                <meshStandardMaterial
                    color="#ff9500"
                    roughness={0.3}
                    metalness={0.6}
                />
            </mesh>

            {/* Top fin - tall and elegant */}
            <mesh position={[0, 0.25, -0.1]} rotation={[-0.2, 0, 0]} castShadow>
                <coneGeometry args={[0.05, 0.6, 8]} />
                <meshStandardMaterial
                    color="#ff6b00"
                    roughness={0.2}
                    metalness={0.7}
                    transparent
                    opacity={0.8}
                />
            </mesh>

            {/* Bottom fin - mirroring top */}
            <mesh position={[0, -0.25, -0.1]} rotation={[0.2, 0, 0]} castShadow>
                <coneGeometry args={[0.05, 0.6, 8]} />
                <meshStandardMaterial
                    color="#ff6b00"
                    roughness={0.2}
                    metalness={0.7}
                    transparent
                    opacity={0.8}
                />
            </mesh>

            {/* Side fins */}
            <mesh position={[-0.05, 0, 0.1]} rotation={[0, 0, -Math.PI / 4]} castShadow>
                <boxGeometry args={[0.02, 0.15, 0.1]} />
                <meshStandardMaterial color="#ff9500" transparent opacity={0.7} />
            </mesh>
            <mesh position={[0.05, 0, 0.1]} rotation={[0, 0, Math.PI / 4]} castShadow>
                <boxGeometry args={[0.02, 0.15, 0.1]} />
                <meshStandardMaterial color="#ff9500" transparent opacity={0.7} />
            </mesh>

            {/* Tail - fan shaped */}
            <group ref={tailRef} position={[0, 0, -0.1]}>
                <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
                    <cylinderGeometry args={[0.15, 0.05, 0.02, 8]} />
                    <meshStandardMaterial
                        color="#ff6b00"
                        transparent
                        opacity={0.8}
                    />
                </mesh>
            </group>

            {/* Eyes */}
            <mesh position={[-0.04, 0.05, 0.28]}>
                <sphereGeometry args={[0.02, 12, 12]} />
                <meshStandardMaterial color="#000000" />
            </mesh>
            <mesh position={[0.04, 0.05, 0.28]}>
                <sphereGeometry args={[0.02, 12, 12]} />
                <meshStandardMaterial color="#000000" />
            </mesh>
        </group>
    )
}

// School of Fish Component
const FishSchool = ({ sharkPosition = new THREE.Vector3(0, 0, -4) }) => {
    // Generate random starting positions for fish
    const fishPositions = useMemo(() => {
        return Array.from({ length: 20 }, () => [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 4,
            -3 - Math.random() * 4
        ])
    }, [])

    return (
        <group>
            {fishPositions.map((pos, i) => (
                <Fish
                    key={i}
                    position={pos}
                    index={i}
                    sharkPosition={sharkPosition}
                />
            ))}
        </group>
    )
}

export default FishSchool
