import React from 'react';

const About = () => {
  return (
    <section id="about" className="portfolio-section">
      <div className="about-container">
        <h2>About Me</h2>
        <p className="about-text">
          I'm a curious and tech-savvy individual who loves exploring new ideas and solving problems, 
          especially in programming and technology. I'm passionate about coding and technology, always 
          eager to learn new things and improve my skills. I enjoy solving problems through programming 
          and taking on challenges that push me to grow.
        </p>

        <div className="contact-info">
          <div className="contact-left">
            <p><strong>Name:</strong> Athul George</p>
            <p><strong>Birthday:</strong> 24/07/2006</p>
            <p><strong>Degree:</strong> Pursuing B.Tech Degree in CSE</p>
          </div>
          <div className="contact-right">
            <p><strong>Phone:</strong> +91 7907584772</p>
            <p><strong>Email:</strong> athulgeorge2028@cs.sjcetpalai.ac.in</p>
            <p><strong>Address:</strong> Villanthanthu (H), Vannapuram P.O, Vannapuram, Thodupuzha, Idukki</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
