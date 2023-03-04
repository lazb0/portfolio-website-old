import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";
import { dampE } from "maath/easing";

const Cube = () => {
  const lines = useRef();

  useFrame((state, delta) => {
    const target = lines.current.rotation.y + 1;

    dampE(lines.current.rotation, [target, target, 0], 1, delta); //lines.current.rotation.x = lines.current.rotation.y += delta;
  });

  return (
    <>
      <mesh ref={lines} scale={3}>
        <boxGeometry />
        <meshBasicMaterial size={0.1} wireframe side={DoubleSide} />
      </mesh>
    </>
  );
};

export default Cube;
