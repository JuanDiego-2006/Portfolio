import React from 'react';
import { 
  FaUsers, 
  FaBolt, 
  FaCrown, 
  FaRegCommentDots, 
  FaBrain, 
  FaSyncAlt, 
  FaRegHeart 
} from 'react-icons/fa';

export default function SoftSkills() {
  const softSkills = [
    { name: "TRABAJO EN EQUIPO", icon: <FaUsers size={45} /> },
    { name: "APRENDIZAJE RÁPIDO", icon: <FaBolt size={45} /> },
    { name: "LIDERAZGO", icon: <FaCrown size={45} /> },
    { name: "COMUNICACIÓN", icon: <FaRegCommentDots size={45} /> },
    { name: "PENSAMIENTO LÓGICO", icon: <FaBrain size={45} /> },
    { name: "ADAPTABLE", icon: <FaSyncAlt size={45} /> },
    { name: "EMPATÍA", icon: <FaRegHeart size={45} /> }
  ];

  return (
    <section id="soft-skills" className="soft-skills-section">
      <div className="section-header">
        <h2>Habilidades <span>Blandas</span></h2>
        <div className="line"></div>
      </div>
      <div className="soft-skills-grid-new">
        {softSkills.map((skill, index) => (
          <div key={index} className="soft-skill-card-new">
            <div className="skill-icon-wrapper">
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}