import { Canvas } from "@react-three/fiber";
import Box from "./stars";

const Background = () => {
  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        zIndex: 1,
      }}
    >
      <Box />
    </Canvas>
  );
};

export default Background;
