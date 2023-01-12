import { createUseStyles } from "react-jss";
import { Canvas } from "@react-three/fiber";
import Cube from "./shapes/cube";

const useStyles = createUseStyles({
  main: {
    padding: "100px 10vw",
    display: "flex",
    justifyContent: "space-around",
  },
  textWrapper: {
    maxWidth: "25vw",
    padding: "50px 0",
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

const About = () => {
  const Css = useStyles();

  return (
    <div className={Css.main} id="about">
      <div className={Css.shape}>
        <Canvas>
          <Cube />
        </Canvas>
      </div>
      <div className={Css.textWrapper}>
        <h2 className={Css.header}>About me</h2>
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
    </div>
  );
};

export default About;
