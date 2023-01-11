import Background from "./components/background";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    position: "relative",
    display: "grid",
    placeContent: "center",
    height: "100vh",
    color: "white",
  },
  textWrapper: {
    zIndex: 999,
    textAlign: "center",
    "& > h1": {
      fontSize: "4rem",
      margin: 0,
    },
    "& > h2": {
      margin: 0,
      fontSize: "2rem",
    },
  },
  button: {
    padding: "8px 20px",
    marginTop: 10,
    background: "transparent",
    border: "0",
    color: "white",
    fontSize: "1.2rem",
    borderRadius: 5,
    cursor: "pointer",
    margin: "0 auto",
    "&:hover": {
      background: "white",
      color: "black",
    },
  },
});

const Hero = () => {
  const Css = useStyles();

  return (
    <div className={Css.main}>
      <Background />
      <div className={Css.textWrapper}>
        <h1>I&apos;m Lukáš Alois Zborník</h1>
        <h2>Software Developer & Linux Enthusiast</h2>
        <button className={Css.button}>ls ~/my-work/</button>
      </div>
    </div>
  );
};

export default Hero;
