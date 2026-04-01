import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";

export default function App() {
  const [lang, setLang] = useState("zh");

  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh" }}>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Works lang={lang} />
    </div>
  );
}