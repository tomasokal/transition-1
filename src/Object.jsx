import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three'

export default function Object(props)
{
    const { position } = props

    const height_one = useControls('Height One', { value: 1.5, min: 0, max: 3, step: 0.25 })
    const height_two = useControls('Height Two', { value: 1.5, min: 0, max: 3, step: 0.25 })

    const localPlaneOne = new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), height_one.value )
    const localPlaneTwo = new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), height_two.value )

    return <>

        <group>

            <mesh castShadow position={position}>
                <sphereGeometry args={[1.01, 64, 64]} />
                <meshPhongMaterial
                    color="yellow"
                    clipShadows
                    clippingPlanes={[ localPlaneOne ]}
                />   
            </mesh>

            <mesh castShadow position={position}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshPhongMaterial
                    color="orange"
                    wireframe={true}
                    clipShadows
                    clippingPlanes={[ localPlaneTwo ]}
                />   
            </mesh>


        </group>


    </>
}