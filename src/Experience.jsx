import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Mask, useMask, useGLTF, Bounds, PivotControls, Environment, OrbitControls, RoundedBox, Float, Sphere } from '@react-three/drei'
import { useControls } from 'leva'

import { BoxBufferGeometry, Mesh } from 'three'

import Platform from './Platform'
import Object from './Object'

export default function Experience()
{

    return <>

        <directionalLight position={[1, 2, 1.5]} intensity={0.5} castShadow />
        <OrbitControls makeDefault />
        
        <Box />


    </>
}

function Box() {

    const geometry = new BoxBufferGeometry(2, 1, 1)
    const drawRange = { start: 0, count: geometry.attributes.position.count / 2 }

    console.log(drawRange)

    return <>

        <mesh geometry={geometry} drawRange={drawRange}>
            <meshPhongMaterial
                color="#78cce2"
                smoothness={0}
            />
        </mesh>

    </>

}