import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Caustics = () => {
    const causticsRef = useRef()

    useFrame((state) => {
        if (causticsRef.current) {
            const time = state.clock.elapsedTime
            // Animate caustic pattern
            causticsRef.current.position.x = Math.sin(time * 0.3) * 2
            causticsRef.current.position.z = Math.cos(time * 0.2) * 2
            causticsRef.current.rotation.z = time * 0.1
        }
    })

    return (
        <group>
            {/* Main caustic light layer */}
            <mesh
                ref={causticsRef}
                position={[0, 4, -5]}
                rotation={[-Math.PI / 4, 0, 0]}
            >
                <planeGeometry args={[30, 30]} />
                <meshBasicMaterial
                    color="#4dd0e1"
                    transparent
                    opacity={0.15}
                    blending={THREE.AdditiveBlending}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Secondary caustic layer for depth */}
            <mesh
                position={[2, 3, -6]}
                rotation={[-Math.PI / 4, 0, Math.PI / 6]}
            >
                <planeGeometry args={[25, 25]} />
                <meshBasicMaterial
                    color="#80deea"
                    transparent
                    opacity={0.1}
                    blending={THREE.AdditiveBlending}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* God rays */}
            {[0, 1, 2, 3].map((i) => (
                <mesh
                    key={i}
                    position={[
                        (i - 1.5) * 3,
                        5,
                        -8
                    ]}
                    rotation={[-Math.PI / 3, 0, (i - 1.5) * 0.2]}
                >
                    <planeGeometry args={[1, 15]} />
                    <meshBasicMaterial
                        color="#b2ebf2"
                        transparent
                        opacity={0.08}
                        blending={THREE.AdditiveBlending}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            ))}
        </group>
    )
}

export default Caustics
