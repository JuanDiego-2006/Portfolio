import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import SoftSkills from "../components/SoftSkills";
import Certificates from "../components/Certificates";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <h2 className="logo">JDRA<span>.</span></h2>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
      
      <main>
        <Hero />
        <About />
        <SoftSkills />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <footer className="footer">
        <p>© 2026 Juan Diego Ramos Altamirano. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}