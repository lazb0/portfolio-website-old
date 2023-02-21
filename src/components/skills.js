import { createUseStyles } from "react-jss";
import { Canvas } from "@react-three/fiber";
import Torus from "./shapes/torus";
import { Link } from "react-scroll";
import * as NextLink from "next/link";

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
  text: {
    margin: 0,
  },
  link: {
    textDecoration: "underline",
    cursor: "pointer",
  },
  shape: {
    width: "25vw",
    alignSelf: "stretch",
  },
  CVbutton: {
    padding: "6px 8px",
    marginTop: 15,
    background: "transparent",
    border: "0",
    color: "#8ec07c",
    fontSize: "1rem",
    borderRadius: 5,
    cursor: "pointer",
    margin: "0 auto",
    "&:hover": {
      background: "#8ec07c",
      color: "#1d2021",
    },
  },
});

const Skills = () => {
  const Css = useStyles();

  return (
    <section className={Css.main} id="skills">
      <div className={Css.textWrapper}>
        <h2 className={Css.header}>Skills</h2>
        <p className={Css.text}>
          I know little bit of everything from Hardware to Software, from C to
          JavaScript. I am most comfortable and experienced with these
          technologies <strong>React-based frameworks, Node.JS, Linux</strong>.
          I mostly made small uninteresting projects, but few bigger ones are
          listed{" "}
          <Link to="portfolio" smooth spy duration={200} className={Css.link}>
            down below
          </Link>
          . I have also experience with SEO optimization and page responsivity.
          And I am still learning new things mostly trough courses. I&apos;m
          currently enrolled in <strong>cs50x</strong> and{" "}
          <strong>CCNA2v7</strong>.
        </p>
        <NextLink href="/CV.pdf" rel="noreferrer nofollow" target="_blank">
          <button className={Css.CVbutton}>Curriculum Vitae</button>
        </NextLink>
      </div>
      <div className={Css.shape}>
        <Canvas>
          <Torus />
        </Canvas>
      </div>
    </section>
  );
};

export default Skills;
