import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, Preload } from '@react-three/drei'

const Scene = ({ children }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ preserveDrawingBuffer: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    {children}
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default Scene
