import { useEffect } from "react";
import injectSheet from "react-jss";
import "../styles/_app.css";
import Script from "next/script";
import MetaTags from "../components/meta-tags";

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

  return (
    <>
      <MetaTags />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script strategy="afterInteractive" id="gtag-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
};

export default injectSheet(style)(App);
