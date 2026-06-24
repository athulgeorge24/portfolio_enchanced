import React from 'react';

const Navigation = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Me</a></li>
        <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
        <li><a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a></li>
        <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
