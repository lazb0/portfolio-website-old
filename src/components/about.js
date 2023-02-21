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
  paragraph: {
    margin: "4px 0",
  },
});

const About = () => {
  const Css = useStyles();

  return (
    <section className={Css.main} id="about">
      <div className={Css.shape}>
        <Canvas>
          <Cube />
        </Canvas>
      </div>
      <div className={Css.textWrapper}>
        <h2 className={Css.header}>About</h2>
        <p className={Css.paragraph}>
          I&apos;m Lukáš Alois Zborník a Software Developer, Linux Enthusiast
          and currently still a student. I study System & Network administration
          in Pilsen, Czech Republic and I&apos;m partially employed at Unicorn.
          I started programming at twelve and I wanted to become game dev. I
          used to make small 2D games in Unity. In high school I started with
          Java and Web dev, I also fully switched to linux around that time. In
          2022 I got employed at Unicorn and focused on web applications. Now
          I&apos;m looking forward to finish the high school then hopefully
          become Digital Nomad and travel the world.
        </p>
      </div>
    </section>
  );
};

export default About;
