import { Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ItemCube({ shape })
{

    const planeHeightLayerOne = new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), 2 )
    const planeHeightLayerTwo = new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), -4 )

    useFrame((state, delta) => {

        if (shape === 'cube')
        {
            planeHeightLayerOne.constant += delta * 5
            planeHeightLayerTwo.constant += delta * 5
        } else
        {
            planeHeightLayerOne.constant = 2
            planeHeightLayerTwo.constant = -4
        }

    })

    return <>
    
        <group position={[ 0, 5, 0 ]}>

            <mesh castShadow>
                <boxGeometry args={[6.025, 6.025, 6.025]} />
                <meshPhongMaterial
                    color="yellow"
                    clipShadows
                    clippingPlanes={[ planeHeightLayerTwo ]}
                />   
            </mesh>

            <mesh castShadow>
                <boxGeometry args={[6, 6, 6]} />
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

function ItemSphere({ shape })
{

    const planeHeightLayerOne = new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), 2 )
    const planeHeightLayerTwo = new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), -4 )

    useFrame((state, delta) => {

        if (shape === 'sphere')
        {
            planeHeightLayerOne.constant += delta * 5
            planeHeightLayerTwo.constant += delta * 5
        } else
        {
            planeHeightLayerOne.constant = 2
            planeHeightLayerTwo.constant = -4
        }

    })

    return <>
    
        <group position={[ 0, 5, 0 ]}>

            <mesh castShadow>
                <sphereGeometry args={[3.025, 64, 64]} />
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

function ItemPyramid({ shape })
{

    const planeHeightLayerOne = new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), 2 )
    const planeHeightLayerTwo = new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), -4 )

    useFrame((state, delta) => {

        if (shape === 'pyramid')
        {
            planeHeightLayerOne.constant += delta * 5
            planeHeightLayerTwo.constant += delta * 5
        } else
        {
            planeHeightLayerOne.constant = 2
            planeHeightLayerTwo.constant = -4
        }

    })

    return <>
    
        <group position={[ 0, 5, 0 ]}>

            <mesh castShadow>
                <sphereGeometry args={[3.025, 64, 64]} />
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

export default function Item({ shape })
{

    return <>

        <Float>
            {shape === "cube" && <ItemCube shape={shape} />}
            {shape === "sphere" && <ItemSphere shape={shape} />}
            {shape === "pyramid" && <ItemPyramid shape={shape} />}
        </Float>
    
    </>

}