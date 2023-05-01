import { MeshWobbleMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'
import { lerp } from 'three/src/math/MathUtils'

function ItemCube()
{
    return <>
    
        <mesh>
            <boxBufferGeometry />
            <MeshWobbleMaterial color={"#00FF00"} speed={2} factor={0.6} />
        </mesh> 
    
    </>
    
}

function ItemSphere({ shape })
{

    const planeHeightLayerOne = new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), -3 )
    const planeHeightLayerTwo = new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), -9 )

    useFrame((state, delta) => {

        if (shape === 'sphere')
        {
            planeHeightLayerOne.constant += delta * 4
            planeHeightLayerTwo.constant += delta * 4
        } else
        {
            planeHeightLayerOne.constant = -3
            planeHeightLayerTwo.constant = -9
        }

    })

    return <>
    
        <group>

            <mesh castShadow>
                <sphereGeometry args={[3.1, 64, 64]} />
                <meshPhongMaterial
                    color="yellow"
                    clipShadows
                    clippingPlanes={[ planeHeightLayerTwo ]}
                />   
            </mesh>

            <mesh castShadow>
                <sphereGeometry args={[3, 64, 64]} />
                <meshPhongMaterial
                    color="orange"
                    wireframe={true}
                    clipShadows
                    clippingPlanes={[ planeHeightLayerOne ]}
                />   
            </mesh>

        </group>
    
    </>
    
}

function ItemPyramid()
{
    return <>
    
        <mesh>
            <coneBufferGeometry />
            <MeshWobbleMaterial color={"#00FF00"} speed={2} factor={0.6} />
        </mesh> 
    
    </>
    
}

export default function Item({ shape })
{

    return <>

        {shape === "cube" && <ItemCube />}
        {shape === "sphere" && <ItemSphere shape={shape} />}
        {shape === "pyramid" && <ItemPyramid />}
    
    </>

}