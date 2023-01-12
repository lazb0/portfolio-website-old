import { Canvas } from "@react-three/fiber";
import Stars from "./stars";

const Background = ({ trackingMouse }) => {
  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        zIndex: 1,
      }}
    >
      <Stars trackMouse={trackingMouse} />
    </Canvas>
  );
};

export default Background;
