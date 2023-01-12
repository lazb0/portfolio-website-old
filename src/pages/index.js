import Hero from "../components/hero";
import Navbar from "../components/navbar";
import About from "../components/about";

export default function Home() {
  return (
    <main
      style={{
        height: "300vh",
        background: "#1d2021",
        color: "#fbf1c7",
      }}
    >
      <Hero />
      <Navbar />
      <About />
    </main>
  );
}
