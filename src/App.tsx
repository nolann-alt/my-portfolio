import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground.tsx";
import Experiences from "./components/Experiences.tsx";


function App() {
  return (
      <div className="relative min-h-screen bg-[#0E0E12]">
          <ParticlesBackground />
          <Navbar />
          <div className="p-5 md:px-[15%]">
              <Hero/>
          </div>
          <About/>
          <div className="p-5 md:px-[15%]">
              <Experiences/>
          </div>
          <Projects/>
          <Contact/>
      </div>
  );
}

export default App;
