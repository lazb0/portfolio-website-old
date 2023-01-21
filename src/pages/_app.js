import { useEffect } from "react";
import injectSheet from "react-jss";
import "../styles/_app.css";

const style = {
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Sofia Sans', sans-serif",
    },
    html: {
      margin: 0,
      padding: 0,
    },
    ".grecaptcha-badge": {
      visibility: "hidden",
    },
  },
};

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const style = document.getElementById("server-side-styles");
    if (style && style.parentNode) {
      style.parentNode.removeChild(style);
    }
  }, []);

  return <Component {...pageProps} />;
};

export default injectSheet(style)(App);
