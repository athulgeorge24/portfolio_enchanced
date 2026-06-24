import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://github.com/athulgeorge24" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <a href=" https://www.linkedin.com/in/athul-george-6ab61b32b" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/athul_george24/" target="_blank" rel="noopener noreferrer" className="footer-link">
            Instagram
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Athul George. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
