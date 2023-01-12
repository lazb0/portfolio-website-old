import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Cube = () => {
  const lines = useRef();

  useFrame(() => {
    let fixedRotation = parseFloat(
      (lines.current.rotation.y + 0.005).toFixed(3)
    );
    lines.current.rotation.x = lines.current.rotation.y = fixedRotation;
  });

  return (
    <>
      <mesh ref={lines}>
        <boxBufferGeometry args={[3.5, 3.5, 3.5]} />
        <meshBasicMaterial
          attach="material"
          size={0.1}
          wireframe
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

export default Cube;
