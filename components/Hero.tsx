import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <span className="greeting">¡Hola! Mi nombre es</span>
        <h1>Juan Diego <span>Ramos Altamirano</span></h1>
        <h3 className="typing-text">Desarrollador <span>Java Backend</span> & Base de Datos</h3>
        <p className="hero-desc">
          Especializado en crear soluciones backend robustas con Spring Boot y experiencias interactivas en el frontend.
        </p>
        
        <div className="hero-socials">
          {/* LINK DE LINKEDIN */}
          <a href="https://www.linkedin.com/in/juan-diego-ramos-altamirano" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          
          {/* LINK DE GITHUB */}
          <a href="https://github.com/JuanDiego-2006" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
        </div>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Contrátame</a>
          {/* RUTA CORREGIDA CON /Portfolio PARA GITHUB PAGES */}
          <a href="/Portfolio/Juan_Diego_Ramos_Altamirano_CV.pdf" download="Juan_Diego_Ramos_Altamirano_CV.pdf" className="btn btn-secondary">Descargar CV</a>
        </div>
      </div>
    </section>
  );
}