import { createUseStyles } from "react-jss";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const useStyles = createUseStyles({
  list: {
    display: "flex",
    listStyleType: "none",
    gap: "5vw",
    padding: "20px 0 20px 10vw",
    fontSize: "1.25rem",
    background: "#8ec07c",
    color: "#282828",
    margin: 0,
  },
  button: {
    padding: "5px 10px",
    cursor: "pointer",
    fontWeight: "normal",
    width: 70.75,
    "&:hover": {
      fontWeight: 600,
    },
  },
});

const Navbar = () => {
  const Css = useStyles();

  const [navbarSticky, setNavbarSticky] = useState(false);
  const [navbarShown, setNavbarShown] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const viewportHeight = document.querySelector("#home").clientHeight;

    const onScroll = () => {
      const currPosition =
        document.body.scrollTop || document.documentElement.scrollTop;

      setNavbarSticky(currPosition > viewportHeight);

      setNavbarShown(currPosition < lastScrollPosition);

      setLastScrollPosition(currPosition);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollPosition, navbarSticky]);

  useEffect(() => {
    if (!navbarSticky) setNavbarShown(true);
  }, [navbarSticky]);

  const buttons = ["home", "about", "timeline", "portfolio", "contact"];
  const _renderButtons = () => {
    return buttons.map((value, index) => (
      <li key={index} className={Css.button}>
        <Link
          to={value}
          smooth
          spy
          duration={200}
          onClick={() => setTimeout(() => setNavbarShown(false), 500)}
        >
          {value}
        </Link>
      </li>
    ));
  };

  return (
    <nav
      style={{
        ...(navbarSticky
          ? {
              position: "sticky",
              top: 0,
              zIndex: 999,
              transition: "all 0.5s ease-in-out",
              transform: `translateY(${navbarShown ? "0" : "-100"}%)`,
              transitionDelay: navbarShown ? "0s" : "0.5s",
            }
          : {}),
      }}
    >
      <ul className={Css.list}>{_renderButtons()}</ul>
    </nav>
  );
};

export default Navbar;
