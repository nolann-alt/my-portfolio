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
          <div className="p-5 md:px-[15%]">
              <Navbar />
              <Hero/>
          </div>
          <About/>
          <Projects/>
          <Contact/>
      </div>
  );
}

export default App;
