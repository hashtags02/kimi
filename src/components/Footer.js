import React from 'react';
import './Footer.css'; // Don't forget to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} NEEJA. All rights reserved.</p>
        
       
      </div>
    </footer>
  );
};

export default Footer;
