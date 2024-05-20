import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Footer.css';
import BTLLogo from '../assets/BTLLogo.png'; 
import InstagramIcon from '../assets/whiteinstagram.png';
import TwitterIcon from '../assets/whitetwitter.png';
import { toast } from 'react-toastify';

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    //add newsletter logic here when we decide on it
    toast.success('Thanks for subscribing!');
    setIsSubmitted(true);
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="Left-footer-column">
          <p><StyledLink to="/AboutUs">About Us</StyledLink></p>
          <p><StyledLink to="/Discover">Discover</StyledLink></p>
          <p><StyledLink to="/Community">Community</StyledLink></p>
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
            <FooterFormContainer>
            {isSubmitted ? (
              <p>Submitted! Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <FooterTextButton type="text" placeholder="Enter email" />
                <FooterTextButton type="text" placeholder="Enter first name" />
                <FooterButton type="submit">Subscribe</FooterButton>
              </form>
            )}
            </FooterFormContainer>
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

const FooterFormContainer = styled.div`
  text-align: center;
  margin-left: 20px;
  font-size: 16px;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
`;

const FooterTextButton = styled.input`
  margin: 5px;
  padding: 10px 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const FooterButton = styled.button`
  margin: 5px;
  padding: 10px 30px;
  margin-right: 40px;
  border: none;
  border-radius: 10px;
  background-color: #F68AAF;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #B0507F;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

export default Footer;
