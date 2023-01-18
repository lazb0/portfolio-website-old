import { createUseStyles } from "react-jss";
import { Canvas } from "@react-three/fiber";
import Torus from "./shapes/torus";

const useStyles = createUseStyles({
  main: {
    padding: "100px 10vw",
    display: "flex",
    justifyContent: "space-around",
  },
  textWrapper: {
    maxWidth: "25vw",
    padding: "50px 0",
    alignSelf: "center",
  },
  header: {
    fontSize: "3rem",
    margin: 0,
    color: "#8ec07c",
  },
  shape: {
    width: "25vw",
    alignSelf: "stretch",
  },
});

const Timeline = () => {
  const Css = useStyles();

  return (
    <section className={Css.main} id="timeline">
      <div className={Css.textWrapper}>
        <h2 className={Css.header}>My timeline</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
          facilisis gravida neque convallis a cras semper. Diam sollicitudin
          tempor id eu nisl nunc mi ipsum faucibus. Risus in hendrerit gravida
          rutrum quisque non tellus orci. Consectetur a erat nam at lectus urna.
          Donec ultrices tincidunt arcu non sodales neque sodales ut. Aliquam
          malesuada bibendum arcu vitae elementum curabitur. Molestie nunc non
          blandit massa enim. Risus feugiat in ante metus dictum at tempor. Odio
          euismod lacinia at quis risus sed vulputate odio.
        </span>
      </div>
      <div className={Css.shape}>
        <Canvas>
          <Torus />
        </Canvas>
      </div>
    </section>
  );
};

export default Timeline;
