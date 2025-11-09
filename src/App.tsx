import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects.tsx";
import About from "./components/About";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground.tsx";
import Experiences from "./components/Experiences.tsx";
import Footer from "./components/Footer.tsx";


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
              <Projects/>
          </div>
          <Contact/>
          <Footer/>
      </div>
  );
}

export default App;
