import { OrbitControls } from '@react-three/drei'

import Platform from './Platform'
import PlatformEffect from './PlatformEffect'
import CircleOfSquares from './CircleOfSquares'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

export default function Experience()
{
    
    return <>

        <EffectComposer>
            <Bloom mipmapBlur />
        </EffectComposer>

        {/* <directionalLight position={[1, 2, 1.5]} intensity={0.5} castShadow /> */}
        <ambientLight intensity={0.5} />
        <OrbitControls makeDefault />

        <CircleOfSquares count={50} radius={10} direction={1} speed={3} />
        <CircleOfSquares count={46} radius={9} direction={-1} speed={4} />
        <CircleOfSquares count={42} radius={8} direction={1} speed={5} />
        
        {/* <Platform position={[0, 0, 0]} /> */}
        {/* <PlatformEffect position={[0, 0, 0]} height={1}/> */}

    </>
}
