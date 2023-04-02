import * as THREE from 'three'

export default function Platform(props)
{

  const posX = props.position[0]
  const posY = props.position[1]
  const posZ = props.position[2]

  const newPosY = posY + 0.125 + props.height / 2

  const texture = new THREE.TextureLoader().load('/gradient.jpg')

  return <>

    <group>

      <mesh position={[ posX, newPosY, posZ ]} >
        <cylinderGeometry args={[2, 2, props.height, 132, 1, true]} />
        <meshPhysicalMaterial 
          color={[ 1, 1, 5 ]}
          alphaMap={texture}
          transparent={true}
          // roughness={0.55}
          transmission={0.25}
          thickness={0.05}
          side={THREE.DoubleSide}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

    </group>


  </>
}