import Hero from "../components/hero";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main
      style={{
        height: "300vh",
      }}
    >
      <Hero />
      <Navbar />
    </main>
  );
}
