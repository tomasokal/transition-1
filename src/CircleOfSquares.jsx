import { useFrame } from '@react-three/fiber'
import Square from './Squares'
import { useRef } from 'react'

export default function CircleOfSquares(props)
{

    const circleRef = useRef()

    const count = props.count
    const radius = props.radius
    const direction = props.direction
    const speed = props.speed

    useFrame((state) => {
    
        // Get time variable.
        const t = state.clock.getElapsedTime() 
    
        // Rotate everything.
        circleRef.current.rotation.set(0, direction * t / speed, 0)
    
      })

    return <>
    
        <group ref={circleRef}>
            {Array.from({ length: count }).map((_, index) => (
                <Square key={index} index={index} count={count} radius={radius} />
            ))} 
        </group>
    
    </>

}