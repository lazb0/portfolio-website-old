import { createUseStyles } from "react-jss";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";

const useStyles = createUseStyles({
  main: {
    background: "#8ec07c",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
    color: "#1d2021",
    "& > * > a": {
      cursor: "pointer",
      color: "#1d2021",
    },
  },
  socialsWrapper: {
    display: "flex",
    gap: 4,
    fontSize: "1.75rem",

    "& > a:hover": {
      transform: "scale(1.1)",
    },
    marginBottom: 8,
  },
  recaptcha: {
    marginBottom: 4,
  },
});

const socials = [
  {
    href: "https://twitter.com/lazbo_dev",
    icon: RiTwitterFill,
  },
  {
    href: "https://github.com/lazb0",
    icon: RiGithubFill,
  },
  {
    href: "https://www.linkedin.com/in/lazbo/",
    icon: RiLinkedinFill,
  },

  {
    href: "https://www.instagram.com/lazbo_dev/",
    icon: RiInstagramFill,
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
      <div className={Css.recaptcha}>
        This site is protected by reCAPTCHA and the Google{" "}
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </div>
      <div>&copy; {new Date().getFullYear()} Lukáš Alois Zborník</div>
    </footer>
  );
};

export default Footer;
