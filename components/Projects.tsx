import React from 'react';

export default function Projects() {
  const projectList = [
    {
      title: "Adopt-Me",
      role: "Frontend Developer",
      description: "Desarrollo del frontend utilizando HTML, CSS y JS para una app con chat en tiempo real y dashboard. Backend soportado en Java (Spring Boot).",
      tags: ["HTML", "CSS", "JS", "Spring Boot", "MySQL"],
      image: "/Portfolio/adopt-me.png" // Corregido para GitHub Pages
    },
    {
      title: "HarmoNet",
      role: "Backend / Full Stack",
      description: "Plataforma diseñada para ayudar a músicos independientes a promocionar su trabajo y conectar con sus audiencias.",
      tags: ["Java", "SQL"],
      image: "/Portfolio/harmonet.png" // Corregido para GitHub Pages
    },
    {
      title: "UniRaite",
      role: "Mobile Developer",
      description: "App Android enfocada en el viaje compartido (carpooling) entre estudiantes para mejorar la movilidad universitaria.",
      tags: ["Android", "Movilidad"],
      image: "/Portfolio/logouniraite.png" // Corregido para GitHub Pages
    },
    {
      title: "ErgoHabit",
      role: "Android Developer",
      description: "App móvil para monitoreo de postura. Utiliza algoritmos y sensores de hardware (acelerómetro/giroscopio) para alertas de hábitos.",
      tags: ["Android", "Sensores", "Kotlin"],
      image: "" 
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2>Mis <span>Proyectos</span></h2>
        <div className="line"></div>
      </div>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            
            {/* Contenedor de la Imagen */}
            <div className="project-image-placeholder">
              {project.image ? (
                /* El siguiente comentario desactiva la advertencia amarilla de Next.js */
                /* eslint-disable-next-line @next/next/no-img-element */
                <img 
                  src={project.image} 
                  alt={`Captura de ${project.title}`} 
                  className="project-img" 
                />
              ) : (
                <div className="empty-img-text">En desarrollo...</div>
              )}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <span className="project-role">{project.role}</span>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}