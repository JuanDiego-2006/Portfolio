import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Certificates() {
  const certs = [
    { 
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations", 
      issuer: "AWS Academy", 
      date: "2025",
      link: "https://www.credly.com/earner/earned/badge/382dd357-f328-444c-b8ef-02ed4203ddf0" // <-- REEMPLAZA ESTO
    },
    { 
      title: "Fundamentos de ChatGPT", 
      issuer: "Santander | OpenAcademy", 
      date: "2025",
      link: "https://drive.google.com/file/d/1SG6ZhSvsvUR5Q9fC1gIBUVRNBVIkJwzW/view?usp=sharing" // <-- REEMPLAZA ESTO
    },
    { 
      title: "Curso de Java Professional", 
      issuer: "códigoFacilito", 
      date: "2025",
      link: "https://drive.google.com/file/d/1SG6ZhSvsvUR5Q9fC1gIBUVRNBVIkJwzW/view?usp=sharing" // <-- REEMPLAZA ESTO
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="section-header">
        <h2>Mis <span>Certificados</span></h2>
        <div className="line"></div>
      </div>
      <div className="certs-grid">
        {certs.map((cert, index) => (
          <div key={index} className="cert-card">
            <h3>{cert.title}</h3>
            <span className="issuer">{cert.issuer}</span>
            <span className="date">{cert.date}</span>
            
            {/* ESTE ES EL NUEVO BOTÓN/ENLACE */}
            <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
              Ver credencial <FaExternalLinkAlt size={12} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}