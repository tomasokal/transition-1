import { useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function Object(props)
{

    const { scene } = useThree()
    const { position } = props

    const [ height, setHeight ] = useState(0.5)

    const localPlane = new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), height )
    // const helper = new THREE.PlaneHelper( localPlane, 1, 0xffff00 )

    // scene.add( helper )

    useFrame((state) => {
    
        const t = state.clock.getElapsedTime() 
        let test = Math.sin(t) + 1.5
        console.log(test)
        localPlane.constant = test
    
      })

    return <>

        <mesh castShadow position={position}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshPhongMaterial
                color="yellow"
                wireframe={true}
                clipShadows
                clippingPlanes={[ localPlane ]}
            />   
        </mesh>

    </>
}