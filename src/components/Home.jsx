import React, { useState, useEffect } from 'react';
import profileImage from '../assets/image.png';

const Home = () => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const roles = ["Web Designer", "Programmer", "Tech Enthusiast"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentRole.length) {
          isDeleting = true;
          timeoutId = setTimeout(type, 2000); // delayBetween (2000ms)
        } else {
          timeoutId = setTimeout(type, 100); // typingSpeed (100ms)
        }
      } else {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timeoutId = setTimeout(type, 500); // Pause before next role
        } else {
          timeoutId = setTimeout(type, 50); // eraseSpeed (50ms)
        }
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="home-section">
      <a href="./portfolio.pdf" download className="cv-link cv-top-right">
        <button className="cv-button">Download CV</button>
      </a>
      <div className="intro-container">
        <img 
          id="intro-image" 
          src={profileImage} 
          alt="Athul George"
          className="intro-image"
        />
        <div className="intro-text-wrapper">
          <div className="intro-text">Hi, I'm ATHUL GEORGE</div>
        </div>
      </div>
      <div id="iam-text">
        I'm a {displayText}
        <span className="cursor">|</span>
      </div>
      <div className="arrow">▼</div>
    </section>
  );
};

export default Home;

