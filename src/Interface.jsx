import { Html } from '@react-three/drei'

export default function Interface({ shape, setShape })
{

    return <>

        <Html
            as='div'
            center
        >
            <button onClick={() => setShape('sphere')}>Sphere</button>
            <button onClick={() => setShape('torus')}>Torus</button>
            <button onClick={() => setShape('pyramid')}>Pyramid</button>
        </Html>

    </>

}