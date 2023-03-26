import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Mask, useMask, useGLTF, Bounds, PivotControls, Environment, OrbitControls, RoundedBox, Float, Sphere } from '@react-three/drei'
import { useControls } from 'leva'

import Platform from './Platform'
import Object from './Object'

export default function Experience()
{

    return <>

        <directionalLight position={[1, 2, 1.5]} intensity={0.5} castShadow />
        <OrbitControls makeDefault />

        <Platform position={[0, 0, 0]} />
        <Object position={[0, 1.5, 0]} />


    {/* Use react-three-fiber to make a circular platform */}



        {/* <directionalLight position={[1, 2, 1.5]} intensity={0.5} castShadow />
        <hemisphereLight intensity={1.5} groundColor="red" />
        <Suspense fallback={null}>
            <PivotControls offset={[0, 0, 1]} activeAxes={[true, true, false]} disableRotations depthTest={false}>
                <Mask id={1} position={[0, 0, 0.95]}>
                    <circleGeometry args={[0.8, 64]} />
                </Mask>
            </PivotControls>
            <Bounds fit clip observe>
                <Float floatIntensity={4} rotationIntensity={0} speed={4}>
                    <Ball invert={invert} /> 
                </Float>
                <Box color="#EAC435" args={[1, 5, 1]} rotation-y={Math.PI / 4} position={[0, 0, -2]} />
                <Box color="#03CEA4" args={[2, 2, 2]} position={[-2, 0, -2]} />
                <Box color="#FB4D3D" args={[2, 2, 2]} position={[2, 0, -2]} />
            </Bounds>
            <Environment preset="city" />
        </Suspense>
        <OrbitControls makeDefault /> */}

    </>
}

// function Box({ args = [1, 4, 1], radius = 0.05, smoothness = 4, color = 'black', ...boxProps }) {
//     return (
//         <RoundedBox args={args} radius={radius} smoothness={smoothness} {...boxProps}>
//             <meshPhongMaterial color={color} />
//         </RoundedBox>
//     )
// }

// function Ball({ invert, ...props }) {
//     const stencil = useMask(1, invert)
//     return (
//         <Sphere>
//             <meshPhongMaterial {...stencil}/>
//         </Sphere>
//     )
// }