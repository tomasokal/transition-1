import { Float, useMask } from '@react-three/drei'

export default function Object(props)
{

    const { position } = props

    const stencil = useMask(1, true)

    return <>

        <Float
            speed={2}
            floatingRange={[-0.25, 0.25]}
        >
            <mesh position={position}>
                <sphereGeometry args={[1, 64, 64]} />
                <meshStandardMaterial
                    color="yellow"
                    wireframe={true}
                    {...stencil}
                />
            </mesh>
        </Float>

    </>
}