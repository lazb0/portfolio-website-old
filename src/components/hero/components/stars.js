import { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

const Stars = ({ trackMouse }) => {
  const particles = useRef();

  const [clientPosition, setClientPosition] = useState([
    Math.random() * 1000,
    Math.random() * 1000,
  ]);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    particles.current.rotation.x = clientPosition[0] * 0.001;
    particles.current.rotation.y =
      -clientPosition[1] * 0.001 - elapsedTime / 100;
  });

  useEffect(() => {
    const animateParticles = (e) => {
      if (!trackMouse) return;
      setClientPosition([e.clientX, e.clientY]);
    };

    document.addEventListener("mousemove", animateParticles);
    return () => document.removeEventListener("mousemove", animateParticles);
  }, [trackMouse]);

  const circleTexture = useLoader(TextureLoader, "/circle.png");

  const numParticles = 5000;

  const posArray = new Float32Array(numParticles * 3);

  for (let i = 0; i < numParticles * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * (Math.random() * 15);
  }

  return (
    <>
      <points ref={particles}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            count={numParticles}
            array={posArray}
            itemSize={3}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          map={circleTexture}
          size={0.01}
          transparent
        />
      </points>
    </>
  );
};

export default Stars;
