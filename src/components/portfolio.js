import { createUseStyles } from "react-jss";
import Image from "next/image";
import { RiCodeSSlashFill, RiLayoutFill } from "react-icons/ri";

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
    textAlign: "center",
    margin: 0,
    color: "#8ec07c",
  },
  grid: {
    display: "grid",
    gap: 32,
    gridTemplateColumns: "1fr 1fr",
    "& > div": {
      borderRadius: 5,
      border: "1px white solid",
      padding: 5,
    },
  },
  imageWrapper: {
    position: "relative",
    height: 250,
    width: 250,
    "& > img": {
      objectFit: "cover",
    },
    background: "white",
  },
});

const items = [
  {
    label: "This site",
    imageSrc: "lazbo-eu",
    description: "My portfolio website build mainly with Next JS and Three JS",
    code: "https://github.com/lazb0/portfolio-website",
    site: "https://lazbo.eu",
  },
  {
    label: "Lorem ipsum",
    imageSrc: "",
    description: "",
    code: "",
    site: "",
  },
  {
    label: "Lorem ipsum",
    imageSrc: "",
    description: "",
    code: "",
    site: "",
  },
  {
    label: "Lorem ipsum",
    imageSrc: "",
    description: "",
    code: "",
    site: "",
  },
];

const Portfolio = () => {
  const Css = useStyles();

  const _renderItems = () => {
    return items.map((value, index) => (
      <div key={index}>
        <div className={Css.imageWrapper}>
          <Image
            alt="Project Image"
            src={`/portfolio-images/${value.imageSrc}.png`}
            fill
          />
        </div>
        {value.label}
        <span>{value.description}</span>
        {value.code && (
          <a href={value.code}>
            <RiCodeSSlashFill />
          </a>
        )}
        {value.site && (
          <a href={value.site}>
            <RiLayoutFill />
          </a>
        )}
      </div>
    ));
  };

  return (
    <div className={Css.main} id="portfolio">
      <div className={Css.textWrapper}>
        <h2 className={Css.header}>Portfolio</h2>
        <div className={Css.grid}>{_renderItems()}</div>
      </div>
    </div>
  );
};

export default Portfolio;
