import Hero from "../components/hero";
import Navbar from "../components/navbar";
import About from "../components/about";
import Skills from "../components/skills";
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
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
