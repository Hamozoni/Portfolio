import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

const WaterBackground = () => {
    const meshRef = useRef()
    const mousePos = useRef({ x: 0, y: 0 })
    const { viewport } = useThree()

    // Create a more detailed plane for water-like deformation
    const geometry = useMemo(() => {
        return new THREE.PlaneGeometry(viewport.width * 2, viewport.height * 2, 64, 64)
    }, [viewport])

    // Track mouse position
    useFrame(({ mouse, clock }) => {
        if (meshRef.current) {
            // Smooth mouse tracking
            mousePos.current.x += (mouse.x - mousePos.current.x) * 0.05
            mousePos.current.y += (mouse.y - mousePos.current.y) * 0.05

            // Create ripple effect following mouse
            const positions = meshRef.current.geometry.attributes.position
            const time = clock.getElapsedTime()

            for (let i = 0; i < positions.count; i++) {
                const x = positions.getX(i)
                const y = positions.getY(i)

                // Distance from mouse position
                const mouseDistance = Math.sqrt(
                    Math.pow(x - mousePos.current.x * (viewport.width / 2), 2) +
                    Math.pow(y - mousePos.current.y * (viewport.height / 2), 2)
                )

                // Create multiple wave layers
                const wave1 = Math.sin(mouseDistance * 0.5 - time * 2) * 0.15
                const wave2 = Math.sin(mouseDistance * 0.3 - time * 1.5 + Math.PI / 2) * 0.1
                const wave3 = Math.sin(x * 0.5 + time) * 0.05
                const wave4 = Math.cos(y * 0.5 - time * 0.8) * 0.05

                // Ripple from mouse
                const mouseRipple = mouseDistance < 3 
                    ? Math.sin(mouseDistance * 3 - time * 5) * (1 - mouseDistance / 3) * 0.3 
                    : 0

                // Combine all effects
                positions.setZ(i, wave1 + wave2 + wave3 + wave4 + mouseRipple)
            }

            positions.needsUpdate = true

            // Subtle rotation based on mouse
            meshRef.current.rotation.z = mousePos.current.x * 0.02
        }
    })

    return (
        <mesh ref={meshRef} geometry={geometry} position={[0, 0, -5]}>
            <MeshDistortMaterial
                color="#0a0a1a"
                metalness={0.9}
                roughness={0.2}
                distort={0.4}
                speed={1.5}
                transparent
                opacity={0.6}
            />
        </mesh>
    )
}

export default WaterBackground

