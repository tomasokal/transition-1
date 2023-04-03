import { useEffect, useRef } from 'react'

export default function Square(props)
{

    const meshRef = useRef()

    useEffect(() => {
        const angle = props.index * ((2 * Math.PI) / props.count)
        const x = Math.cos(angle) * props.radius
        const z = Math.sin(angle) * props.radius
        meshRef.current.position.set(x, 0, z)
        meshRef.current.rotation.y = angle
    }, [props.index, props.count, props.radius])

    return <>
    
        <mesh ref={meshRef}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    
    </>

}