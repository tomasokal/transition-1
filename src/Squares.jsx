import { useHelper } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Square(props)
{

    const indexCheck = props.index == 0 ? true : false

    const meshRef = useRef()

    const angleByIndex = 360 / props.count
    const angle = props.index * angleByIndex
    
    const x = Math.sin(angle * Math.PI / 180) * props.radius
    const z = Math.cos(angle * Math.PI / 180) * props.radius

    const check1 = ( ( angle ) % 360 )
    const check2 = check1 * Math.PI / 180
    
    useEffect(() => {
        meshRef.current.position.set(x, 0, z)
        meshRef.current.rotation.set(0, check2, 0)
    }, [])

    
    console.log('Index:', props.index, indexCheck, angleByIndex, angle, x, z, check1, check2)

    return <>

        <mesh ref={meshRef}>
            <planeGeometry 
                args={[1, 2, 1]} 
            />
            <meshStandardMaterial 
                color = {indexCheck
                    ?"red"
                    :"blue"}
                side={THREE.DoubleSide}
            />
        </mesh>
    
    </>

}
  