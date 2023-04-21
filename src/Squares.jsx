import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Square(props)
{

    const texture = new THREE.TextureLoader().load('/gradient.jpg')

    const meshRef = useRef()

    const divisions_by_index = 360 / props.count
    const angle_by_index = props.index * divisions_by_index

    const starting_height_by_index = ( Math.sin(props.index + props.count % 10 ) + 2 ) / 2
    const position_x = Math.sin(angle_by_index * Math.PI / 180) * props.radius
    const position_z = Math.cos(angle_by_index * Math.PI / 180) * props.radius

    const check2 = ( ( angle_by_index ) % 360 ) * Math.PI / 180
    
    useEffect(() => {
        meshRef.current.position.set(position_x, starting_height_by_index / 2, position_z)
        meshRef.current.rotation.set(0, check2, 0)
    }, [])

    return <>

        <mesh ref={meshRef}>
            <planeGeometry 
                args={[1, starting_height_by_index, 1]} 
            />
            {/* <meshStandardMaterial 
                color = {"blue"}
                side={THREE.DoubleSide}
            /> */}
            <meshPhysicalMaterial 
                color={[ 1, 1, 5 ]}
                // alphaMap={texture}
                transparent={true}
                roughness={0.15}
                transmission={0.75}
                thickness={0.05}
                side={THREE.DoubleSide}
                depthWrite={false}
                toneMapped={false}
            />
        </mesh>
    
    </>

}
  