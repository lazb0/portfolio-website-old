import { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

const Stars = () => {
  const particles = useRef();

  const [clientPosition, setClientPosition] = useState([
    Math.random() * 1000,
    Math.random() * 1000,
  ]);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();

    particles.current.rotation.y =
      -clientPosition[1] * 0.25 * 0.5 * (elapsedTime * 0.00008);
    particles.current.rotation.x =
      clientPosition[0] * 0.25 * 0.5 * (elapsedTime * 0.00008);
  });

  useEffect(() => {
    const animateParticles = (e) => {
      if (e.clientX <= 100 || e.clientY <= 100) return;

      setClientPosition([e.clientX, e.clientY]);
    };

    document.addEventListener("mousemove", animateParticles);
    return () => document.removeEventListener("mousemove", animateParticles);
  }, []);

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
