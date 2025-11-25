import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

// Nebula cloud configuration for atmospheric depth
const NEBULA_CLOUDS = [
    { count: 1200, radius: 3.0, size: 0.08, color: '#915eff', opacity: 0.15, speed: 0.02 },
    { count: 800, radius: 2.5, size: 0.12, color: '#5de0e6', opacity: 0.12, speed: 0.015 },
    { count: 600, radius: 2.0, size: 0.15, color: '#b47eff', opacity: 0.1, speed: 0.025 },
]

const NebulaLayer = ({ count, radius, size, color, opacity, speed, layerIndex }) => {
    const ref = useRef()

    // Generate nebula particle positions
    const positions = useMemo(() =>
        random.inSphere(new Float32Array(count * 3), { radius }),
        [count, radius]
    )

    useFrame((state, delta) => {
        if (ref.current) {
            // Gentle drift and rotation for billowy cloud effect
            ref.current.rotation.x += delta * speed * 0.3
            ref.current.rotation.y += delta * speed * 0.5
            ref.current.rotation.z -= delta * speed * 0.2

            // Subtle breathing effect
            const breathe = Math.sin(state.clock.elapsedTime * 0.3 + layerIndex) * 0.15 + 0.85
            const material = ref.current.material
            if (material) {
                material.opacity = opacity * breathe
            }
        }
    })

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled>
            <PointMaterial
                transparent
                color={color}
                size={size}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={opacity}
                blending={2} // AdditiveBlending for soft glow
            />
        </Points>
    )
}

const Nebula = (props) => {
    return (
        <group {...props}>
            {NEBULA_CLOUDS.map((cloud, index) => (
                <NebulaLayer
                    key={index}
                    layerIndex={index}
                    {...cloud}
                />
            ))}
        </group>
    )
}

export default Nebula
