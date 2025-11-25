import { Float, MeshDistortMaterial, Trail } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { useTheme } from '../../context/ThemeContext'

const Hero3D = () => {
    const meshRef = useRef()
    const { activeTheme } = useTheme()
    const [hovered, setHovered] = useState(false)

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
            meshRef.current.rotation.y += 0.005
            
            // Scale pulse effect
            const scale = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.1
            meshRef.current.scale.setScalar(hovered ? scale * 1.2 : scale)
        }
    })

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2.5}>
            <Trail
                width={3}
                length={8}
                color={activeTheme?.meta?.accent || '#804dee'}
                attenuation={(width) => width * width}
            >
                <mesh
                    ref={meshRef}
                    onPointerEnter={() => setHovered(true)}
                    onPointerLeave={() => setHovered(false)}
                >
                    <icosahedronGeometry args={[1, 20]} />
                    <MeshDistortMaterial
                        color={activeTheme?.meta?.accent || '#804dee'}
                        attach="material"
                        distort={hovered ? 0.7 : 0.5}
                        speed={hovered ? 3 : 2}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>
            </Trail>
        </Float>
    )
}

export default Hero3D
