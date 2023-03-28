import { OrbitControls } from '@react-three/drei'
import Platform from './Platform'
import Object from './Object'

export default function Experience()
{

    return <>

        <directionalLight position={[1, 2, 1.5]} intensity={0.5} castShadow />
        <OrbitControls makeDefault />
        
        <Platform position={[0, 0, 0]}/>

        <Object position={[0, 1.5, 0]}/>

    </>
}
