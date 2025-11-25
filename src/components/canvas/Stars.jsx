import { useState, useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

// Star layer configuration for realistic depth
const STAR_LAYERS = [
    { count: 3000, radius: 2.5, size: 0.003, speed: 0.05, color: '#ffffff', opacity: 0.9 }, // Far white stars
    { count: 2000, radius: 2.0, size: 0.0035, speed: 0.08, color: '#aabbff', opacity: 0.95 }, // Mid blue-white stars
    { count: 1500, radius: 1.5, size: 0.004, speed: 0.12, color: '#ffffaa', opacity: 1.0 }, // Near yellow-white stars
    { count: 800, radius: 1.2, size: 0.0045, speed: 0.15, color: '#ffaa77', opacity: 0.85 }, // Close orange stars
]

const StarLayer = ({ count, radius, size, speed, color, opacity, layerIndex }) => {
    const ref = useRef()
    
    // Generate star positions for this layer
    const positions = useMemo(() => 
        random.inSphere(new Float32Array(count * 3), { radius }), 
        [count, radius]
    )

    // Generate random twinkle offsets for each star
    const twinkleOffsets = useMemo(() => 
        Float32Array.from({ length: count }, () => Math.random() * Math.PI * 2),
        [count]
    )

    useFrame((state, delta) => {
        if (ref.current) {
            // Different rotation speeds for parallax effect
            ref.current.rotation.x -= delta * speed / 10
            ref.current.rotation.y -= delta * speed / 15
            ref.current.rotation.z += delta * speed / 20

            // Subtle twinkling effect by varying opacity
            const material = ref.current.material
            if (material) {
                const twinkle = Math.sin(state.clock.elapsedTime * 2 + layerIndex) * 0.1 + 0.9
                material.opacity = opacity * twinkle
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
                blending={2} // AdditiveBlending for glow effect
            />
        </Points>
    )
}

const Stars = (props) => {
    return (
        <group rotation={[0, 0, Math.PI / 4]} {...props}>
            {STAR_LAYERS.map((layer, index) => (
                <StarLayer
                    key={index}
                    layerIndex={index}
                    {...layer}
                />
            ))}
        </group>
    )
}

export default Stars
