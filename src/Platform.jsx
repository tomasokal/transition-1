
export default function Platform(props)
{

    const { position } = props

    return <>

        <mesh position={position}>
            <cylinderGeometry args={[2, 2, 0.25, 132]} />
            <meshPhongMaterial
                color="#78cce2"
                smoothness={0}
            />
        </mesh>

    </>
}