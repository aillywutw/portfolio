import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";

export default function App() {
  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Works />
    </div>
  );
}