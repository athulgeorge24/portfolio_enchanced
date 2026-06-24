import React from 'react';
import miaImg from '../assets/mia.png';
import ballImg from '../assets/ball.png';
import galleryImg from '../assets/gallery.png';

const Projects = () => {
  return (
    <section id="projects" className="portfolio-section">
      <h2>Projects</h2>
      <p>Here are some of my latest projects.</p>
  
      <div className="projects-container">
        <div className="project">
          <img src={miaImg} alt="Project One" />
          <h3><a href="https://defakebot-two.vercel.app/" target="_blank" rel="noopener noreferrer">MIA AI</a></h3>
          <p>A simple fake detection AI Chatbot (prototype)</p>
        </div>
  
        <div className="project">
          <img src={ballImg} alt="Project Two" />
          <h3><a href="https://athulgeorge24.github.io/Bouncing-ball/" target="_blank" rel="noopener noreferrer">Bouncing Ball</a></h3>
          <p>An interactive antistress game.</p>
        </div>
  
        <div className="project">
          <img src={galleryImg} alt="Project Three" />
          <h3><a href="https://athulgeorge24.github.io/Image-gallery/" target="_blank" rel="noopener noreferrer">Interactive Gallery</a></h3>
          <p>An interactive gallery</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

