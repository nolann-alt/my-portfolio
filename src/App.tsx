import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground.tsx";


function App() {
  return (
      <div className="relative min-h-screen bg-[#0E0E12]">
          <ParticlesBackground />
          <Navbar />
          <main>
              <section id="hero"><Hero /></section>
              <section id="projects"><Projects /></section>
              <section id="about"><About /></section>
              <section id="contact"><Contact /></section>
          </main>
      </div>
  );
}

export default App;
