import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { waterVertexShader, waterFragmentShader } from '../../shaders/waterShader'
import * as THREE from 'three'
import { useTheme } from '../../context/ThemeContext'

const WaterShaderPlane = () => {
    const meshRef = useRef()
    const { viewport } = useThree()
    const { activeTheme } = useTheme()

    // Create shader material with uniforms
    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uIntensity: { value: 1.5 },
            uColorDeep: { value: new THREE.Color(activeTheme?.colors?.primary || '#050816') },
            uColorShallow: { value: new THREE.Color(activeTheme?.meta?.accent || '#915eff') },
        }),
        [activeTheme]
    )

    useFrame(({ clock, mouse }) => {
        if (meshRef.current) {
            // Update time uniform
            meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime()

            // Convert mouse coordinates to UV space (0-1)
            const mouseUV = new THREE.Vector2(
                (mouse.x + 1) / 2,
                (mouse.y + 1) / 2
            )
            
            // Smooth interpolation to mouse position
            meshRef.current.material.uniforms.uMouse.value.lerp(mouseUV, 0.05)

            // Update colors if theme changes
            meshRef.current.material.uniforms.uColorDeep.value.set(
                activeTheme?.colors?.primary || '#050816'
            )
            meshRef.current.material.uniforms.uColorShallow.value.set(
                activeTheme?.meta?.accent || '#915eff'
            )
        }
    })

    return (
        <mesh ref={meshRef} position={[0, 0, -8]}>
            <planeGeometry args={[viewport.width * 1.5, viewport.height * 1.5, 128, 128]} />
            <shaderMaterial
                vertexShader={waterVertexShader}
                fragmentShader={waterFragmentShader}
                uniforms={uniforms}
                transparent
                side={THREE.DoubleSide}
            />
        </mesh>
    )
}

export default WaterShaderPlane

