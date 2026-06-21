"use client";

// Importamos los iconos de FontAwesome (fa)
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2>Ponte en <span>Contacto</span></h2>
        <div className="line"></div>
      </div>
      
      <div className="contact-container">
        {/* Tarjetas de Información Izquierdas */}
        <div className="contact-info-cards">
          
          <div className="contact-card">
            <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>📞</div>
            <h4>Teléfono</h4>
            <p>+52 555 123 4567</p>
          </div>
          
          <div className="contact-card">
            <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>📍</div>
            <h4>Ubicación</h4>
            <p>Tuxtla Gutiérrez, Chiapas</p>
          </div>
          
          <div className="contact-card">
            <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>🌐</div>
            <h4>Redes Sociales</h4>
            <div className="social-mini-links">
              {/* Enlaces actualizados con iconos */}
              <a href="https://linkedin.com/in/juan-diego-ramos-altamirano" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <FaLinkedin size={18} /> LinkedIn
              </a>
              <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 8px" }}>|</span>
              
              <a href="https://github.com/JuanDiego-2006" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <FaGithub size={18} /> GitHub
              </a>
              <span style={{ color: "rgba(255,255,255,0.2)", margin: "0 8px" }}>|</span>
              
              <a href="https://instagram.com/jdiego_altamirano" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <FaInstagram size={18} /> Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Formulario de Contacto Derecho */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="Tu Nombre" required />
            <input type="email" placeholder="Tu Email" required />
          </div>
          <input type="text" placeholder="Asunto" className="full-width" required />
          <textarea placeholder="Tu Mensaje..." rows={5} required></textarea>
          <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
}