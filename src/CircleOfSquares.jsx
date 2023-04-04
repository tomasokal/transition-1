import Square from './Squares'

export default function CircleOfSquares()
{

    const count = 7
    const radius = 10

    return <>
    
        <group>
            {Array.from({ length: count }).map((_, index) => (
                <Square key={index} index={index} count={count} radius={radius} />
            ))} 
        </group>
    
    </>

}