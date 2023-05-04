import { Float, useMatcapTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import * as THREE from 'three'

function ItemSphere({ shape, texture })
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
                <meshMatcapMaterial
                    matcap={ texture }
                    clipShadows
                    clippingPlanes={[ planeHeightLayerTwo ]}
                />  
            </mesh>

            <mesh castShadow>
                <sphereGeometry args={[3, 64, 64]} />
                <meshBasicMaterial
                    color="white"
                    wireframe={true}
                    clipShadows
                    clippingPlanes={[ planeHeightLayerOne ]}
                />   
            </mesh>

        </group>
    
    </>
    
}

function ItemTorus({ shape, texture })
{

    const planeHeightLayerOne = new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), 2 )
    const planeHeightLayerTwo = new THREE.Plane( new THREE.Vector3( 0, - 1, 0 ), -4 )
    const planeHeightLayerThree = new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), -4 )

    useFrame((state, delta) => {

        if (shape === 'torus')
        {
            planeHeightLayerOne.constant += delta * 5
            planeHeightLayerTwo.constant += delta * 5
            planeHeightLayerThree.constant += delta * 5
        } else
        {
            planeHeightLayerOne.constant = 2
            planeHeightLayerTwo.constant = -4
            planeHeightLayerThree.constant = -4
        }

    })

    return <>
    
        <group position={[ 0, 5, 0 ]}>

            <mesh castShadow>
                <torusGeometry args={[1.785, 1.3, 64, 64]} />
                <meshMatcapMaterial
                    matcap={ texture }
                    clipShadows
                    clippingPlanes={[ planeHeightLayerTwo ]}
                />    
            </mesh>

            <mesh>
                <torusGeometry args={[1.75, 1.25, 64, 64]} />
                <meshBasicMaterial
                    color="white"
                    wireframe={true}
                    clipShadows
                    clippingPlanes={[ planeHeightLayerOne ]}
                />   
            </mesh>

        </group>
    
    </>
    
}

function ItemPyramid({ shape, texture })
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
                <coneGeometry args={[2.55, 4.35, 3, 1]} />
                <meshMatcapMaterial
                    matcap={ texture }
                    clipShadows
                    clippingPlanes={[ planeHeightLayerTwo ]}
                />   
            </mesh>

            <mesh>
                <coneGeometry args={[2.5, 4.3, 3, 1]} />
                <meshBasicMaterial
                    color="white"
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

    const [ texture1 ] = useMatcapTexture('36220C_C6C391_8C844A_8B7B4C', 256)
    const [ texture2 ] = useMatcapTexture('36312E_726461_59504D_645C5C', 256)
    const [ texture3 ] = useMatcapTexture('36C8FA_176ACB_24A7EF_1D93EC', 256)
    const [ texture4 ] = useMatcapTexture('385264_A1D3E2_86ADC1_6E94A8', 256)
    const [ texture5 ] = useMatcapTexture('392307_B3AE7D_6D5618_847C42', 256)
    const [ texture6 ] = useMatcapTexture('3A3329_C9B090_928069_A9957A', 256)

    const [ randomTexture, setRandomTexture ] = useState(texture1)

    useEffect(() => {
        const textures = [ texture1, texture2, texture3, texture4, texture5, texture6 ]
        const selectedTexture = textures[Math.floor(Math.random() * textures.length)]
        setRandomTexture(selectedTexture)
        console.log(Math.floor(Math.random() * textures.length))
    }, [ shape ])

    return <>

        <Float>
            {shape === "sphere" && <ItemSphere shape={shape} texture={randomTexture} />}
            {shape === "torus" && <ItemTorus shape={shape} texture={randomTexture} />}
            {shape === "pyramid" && <ItemPyramid shape={shape} texture={randomTexture} />}
        </Float>
    
    </>

}