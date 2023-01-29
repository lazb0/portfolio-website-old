import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <title>Lukáš Alois Zborník - Software Developer | Portfolio</title>
      <meta
        name="description"
        content="Software Developer and Linux Enthusiast, Lukáš Alois Zborník's portfolio. Explore my skills and past projects on my website."
      />
      <meta
        name="keywords"
        content="Lukáš, Alois, Zborník, Software, Developer, Linux, Portfolio"
      />
      <meta name="author" content="Lukáš Alois Zborník" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      <meta
        property="og:title"
        content="Lukáš Alois Zborník - Software Developer | Portfolio"
      />
      <meta
        property="og:description"
        content="Software Developer and Linux Enthusiast, Lukáš Alois Zborník's portfolio. Explore my skills and past projects on my website."
      />
      <meta property="og:image" content="https://lazbo.dev/meta/ogImage.png" />
      <meta property="og:url" content="https://lazbo.dev/" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Lukáš Alois Zborník - Software Developer | Portfolio"
      />
      <meta
        name="twitter:description"
        content="Software Developer and Linux Enthusiast, Lukáš Alois Zborník's portfolio. Explore my skills and past projects on my website."
      />
      <meta
        name="twitter:image"
        content="https://lazbo.dev/meta/twitterImage.png"
      />
    </Head>
  );
};

export default MetaTags;
