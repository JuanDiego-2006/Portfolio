import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiKotlin, SiMysql, SiInsomnia } from 'react-icons/si';
import { BsDatabase } from 'react-icons/bs';

export default function Skills() {
  // Arreglos actualizados con el nombre y su respectivo icono
  const backend = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "SQL", icon: <BsDatabase /> }
  ];

  const frontend = [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },

  ];

  const tools = [
    { name: "Kotlin (Compose)", icon: <SiKotlin /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Insomnia", icon: <SiInsomnia /> }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2>Mis <span>Habilidades</span></h2>
        <div className="line"></div>
      </div>

      <div className="skills-container">
        
        <div className="skill-category">
          <h3>Backend & Base de Datos</h3>
          <div className="skills-grid">
            {backend.map((skill, index) => (
              <div key={`bg-${index}`} className="skill-box">
                <span className="skill-icon">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skills-grid">
            {frontend.map((skill, index) => (
              <div key={`ft-${index}`} className="skill-box">
                <span className="skill-icon">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3>Herramientas & Móvil</h3>
          <div className="skills-grid">
            {tools.map((skill, index) => (
              <div key={`tl-${index}`} className="skill-box">
                <span className="skill-icon">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}