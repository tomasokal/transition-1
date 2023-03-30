
export default function Platform(props)
{

    return <>

        <mesh receiveShadow position={props.position}>
            <cylinderGeometry args={[2, 2, 0.25, 132]} />
            <meshPhongMaterial
                color="#78cce2"
                smoothness={0}
            />
        </mesh>

    </>
}