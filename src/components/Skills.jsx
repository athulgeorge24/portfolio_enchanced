import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', percentage: 50, color: '#1abc9c' },
    { name: 'CSS', percentage: 20, color: '#f1c40f' },
    { name: 'JavaScript', percentage: 10, color: '#e74c3c' },
    { name: 'Python', percentage: 30, color: '#3498db' },
  ];

  const professionalSkills = [
    { name: 'Problem Solving', percentage: 75, color: '#9b59b6' },
    { name: 'Time Management', percentage: 70, color: '#1abc9c' },
    { name: 'Communication', percentage: 65, color: '#f39c12' },
    { name: 'Teamwork', percentage: 80, color: '#2ecc71' },
  ];

  const SkillItem = ({ name, percentage, color }) => (
    <div className="skill">
      <h4>
        {name} <span>{percentage}%</span>
      </h4>
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ 
            width: `${percentage}%`, 
            backgroundColor: color 
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="portfolio-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-column">
          <h3 className="skill-category">Technical Skills</h3>
          {technicalSkills.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>

        <div className="skills-column">
          <h3 className="skill-category">Professional Skills</h3>
          {professionalSkills.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
