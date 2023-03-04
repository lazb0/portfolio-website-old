import { createUseStyles } from "react-jss";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import useScreenSize from "../hooks/use-screen-size";
import BurgerMenuIcon from "./burger-menu-icon";

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
  burgerMenuList: {
    display: "flex",
    listStyleType: "none",
    flexDirection: "column",
    gap: "5vw",
    fontSize: "1.25rem",
    color: "#282828",
    paddingLeft: "calc(10vw*-1)",
    marginTop: "15vh",
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
  const [mouseOver, setMouseOver] = useState(false);
  const [navbarShown, setNavbarShown] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const { screenWidth } = useScreenSize();

  useEffect(() => {
    document.body.style.overflowY = menuOpen ? "hidden" : "scroll";
  }, [menuOpen]);

  useEffect(() => {
    const viewportHeight = document.querySelector("#home").clientHeight;

    const onScroll = () => {
      const currPosition =
        document.body.scrollTop || document.documentElement.scrollTop;

      setNavbarSticky(currPosition > viewportHeight);

      setNavbarShown(currPosition < lastScrollPosition || mouseOver);

      setLastScrollPosition(currPosition);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollPosition, mouseOver, navbarSticky]);

  useEffect(() => {
    if (!navbarSticky) setNavbarShown(true);
  }, [navbarSticky]);

  const buttons = ["home", "about", "skills", "portfolio", "contact"];
  const _renderHorizontalMenu = () => {
    return (
      <ul className={Css.list}>
        {buttons.map((value, index) => (
          <Link to={value} smooth spy duration={200} key={index}>
            <li className={Css.button}>{value}</li>
          </Link>
        ))}
      </ul>
    );
  };

  const _renderBurgerMenu = () => {
    return (
      <div
        style={{
          ...(!menuOpen
            ? {
                height: 74,
              }
            : {
                height: "200vh",
                width: "100%",
                position: "fixed",
                transition: "all 0.25s ease-in-out",
                top: 0,
                zIndex: 999,
                background: "#8ec07c",
              }),
          padding: "0 10vw",
          background: "#8ec07c",
        }}
      >
        <BurgerMenuIcon
          onClick={() => setMenuOpen(!menuOpen)}
          open={menuOpen}
        />
        {menuOpen && (
          <ul className={Css.burgerMenuList}>
            {buttons.map((value, index) => (
              <Link
                to={value}
                smooth
                spy
                duration={200}
                key={index}
                onClick={() => setMenuOpen(false)}
              >
                <li className={Css.button}>{value}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <nav
      onMouseEnter={() => {
        setMouseOver(true);
      }}
      onMouseLeave={() => {
        setMouseOver(false);
      }}
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
        height: 74,
      }}
    >
      {screenWidth > 720 ? _renderHorizontalMenu() : _renderBurgerMenu()}
    </nav>
  );
};

export default Navbar;
