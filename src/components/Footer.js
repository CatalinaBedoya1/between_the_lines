import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
        <div className="container">
            <p>This is the footer of our website</p>
            <p>About Us</p>
        </div>
        <div className="copyright">
            <p>&copy; {currentYear} Between The Lines</p>
        </div>
    </footer>
  );
}

export default Footer;
