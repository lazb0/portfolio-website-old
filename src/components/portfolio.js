import { createUseStyles } from "react-jss";
import Image from "next/image";
import { RiCodeSSlashFill, RiLayoutFill } from "react-icons/ri";

const useStyles = createUseStyles({
  main: {
    padding: "100px 10vw",
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
  },
  header: {
    fontSize: "3rem",
    margin: 0,
    color: "#8ec07c",
    alignSelf: "center",
  },
  grid: {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(3, 1fr)",
    justifyContent: "center",
    marginTop: 16,
  },
  item: {
    aspectRatio: "1",
    position: "relative",
    width: 250,
    border: "1px solid #3c3836",
    "&:hover > div:first-child": {
      height: "calc(100% - 16px)",
      backgroundColor: "rgba(142,192,124,0.85)",
    },
    "&:hover > div:first-child > div": {
      opacity: 1,
      pointerEvents: "auto",
      transitionDelay: "0.3s",
    },
  },
  itemLine: {
    position: "absolute",
    backgroundColor: "#8ec07c",
    color: "#1d2021",
    zIndex: 10,
    bottom: 0,
    transition: "all 0.5s ease-in-out",
    width: "100%",
    height: "1.5rem",
    textAlign: "center",
    padding: "8px 0",
  },
  label: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  additionalInfo: {
    opacity: 0,
    transition: "all 0.2s ease-in-out",
    transitionDelay: "0s",
    pointerEvents: "none",
    fontSize: "1.25rem",
    marginTop: 16,
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: 8,
    position: "absolute",
    bottom: 16,
    width: "100%",
    "& > a": {
      cursor: "pointer",
      color: "#1d2021",
      fontSize: "1.5rem",
    },
    "& > a:hover": {
      transform: "scale(1.1)",
    },
  },
});

const items = [
  {
    label: "This site",
    imageSrc: "lazbo-dev",
    description: "My portfolio website build mainly with Next JS and Three JS",
    code: "https://github.com/lazb0/portfolio-website",
    site: "https://lazbo.dev",
  },
  {
    label: "This site",
    imageSrc: "lazbo-dev",
    description: "My portfolio website build mainly with Next JS and Three JS",
    code: "https://github.com/lazb0/portfolio-website",
    site: "https://lazbo.dev",
  },
  {
    label: "This site",
    imageSrc: "lazbo-dev",
    description: "My portfolio website build mainly with Next JS and Three JS",
    code: "https://github.com/lazb0/portfolio-website",
    site: "https://lazbo.dev",
  },
  {
    label: "This site",
    imageSrc: "lazbo-dev",
    description: "My portfolio website build mainly with Next JS and Three JS",
    code: "https://github.com/lazb0/portfolio-website",
    site: "https://lazbo.dev",
  },
  {
    label: "This site",
    imageSrc: "lazbo-dev",
    description: "My portfolio website build mainly with Next JS and Three JS",
    code: "https://github.com/lazb0/portfolio-website",
    site: "https://lazbo.dev",
  },
  {
    label: "This site",
    imageSrc: "lazbo-dev",
    description: "My portfolio website build mainly with Next JS and Three JS",
    code: "https://github.com/lazb0/portfolio-website",
    site: "https://lazbo.dev",
  },
];

const Portfolio = () => {
  const Css = useStyles();

  const _renderItems = () => {
    return items.map((value, index) => (
      <div key={index} className={Css.item}>
        <div className={Css.itemLine}>
          <span className={Css.label}>{value.label}</span>
          <div className={Css.additionalInfo}>
            <span>{value.description}</span>
            <div className={Css.buttons}>
              {value.code && (
                <a href={value.code} rel="noreferrer nofollow" target="_blank">
                  <RiCodeSSlashFill />
                </a>
              )}
              {value.site && (
                <a href={value.site} rel="noreferrer nofollow" target="_blank">
                  <RiLayoutFill />
                </a>
              )}
            </div>
          </div>
        </div>
        <Image
          alt="Project Image"
          src={`/portfolio-images/${value.imageSrc}.png`}
          fill
        />
      </div>
    ));
  };

  return (
    <section className={Css.main} id="portfolio">
      <h2 className={Css.header}>Portfolio</h2>
      <div className={Css.grid}>{_renderItems()}</div>
    </section>
  );
};

export default Portfolio;
