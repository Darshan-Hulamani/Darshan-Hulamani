import "@/App.css";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <div className="App" style={{ overflowX: "clip" }}>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Certificates />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
