import { createUseStyles } from "react-jss";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

const useStyles = createUseStyles({
  main: {
    background: "#8ec07c",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
    color: "#1d2021",
  },
  socialsWrapper: {
    display: "flex",
    gap: 4,
    fontSize: "1.75rem",
    "& > a": {
      cursor: "pointer",
      color: "#1d2021",
    },
    "& > a:hover": {
      transform: "scale(1.1)",
    },
  },
});

const socials = [
  {
    href: "https://github.com/lazb0",
    icon: RiGithubFill,
  },
  {
    href: "https://www.linkedin.com/in/luk%C3%A1%C5%A1-alois-zborn%C3%ADk-b2a541234/",
    icon: RiLinkedinFill,
  },
];

const Footer = () => {
  const Css = useStyles();

  const _renderSocials = () => {
    return socials.map((value, index) => (
      <a
        href={value.href}
        key={index}
        rel="noreferrer nofollow"
        target="_blank"
      >
        <value.icon />
      </a>
    ));
  };

  return (
    <footer className={Css.main}>
      <div className={Css.socialsWrapper}>{_renderSocials()}</div>
      <div>&copy; {new Date().getFullYear()} Lukáš Alois Zborník</div>
    </footer>
  );
};

export default Footer;
