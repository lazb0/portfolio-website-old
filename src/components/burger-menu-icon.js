import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  burger: {
    width: 30,
    aspectRatio: "4/3",
    position: "relative",
    top: 20,
    transform: "rotate(0deg)",
    transition: ".5s ease-in-out",
    cursor: "pointer",
    background: "transparent",
    border: "0",
    "& > div": {
      display: "block",
      position: "absolute",
      height: "20%",
      width: "100%",
      background: "black",
      left: 0,
      transform: "rotate(0deg)",
      transition: ".25s ease-in-out",
    },
    "& > div:nth-child(1)": {
      top: 0,
    },
    "& > div:nth-child(2), div:nth-child(3)": {
      top: "50%",
    },
    "& > div:nth-child(4)": {
      top: "100%",
    },
  },
});

const BurgerMenuIcon = ({ open, onClick }) => {
  const Css = useStyles();

  return (
    <button className={Css.burger} onClick={onClick}>
      <div
        style={
          open
            ? {
                top: "50%",
                width: 0,
                left: "50%",
              }
            : undefined
        }
      />
      <div
        style={
          open
            ? {
                transform: "rotate(45deg)",
              }
            : undefined
        }
      />
      <div
        style={
          open
            ? {
                transform: "rotate(-45deg)",
              }
            : undefined
        }
      />
      <div
        style={
          open
            ? {
                top: "50%",
                width: 0,
                left: "50%",
              }
            : undefined
        }
      />
    </button>
  );
};

export default BurgerMenuIcon;
