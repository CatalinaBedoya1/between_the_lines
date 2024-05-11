import React from 'react';
import './Footer.css';
import BTLLogo from '../assets/BTLLogo.png'; // Replace 'logo.png' with your actual logo file
import InstagramIcon from '../assets/InstagramIcon.png';
import TwitterIcon from '../assets/TwitterIcon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="Left-footer-column">
          <p>About Us</p>
          <p>Discover</p>
          <p>Community</p>
          <p>Join a Book Club</p>
          <div className="social-icons">
          <img src={InstagramIcon} alt="Instagram" className="social-icon" />
          <img src={TwitterIcon} alt="Twitter" className="social-icon" />
        </div>
        </div>
        <div className="Left-vertical-line"></div>
      </div>
      <div className="footer-middle">
        <div className="footer-column">
          <div className="get-updates">
            <h1>Get Updates</h1>
            <p>Subscribe to our newsletter to receive updates and special announcements</p>
            <input type="text" placeholder="Enter email" />
            <input type="text" placeholder="Enter first name" />
          </div>
        </div>
        <div className="Right-vertical-line"></div>
      </div>
      <div className="footer-right">
        <img src={BTLLogo} alt="Logo" className="footer-logo" />
        <p className="quote">"Books may very well be the only true magic"</p>
        <p className="quoteAuthor">- Alice Hoffman</p>
        
      </div>
    </footer>
  );
};

export default Footer;
