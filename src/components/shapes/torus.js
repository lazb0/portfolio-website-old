import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { dampE } from "maath/easing";

const Torus = () => {
  const lines = useRef();

  useFrame((state, delta) => {
    const target = lines.current.rotation.y - 1;

    dampE(lines.current.rotation, [target, target, 0], 1, delta); //lines.current.rotation.x = lines.current.rotation.y += delta;
  });

  return (
    <>
      <mesh ref={lines} scale={0.85}>
        <torusGeometry args={[2, 1, 8, 15]} />
        <meshBasicMaterial size={0.1} wireframe side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default Torus;
