import { useRef } from 'react'
import * as THREE from 'three'

export default function Platform(props)
{

  const cylinderRef = useRef()

  const posX = props.position[0]
  const posY = props.position[1]
  const posZ = props.position[2]

  const newPosY = posY + 0.125 + props.height / 2

  const texture = new THREE.TextureLoader().load('/gradient.jpg')

  return <>

    <mesh position={[ posX, newPosY, posZ ]} ref={cylinderRef} >
      <cylinderGeometry args={[2, 2, props.height, 132, 1, true]} />
      {/* <primitive object={geometry} attach="geometry" /> */}
      <meshPhysicalMaterial
        alphaMap={texture}
        roughness={0.05}
        transmission={1}
        thickness={0.05}
        side={THREE.DoubleSide}
      />
    </mesh>

  </>
}