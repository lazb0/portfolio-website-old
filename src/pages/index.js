import Hero from "../components/hero";
import Navbar from "../components/navbar";
import About from "../components/about";
import Timeline from "../components/timeline";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <main
        style={{
          background: "#1d2021",
          color: "#fbf1c7",
        }}
      >
        <Hero />
        <Navbar />
        <About />
        <Timeline />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
