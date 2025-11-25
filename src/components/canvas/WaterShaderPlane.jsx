import { useRef, useMemo, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { waterVertexShader, waterFragmentShader } from '../../shaders/waterShader'
import * as THREE from 'three'
import { useTheme } from '../../context/ThemeContext'

const WaterShaderPlane = () => {
    const meshRef = useRef()
    const { viewport } = useThree()
    const { activeTheme } = useTheme()
    const [scrollY, setScrollY] = useState(0)

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            // Normalize scroll position (0 to 1 based on page height)
            const scrollPosition = window.scrollY
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight
            const normalizedScroll = maxScroll > 0 ? scrollPosition / maxScroll : 0
            setScrollY(normalizedScroll)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll() // Initialize

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Create shader material with uniforms
    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
            uScroll: { value: 0 },
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

            // Update scroll uniform
            meshRef.current.material.uniforms.uScroll.value = scrollY

            // Convert mouse coordinates to UV space (0-1)
            const mouseUV = new THREE.Vector2(
                (mouse.x + 1) / 2,
                (mouse.y + 1) / 2
            )

            // Faster interpolation to mouse position for better responsiveness
            meshRef.current.material.uniforms.uMouse.value.lerp(mouseUV, 0.1)

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
        <mesh ref={meshRef} position={[0, 0, -6]}>
            <planeGeometry args={[viewport.width * 2.5, viewport.height * 2.5, 128, 128]} />
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
