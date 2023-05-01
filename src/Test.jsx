import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import { MeshWobbleMaterial } from "drei";

function Cube(props) {
  return (
    <mesh {...props}>
      <boxBufferGeometry />
      <MeshWobbleMaterial color={"#00FF00"} speed={2} factor={0.6} />
    </mesh>
  );
}

function Sphere(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry />
      <MeshWobbleMaterial color={"#FF0000"} speed={2} factor={0.6} />
    </mesh>
  );
}

function Pyramid(props) {
  return (
    <mesh {...props}>
      <coneBufferGeometry />
      <MeshWobbleMaterial color={"#0000FF"} speed={2} factor={0.6} />
    </mesh>
  );
}

export default function Test() {
  const [shape, setShape] = useState("cube");

  function handleCubeClick() {
    setShape("cube");
  }

  function handleSphereClick() {
    setShape("sphere");
  }

  function handlePyramidClick() {
    setShape("pyramid");
  }

  return (
    <>
      <Canvas>
        {shape === "cube" && <Cube position={[0, 2, 0]} />}
        {shape === "sphere" && <Sphere position={[0, 2, 0]} />}
        {shape === "pyramid" && <Pyramid position={[0, 2, 0]} />}
      </Canvas>
      <div>
        <button onClick={handleCubeClick}>Cube</button>
        <button onClick={handleSphereClick}>Sphere</button>
        <button onClick={handlePyramidClick}>Pyramid</button>
      </div>
    </>
  );
}