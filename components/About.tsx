export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>Sobre <span>Mí</span></h2>
        <div className="line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <h3>Estudiante & Desarrollador Full Stack</h3>
          <p>
            Actualmente curso el 5to cuatrimestre en la Universidad Politécnica de Chiapas. 
            Me considero un apasionado por la tecnología, enfocado en construir arquitecturas limpias y eficientes. 
            Disfruto resolviendo problemas complejos utilizando principalmente el ecosistema de Java para el backend.
          </p>
          <p>
            En mi tiempo libre, me dedico a ver peliculas, series y escuchar. Como tambien me gusta dormir mucho y jugar videojuegos.
          </p>
        </div>
        
        <div className="about-info-grid">
          <div className="info-item">
            <span className="info-label">Nombre:</span>
            <span className="info-value">Juan Diego Ramos Altamirano</span>
          </div>
          <div className="info-item">
            <span className="info-label">Teléfono:</span>
            <span className="info-value">+52 555 123 4567</span>
          </div>
          <div className="info-item">
            <span className="info-label">Ubicación:</span>
            <span className="info-value">Tuxtla Gutiérrez, Chiapas</span>
          </div>
          <div className="info-item">
            <span className="info-label">Escuela:</span>
            <span className="info-value">2024-Presente</span>
          </div>
          <div className="info-item">
            <span className="info-label">Disponibilidad:</span>
            <span className="info-value accent-text">Abierto a oportunidades</span>
          </div>
        </div>
      </div>
    </section>
  );
}