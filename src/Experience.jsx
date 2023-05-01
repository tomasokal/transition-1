import { useState } from 'react'
import { OrbitControls } from '@react-three/drei'

import Interface from './Interface.jsx'
import Item from './Item.jsx'
import CircleOfSquares from './CircleOfSquares.jsx'

export default function Experience()
{

    const [shape, setShape] = useState('') 
    
    return <>

        <ambientLight intensity={0.5} />
        <OrbitControls makeDefault />

        <Item 
            shape={shape}
        />

        <Interface 
            shape={shape}
            setShape={setShape}
        />

        <CircleOfSquares count={50} radius={10} direction={1} speed={3} />
        <CircleOfSquares count={46} radius={9} direction={-1} speed={4} />
        <CircleOfSquares count={42} radius={8} direction={1} speed={5} />
        

    </>
}
