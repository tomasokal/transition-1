import Square from './Squares'

export default function CircleOfSquares()
{

    const count = 10
    const radius = 1

    return <>
    
        <group>
            {Array.from({ length: count }).map((_, index) => (
                <Square key={index} index={index} count={count} radius={radius} />
            ))} 
        </group>
    
    </>

}