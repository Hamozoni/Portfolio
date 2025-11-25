import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(8000), { radius: 1.5 }))

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 12
        ref.current.rotation.y -= delta / 18
        ref.current.rotation.z += delta / 25
        
        // Pulsating effect
        ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05)
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.0025}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    )
}

export default Stars
