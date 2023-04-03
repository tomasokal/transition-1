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

        <CircleOfSquares />
        
        {/* <Platform position={[0, 0, 0]} /> */}
        {/* <PlatformEffect position={[0, 0, 0]} height={1}/> */}

    </>
}
